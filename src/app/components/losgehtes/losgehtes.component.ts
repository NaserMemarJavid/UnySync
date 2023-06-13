import { AccountService } from './../../account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-losgehtes',
  templateUrl: './losgehtes.component.html',
  styleUrls: ['./losgehtes.component.css']
})
export class LosgehtesComponent {

  email: string = "";
  user: string = "";
  password: string = "";

  constructor(private http: HttpClient) {

  }

  onSignUp() {
    let bodyData = {
      "email": this.email,
      "user": this.user,
      "password": this.password
    };
    this.http.post("https://www.efcet.de/node/v1/register", bodyData, { observe: 'response' }).subscribe(resp => {
      console.log(resp.headers.get('authorization'));
      alert(" reg ist erfolgreich! ");
    });



  }


  onSignIn() {

  }




}






















