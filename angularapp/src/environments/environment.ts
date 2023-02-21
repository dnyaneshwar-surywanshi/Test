// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBy6gU-wPCEUcSkcREJFBJ3YyqaHsyf10M",
    authDomain: "newproject-dc333.firebaseapp.com",
    projectId: "newproject-dc333",
    storageBucket: "newproject-dc333.appspot.com",
    messagingSenderId: "53664659581",
    appId: "1:53664659581:web:89d6ff3efa7295554f5914"
  }


};

export const devAPIUrl = `http://localhost:34110/api/`;
export const jsonPlaceholderAPIUrl = 'https://jsonplaceholder.typicode.com/posts/';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
