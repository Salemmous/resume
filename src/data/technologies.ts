import type { ITechnology } from '../models/technology';

export const TECHNOLOGIES: ITechnology[] = [
	{
		uid: 'js',
		name: 'JavaScript',
		description: `The language I use the most. I have been using it for both front end and back end.
        It is one of the languages I am most proficient in. I feel at ease doing almost anything with it.`,
		level: 5
	},
	{
		uid: 'ts',
		name: 'TypeScript',
		description: `When using JavaScript, if possible, I always go through TypeScript first and then
        transpile it. I have been using it for both front end and back end.`,
		level: 5
	},
	{
		uid: 'dart',
		name: 'Dart',
		description: `At first when I saw that Flutter used Dart, an obscure language, I did not understand why.
        After using it however, I quickly understood why and started loving. Its powerful syntax allow me
        to code safely and efficiently. I love it.`,
		level: 5
	},
	{
		uid: 'kotlin',
		name: 'Kotlin',
		description: `When starting a new Android native project, I will always choose Kotlin over Java.
        The language manages to offer null safety and productivity.`,
		level: 4
	},
	{
		uid: 'swift',
		name: 'Swift',
		description: `I have already developed native plugins for Flutter. Native plugins require native code.
        I have also fiddled with SwiftUI. It was very easy to pick up, as it reminds Flutter a lot.`,
		level: 2
	},
	{
		uid: 'java',
		name: 'Java',
		description: `I mainly used it for Android development, but I also worked on back-end projects featuring Spring Boot.`,
		level: 3
	},
	{
		uid: 'csharp',
		name: 'C#',
		description: `I mostly used C# coupled with Unity, but I also developed Windows applications with it. MonoEngine is also familiar.`,
		level: 2
	},
	{
		uid: 'rust',
		name: 'Rust',
		description: `I have not done a lot with Rust yet, but it is a language that seems very promising.
        I used it in a small personal project where I created a parser and a lexer.`,
		level: 2
	},
	{
		uid: 'golang',
		name: 'Go',
		description: `I have not done a lot with Go yet. I fiddled with gioui.org as it seemed promising (cross-platform development).`,
		level: 1
	},
	{
		uid: 'python',
		name: 'Python',
		description: `Python is quite familiar. Having studied Computational Linguistics, Python is the choice for Natural Language Processing
        and Machine learning.`,
		level: 4
	},
	{
		uid: 'cplusplus',
		name: 'C++',
		description: `When I was 12, I wanted to make Pokemon games. I then decided to learn C and C++. For quite some years, it was my main
        programming language.`,
		level: 3
	},
	{
		uid: 'unity',
		name: 'Unity',
		description: `I have always loved the idea of making video games, but unfortunately, I do not have the time to make one myself.`,
		level: 2
	},
	{
		uid: 'godot',
		name: 'Godot',
		description: `I have always loved the idea of making video games, but unfortunately, I do not have the time to make one myself.`,
		level: 2
	},
	{
		uid: 'neo4j',
		name: 'Neo4j',
		description: `I love databases, especially Graph Databases. Neo4j is a Graph Database with a huge community and powerful tools.
        Its performances make it possible for the app Frend to suggest new users they could get along with. I also used it in Natural Language Processing.`,
		level: 4
	},
	{
		uid: 'mongodb',
		name: 'MongoDB',
		level: 4
	},
	{
		uid: 'dynamodb',
		name: 'DynamoDB',
		level: 4
	},
	{
		uid: 'firestore',
		name: 'Firestore',
		level: 5
	},
	{
		uid: 'firebase',
		name: 'Firebase',
		level: 5
	},
	{
		uid: 'gcp',
		name: 'GCP',
		level: 4,
		certificate: {
			image: '/gcp_certified.png',
			link: 'https://www.credential.net/6efa54ec-b4b9-42b9-995b-76b2e42836a1'
		},
		description: `Almost all of my personal projects are made on GCP. I have been using it foor some years now.`
	},
	{
		uid: 'aws',
		name: 'AWS',
		level: 4,
		description: `AWS is far from being new to me. I have already used many of its services for various purposes.
		These include machine learning, ETL pipelines, IoT data streams, API hosting, database hosting, and more.`
	},
	{
		uid: 'azure',
		name: 'Azure',
		level: 2,
		descriptioon: `Azure is a must when working for companies in Finland. I have used it in work projects as well
		as in side projects.`
	},
	{
		uid: 'flutter',
		name: 'Flutter',
		level: 5,
		description: `Flutter is surely one of the technologies I love the most. I started using it early 2018.
		When I have to make a mobile app, this is my first choice.
		`
	},
	{
		uid: 'svelte',
		name: 'Svelte',
		level: 5,
		description: `All of my side projects are now made with Svelte.
		It is so fast and I feel a lot more productive in it.
		`
	},
	{
		uid: 'react',
		name: 'React',
		level: 5
	},
	{
		uid: 'react-native',
		name: 'React Native',
		level: 3
	},
	{
		uid: 'vue',
		name: 'Vue',
		level: 3
	},
	{
		uid: 'angular',
		name: 'Angular',
		level: 2
	},
	{
		uid: 'kubernetes',
		name: 'Kubernetes',
		level: 5
	}
].sort((a, b) => a.name.localeCompare(b.name));

export const TECHNOLOGY_MAP: { [uid: string]: ITechnology } = TECHNOLOGIES.reduce((acc, cur) => {
	acc[cur.uid] = cur;
	return acc;
}, {});
