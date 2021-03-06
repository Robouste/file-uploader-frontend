import { FtpModule } from './ftp/ftp.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { ConnexionModule } from './connexion/connexion.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		SharedModule,
		ConnexionModule,
		FtpModule,
		LayoutModule
	],
	providers: [
		{
			provide: LocationStrategy, useClass: HashLocationStrategy
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
