import { Component } from '@angular/core';
import { ColorService } from 'src/services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ColorService, useValue: { color: 'red' } }
  ]
})
export class AppComponent {
  title = 'angular-advanced-di';
}
