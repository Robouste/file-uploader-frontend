
export class AppFile {

	public name: string;
	public extension: string;
	public size: number;
	public path: string;

	public get fullname() {
		return this.name + "." + this.extension;
	}

	public get fullSize() {
		return this.path + this.fullname;
	}

}
