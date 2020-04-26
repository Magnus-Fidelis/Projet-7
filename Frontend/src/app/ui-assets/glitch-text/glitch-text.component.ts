import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glitch-text',
  templateUrl: './glitch-text.component.html',
  styleUrls: ['./glitch-text.component.sass']
})
export class GlitchTextComponent implements OnInit {

	@Input() text

  constructor() { }

  ngOnInit(): void {
  }

}
