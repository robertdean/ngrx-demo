import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UpdateClient, DeleteClient } from '../store/client.actions';
import {
  selectActiveClients,
  getClientById,
  selectPendingClients
} from '../store/client.selectors';
import { Client } from '../store/client.model';

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
    this.store.dispatch(
      new UpdateClient(Object.assign(client, { status: 'PENDING' }))
    );
  }
  ngOnInit() {
    this.client$ = this.store.pipe(select(getClientById));
    this.pendingItems$ = this.store.pipe(select(selectPendingClients));
    this.activeItems$ = this.store.pipe(select(selectActiveClients));
  }
}
