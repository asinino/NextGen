import { FirebaseOptions } from '@firebase/app-types';

export class FirebaseConfig implements FirebaseOptions {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId?: string;
  name?: string;
}
