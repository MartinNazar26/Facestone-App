import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginGroup;
  errorMsg: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginGroup = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {}
}
