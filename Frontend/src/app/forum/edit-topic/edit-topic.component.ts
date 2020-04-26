import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ForumService } from 'src/app/services/forum.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.sass']
})
export class EditTopicComponent implements OnInit {
	id: any;

  constructor(private forumService: ForumService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
		 this.id = this.route.snapshot.params['id'];
	}

	onSubmit(form: NgForm) {
		const topic = {
			name: form.value['name'],
			status: 'non-lu',
			description: form.value['description'],
			_category : this.id,
		}
		this.forumService.saveTopicToServer(topic);
		this.router.navigate(['/forum']);
}

}
