import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './features/auth/login/login.component';

// Placeholder components - these will be replaced with actual implementations
@Component({
  selector: 'app-admin-dashboard',
  template: '<div class="admin-dashboard"><h1>Admin Dashboard</h1></div>',
  standalone: true
})
export class AdminDashboardComponent {}

@Component({
  selector: 'app-interviewer-dashboard',
  template: '<div class="interviewer-dashboard"><h1>Interviewer Dashboard</h1></div>',
  standalone: true
})
export class InterviewerDashboardComponent {}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'interviewer/dashboard', component: InterviewerDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
