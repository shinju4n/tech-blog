import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST() {
  const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseServerKey: string =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "x";
  const supabase = createClient(supabaseUrl, supabaseServerKey);

  const a = await supabase.from("Test").insert({ test: "21341" });

  return NextResponse.json({ a });
}
