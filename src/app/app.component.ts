import { Component } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'burguer-landing-page';

  faHamburger = faHamburger;
}
