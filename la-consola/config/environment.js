//environment.js
var environments = {
  staging: {
    FIREBASE_API_KEY: 'AIzaSyDAiME8xj2Yr66My1A9nysLY3chBGBWaKM',
    FIREBASE_AUTH_DOMAIN: 'https://laconsola-62189.firebaseapp.com/',
    FIREBASE_DATABASE_URL: 'https://laconsola-62189.firebaseio.com/',
    FIREBASE_PROJECT_ID: 'laconsola-62189',
    FIREBASE_STORAGE_BUCKET: 'gs://laconsola-62189.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '880358454161',
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBz6NklCPuP31L2ti2cyCofb7SxoiuTWEw'
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
};

function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return 'staging';
  } else if (releaseChannel === 'staging') {
    return 'staging';
  } else {
    return 'staging';
  }
}
function getEnvironment(env) {
  console.log('Release Channel: ', getReleaseChannel());
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
