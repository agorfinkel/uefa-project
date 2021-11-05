import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Standings } from '../models/standings';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })

export class LeagueService extends BaseService {

  key = "vDPon7xha5IktRrT";
  secret = "yCMpgezxZ5CUUNQprFOOMl5XqOiUFJNe";

   constructor(private http: HttpClient) {
    super();
  }

  getStandings(): Observable<Standings[]> {
    return this.http.get(`${this.baseUrl}/?key=${this.key}&secret=${this.secret}&competition_id= 244`, this.defaultReqHeader)
      .pipe(
        map((standings: Standings[]) => { return standings; }),
        catchError(this.handleError)
      );
  }
}
