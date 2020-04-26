import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable()
export class ForumService {

	baseURL:string = environment.baseURL;


/* Gestion des catégories
----------------------------- */
	categorySubject = new Subject<any[]>();

  private categories = [
	];

	OneCategorysubject = new Subject<any>();
	private category = {};

	favSubject = new Subject<any>();
	private favoris = [];


	constructor(private httpClient: HttpClient){

	}

	emitfavSubject(){
		this.favSubject.next(this.favoris)
	}
	emitCategorySubject(){
		this.categorySubject.next(this.categories.slice())
	}

	emitOneCategorySubject(){
		this.OneCategorysubject.next(this.category)
	}

	getCategoryById(id: string){
		this.httpClient
		.get<any>(this.baseURL+'/api/forum/' + id)
		.subscribe(
			(response)=>{
				this.category = response;
				this.emitOneCategorySubject();
			},
			(error) => {
			}
		)
	};

	getAllCategory(){
		this.httpClient
		.get<any[]>(this.baseURL+'/api/forum')
		.subscribe(
			(response)=>{
				this.categories = response;
				this.emitCategorySubject();
			},
			(error) => {
				console.error('Error when getting all categories')
				console.dir(error);
			}
		)
	}

	modifyOneCategory(id: string, forum){
		this.httpClient
		.put<any>(this.baseURL+'/api/forum/' + id, forum)
		.subscribe(
			(response)=>{
				this.emitOneCategorySubject();
			},
			(error) => {
			}
		)
	}

	saveCategoryToServer(forum) {
		this.httpClient.post(this.baseURL+'/api/forum', forum)
		.subscribe( () => {
			console.log('Enregistrement terminé !');
		},
		(error) => {
			console.log('Erreur ! : ' + error);
		})
	}

	deleteCategoryById(id: string){
		this.httpClient.delete(this.baseURL+'/api/forum/' + id)
		.subscribe( () => {
			console.log('Suppression du topic terminé !');
		},
		(error) => {
			console.log("Erreur de suppression topic! : " + error);
		})
	};
/* -----------------------------

		Gestion des Topics

		-----------------------------*/

	topicsSubject = new Subject<any[]>();
	private topics = [];


	private singleTopic = {

	};
	singleTopicSubject = new Subject<any>();

	emitAllTopicFromOneCategory(){
		this.topicsSubject.next(this.topics.slice())
	}

	emitOneTopic(){
		this.singleTopicSubject.next(this.singleTopic)
	}


	getAllTopicFromOneCategory(idcategory: string){
		if(idcategory != null){
			this.httpClient
			.get<any[]>(this.baseURL+'/api/forum/topic/fromCategory/' + idcategory) /* attend l'id de la catégorie contenant les dossiers*/
			.subscribe(
				(response)=>{
					this.topics = response;
					this.emitAllTopicFromOneCategory();
				},
				(error) => {
					console.error('Error when getting all topics from one Category')
					console.dir(error);
				}
			)
		} else {
			this.topics = [];
			this.emitAllTopicFromOneCategory();
		}
	}

	getTopicbyID(idTopic: string){
		this.httpClient
		.get<any[]>(this.baseURL+'/api/forum/topic/' + idTopic) /* attend l'id de la catégorie contenant les dossiers*/
		.subscribe(
			(response)=>{
				this.singleTopic = response;
				this.emitOneTopic();
			},
			(error) => {
				console.error('Error when getting topic by id')
				console.dir(error);
			}
		)
	}

	modifyOneTopic(id: string, topic){
		this.httpClient
		.put<any>(this.baseURL+'/api/forum/topic' + id, topic) /* attend l'id du topic à modifier, et les modifications*/
		.subscribe(
			(response)=>{
			},
			(error) => {
			}
		)
	}

	saveTopicToServer(topic) {
		this.httpClient.post(this.baseURL+'/api/forum/topic', topic) /* attend juste les données de création du topic, i.e, son nom (requis), l'id de la catégorie auquel il appartient (requis)*/
		.subscribe( () => {
		},
		(error) => {
		})
	}

	deleteTopicById(id: string){
		this.httpClient.delete(this.baseURL+'/api/forum/topic' + id) /* attend l'id du topic à supprimer*/
		.subscribe( () => {
		},
		(error) => {
		})
	};


	/* -----------------------------

			Gestion des Sujets

			-----------------------------*/

	subjectsSubject = new Subject<any>();
	private subjects = [];


	private singleSubject = {};
	singleSubjectSubject = new Subject<any>();

	emitSubjectsFromTopic(){
		this.subjectsSubject.next(this.subjects.slice())
	}

	emitOneSubject(){
		this.singleSubjectSubject.next(this.singleSubject)
	}

	lastSubjectsSubject = new Subject<any>();
	private lastSubjects = [];

	emitLast10Subjects(){
		this.lastSubjectsSubject.next(this.lastSubjects)
	}

	saveSubjectsToServer(subject) {
		this.httpClient.post(this.baseURL+'/api/forum/subject', subject) /* attend juste les données de création du topic, i.e, son nom (requis), l'id de la catégorie auquel il appartient (requis)*/
		.subscribe( () => {
		},
		(error) => {
		})
	}

	deleteSubjectsById(id: string){
		this.httpClient.delete(this.baseURL+'/api/forum/subject' + id) /* attend l'id du topic à supprimer*/
		.subscribe( () => {
		},
		(error) => {
		})
	};

	getSubjectsFromTopic(idtopic: string){
		this.httpClient
		/* attend l'id du topics contenant les sujets */
		.get<any[]>(this.baseURL+'/api/forum/subject/fromTopic/' + idtopic)
		.subscribe(
			(response)=>{
				this.subjects = response;
				this.emitSubjectsFromTopic();
			},
			(error) => {
			}
		)
	}

	getLast10Subjects(){
		this.httpClient
		/* attend l'id du topics contenant les sujets */
		.get<any[]>(this.baseURL+'/api/forum/subject/last10')
		.subscribe(
			(response)=>{
				this.lastSubjects = response;
				this.emitLast10Subjects();
			},
			(error) => {
			}
		)
	}

	getSubjectbyID(idSubject: string){
		this.httpClient
		.get<any[]>(this.baseURL+'/api/forum/subject/' + idSubject) /* attend l'id de la catégorie contenant les dossiers*/
		.subscribe(
			(response)=>{
				this.singleSubject = response;
				this.emitOneSubject();
			},
			(error) => { console.log(error);
			}
		)
	}

	getFavoris(){
		this.httpClient
		.get<any[]>(this.baseURL+'/api/user/getfavoris')
		.subscribe(
			(response)=>{
				this.favoris = response;
				this.emitfavSubject();
			},
			(error) => { console.log(error);
			}
		)
	}
	deleteFavoris(id: string){
		this.httpClient.delete(this.baseURL+'/api/user/deletefavoris/' + id) /* attend l'id du topic à supprimer*/
		.subscribe( () => {
		},
		(error) => {
		})
	};



	/* -----------------------------

	Gestion des messages

	-----------------------------*/

	messagesSubject = new Subject<any>();
	private messages = [];
	private pageCount: number;
	// private singleSubject = {};
	// singleSubjectSubject = new Subject<any>();

	emitMessageFromSubject(){
		this.messagesSubject.next({
			messages: this.messages.slice(),
			pageCount: this.pageCount
		})
	}
	getLastMessageFromSubject(idSubject: string){
		this.httpClient
		/* attend l'id du topics contenant les sujets */
		.get<any>(this.baseURL+'/api/forum/message/fromSubject/' + idSubject)
		.subscribe(
			(response)=>{
				this.messages = response.messages
				this.pageCount = response.page
				this.emitMessageFromSubject();
			},
			(error) => {
			}
		)
	}

	getMessageFromSubjectAtPage(idSubject: string, page: number){
		this.httpClient
		/* attend l'id du topics contenant les sujets */
		.get<any>(`${this.baseURL}/api/forum/message/fromSubject/${idSubject}/${page}`)
		.subscribe(
			(response)=>{
				this.messages = response.messages
				this.pageCount = response.page
				this.emitMessageFromSubject();
			},
			(error) => {
			}
		)
	}

}
