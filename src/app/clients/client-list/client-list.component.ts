import {
  selectActiveClientCount,
  selectActiveClients
} from './../store/client.selectors';
import { Component, OnInit } from '@angular/core';
import { Client } from '../store/client.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import {
  selectClientsLoading,
  selectAllClients
} from '../store/client.selectors';

import { FetchClients } from '../store/client.actions';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  active$: Observable<number>;
  clients$: Observable<Client[]>;
  loading$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchClients());
    this.active$ = this.store.pipe(select(selectActiveClientCount));
    this.clients$ = this.store.pipe(select(selectActiveClients));
    this.loading$ = this.store.pipe(select(selectClientsLoading));
  }
}
