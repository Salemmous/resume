export interface IProject {
	uid: string;
	name: string;
	description: string;
	longDescription?: string;
	dateRange: string;
	link?: string;
	technologies?: string[];
}
