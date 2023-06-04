import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { EmployeesViewModel } from './employees.view-model';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeesComponent {
  readonly siteTitle: string = "employee";

  readonly employeeList$: Observable<EmployeesViewModel[]> = this._employeesService.getAll().pipe(
    map((employees) =>
      employees.map((employee) => ({
        id: employee.id,
        avatarUrl: employee.avatarUrl,
        fullName: employee.firstName + ' ' + employee.lastName,
        position: employee.position
      }))
    ));

  constructor(private _employeesService: EmployeesService) {
  }
}
