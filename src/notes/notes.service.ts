import { Injectable } from '@nestjs/common';
import { NotesRepository } from './notes.repository';
import { CreateNotesDto } from 'src/dto/create-notes.dto';
import { UpdateNotesDto } from 'src/dto/update-notes.dto';

@Injectable()
export class NotesService {
    constructor(private readonly notesRepository: NotesRepository){}

    async GetAllNotes(){
        return await this.notesRepository.GetAll()
    }


    async GetNotebyId(id: number){
        return await this.notesRepository.getbyId(id)
    }

    async CreateNote(createNotesDto: CreateNotesDto){
        return await this.notesRepository.create(createNotesDto)
    }

    async UpdateNote(id: number, updateNotesDto: UpdateNotesDto){
        return await this.notesRepository.update(id, updateNotesDto)
    }

    async delete(id: number){
        return await this.notesRepository.delete(id)
    }
}
