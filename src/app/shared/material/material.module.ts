import {
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatToolbarModule,
	MatInputModule,
	MatFormFieldModule,
	MatListModule
} from '@angular/material';

import { NgModule } from '@angular/core';

const MODULES = [
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
