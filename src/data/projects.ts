import type { IProject } from '../models/project';

export const PROJECTS: IProject[] = [
	{
		uid: 'frend',
		name: 'Frend',
		dateRange: 'Nov 2019 - now',
		link: 'http://frendapp.net/',
		description: 'Social media where users get to meet each other based on their communities.',
		longDescription: `Frend is a social media where users get to meet each other based on the communities they join.
			I started it as a service to find friends to party with at the University of Helsinki, then a friend
			joined me in the project and we expanded. It is a project I am proud of, because it requires almost no
			maintenance and the costs are very low.`,
		technologies: [
			'svelte',
			'dart',
			'gcp',
			'firebase',
			'flutter',
			'dart',
			'neo4j',
			'firestore',
			'js',
			'ts'
		].sort()
	},
	{
		uid: 'sideways',
		name: 'CGIxSideways 2019',
		dateRange: 'May - June 2019',
		description: 'Mobile app for the Sideways festival.',
		longDescription: `The Sideways festival in Helsinki gave the visitors the possibility to download an app where
            they can see the schedule of their favorite artists. I was the lead developer in that project
            due to my expertise in Flutter and mobile development. The main challenge was the short time
            we had, but we managed to build an app that thousands of visitors would use.`
	},
	{
		uid: 'cgi',
		name: 'CGI',
		dateRange: 'October 2018 - now',
		description: 'Senior Software Developer and Cloud Architect',
		longDescription: `I started at CGI in 2018 as a trainee. However thanks to the faith CGI put in me and my
        then 9-year background in programming, I am now considered as a Senior developer. I have had the opportunity
        to get familiar with many diverse and various technology stack. This regroups many projects, which I will not list
        because of my NDA.`,
		technologies: [
			'svelte',
			'dart',
			'gcp',
			'firebase',
			'firestore',
			'js',
			'ts',
			'react',
			'flutter',
			'dart',
			'kotlin',
			'swift',
			'java',
			'csharp',
			'python',
			'mongodb',
			'dynamodb',
			'aws',
			'azure',
			'react-native',
			'vue',
			'angular',
			'kubernetes'
		].sort()
	},
	{
		uid: 'euneos',
		name: 'Euneos',
		dateRange: 'September 2017 - now',
		description: 'Digital Development Officer',
		longDescription: `I started making tools for Euneos so that the administrative tasks could be
        achieved more accurately and more quickly. This goes from school email retrieval to
        automatic billing of customers.`,
		technologies: ['svelte', 'dart', 'gcp', 'firebase', 'firestore', 'js', 'ts', 'react'].sort()
	}
];

export const PROJECT_MAP: { [uid: string]: IProject } = PROJECTS.reduce((acc, cur) => {
	acc[cur.uid] = cur;
	return acc;
}, {});
