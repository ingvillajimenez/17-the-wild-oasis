import { createClient } from "@supabase/supabase-js";

/////////////////////////////////////////
// Connecting Supabase With Our React App
export const supabaseUrl = "https://bhkmccdyhtrvvvgkggnh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa21jY2R5aHRydnZ2Z2tnZ25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDQ2OTksImV4cCI6MjAyMzg4MDY5OX0.NE1qFJr5FLhDJzcfqjW-NoM_hRevWT5J6KZrag1N5Vc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
