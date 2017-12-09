import { NgModule } from '@angular/core';

import { FtpComponent } from './ftp.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [SharedModule],
	exports: [FtpComponent],
	declarations: [FtpComponent],
	providers: [],
})
export class FtpModule { }
