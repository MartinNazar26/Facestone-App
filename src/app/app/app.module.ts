import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{ path: '', component: DashboardComponent }], {
      onSameUrlNavigation: 'reload',
    }),
  ],
  declarations: [DashboardComponent],
})
export class AppModule {}
