import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { ConnexionComponent } from './connexion.component';

@NgModule({
	imports: [SharedModule],
	exports: [ConnexionComponent],
	declarations: [ConnexionComponent],
	providers: [],
})
export class ConnexionModule { }
