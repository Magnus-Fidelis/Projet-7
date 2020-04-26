import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { animate, transition, trigger, state, style} from '@angular/animations';

@Injectable()

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
	styleUrls: ['./forum.component.sass'],
	animations:[
		trigger('openClose', [
			state('true', style({
				transform: 'scaleX(1)',
				'transform-origin': 'left'
			})),
			state('false', style({
				transform: 'scaleX(0)',
				'transform-origin': 'left'
      })),
		transition('false => true', [
			animate('0.150s')
		]),
		transition('true => false', [
			animate('0.01s')
		]),
	]),
	trigger('Highlight', [
		state('true', style({
			'box-shadow': '2px 2px 20px 20px cyan'
		}))]),
	]
})
export class ForumComponent implements OnInit {
	mobile = false;
	favoris: any[];
	favorisSubscription: Subscription;

	lastSubjects: any[];
	lastSubjectsSubscription: Subscription;

	subject: any = {
		name: ''
	}
	subjectSubscription: Subscription;

	button = {
		icon: '../../assets/icons/cross.svg',
		name: 'cross',
		clicked: true,
	};

	lastTopics = [
		{
			name: "Topic 1",
			read: true
		},
		{
			name: "Topic 2",
			read: false
		},
		{
			name: "Topic 3",
			read: false
		},
		{
			name: "Topic 4",
			read: true
		},
		{
			name: "Topic 5",
			read: false
		},
		{
			name: "Topic 6",
			read: false
		},
		{
			name: "Topic 7",
			read: true
		},
		{
			name: "Topic 8",
			read: false
		},
		{
			name: "Topic 9",
			read: false
		},
		{
			name: "Topic 10",
			read: false
		},
	];



  modos = [
		{
			name: "moderateur 1",
		},
		{
			name: "moderateur 2",
		},
		{
			name: "moderateur 3",
		}
	];
onClick(){
	this.mobile = !this.mobile

}

  constructor(private forumService: ForumService) { }

  ngOnInit() {
		this.favorisSubscription = this.forumService.favSubject.subscribe(
			(favoris: any[]) => {
				this.favoris = favoris;
				console.log(this.favoris);
			}
		);
		this.forumService.getFavoris();
		this.lastSubjectsSubscription = this.forumService.lastSubjectsSubject.subscribe(
			(lastSubjects: any[]) => {
				this.lastSubjects = lastSubjects;
				console.log(this.favoris);
			}
		);
		this.forumService.getLast10Subjects();
	}

	onDelete(id) {
		this.forumService.deleteFavoris(id);
		this.favoris = (this.favoris == id ? '' :id)
		event.stopPropagation();
	}


}
