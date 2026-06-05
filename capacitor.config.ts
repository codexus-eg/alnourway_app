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
      iosClientId:
        "829658324868-lrbdqm9ekjpaunpaecm4bk4stn16ifte.apps.googleusercontent.com",
      serverClientId:
        "829658324868-lrbdqm9ekjpaunpaecm4bk4stn16ifte.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
