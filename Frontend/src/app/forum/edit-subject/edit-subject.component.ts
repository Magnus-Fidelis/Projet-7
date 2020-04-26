import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ForumService } from 'src/app/services/forum.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.sass']
})
export class EditSubjectComponent implements OnInit {

	id: any;

  constructor(private forumService: ForumService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
		 this.id = this.route.snapshot.params['id'];
	}

	onSubmit(form: NgForm) {
		const subject = {
			name: form.value['name'],
			status: 'non-lu',
			description: form.value['description'],
			_topic : this.id,
		}
		this.forumService.saveSubjectsToServer(subject);
		this.router.navigate(['/forum']);
}

}
