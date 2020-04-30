import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../models/user.model';
import {environment} from '../../environments/environment'


@Injectable()
export class AuthService {

	baseURL:string = environment.baseURL;
	private logInError = new BehaviorSubject('');
  currentError = this.logInError.asObservable();

	constructor(private httpClient: HttpClient, private router: Router){

	}
	userSubject = new Subject<any>();
	private user = {};
	emituser(){
		this.userSubject.next(this.user)
	}

  signIn(user) {
		this.httpClient.post(this.baseURL+'/api/user/login', user)
		.subscribe(
			(response: {token: string, }) => {
				localStorage.setItem('authToken', response.token)
				this.router.navigate(['forum'])
				this.logInError.next('')
			},
			(err) => {
				this.logInError.next(err.error.error)
			}
		)
	}

	getToken() {
    return localStorage.getItem('authToken')
  }

	isAuth(){
		let isAuth = (localStorage.getItem('authToken') != undefined ? true: false)
		return isAuth
	}

  signOut() {
    localStorage.removeItem('authToken')
	}


	private signupFeedback = new BehaviorSubject('');
	currentFeedback = this.signupFeedback.asObservable();

	Registration(user){
		this.httpClient.post(this.baseURL+'/api/user/signup', user)
		.subscribe(	(response: {message: string}) => {
				console.log(response.message)
				this.logInError.next('')
			},
			(err) => { this.logInError.next(err.error.error)
			}
		)
	}

	Useraccount(){
		this.httpClient.get(this.baseURL+'/api/user/getuser')
		.subscribe(
			(response) => {
				this.user = response;
				this.emituser();
			},
			(error) => {
			})

	}
	addfavoris(favs){
		console.log(favs)

		let fav = {
			favoris: favs
		};
		console.log(fav)

		this.httpClient.put(this.baseURL+'/api/user/addfavoris', fav)
		.subscribe(
			(response) => {
				console.log('ok');
			},
			(error) => { console.log(error);
			})

	}

}

/*	saveCategoryToServer(forum) {
	this.httpClient.post('/forum', forum)
	.subscribe( () => {
		console.log('Enregistrement terminé !');
	},
	(error) => {
		console.log('Erreur ! : ' + error);
	})
}
*/
