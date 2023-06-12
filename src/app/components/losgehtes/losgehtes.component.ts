import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-losgehtes',
  templateUrl: './losgehtes.component.html',
  styleUrls: ['./losgehtes.component.css']
})
export class LosgehtesComponent {

  email: string = "";
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  register() {
    let bodyData = {
      "email": this.email,
      "username": this.username,
      "password": this.password
    };
    this.http.post("https://www.efcet.de/node/v1/register", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Reg. Wer Erfolgreich")
    });
  }


}


