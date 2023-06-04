import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TeamModel } from '../models/team.model';

@Injectable({ providedIn: 'root' })
export class TeamService {
    constructor(private _httpClient: HttpClient) {
    }

    getAll(): Observable<TeamModel[]> {
        return this._httpClient.get<TeamModel[]>('https://646f899709ff19b120876fb8.mockapi.io/teams');
    }

    getOne(id: string): Observable<TeamModel> {
        return this._httpClient.get<TeamModel[]>(`https://646f899709ff19b120876fb8.mockapi.io/teams`)
            .pipe(
                map((teams) => (
                    teams.filter(e => e.id === id)[0]
                ))
            );
    }
}
