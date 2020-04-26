import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-character-interface-details-inventory',
  templateUrl: './character-interface-details-inventory.component.html',
  styleUrls: ['./character-interface-details-inventory.component.sass']
})
export class CharacterInterfaceDetailsInventoryComponent implements OnInit {


	baseInventory = [	]

	inventory = [
		{
			container_name: "Armure lourde MK3 composite",
			container_img: "link",
			items: [
				{
					empty: false,
					item_name: "Bouteille d'eau",
					item_img: "link",
					item_quantity: 2,
					item_weight: 10,
					item_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, corrupti.",
					item_state: 50,
					item_state_max: 50
				},
				{
					empty: false,
					item_name: "Steak de Zye",
					item_img: "link",
					item_quantity: 35,
					item_weight: 10,
					item_description: "Ne pas toucher, sinon je mord.",
					item_state: 50,
					item_state_max: 50
				},
				{
					empty: false,
					item_name: "Cable",
					item_img: "link",
					item_quantity: 2,
					item_weight: 10,
					item_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, corrupti.",
					item_state: 50,
					item_state_max: 50
				},
				{
					empty: true,
				},
				{
					empty: true,
				},
				{
					empty: true,
				},
				{
					empty: true,
				},
			]
		}
	]

	spaceMax: number
	spaceTaken: number

	userWeightMax: number = 500
	userCurrentWeight: number

  constructor() { }

  ngOnInit(): void {
		this.calcInventorySpace()
  }

	calcInventorySpace(){
		this.spaceMax						= this.inventory.reduce((total, current) => total + current.items.length, 3)
		this.spaceTaken 				= this.inventory.reduce((total, current) => total + current.items.reduce((itotal, icurrent) => (icurrent.empty ? itotal : itotal + 1), 0), 0)
		this.userCurrentWeight 	= this.inventory.reduce((total, current) => total + current.items.reduce((itotal, icurrent) => (icurrent.empty ? itotal : itotal + icurrent.item_quantity * icurrent.item_weight), 0), 0)
	}
}
