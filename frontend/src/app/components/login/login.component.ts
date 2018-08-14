import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {TokenService} from "../../Services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null, password: null
  };

  public error = null;

  constructor(
      private httpService: HttpService,
      private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
      return this.httpService.login(this.form).subscribe(
          data=> this.handleResponse(data),
          error => this.handleError(error)
      );
  }

  handleResponse(data){
      this.tokenService.handle(data.access_token);
  }

  handleError(error){
      this.error = error.error.error;

  }

}
