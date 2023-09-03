import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: LoginComponent },
        { path: 'dashboard', component: DashboardComponent },
      ],
      {
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  declarations: [AppComponent, DashboardComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
