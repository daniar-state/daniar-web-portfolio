import {
	FaReact,
	FaAngular,
	FaNodeJs,
	FaHtml5,
	FaAws,
	FaGithub,
	FaGit,
	FaPhp,
	FaJoomla,
} from 'react-icons/fa'
import {
	DiBootstrap,
	DiCss3,
	DiWordpress,
	DiPython,
	DiSqllite,
	DiMysql,
	DiHeroku,
	DiCodeigniter,
	DiDart,
	DiDocker,
	DiGoogleDrive,
	DiLaravel,
	DiTerminal,
	DiUnitySmall,
	DiUbuntu,
} from 'react-icons/di'
import {
	SiExpress,
	SiTailwindcss,
	SiJavascript,
	SiPostgresql,
	SiMongodb,
	SiVitest,
	SiFlask,
	SiFastapi,
	SiFirebase,
	SiNetlify,
	SiVercel,
	SiDigitalocean,
	SiDjango,
} from 'react-icons/si'

export const skills = {
	frontend: {
		title: 'Frontend',
		stacks: [
			{
				stack: 'JavaScript',
				icon: SiJavascript,
			},
			{
				stack: 'React JS',
				icon: FaReact,
			},
			{
				stack: 'Angular JS',
				icon: FaAngular,
			},
			{
				stack: 'tailwindCSS',
				icon: SiTailwindcss,
			},
			{
				stack: 'HTML5',
				icon: FaHtml5,
			},
			{
				stack: 'CSS3',
				icon: DiCss3,
			},
			{
				stack: 'Vite',
				icon: SiVitest,
			},
			{
				stack: 'Bootstrap',
				icon: DiBootstrap,
			},
		],
	},
	backend: {
		title: 'Backend',
		stacks: [
			{
				stack: 'Node.Js',
				icon: FaNodeJs,
			},
			{
				stack: 'Express.Js',
				icon: SiExpress,
			},
			{
				stack: 'Python',
				icon: DiPython,
			},
			{
				stack: 'Flask',
				icon: SiFlask,
			},
			{
				stack: 'FastAPI',
				icon: SiFastapi,
			},
			{
				stack: 'PHP',
				icon: FaPhp,
			},
			{
				stack: 'Dart',
				icon: DiDart,
			},
		],
	},
	cms: {
		title: 'CMS | CRM',
		stacks: [
			{
				stack: 'WordPress',
				icon: DiWordpress,
			},
			{
				stack: 'Joomla',
				icon: FaJoomla,
			},
			{
				stack: 'Django',
				icon: SiDjango,
			},
		],
	},
	database: {
		title: 'Базы данных',
		stacks: [
			{
				stack: 'PostgreSQL',
				icon: SiPostgresql,
			},
			{
				stack: 'MongoDB',
				icon: SiMongodb,
			},
			{
				stack: 'SQLite',
				icon: DiSqllite,
			},
			{
				stack: 'MySQL',
				icon: DiMysql,
			},
			{
				stack: 'Firebase',
				icon: SiFirebase,
			},
		],
	},
	platforms: {
		title: 'Платформы',
		stacks: [
			{
				stack: 'Heroku',
				icon: DiHeroku,
			},
			{
				stack: 'Netlify',
				icon: SiNetlify,
			},
			{
				stack: 'Vercel',
				icon: SiVercel,
			},
			{
				stack: 'Digital Ocean',
				icon: SiDigitalocean,
			},
			{
				stack: 'AWS',
				icon: FaAws,
			},
			{
				stack: 'GitHub',
				icon: FaGithub,
			},
			{
				stack: 'Git',
				icon: FaGit,
			},
		],
	},
	others: {
		title: 'Другое...',
		stacks: [
			{
				stack: 'CodeIgniter',
				icon: DiCodeigniter,
			},
			{
				stack: 'Docker',
				icon: DiDocker,
			},
			{
				stack: 'Google Drive',
				icon: DiGoogleDrive,
			},
			{
				stack: 'Laravel',
				icon: DiLaravel,
			},
			{
				stack: 'CLI | Terminal',
				icon: DiTerminal,
			},
			{
				stack: 'Unity 3D',
				icon: DiUnitySmall,
			},
			{
				stack: 'Linux',
				icon: DiUbuntu,
			},
		],
	},
}
