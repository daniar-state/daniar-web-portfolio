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
				reallink: 'https://devdocs.io/javascript/',
			},
			{
				stack: 'React JS',
				icon: FaReact,
				reallink: 'https://react.dev/',
			},
			{
				stack: 'Angular JS',
				icon: FaAngular,
				reallink: 'https://angular.io/',
			},
			{
				stack: 'tailwindCSS',
				icon: SiTailwindcss,
				reallink: 'https://tailwindcss.com/',
			},
			{
				stack: 'HTML5',
				icon: FaHtml5,
				reallink: 'https://html5book.ru/html-html5/',
			},
			{
				stack: 'CSS3',
				icon: DiCss3,
				reallink: 'https://html5book.ru/css-css3/',
			},
			{
				stack: 'Vite',
				icon: SiVitest,
				reallink: 'https://vitejs.dev/',
			},
			{
				stack: 'Bootstrap',
				icon: DiBootstrap,
				reallink: 'https://getbootstrap.com/',
			},
		],
	},
	backend: {
		title: 'Backend',
		stacks: [
			{
				stack: 'Node.Js',
				icon: FaNodeJs,
				reallink: 'https://nodejs.org/en',
			},
			{
				stack: 'Express.Js',
				icon: SiExpress,
				reallink: 'https://expressjs.com/ru/starter/installing.html',
			},
			{
				stack: 'Python',
				icon: DiPython,
				reallink: 'https://www.python.org/',
			},
			{
				stack: 'Flask',
				icon: SiFlask,
				reallink: 'https://flask.palletsprojects.com/en/3.0.x/',
			},
			{
				stack: 'FastAPI',
				icon: SiFastapi,
				reallink: 'https://fastapi.tiangolo.com/',
			},
			{
				stack: 'PHP',
				icon: FaPhp,
				reallink: 'https://www.php.net/',
			},
			{
				stack: 'Dart',
				icon: DiDart,
				reallink: 'https://dart.dev/',
			},
		],
	},
	cms: {
		title: 'CMS | CRM',
		stacks: [
			{
				stack: 'WordPress',
				icon: DiWordpress,
				reallink: 'https://wordpress.com/ru/',
			},
			{
				stack: 'Joomla',
				icon: FaJoomla,
				reallink: 'https://www.joomla.org/',
			},
			{
				stack: 'Django',
				icon: SiDjango,
				reallink: 'https://www.djangoproject.com/',
			},
		],
	},
	database: {
		title: 'Базы данных',
		stacks: [
			{
				stack: 'PostgreSQL',
				icon: SiPostgresql,
				reallink: 'https://www.postgresql.org/',
			},
			{
				stack: 'MongoDB',
				icon: SiMongodb,
				reallink: 'https://www.mongodb.com/',
			},
			{
				stack: 'SQLite',
				icon: DiSqllite,
				reallink: 'https://www.sqlite.org/index.html',
			},
			{
				stack: 'MySQL',
				icon: DiMysql,
				reallink: 'https://www.mysql.com/',
			},
			{
				stack: 'Firebase',
				icon: SiFirebase,
				reallink: 'https://firebase.google.com/',
			},
		],
	},
	platforms: {
		title: 'Платформы',
		stacks: [
			{
				stack: 'Heroku',
				icon: DiHeroku,
				reallink: 'https://www.heroku.com/',
			},
			{
				stack: 'Netlify',
				icon: SiNetlify,
				reallink: 'https://www.netlify.com/',
			},
			{
				stack: 'Vercel',
				icon: SiVercel,
				reallink: 'https://vercel.com/',
			},
			{
				stack: 'Digital Ocean',
				icon: SiDigitalocean,
				reallink: 'https://www.digitalocean.com/',
			},
			{
				stack: 'AWS',
				icon: FaAws,
				reallink: 'https://aws.amazon.com/ru/',
			},
			{
				stack: 'GitHub',
				icon: FaGithub,
				reallink: 'https://github.com/',
			},
			{
				stack: 'Git',
				icon: FaGit,
				reallink: 'https://git-scm.com/',
			},
		],
	},
	others: {
		title: 'Другое...',
		stacks: [
			{
				stack: 'CodeIgniter',
				icon: DiCodeigniter,
				reallink: 'https://codeigniter.com/',
			},
			{
				stack: 'Docker',
				icon: DiDocker,
				reallink: 'https://www.docker.com/',
			},
			{
				stack: 'Google Drive',
				icon: DiGoogleDrive,
				reallink: 'https://www.google.com/intl/ru/drive/',
			},
			{
				stack: 'Laravel',
				icon: DiLaravel,
				reallink: 'https://laravel.com/',
			},
			{
				stack: 'CLI | Terminal',
				icon: DiTerminal,
				reallink: '#',
			},
			{
				stack: 'Unity 3D',
				icon: DiUnitySmall,
				reallink: 'https://unity.com/ru',
			},
			{
				stack: 'Linux',
				icon: DiUbuntu,
				reallink: 'https://www.linux.org/',
			},
		],
	},
}
