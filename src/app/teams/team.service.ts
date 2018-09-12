import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team.model';
import { HttpBaseService } from '../core/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class HttpTeamService extends HttpBaseService<Team> {
  constructor(public http: HttpClient) {
    super(http, '/api/teams');
  }
}
