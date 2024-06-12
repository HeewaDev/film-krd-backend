import { PartialType } from "@nestjs/mapped-types";
import { CreateCastDto } from "./create-casts.dto";

export class UpdateCastDto extends PartialType(CreateCastDto) {}

