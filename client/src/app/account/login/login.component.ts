import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  }) 

  constructor(private acountService: AccountService) {}
  
  onSubmit() {
    this.acountService.login(this.loginForm.value).subscribe({
      next: user => console.log(user)
    })
  }
}