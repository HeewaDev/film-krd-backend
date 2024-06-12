import { Inject } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";


export const InjectSupabaseService = () => Inject(SupabaseService)