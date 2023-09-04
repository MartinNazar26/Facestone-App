import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;

  setUser(user: any) {
    this.user = user;
  }

  getUserType() {
    return this.user?.type;
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

  login(usuario: string, password: string, tipo: string) {
    const headers = {
      'Content-type': 'application/json',
    };
    const body = JSON.stringify({ user: usuario, pass: password, tipo: tipo });
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
      tipo: 'PLAYER',
    });
    return this.http.post(
      'https://facestone_api-1-m4348603.deta.app/usuarios',
      body,
      {
        headers,
      }
    );
  }
}
