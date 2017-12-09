import { Component, OnInit, Input } from '@angular/core';
import { AppFolder } from '../../models/app-folder.model';

@Component({
	selector: 'app-tree-view',
	templateUrl: 'tree-view.component.html',
	styleUrls: ['tree-view.component.scss']
})

export class TreeViewComponent implements OnInit {

	@Input() content: AppFolder;
	public currentFolder: AppFolder;
	public hasParentFolder = false;

	constructor() { }

	ngOnInit() {
		this.currentFolder = { ...this.content };
	}

	openFolder(folder: AppFolder) {
		this.currentFolder = folder;
		this.hasParentFolder = true;
	}

	goToParentFolder() {
		this.currentFolder = this.currentFolder.parent;
		this.hasParentFolder = this.currentFolder.parent !== null;
	}
}