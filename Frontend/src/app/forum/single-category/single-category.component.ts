import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ForumComponent } from '../forum.component';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';
import { Subscription } from 'rxjs';
import { Route } from '@angular/router';
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.sass']
})
export class SingleCategoryComponent implements OnInit {
	category: any= {
		name: ''
	}
	categorySubscription: Subscription;

	topics: any[]
	topicSubscription: Subscription




	constructor(private forumService: ForumService, private element: ElementRef, private route: ActivatedRoute) {

		//When the route change, we trigger the setup to ask again for the category
		route.params.subscribe(params =>{
			this.setupComponent(params.id)
			this.setupTopic(params.id)
		})
	}

	setupComponent(id){
		//Get category from the service
		this.forumService.getCategoryById(id);
	}

	setupTopic(id){
		//Get topics from the service
		this.forumService.getAllTopicFromOneCategory(id)
		console.log(this.topics)
	}

  ngOnInit(){
		//Get category from the service
		this.setupComponent(this.route.snapshot.params['id'])
		//Subscribe to category changes
		this.categorySubscription = this.forumService.OneCategorysubject.subscribe(
			(category: any) => {
				this.category = category;
			}
		);

		this.setupTopic(this.route.snapshot.params['id'])

		this.topicSubscription = this.forumService.topicsSubject.subscribe(
			(topics: any[]) => {
				this.topics = topics
      }
		)

	}

}

