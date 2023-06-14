import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  onLogIn(obj: any): Observable<any> {
    return this.http.post('https://www.efcet.de/node/v1/login', obj);
  }

}
