Added static app.json manifest so Expo Launch can modify app manifest settings. This file provides a static app manifest required by the Expo Launch flow. It includes basic metadata: name, slug, version, sdkVersion, platforms and minimal android configuration.

Why this change
- Expo Launch (Launch from GitHub) requires a static app manifest (app.json) to be present so it can modify manifest settings during the launch process. Your project previously only had a dynamic manifest (app.config.js), which prevented Launch from proceeding.

Next steps for you
1. In the Expo Launch UI (https://expo.dev/launch or your project Launch page), re-enter your GitHub repo URL and try Launch again. The Launch flow should now accept the project and proceed.
2. Alternatively, run EAS locally to produce a preview APK and then a production AAB (commands in README_EAS.md):
   - npm install -g eas-cli
   - eas login
   - eas build -p android --profile preview
   - eas build -p android --profile production

If the Launch flow still fails or if a build fails, paste the Launch error or the failed build logs here and I will diagnose and fix the issue.
