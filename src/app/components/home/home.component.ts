import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {
  @Input() welcomeText: string = "Welcome to our software!";
  @Input() pText: string = "Select a team below to get started";
}
