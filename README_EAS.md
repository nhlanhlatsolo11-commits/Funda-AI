This repository now includes EAS build configuration and an Expo app config override to produce Android builds (APK for preview and AAB for Play Store).

Files added
- eas.json — EAS build profiles (preview -> APK, production -> AAB)
- app.config.js — Loads existing app.json and overrides android.package and expo.extra.apiUrl.

Before you build
1. Replace the placeholder backend URL
   - Option A (recommended for production builds): Set a build secret in EAS and provide it at build time.
     - eas secret:create --name API_URL --value "https://your-backend.example.com"
     - Then build with: eas build -p android --profile production
   - Option B (quick, for testing): Edit app.json or app.config.js and replace 'https://REPLACE_WITH_BACKEND_URL' with your backend URL.

Build commands (local)
1. Install EAS CLI (if not installed):
   npm install -g eas-cli

2. Login to Expo/EAS:
   eas login

3. (Optional) Configure your project:
   eas build:configure

4. Preview APK (fast, for testing on a device):
   eas build -p android --profile preview

5. Production AAB (for Play Store upload):
   eas build -p android --profile production

Notes on signing and credentials
- When prompted, allow EAS to manage Android credentials (keystore) automatically — it's the easiest option.
- You can also provide your own keystore if you already have one.

Downloading the artifact
- After the build completes, the CLI prints a URL to download the artifact (APK/AAB). You can also view the build on your Expo account dashboard.

Publishing to Google Play
- To publish to Google Play, create a Google Play Console account (one-time fee) and set up an app using the package id: com.funda.ai
- Once ready, upload the produced .aab to the Play Console (internal testing track first).
- Optionally use `eas submit -p android` to submit directly (requires a Play Console service account JSON file).

If you want me to run the build or attach a sample backend URL, tell me the backend URL (or allow me to add it as an EAS secret) and I will provide the exact commands to run and can continue helping until you have a downloadable APK/AAB.
