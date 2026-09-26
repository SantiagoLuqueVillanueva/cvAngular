import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  puesto = 'Estudiante 2ºDAM';
  nombre = 'Santiago Luque Villanueva';
  fecha = new Date();
  ciudad = 'Málaga';
  numero = '+34 611 418 605';
  email = 'luquevillanuevasantiago@gmail.com';
  gitHub = 'GitHub';
  idiomas = ['Español', 'Inglés'];
  sobreMi = 'Apasionado de la tecnología y la creación de software. Me motiva construir código estructurado y afrontar nuevos retos. Busco una oportunidad en Formación Dual para aportar valor, trabajar en equipo y crecer en un entorno real.';
  tecnologias = ['Java', 'JavaScript', 'TypeScript', 'Angular', 'HTML5 & CSS', 'MySQL', 'Git/GitHub']

    experiencias = [
    {
      empresa: 'Perfumerías Primor',
      puesto: 'Gestión web',
      periodo: 'Verano 2026',
      descripcion: 'Gestión de ofertas y precios de la web con la herramienta Magento.'
    },
    {
      empresa: 'Sweet Code Chef',
      puesto: 'Desarrollador en Prácticas (1º DAM)',
      periodo: 'Mayo 2026',
      descripcion: 'Desarrollo e integración de plugins para WordPress utilizando PHP.'
    }
  ];

  formacion = [
    {
      titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
      centro: 'CPIFP Alan Turing',
      periodo: '2025 - Presente'
    },
    {
      titulo: 'Bachillerato en Ciencias Tecnológicas',
      centro: 'IES Salvador Rueda',
      periodo: '2023 - 2025'
    }
  ];
}
