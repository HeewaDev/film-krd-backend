import { Injectable } from "@nestjs/common";
import { FilmLocationService } from "./film_location.service";

export class FilmLocationController {
    constructor(private readonly filmLocationService: FilmLocationService){}
}