import { Ftp } from '../models/ftp.model';
import { Component, OnInit } from '@angular/core';
import { AppFolder } from '../models/app-folder.model';
import { AppFile } from '../models/app-file.model';

@Component({
	selector: 'app-ftp',
	templateUrl: 'ftp.component.html',
	styleUrls: ['ftp.component.scss']
})

export class FtpComponent implements OnInit {

	public ftp: Ftp;

	constructor() { }

	ngOnInit() {
		this.ftp = new Ftp();
		this.ftp.name = "OVH";
		this.ftp.address = "http://ftp.robouste.be";
		this.ftp.user = "Robouste";

		const content: AppFolder = new AppFolder("root");

		content.subFolders = [
			new AppFolder(
				"wwwroot",
				[
					new AppFolder("subfolder")
				],
				[
					new AppFile("subfiles", "txt", 9456)
				]
			),
			new AppFolder("test")
		];
		content.subFiles = [
			new AppFile("file1", "txt", 4500),
			new AppFile("file2", "pdf", 7598)
		];

		content.setParent();

		this.ftp.content = content;

		console.log(this.ftp);
	}
}
