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

  login(user: string, password: string, tipo: string) {
    const headers = {
      'Content-type': 'application/json',
    };
    const body = JSON.stringify({ user: user, pass: password, tipo: tipo });
    return this.http.post('https://proyectoam.herokuapp.com/login', body, {
      headers,
    });
  }

  register(user: any, password: string) {
    const headers = { 'Content-type': 'application/json' };
    const body = JSON.stringify({
      user: user,
      pass: password,
      tipo: 'PLAYER',
    });
    return this.http.post('https://proyectoam.herokuapp.com/usuarios', body, {
      headers,
    });
  }
}
