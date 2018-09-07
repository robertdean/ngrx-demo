import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { getClientById } from '../store/client.selectors';
import { Client } from '../store/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  client$: Observable<Client>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.client$ = this.store.pipe(select(getClientById));
  }
}
