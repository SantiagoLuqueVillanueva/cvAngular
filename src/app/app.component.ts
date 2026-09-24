import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  nombre = 'Santiago';
  fecha = new Date();
  ciudad = 'Málaga';
  numero = '+34 611 418 605';
  email = 'luquevillanuevasantiago@gmail.com';
  idioma = 'Inglés';
}
