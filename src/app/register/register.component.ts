import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registe',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerGroup;
  errorMsg: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerGroup = this.formBuilder.group({
      usuario: '',
      password: '',
      confirmPassword: '',
    });
  }

  ngOnInit() {}

  formSubmit() {
    this.errorMsg = '';
    const { usuario, password, confirmPassword } = this.registerGroup.value as {
      usuario: string;
      password: string;
      confirmPassword: string;
    };

    if (password !== confirmPassword) {
      this.errorMsg = 'Las contraseñas no coinciden.';
    } else {
      this.userService.register(usuario, password).subscribe(
        (user) => {
          this.userService.setUser(user);
          this.router.navigate(['/']);
        },
        ({ error: { mensaje } }) => {
          this.errorMsg = mensaje;
        }
      );
    }
  }
}
