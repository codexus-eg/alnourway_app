import { createClient } from "@supabase/supabase-js";

// الروابط والمفاتيح الخاصة بك
const supabaseUrl = "https://raxudhplkjawspqajjqu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJheHVkaHBsa2phd3NwcWFqanF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0NTg1NTAsImV4cCI6MjA4MDAzNDU1MH0.WWa3P3qA6ZVhifVmATIJvKAS1KO9-zqrZe5YoN7xX48";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
