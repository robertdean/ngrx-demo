import { selectActiveClients } from './../store/client.selectors';
import { UpdateClient, UpsertClient } from './../store/client.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { getClientById, selectPendingClients } from '../store/client.selectors';
import { Client } from '../store/client.model';
import { DeleteClient } from '../store/client.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  client$: Observable<Client>;
  pendingItems$: Observable<Client[]>;
  activeItems$: Observable<Client[]>;
  constructor(private store: Store<AppState>) {}

  delete(id: string) {
    this.store.dispatch(new DeleteClient({ id: id }));
  }

  deactivate(client: Client) {
    const newClient = client;
    newClient.status = 'PENDING';
    Object.assign(newClient, client);
    this.store.dispatch(new UpdateClient(newClient));
  }
  ngOnInit() {
    this.client$ = this.store.pipe(select(getClientById));
    this.pendingItems$ = this.store.pipe(select(selectPendingClients));
    this.activeItems$ = this.store.pipe(select(selectActiveClients));
  }
}
