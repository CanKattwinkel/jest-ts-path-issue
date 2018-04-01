import {Component} from '@angular/core';
import {SomeModel} from '@core/some-model';

console.log(SomeModel);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
