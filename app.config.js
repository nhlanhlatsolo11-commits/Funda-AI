const appJson = require('./app.json');

appJson.expo = appJson.expo || {};
appJson.expo.android = appJson.expo.android || {};
// Android package id (reverse-DNS)
appJson.expo.android.package = 'com.funda.ai';
// Ensure a versionCode exists for Android
appJson.expo.android.versionCode = appJson.expo.android.versionCode || 1;

// Use extra for runtime configuration such as your backend URL
appJson.expo.extra = appJson.expo.extra || {};
// Backend URL committed by request
appJson.expo.extra.apiUrl = 'https://funda-backend.onrender.com';

module.exports = appJson;
