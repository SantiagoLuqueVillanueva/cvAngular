import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, HeaderComponent, FooterComponent, MainlayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
