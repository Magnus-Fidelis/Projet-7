import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.sass']
})
export class TopicsComponent implements OnInit {
	topics: any[];
	topicSubscription: Subscription;
	id: '';
  constructor(private TopicsService: ForumService) { }

  ngOnInit() {
		this.topicSubscription = this.TopicsService.topicsSubject.subscribe(
			(topics: any[]) =>
			this.topics = topics
		);
		this.TopicsService.emitAllTopicFromOneCategory();
		this.TopicsService.getAllTopicFromOneCategory(this.id);
  }

}
