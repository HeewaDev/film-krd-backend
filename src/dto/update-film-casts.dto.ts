import { PartialType } from "@nestjs/mapped-types"
import { CreateFilmCastDto } from "./create-film-casts.dto"

export class UpdateFilmCastDto extends PartialType(CreateFilmCastDto) {};