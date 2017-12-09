
export class AppFile {

	public name: string;
	public extension: string;
	public size: number;
	public path: string;
	public creationDate: Date;

	public get fullname() {
		return this.name + "." + this.extension;
	}

	public get fullSize() {
		return this.path + this.fullname;
	}

	constructor(name: string = "", extension: string = "", size: number = 0, path: string = "") {
		this.name = name;
		this.extension = extension;
		this.size = size;
		this.path = path;
		this.creationDate = new Date("1/11/2017");
	}

}
