import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ForumComponent } from './forum.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumNavMenuComponent } from './forum-main/forum-nav-menu/forum-nav-menu.component';
import { AuthGuard } from '../services/auth-guard.service';
import { EditCategoryComponent } from '../forum/edit-category/edit-category.component'
import { ForumService } from '../services/forum.service';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { SingleTopicComponent } from './single-topic/single-topic.component';
import { SingleSubjectComponent } from './single-subject/single-subject.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { SafePipe } from '../pipes/safe.pipe';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UiAssetsModule } from '../ui-assets/ui-assets.module'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
const forumRoutes: Routes = [

	{
		path: 'forum',
		component: ForumComponent,
		canActivate: [AuthGuard],
		children:[
			{
				path: '',
				canActivate: [AuthGuard],
				component: ForumMainComponent,
			},
			{
				path: 'editCategory',
				canActivate: [AuthGuard],
				component: EditCategoryComponent,
			},
			{
				path: ':id',
				canActivate: [AuthGuard],
				component: SingleCategoryComponent,
			},
			{
				path: 'topic/:id',
				canActivate: [AuthGuard],
				component: SingleTopicComponent,
			},
			{
				path: 'sujet/:id',
				canActivate: [AuthGuard],
				component: SingleSubjectComponent,
			},
			{
				path: 'sujet/:id/:page',
				canActivate: [AuthGuard],
				component: SingleSubjectComponent,
			},
			{
				path: 'edit-topic/:id',
				canActivate: [AuthGuard],
				component: EditTopicComponent,
			},
			{
				path: 'edit-sujet/:id',
				canActivate: [AuthGuard],
				component: EditSubjectComponent,
			},
			{
				path: 'forum/compte',
				canActivate: [AuthGuard],
				component: UserProfileComponent,
			}
		]
	}
]

@NgModule({
	declarations: [
    SidebarComponent,
    ForumMainComponent,
    ForumNavMenuComponent,
		SingleCategoryComponent,
		EditCategoryComponent,
		ForumComponent,
		SingleTopicComponent,
		SingleSubjectComponent,
		EditTopicComponent,
		EditSubjectComponent,
		SafePipe,
		UserProfileComponent,
	],
  imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(forumRoutes),
		AngularSvgIconModule.forRoot(),
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot(),
		UiAssetsModule,
		MatTableModule,
		MatPaginatorModule,
		A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,



	],
	providers:[
		ForumService,
	],
	exports:[
		RouterModule
	]
})
export class ForumModule { }

