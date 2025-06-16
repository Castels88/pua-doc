import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  handleSubmit(): void {
    if (this.form.valid) {
      // Qui potresti chiamare un AuthService...
      console.log('Credenziali:', this.form.value);
      this.router.navigate(['/homepage']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
