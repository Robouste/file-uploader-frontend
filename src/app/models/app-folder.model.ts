import { AppFile } from "./app-file.model";

export class AppFolder {

	public name: string;
	public path: string;
	public subFolders: AppFolder[];
	public subFiles: AppFile[];

	public get fullPath() {
		return this.path + this.name;
	}
}
