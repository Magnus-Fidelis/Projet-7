import { ForumService } from 'src/app/services/forum.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
	styleUrls: ['./single-topic.component.sass'],
})
export class SingleTopicComponent implements OnInit {


	subjects: any[]
	subjectSubscription: Subscription

	topic: any= {
		name: ''
	}
	topicSubscription: Subscription;

  constructor(private forumService: ForumService, private route: ActivatedRoute, private AuthService: AuthService){
		//When the route change, we trigger the setup to ask again for the category
		route.params.subscribe(params =>{
			this.setupComponent(params.id)
		})
	}

	setupComponent(id){
		//Get category from the service
		this.forumService.getTopicbyID(id);
		this.forumService.getSubjectsFromTopic(id);
	}

  ngOnInit(){
		//Get category from the service
		this.setupComponent(this.route.snapshot.params['id'])
		//Subscribe to category changes
		this.topicSubscription = this.forumService.singleTopicSubject.subscribe(
			topic => {
				this.topic = topic
				console.log('this.topic', this.topic);
			}
		);
		this.subjectSubscription = this.forumService.subjectsSubject.subscribe(
			subjectList => {
				this.subjects = subjectList
			}
		);
	}
	OnAddFav(id){
		this.AuthService.addfavoris(id);
		event.stopPropagation();
	}

}
