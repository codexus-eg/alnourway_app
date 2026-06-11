// @ts-nocheck
import { createClient } from "@supabase/supabase-js";
import { Capacitor } from "@capacitor/core";
import { SignInWithApple } from "@capacitor-community/apple-sign-in";
// ✅ 1. استيراد المكتبة الجديدة
import { GoogleSignIn } from "@capawesome/capacitor-google-sign-in";

const supabaseUrl = "https://raxudhplkjawspqajjqu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJheHVkaHBsa2phd3NwcWFqanF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0NTg1NTAsImV4cCI6MjA4MDAzNDU1MH0.WWa3P3qA6ZVhifVmATIJvKAS1KO9-zqrZe5YoN7xX48";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const supabaseRedirectTo =
  typeof window !== "undefined" ? window.location.origin : "";

// ✅ 2. تهيئة المكتبة الجديدة بالمفتاح بتاعك
if (Capacitor.isNativePlatform()) {
  GoogleSignIn.initialize({
    clientId:
      "13323553855-050m4n3foiebcmpilpcdmojpp80b8666.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });
}

// ✅ 3. دالة تسجيل الدخول بجوجل
export const signInWithGoogle = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      const result = await GoogleSignIn.signIn();
      // المكتبة الجديدة بترجع idToken مباشرة
      if (result.idToken) {
        return await supabase.auth.signInWithIdToken({
          provider: "google",
          token: result.idToken,
        });
      }
      throw new Error("No ID token found");
    } catch (error) {
      console.error("Google Auth Native Error", error);
      throw error;
    }
  } else {
    return supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: supabaseRedirectTo },
    });
  }
};

// ... دالة أبل (signInWithApple) تفضل زي ما هي بدون تغيير ...
