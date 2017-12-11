import { Component, OnInit } from '@angular/core';
import { FtpService } from '../services/ftp.service';

@Component({
	selector: 'app-connexion',
	templateUrl: 'connexion.component.html',
	styleUrls: ["connexion.component.scss"]
})

export class ConnexionComponent implements OnInit {

	public test: any;

	constructor(private ftpService: FtpService) { }

	ngOnInit() {
		this.ftpService.getValues()
			.subscribe(result => {
				console.log(result);
			});
	}
}
