import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  error = false;
  errorMessage = '';
  loginForm:FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  constructor(private auth : AuthService,private router: Router  ) { }
  ngOnInit(): void {
    if(this.auth.isAuthenticated ()){
      this.router.navigate(['/book-flight']);
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).then((response: boolean) => {
        if (response) {
          this.router.navigate(['/book-flight']);
        } else {
          this.error = true;
          this.errorMessage = 'Invalid username or password';
          console.log('Login failed');
        }
      }
      );
    }else
    {
     console.log( this.loginForm.get('username')?.errors)
    }
  }
}
