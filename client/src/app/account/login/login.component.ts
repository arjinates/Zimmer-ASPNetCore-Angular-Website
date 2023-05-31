import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  }) 

  constructor(private acountService: AccountService, private router: Router) {}
  
  onSubmit() {
    this.acountService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl('/shop')
    })
  }
}