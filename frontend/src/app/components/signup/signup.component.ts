import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../Services/http.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    public form = {
        email: null,
        name: null,
        password: null,
        password_confirmation: null,
    };

    public error = [];

    constructor(private httpService: HttpService) {
    }

    onSubmit(){
        return this.httpService.signup(this.form).subscribe(
            data=> console.log(data),
            error => this.handleError(error)
        );
    }

    handleError(error){
        this.error = error.error.errors;

    }

    ngOnInit() {
    }

}
