import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  ciudad = 'Málaga';
  numero = '+34 611 418 605';
  email = 'luquevillanuevasantiago@gmail.com';
  gitHub = 'GitHub';
  idiomas = ['Español', 'Inglés'];
}
