import { NetflixService } from './services/netflix.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Netflix API Project';

  constructor(private service: NetflixService) {

  }

}
