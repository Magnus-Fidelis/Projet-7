import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.sass']
})
export class LegalComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
	goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
