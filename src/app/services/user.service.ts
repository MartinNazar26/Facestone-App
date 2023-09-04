import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;
  users: any[] = [];

  setUser(user: any) {
    this.user = user;
  }

  setUsuarios(users: any) {
    this.users = users;
  }

  getUserType() {
    return this.user?.type;
  }

  getUserActive() {
    return this.user?.activo;
  }

  getUserId() {
    return this.user?.id;
  }

  getUserApiKey() {
    return 'Bearer ' + this.user?.usr.token;
  }

  logOut() {
    this.user = undefined;
  }

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string) {
    const headers = {
      'Content-type': 'application/json',
    };
    const body = JSON.stringify({ user: usuario, pass: password });
    return this.http.post(
      'https://facestone_api-1-m4348603.deta.app/login',
      body,
      {
        headers,
      }
    );
  }

  register(user: any, password: string) {
    const headers = { 'Content-type': 'application/json' };
    const body = JSON.stringify({
      user: user,
      pass: password,
      type: 'PLAYER',
      activo: 'N',
    });
    return this.http.post(
      'https://facestone_api-1-m4348603.deta.app/usuarios',
      body,
      {
        headers,
      }
    );
  }

  obtenerUsuarios() {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get('https://facestone_api-1-m4348603.deta.app/usuarios', {
      headers,
    });
  }
}
