import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './store/client.model';
import { HttpBaseService } from '../core/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService extends HttpBaseService<Client> {
  constructor(public http: HttpClient) {
    super(http, '/api/clients');
  }
}
