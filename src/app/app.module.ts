import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
