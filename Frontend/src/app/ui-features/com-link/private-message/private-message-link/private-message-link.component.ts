import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-message-link',
  templateUrl: './private-message-link.component.html',
  styleUrls: ['./private-message-link.component.sass']
})
export class PrivateMessageLinkComponent implements OnInit {

  @Input() title
  @Input() picture
  @Input() membres
  @Input() date
	lightedUp = false

	clicked(){
		this.lightedUp = !this.lightedUp
	}
  constructor() { }

  ngOnInit(): void {
  }

}
