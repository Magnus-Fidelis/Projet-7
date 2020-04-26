import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlitchTextComponent } from './glitch-text/glitch-text.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';



@NgModule({
	declarations: [
		GlitchTextComponent,
		NeonButtonComponent
	],
  imports: [
    CommonModule
	],
	exports: [
		GlitchTextComponent,
		NeonButtonComponent
	]
})
export class UiAssetsModule { }
