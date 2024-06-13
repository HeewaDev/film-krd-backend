import { IsObject, IsString } from "class-validator";

export class CreateNotesDto {
    
    @IsObject()
    note: Record<string, any>

}