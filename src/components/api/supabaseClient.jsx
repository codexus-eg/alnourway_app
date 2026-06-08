// @ts-nocheck
import { createClient } from "@supabase/supabase-js";

// ✅ تم وضع الرابط الحقيقي
const supabaseUrl = "https://raxudhplkjawspqajjqu.supabase.co";

// ✅ تم وضع المفتاح الحقيقي
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJheHVkaHBsa2phd3NwcWFqanF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0NTg1NTAsImV4cCI6MjA4MDAzNDU1MH0.WWa3P3qA6ZVhifVmATIJvKAS1KO9-zqrZe5YoN7xX48";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const supabaseRedirectTo =
  typeof window !== "undefined" ? window.location.origin : "";

export const signInWithProvider = async (provider) => {
  return supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "com.alnoorway.tareeqalnoor://home",
      skipBrowserRedirect: false,
    },
  });
};

export const signInWithGoogle = () => signInWithProvider("google");
export const signInWithApple = () => signInWithProvider("apple");
