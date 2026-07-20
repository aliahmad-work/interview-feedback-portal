import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-card',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup; 
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.isLoading = true;
    
    this.authservice.login(email, password).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.user.role === 'ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        } else if (response.user.role === 'INTERVIEWER') {
          this.router.navigate(['/interviewer/dashboard']);
        }

        this.successMessage = response.token ? 'Login successfull!' : 'Login completed';
        this.errorMessage = '';
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login error', error)
        this.errorMessage = 'Login failed. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
