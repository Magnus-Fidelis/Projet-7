import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-interface-main-info',
  templateUrl: './character-interface-main-info.component.html',
  styleUrls: ['./character-interface-main-info.component.sass']
})
export class CharacterInterfaceMainInfoComponent implements OnInit {

	character = {
		name: "Shodan",
		title: "La vilaine IA",
		avatar: "https://imgur.com/DKZcWaw.png",
		nutrition: {
			hunger: 95,
			thirst: 65
		},
		money: 36789,
		level: 100,
		exp:45000,
		expToNextLevel: 65000,
		pv: 340,
		pvmax: 560,
		action:"ne fait rien de particulier",
		stats: [
			{
				name: "force",
				short: "for",
				value: 80
			},
			{
				name: "agilité",
				short: "agi",
				value: 130
			},
			{
				name: "constitution",
				short: "con",
				value: 75
			},
			{
				name: "endurence",
				short: "end",
				value: 60
			},
			{
				name: "perception",
				short: "per",
				value: 175
			},
			{
				name: "discretion",
				short: "dis",
				value: 130
			},
			{
				name: "dexterité",
				short: "dex",
				value: 120
			},
			{
				name: "intelligence",
				short: "int",
				value: 180
			},
			{
				name: "volonté",
				short: "vol",
				value: 175
			}
		]
	}


  constructor() { }

  ngOnInit(): void {
  }

}
