import { NgModule } from '@angular/core';

import { FtpComponent } from './ftp.component';
import { SharedModule } from '../shared/shared.module';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeViewToolbarComponent } from './tree-view/tree-view-toolbar.component';

@NgModule({
	imports: [SharedModule],
	exports: [FtpComponent],
	declarations: [FtpComponent, TreeViewComponent, TreeViewToolbarComponent],
	providers: [],
})
export class FtpModule { }
