import { PartialType } from "@nestjs/mapped-types";
import { CreateCompaniesDto } from "./create-companies.dto";

export class UpdateCompaniesDto extends PartialType(CreateCompaniesDto) {}