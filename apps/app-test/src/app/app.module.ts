import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FirebaseModule } from '@nextgen/firebase';
import { NxModule } from '@nrwl/nx';
import { environment } from 'apps/app-test/src/environments/environment';
import { FirebaseApp } from 'libs/firebase/src/lib/firebase.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    FirebaseModule.forRoot(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _f: FirebaseApp) {
    console.log(_f);
  }
}
