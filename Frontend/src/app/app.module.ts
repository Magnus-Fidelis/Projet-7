import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { PrivateMessageMainComponent } from './ui-features/com-link/private-message/private-message-main/private-message-main.component';
import { PrivateMessageListComponent } from './ui-features/com-link/private-message/private-message-list/private-message-list.component';
import { PrivateMessageLinkComponent } from './ui-features/com-link/private-message/private-message-link/private-message-link.component';
import { EnergyIndicatorMainComponent } from './ui-features/energy-indicator/energy-indicator-main/energy-indicator-main.component';
import { EnergyIndicatorDisplayBarComponent } from './ui-features/energy-indicator/energy-indicator-display-bar/energy-indicator-display-bar.component';
import { ComLinkInterfacesComponent } from './ui-features/com-link/com-link-interfaces/com-link-interfaces.component';
import { NeonButtonComponent } from './ui-assets/neon-button/neon-button.component';
import { CharacterInterfaceMainInfoComponent } from './ui-features/character-interface/character-interface-main-info/character-interface-main-info.component';
import { CharacterInterfaceMainComponent } from './ui-features/character-interface/character-interface-main/character-interface-main.component';
import { CharacterInterfaceMenuListComponent } from './ui-features/character-interface/character-interface-menu-list/character-interface-menu-list.component';
import { CharacterInterfaceDetailsComponent } from './ui-features/character-interface/character-interface-details/character-interface-details.component';
import { CharacterInterfaceDetailsInventoryComponent } from './ui-features/character-interface/character-interface-details/character-interface-details-inventory/character-interface-details-inventory.component';
import { CharacterInterfaceDetailsCyberneticComponent } from './ui-features/character-interface/character-interface-details/character-interface-details-cybernetic/character-interface-details-cybernetic.component';
import { CharacterInterfaceDetailsStatisticsComponent } from './ui-features/character-interface/character-interface-details/character-interface-details-statistics/character-interface-details-statistics.component';
import { CharacterInterfaceDetailsTalentsComponent } from './ui-features/character-interface/character-interface-details/character-interface-details-talents/character-interface-details-talents.component';
import { CharacterInterfaceDetailsEquipmentComponent } from './ui-features/character-interface/character-interface-details/character-interface-details-equipment/character-interface-details-equipment.component';
import { CharacterInterfaceDetailsTitleComponent } from './ui-features/character-interface/character-interface-details/character-interface-details-title/character-interface-details-title.component';
import { CharacterInterfaceMenuListButtonComponent } from './ui-features/character-interface/character-interface-menu-list/character-interface-menu-list-button/character-interface-menu-list-button.component';
import { AuthComponent } from './auth/auth.component';

import { ForumModule } from './forum/forum.module'
import { UiAssetsModule } from './ui-assets/ui-assets.module'
import { AuthService } from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

import { AuthInterceptor } from './auth/auth-interceptor';
import { TopicsComponent } from './topics/topics.component';
import { LegalComponent } from './legal/legal.component';

registerLocaleData(localeFr, 'fr-FR');

const appRoutes: Routes = [
	{
		path: '',
		component: AuthComponent
	},
	{
		path: 'auth',
		component: AuthComponent,
	},
	{
		path: 'legal',
		component: LegalComponent
	},
	// {
	// 	path: 'main',
	// 	component: CharacterInterfaceMainComponent,
	// },
	{
		path: '**', redirectTo: '/not-found' /*doit toujours être à la fin ! */
	}

];

@NgModule({
  declarations: [
    AppComponent,
    PrivateMessageMainComponent,
    PrivateMessageListComponent,
    PrivateMessageLinkComponent,
    EnergyIndicatorMainComponent,
    EnergyIndicatorDisplayBarComponent,
    ComLinkInterfacesComponent,
    CharacterInterfaceMainInfoComponent,
    CharacterInterfaceMainComponent,
    CharacterInterfaceMenuListComponent,
    CharacterInterfaceDetailsComponent,
    CharacterInterfaceDetailsInventoryComponent,
    CharacterInterfaceDetailsCyberneticComponent,
    CharacterInterfaceDetailsStatisticsComponent,
    CharacterInterfaceDetailsTalentsComponent,
    CharacterInterfaceDetailsEquipmentComponent,
    CharacterInterfaceDetailsTitleComponent,
    CharacterInterfaceMenuListButtonComponent,
		FourOhFourComponent,
		AuthComponent,
		TopicsComponent,
		LegalComponent,

  ],
  imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AngularSvgIconModule.forRoot(),
		RouterModule.forRoot(appRoutes),
		FormsModule,
		ForumModule,
		BrowserAnimationsModule,
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot(),
		UiAssetsModule

  ],
  providers: [
		AuthService,
		AuthGuard,
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
