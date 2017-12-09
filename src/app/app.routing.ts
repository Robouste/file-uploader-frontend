import { FtpComponent } from './ftp/ftp.component';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { ConnexionComponent } from './connexion/connexion.component';

export const appRoutes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
		component: ConnexionComponent
	},
	{
		path: "ftp",
		component: FtpComponent
	}
];
