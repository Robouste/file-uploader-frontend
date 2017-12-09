import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppFolder } from '../../models/app-folder.model';

@Component({
	selector: 'app-tree-view-toolbar',
	templateUrl: 'tree-view-toolbar.component.html'
})

export class TreeViewToolbarComponent implements OnInit {

	@Input() disableUpFolder = true;
	@Output() parentFolder = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	goToParentFolder() {
		this.parentFolder.emit();
	}
}
