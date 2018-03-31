// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyAGp6XVFBcb1YmZm8O0eZq4kHo4ztMWiWs',
    authDomain: 'spliteazyapp.firebaseapp.com',
    databaseURL: 'https://spliteazyapp.firebaseio.com',
    projectId: 'spliteazyapp',
    storageBucket: 'spliteazyapp.appspot.com',
    messagingSenderId: '384691641300'
  }
};
