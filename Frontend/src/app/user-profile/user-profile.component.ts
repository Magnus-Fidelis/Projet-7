import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import {user} from '../models/user.model';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import {environment} from "../../environments/environment"
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
	user: any
	userSubscription: Subscription;
	selectedFile: File = null;
	baseURL: string = environment.baseURL

  constructor(private Authservice: AuthService, private http: HttpClient, private router: Router) {

	 }

  ngOnInit() {
		this.userSubscription = this.Authservice.userSubject.subscribe(
			(user: {}) => {
				this.user = user


			}
		)
		this.Authservice.Useraccount();



  }


	onFileSelected(event){
		this.selectedFile = <File>event.target.files[0];
	}
	onUpload(){
		const fd = new FormData();
		fd.append('image', this.selectedFile, this.selectedFile.name)
		this.http.put(this.baseURL + '/api/user/modifyuser', fd, {reportProgress: true,
		observe: 'events'})

		.subscribe(
			event =>{
				if (event.type === HttpEventType.UploadProgress){
					console.log('Upload Progress' + Math.round(event.loaded / event.total* 100)+  '%');
				}
				else if (event.type === HttpEventType.Response)
				{
					console.log(event);
				}
			}

		);
	}

	onDelete(){
		this.http.delete(this.baseURL+'/api/user/deleteuser')
		.subscribe(
			(response) => {
				this.router.navigate(['/']);
			},
			(error) => {
			})
	}
	onPassword(form: NgForm){
		const user = {
			password: form.value['password'],
		}
		console.log('ici le user', user)
		this.http.put(this.baseURL + '/api/user/modifyuser', user)
		.subscribe(
			response => {
				console.log('success');
			},
			error => {
				console.log(error);
			}
		)
	}
}
