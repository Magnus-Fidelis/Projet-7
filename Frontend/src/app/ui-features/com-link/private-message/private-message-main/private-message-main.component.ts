import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-message-main',
  templateUrl: './private-message-main.component.html',
  styleUrls: ['./private-message-main.component.sass']
})
export class PrivateMessageMainComponent implements OnInit {

	interfacesOpenned = false

  constructor() {}

  ngOnInit(): void {
  }

	openInterfaces(){
		this.interfacesOpenned = !this.interfacesOpenned
	}



}

