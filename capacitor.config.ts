import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.alnoorway.codexus.app",
  appName: "Alnoorway",
  webDir: "dist",
  server: {
    androidScheme: "https",
    iosScheme: "https", // ✅ تم التعديل هنا: يجب أن يكون https لكي يقبل السيرفر إرسال البيانات (CORS)
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      // المفتاح الجديد الخاص بـ iOS
      iosClientId:
        "13323553855-050m4n3foiebcmpilpcdmojpp80b8666.apps.googleusercontent.com",
      // مفتاح الويب القديم الخاص بـ السيرفر (Supabase)
      serverClientId:
        "829658324868-lrbdqm9ekjpaunpaecm4bk4stn16ifte.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
