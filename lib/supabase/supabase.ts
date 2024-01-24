import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServerKey: string =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "x";

const supabase = createClient(supabaseUrl, supabaseServerKey);

export { supabase };
