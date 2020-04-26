import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

	categories: any[];
	categorySubscription: Subscription;
	icon = "assets/icons/forum-hamburger.svg"


	importantTopics = [
		{
			id: "115313",
			name: "News"
		},
		{
			id: "115313",
			name: "News",

		}
	]

  constructor(private forumService: ForumService) { }

  ngOnInit(){
		this.categorySubscription = this.forumService.categorySubject.subscribe(
			(categories: any[]) => {
				this.categories = categories;

      }
		);
		this.forumService.emitCategorySubject();
		this.forumService.getAllCategory();

  }

  onCategory() {

}



}
