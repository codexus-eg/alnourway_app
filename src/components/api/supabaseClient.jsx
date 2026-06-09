// @ts-nocheck
import { createClient } from "@supabase/supabase-js";
import { Capacitor } from "@capacitor/core";
import { SignInWithApple } from "@capacitor-community/apple-sign-in";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

// الروابط والمفاتيح الخاصة بك
const supabaseUrl = "https://raxudhplkjawspqajjqu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJheHVkaHBsa2phd3NwcWFqanF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0NTg1NTAsImV4cCI6MjA4MDAzNDU1MH0.WWa3P3qA6ZVhifVmATIJvKAS1KO9-zqrZe5YoN7xX48";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const supabaseRedirectTo =
  typeof window !== "undefined" ? window.location.origin : "";

// --- تسجيل الدخول بـ Google ---
export const signInWithGoogle = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      const user = await GoogleAuth.signIn();
      if (user.authentication.idToken) {
        return await supabase.auth.signInWithIdToken({
          provider: "google",
          token: user.authentication.idToken,
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

// --- تسجيل الدخول بـ Apple ---
export const signInWithApple = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      const result = await SignInWithApple.authorize({
        clientId: "com.alnoorway.codexus.app",
        redirectURI:
          "https://raxudhplkjawspqajjqu.supabase.co/auth/v1/callback",
        scopes: "email name",
      });
      if (result.response && result.response.identityToken) {
        return await supabase.auth.signInWithIdToken({
          provider: "apple",
          token: result.response.identityToken,
        });
      }
      throw new Error("No identity token found");
    } catch (error) {
      console.error("Apple Auth Native Error", error);
      throw error;
    }
  } else {
    return supabase.auth.signInWithOAuth({
      provider: "apple",
      options: { redirectTo: supabaseRedirectTo },
    });
  }
};
