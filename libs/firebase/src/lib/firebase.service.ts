import 'firebase/app';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import { FirebaseConfig } from './firebase.types';

@Injectable()
export class FirebaseApp {
  constructor(private appConfig: FirebaseConfig) {}

  public instance() {
    let fbApp;
    if (!firebase.apps.length) {
      fbApp = firebase.initializeApp(this.appConfig);
    } else {
      fbApp = firebase.app();
    }
    return fbApp;
  }

  public config() {
    return this.appConfig;
  }
}
