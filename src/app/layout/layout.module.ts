import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [SharedModule],
	exports: [ToolbarComponent],
	declarations: [ToolbarComponent],
	providers: [],
})
export class LayoutModule { }
