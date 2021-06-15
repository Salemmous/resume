export interface ICertificate {
	image: string;
	link: string;
}

export interface ITechnology {
	uid: string;
	name: string;
	description?: string;
	level: number;
	certificate?: ICertificate;
}
