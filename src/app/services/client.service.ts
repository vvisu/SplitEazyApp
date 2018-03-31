import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Client } from '../models/Client';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClientService {

  private clients: Observable<Client[]>;
  private clientCollection: AngularFirestoreCollection<Client>;

  constructor(private afs: AngularFirestore) {

    this.clientCollection = this.afs.collection<Client>('clients');


   }

   getClients(): Observable<Client[]> {
     return this.clientCollection.valueChanges();
   }

}
