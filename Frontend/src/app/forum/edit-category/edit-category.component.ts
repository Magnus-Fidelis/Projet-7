import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ForumService } from 'src/app/services/forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.sass']
})
export class EditCategoryComponent implements OnInit {

  constructor(private forumService: ForumService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
		console.log(form)
		const forum = {
			name: form.value['name'],
		}

		this.forumService.saveCategoryToServer(forum);
		this.router.navigate(['/forum']);
  }
}


