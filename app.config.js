const appJson = require('./app.json');

appJson.expo = appJson.expo || {};
appJson.expo.android = appJson.expo.android || {};
// Set your Android package id here (reverse-DNS)
appJson.expo.android.package = 'com.funda.ai';
// Ensure a versionCode exists for Android
appJson.expo.android.versionCode = appJson.expo.android.versionCode || 1;

// Use extra for runtime configuration such as your backend URL
appJson.expo.extra = appJson.expo.extra || {};
// You can override API URL at build time by setting API_URL env variable in EAS
appJson.expo.extra.apiUrl = process.env.API_URL || 'https://REPLACE_WITH_BACKEND_URL';

module.exports = appJson;
