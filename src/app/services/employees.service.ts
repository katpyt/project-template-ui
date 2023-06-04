import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { EmployeesViewModel } from '../components/employees/employees.view-model';

@Injectable({ providedIn: 'root' })

export class EmployeesService {
    constructor(private _httpClient: HttpClient) {
    }

    getAll(): Observable<EmployeeModel[]> {
        return this._httpClient.get<EmployeeModel[]>('https://646f899709ff19b120876fb8.mockapi.io/employees');
    }

    getOne(id: string): Observable<EmployeeModel> {
        return this._httpClient.get<EmployeeModel[]>(`https://646f899709ff19b120876fb8.mockapi.io/employees`)
            .pipe(
                map((employees) => (
                    employees.filter(e => e.id === id)[0]
                ))
            );
    }
}
