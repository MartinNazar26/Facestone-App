import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginGroup;
  errorMsg: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginGroup = this.formBuilder.group({
      usuario: '',
      password: '',
      rol: '',
    });
  }

  ngOnInit() {}

  formSubmit() {
    this.errorMsg = '';
    const { usuario, password, rol } = this.loginGroup.value as {
      usuario: string;
      password: string;
      rol: string;
    };
    this.userService.login(usuario, password, rol).subscribe(
      (user) => {
        this.userService.setUser(user);
        this.router.navigate(['/dashboard']);
      },
      ({ error: { error } }) => {
        this.errorMsg = error;
        console.log(error);
      }
    );
  }
}
