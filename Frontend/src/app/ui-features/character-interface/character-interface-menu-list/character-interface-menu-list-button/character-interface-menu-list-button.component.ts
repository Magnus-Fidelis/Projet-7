import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-interface-menu-list-button',
  templateUrl: './character-interface-menu-list-button.component.html',
  styleUrls: ['./character-interface-menu-list-button.component.sass']
})
export class CharacterInterfaceMenuListButtonComponent implements OnInit {

	@Input() icon
	@Input() name

  constructor() { }

  ngOnInit(): void {

	}

	openInterfaceDetails(name:string){

	}

}
