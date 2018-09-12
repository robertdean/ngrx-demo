import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBrowserState } from './reducers/browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Test</h1>
    <pre>
    {{ onlineStatus$ | async | json }}
    </pre>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'entx';
  onlineStatus$: Observable<any>;
  constructor(private store: Store<IBrowserState>) {}
  ngOnInit(): void {
    this.onlineStatus$ = this.store.select('browser');
  }
}
