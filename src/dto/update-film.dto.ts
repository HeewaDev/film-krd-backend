import { PartialType } from "@nestjs/mapped-types";
import { CreateFilmDto } from "./create-film.dto";

export class UpdateFilmsDto extends PartialType(CreateFilmDto) {}