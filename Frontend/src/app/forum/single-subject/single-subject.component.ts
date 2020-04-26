import { ForumService } from 'src/app/services/forum.service';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.sass']
})
export class SingleSubjectComponent implements OnInit {
	length = 100;
	pageSize = 10;
	pageSizeOptions = [1, 2, 5, 10];

	pageEvent: PageEvent;

	baseURL:string = environment.baseURL;

	froalaContent: string
	froalaOption = {
		key: '1CC3kC5C5F6A5C3D4bkrhljpG-10h1fdeD8hcg1rE1D4A3A10B1B6D5B1E4G3==',
		toolbarInline: true,
		imageUploadURL: this.baseURL+'/api/forum/message/upload',
		imageUploadMethod: 'POST',
		imageMaxSize: 5*1024*1024,
		imageUploadParam: 'image',
		requestHeaders: {
			'Authorization': 'Bearer ' + this.auth.getToken()
		}
	}


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

	onEditMessage(id, index){
		let messageContent = document.getElementById('edittext'+id).firstElementChild.firstElementChild.innerHTML
		const message = {
			text: messageContent,
		}
		this.httpClient.put( this.baseURL+'/api/forum/message/'+id, message)
		.subscribe(
			(response: {token: string, }) => {
				console.log(response)
				this.messagesList[index] = response
				this.markAsRead()
			},
			(err) => {
				//this.logInError.next(err.error.error)
			}
		)

		this.changeEditMode(id)
	}

	onDeleteMessage(id, index){
		this.httpClient.delete(this.baseURL+'/api/forum/message/'+id)
		.subscribe(
			(response: {token: string, }) => {
				this.messagesList[index].deleted = true
				setTimeout(() => {
					this.messagesList.splice(index, 1)
				}, 500);
			},
			(err) => {
				//this.logInError.next(err.error.error)
			}
		)
	}

	onPostMessage(form: NgForm){
		const message = {
			text: form.value['text'],
			_subject: this.route.snapshot.params['id']
		}
		this.httpClient.post(this.baseURL+'/api/forum/message', message)
		.subscribe(
			(response: {token: string, }) => {
				this.messagesList.push(response)
				let d = document.getElementsByClassName("subject")[0]
				d.scrollTop = d.scrollHeight
				this.markAsRead()
			},
			(err) => {
				//this.logInError.next(err.error.error)
			}
		)
	}

	messagesList: any[]
	pageCount: number
	messagesSubscription: Subscription
	currentPage: number

	subject: any= {
		name: ''
	}
	subjectSubscription: Subscription;

	constructor(
		private httpClient: HttpClient,
		private forumService: ForumService,
		private route: ActivatedRoute,
		private auth: AuthService){
		//When the route change, we trigger the setup to ask again for the category
		route.params.subscribe(params =>{
			if(params.page == undefined){
				this.setupComponent(params.id)
			} else {
				this.setupComponent(params.id, params.page)
			}
		})
	}

	setupComponent(id, page: number = null){
		this.forumService.getSubjectbyID(id);

		if(page == null){

			//get last messages
			this.forumService.getLastMessageFromSubject(id);
		}

		else {
			this.forumService.getMessageFromSubjectAtPage(id, page);
		}
	}
	setCurrentPage(pageCount){
		if(this.route.snapshot.params['page'] == undefined){
			this.currentPage = this.pageCount
		}
			else {
				this.currentPage = this.route.snapshot.params['page']
			}

	}

  ngOnInit(){
		//Get subject from the service
		if(this.route.snapshot.params['page'] == undefined){
		this.setupComponent(this.route.snapshot.params['id'])
		}
		else {
			this.setupComponent(this.route.snapshot.params['id'], this.route.snapshot.params['page'])
		}
		//Subscribe to subject changes
		this.subjectSubscription = this.forumService.singleSubjectSubject.subscribe(
			subject => {
				this.subject = subject
			}
		);
		//Subscribe to message changes
		this.messagesSubscription = this.forumService.messagesSubject.subscribe(
			messagesData => {
				this.messagesList = messagesData.messages
				this.pageCount = messagesData.pageCount
				this.setCurrentPage(this.pageCount)
		});

		this.markAsRead()
	}

	OnAddFav(id){
	}

	editMode: string
	changeEditMode(id){
		this.editMode = (this.editMode == id ? '' : id)
	}
	deleteMode: string
	changeDeleteMode(id){
		this.deleteMode = (this.deleteMode == id ? '' : id)
	}



	markAsRead(id?:string){
		console.log('marking subject as read')
		if(!id){
			id = this.route.snapshot.params['id']
		}
		this.httpClient.put(this.baseURL+'/api/user/upsertSubjectsRead/'+id, {date: Date.now()})
		.subscribe(
			(response: {token: string, }) => {

			},
			(err) => {
				//this.logInError.next(err.error.error)
			}
		)
	}

}
