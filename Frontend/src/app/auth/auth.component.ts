import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit  {

	authStatus: boolean
	logInError: string
	signupFeedback: string

  constructor(private authService: AuthService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
		this.authStatus = this.authService.isAuth()
		this.authService.currentError.subscribe(error => this.logInError = error)
		this.authService.currentFeedback.subscribe(message => {
			console.log('message')
			console.log(message)
			this.signupFeedback = message
		})
  }
  onSignIn(form: NgForm){
		const userf = {
			email: form.value['email'],
			password: form.value['password']
		}
		this.authService.signIn(userf)
	}

  onSignOut() {
    this.authService.signOut()
    this.authStatus = this.authService.isAuth()
  }

	onSubscribe(form: NgForm){

		let email = form.value['email'];
		let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let name = form.value['name'];
		let nameReg = /^[a-zA-Z\-]+$/;

		if (!(email).match(emailReg) || !(name).match(nameReg) ) {
			this.logInError= "Caractères interdits, veuillez ne pas utiliser de caractères spéciaux dans le nom et l'email !"
			return false;
		}
		else {
		const userf = {
			email: form.value['email'],
			password: form.value['password'],
			name: form.value['name'],
			CGU: form.value['CGU']
		}
		this.authService.Registration(userf)
	}
	}

	flipped: boolean = false
	changeside(){
		this.flipped = !this.flipped
	}
}



