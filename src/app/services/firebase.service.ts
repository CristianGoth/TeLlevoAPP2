// firebase.service.ts
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firebaseApp: FirebaseApp) {}

  getUserData(uid: string): Observable<any> {
    const db = getFirestore(this.firebaseApp);
    const userRef = collection(db, 'users');

    const q = query(userRef, where(`uid`, '==', uid));

    return new Observable((observer) => {
      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            observer.next(doc.data());
          });
          observer.complete();
        })
        .catch((error) => {
          console.error('Error al obtener datos del usuario:', error);
          observer.error(error);
        });
    });
  }
}
