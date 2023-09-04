import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usuarios: any;

  constructor(private userService: UserService, private router: Router) {
    this.cargarUsuarios();
  }

  ngOnInit() {}

  cargarUsuarios() {
    this.userService.obtenerUsuarios().subscribe(
      (usuarios) => {
        this.userService.setUsuarios(usuarios);
        this.usuarios = usuarios;
      },
      ({ error: { mensaje } }) => {
        console.log('Error: ' + mensaje);
      }
    );
  }

  reload() {
    this.router.navigate(['/dashboard']);
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }
}
