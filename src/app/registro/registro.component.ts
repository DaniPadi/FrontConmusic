import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(private router: Router) {}
  volverAtras() {
    this.router.navigate(['/']); // Navega hacia atrás en la historia del navegador
  }
}
