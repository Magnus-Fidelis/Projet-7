import { ForumService } from 'src/app/services/forum.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { 	state,
					style,
					trigger,
					animate,
					transition } from '@angular/animations';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
	styleUrls: ['./forum-main.component.sass'],
	animations: [
		trigger('openClose', [
			transition(':enter', [
				style({'max-height': 0, 'overflow': 'hidden'}),
				animate('.5s ease-in-out', style({'max-height': '{{startHeight}}px'}))
			], {params: {startHeight: 0}}),
			transition(':leave', [
				style({'max-height': '{{startHeight}}px', 'overflow': 'hidden'}),
				animate('.5s ease-in-out', style({'max-height': 0}))
			], {params: {startHeight: 0}})
    ])
	]
})
export class ForumMainComponent implements OnInit {

	categories: any[]
	categorySubscription: Subscription

	topics: any[]
	topicSubscription: Subscription

	startHeight: number

  constructor(
		private httpClient: HttpClient,
		private forumService: ForumService,
		private element: ElementRef){

	}

	setStartHeight(el){
		this.startHeight = el.element.offsetHeight
		console.log(el.element.offsetHeight)
  }


  ngOnInit(){
		this.categorySubscription = this.forumService.categorySubject.subscribe(
			(categories: any[]) => {
				this.categories = categories
				console.log(categories);
      }
		)
		this.topicSubscription = this.forumService.topicsSubject.subscribe(
			(topics: any[]) => {
				this.topics = topics
				this.currentCategory = (topics.length > 0 ? topics[0]._category : null )
      }
		)
		this.forumService.getAllCategory()
  }

	currentCategory: string
	getTopicsfromCategory(id){
		id = (this.currentCategory == id ? null : id)
		this.forumService.getAllTopicFromOneCategory(id)
	}


}
