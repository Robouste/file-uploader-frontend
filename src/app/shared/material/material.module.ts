import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

const MODULES = [
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
