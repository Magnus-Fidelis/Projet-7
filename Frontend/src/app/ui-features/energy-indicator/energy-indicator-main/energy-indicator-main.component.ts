import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-indicator-main',
  templateUrl: './energy-indicator-main.component.html',
  styleUrls: ['./energy-indicator-main.component.sass']
})
export class EnergyIndicatorMainComponent implements OnInit {

	energyPercent = 75
	isAnimated = true

	setPercent(p:number): void{
		this.energyPercent = p
	}

	animateIt(time, dataCount): void{
		function calculateTime(time, dataCount) {
			return time / dataCount;
		}

		this.isAnimated = false
		this.energyPercent = 100

		let runTime = calculateTime(time, dataCount);
		let interval = setInterval(_ => {
      if (this.energyPercent > 0) {
        this.energyPercent--;
			} else {
				this.isAnimated = true
				clearInterval(interval);
			}
		}, runTime);
	}

  constructor() { }

  ngOnInit(): void {
  }

}
