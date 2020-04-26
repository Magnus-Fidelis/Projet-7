import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../menu-list.service';


@Component({
  selector: 'app-character-interface-details',
  templateUrl: './character-interface-details.component.html',
	styleUrls: ['./character-interface-details.component.sass'],
})
export class CharacterInterfaceDetailsComponent implements OnInit {

	detailSelected: string

	constructor(private menuListService: MenuListService) {}

  ngOnInit(): void {
		this.menuListService.currentMenu.subscribe(menu => this.detailSelected = menu)
  }
}
