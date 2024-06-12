import { Global, Module } from "@nestjs/common";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { SupabaseService } from "./supabase.service";

@Module({

    providers:[SupabaseService],
    exports: [SupabaseService],
})


export class SupabaseModule{}