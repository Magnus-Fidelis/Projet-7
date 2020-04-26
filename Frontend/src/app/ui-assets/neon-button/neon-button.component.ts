import { Component, OnInit, Input } from '@angular/core';
import { MenuListService } from '../../ui-features/character-interface/menu-list.service';


@Component({
  selector: 'app-neon-button',
  templateUrl: './neon-button.component.html',
  styleUrls: ['./neon-button.component.sass']
})
export class NeonButtonComponent implements OnInit {

	@Input() name
	@Input() width = '100%'

	lightedUp = false

	clicked(){
		if(this.name == undefined){
			this.lightedUp = !this.lightedUp
			setTimeout( () => { this.lightedUp = false}, 250);
		}
	}

  constructor(private menuListService: MenuListService) {	}

  ngOnInit(): void {
		this.menuListService.currentMenu.subscribe(menu => {
			if(this.name == menu)
				this.lightedUp = true
			else
				this.lightedUp = false
			})
  }

}
