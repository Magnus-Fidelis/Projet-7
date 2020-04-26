import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../menu-list.service';

@Component({
  selector: 'app-character-interface-menu-list',
  templateUrl: './character-interface-menu-list.component.html',
	styleUrls: ['./character-interface-menu-list.component.sass'],
})
export class CharacterInterfaceMenuListComponent implements OnInit {

	button_list = [
		{
			icon: "assets/icons/inventory.svg",
			name: "inventory",
			clicked: false
		},
		{
			icon: "assets/icons/cybernetics.svg",
			name: "cybernetic",
			clicked: false
		},
		{
			icon: "assets/icons/equipment.svg",
			name: "equipment",
			clicked: false
		},
		{
			icon: "assets/icons/stats.svg",
			name: "statistics",
			clicked: false
		},
		{
			icon: "assets/icons/talents.svg",
			name: "talents",
			clicked: false
		},
		{
			icon: "assets/icons/titles.svg",
			name: "titles",
			clicked: false
		},
	]

	activeButtonName: string

  constructor(private menuListService: MenuListService) { }

  ngOnInit(): void { }

	openInterfaceDetails(name: string){
		//if same name, then unselect
		name = (this.activeButtonName == name ? 'default' : name)
		//Assign new active button name
		this.activeButtonName = name
		//Send name to service so other component can react to the change
		this.menuListService.setMenuSelected(name)
	}
}
