import { AuthService } from './auth/auth.service';
import { ModelService } from './rentals/model/model.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ModelService]
})
export class AppComponent {
  title = 'Airbnb';

}
