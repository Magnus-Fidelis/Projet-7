import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-link-interfaces',
  templateUrl: './com-link-interfaces.component.html',
  styleUrls: ['./com-link-interfaces.component.sass']
})
export class ComLinkInterfacesComponent implements OnInit {

	interface_list=[
		{
			type: 'work',
			text: 'Entreprise'
		},
		{
			type: 'home',
			text: 'Logement'
		},
		{
			type: 'contact',
			text: 'Contacts'
		},
		{
			type: 'Adress',
			text: 'Adresses'
		}
	]

	selected = ''

	select(interfaceName: string):void {
		this.selected = (this.selected == interfaceName ? '' : interfaceName)
	}

  constructor() { }

  ngOnInit(): void {
  }

}
