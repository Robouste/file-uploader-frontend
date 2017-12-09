import { AppFile } from "./app-file.model";

export class AppFolder {

	public name: string;
	public path: string;
	public subFolders: Array<AppFolder>;
	public subFiles: Array<AppFile>;
	public creationDate: Date;
	public parent: AppFolder;

	public get fullPath() {
		return this.path + this.name;
	}

	constructor(name: string, folders: Array<AppFolder> = [], files: Array<AppFile> = [], parent: AppFolder = null) {
		this.name = name;
		this.subFolders = folders;
		this.subFiles = files;
		this.creationDate = new Date('1/1/16');
		this.parent = parent;
	}
}
