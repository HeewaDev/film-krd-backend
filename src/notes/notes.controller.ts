import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNotesDto } from 'src/dto/create-notes.dto';
import { UpdateNotesDto } from 'src/dto/update-notes.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Get()
    async GetNotes(){
        try {
            const Notes = await this.notesService.GetAllNotes();
            if (!Notes) {
                throw new NotFoundException('Error getting Notes!');
            }
            return Notes;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    @Get(':id')
    async GetNote(@Param('id', ParseIntPipe) id: number){
        try {
            const Note = await this.notesService.GetNotebyId(id);
            if (!Note) {
                throw new NotFoundException('Error getting a Note!');
            }
            return Note;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    @Post()
    async CreateNote(@Body() createNoteDto: CreateNotesDto){
        try {
            const CreateNote = await this.notesService.CreateNote(createNoteDto);
            if (!CreateNote) {
                throw new NotFoundException('Error creating a Note');
            }
            return CreateNote;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    @Put(':id')
    async UpdateNote(@Param('id', ParseIntPipe) id: number, @Body() updateNoteDto: UpdateNotesDto) {
        try {
            const UpdateNote = await this.notesService.UpdateNote(id, updateNoteDto);
            return UpdateNote;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
