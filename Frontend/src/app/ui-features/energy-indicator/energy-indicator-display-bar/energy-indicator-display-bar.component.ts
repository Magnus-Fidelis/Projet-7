import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-indicator-display-bar',
  templateUrl: './energy-indicator-display-bar.component.html',
  styleUrls: ['./energy-indicator-display-bar.component.sass']
})
export class EnergyIndicatorDisplayBarComponent implements OnInit {

	@Input() energyPercent
	@Input() isAnimated

	getColor(): string{
		if (this.energyPercent < 10){
			return 'red'
		} else if (this.energyPercent < 50) {
			return 'yellow'
		} else if (this.energyPercent < 90) {
			return 'lime'
		} else {
			return 'cyan'
		}
	}
  constructor() { }

  ngOnInit(): void {
  }

}
