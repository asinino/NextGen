import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { FirebaseApp } from './firebase.service';
import { FirebaseConfig } from './firebase.types';

export function setFirebaseSettings(app: FirebaseApp) {
  console.log(app);

  return function() {
    return new Promise(function(resolve) {
      app
        .instance()
        .firestore()
        .settings({ timestampsInSnapshots: true });
      resolve();
    });
  };
}

@NgModule({
  imports: [CommonModule]
})
export class FirebaseModule {
  public static forRoot(firebaseConfig: FirebaseConfig): ModuleWithProviders {
    return {
      ngModule: FirebaseModule,
      providers: [
        { provide: FirebaseConfig, useValue: firebaseConfig },
        { provide: FirebaseApp, deps: [FirebaseConfig], useClass: FirebaseApp },
        {
          provide: APP_INITIALIZER,
          useFactory: setFirebaseSettings,
          deps: [FirebaseConfig, FirebaseApp],
          multi: true
        }
      ]
    };
  }
}
