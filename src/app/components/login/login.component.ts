import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj: any = {
    user: '',
    password: ''
  };

  loginObj: any = {
    user: '',
    password: ''
  };

  constructor(private accService: AccountService, private route: Router) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  OnInit() {

  }

  onSignUp() {

  }
  onLogIn() {
    this.accService.onLogIn(this.loginObj).subscribe((res: any) => {
      console.log('res', res)
      localStorage.setItem('tiken', res.token);
      this.route.navigateByUrl('/maintools');
    })

  }



}





