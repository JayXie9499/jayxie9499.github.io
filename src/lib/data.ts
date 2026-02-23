export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface Education {
	degree?: string;
	institution: string;
	location: string;
	period: string;
}

export interface Skill {
	name: string;
	icon: string;
}

export interface SkillCategory {
	category: string;
	skills: Skill[];
}

export interface SkillIconCredit {
	skillName: string;
	icon: string;
	sourceName: string;
	sourceUrl?: string;
	license: string;
	licenseUrl?: string;
	modified?: boolean;
	note?: string;
}

export interface NavigationLink {
	id: string;
	label: string;
	href: string;
}

export interface Certificate {
	name: string;
	issuer: string;
	date: string;
	credentialUrl?: string;
}

export type ProjectType = 'all';

export interface Project {
	id: string;
	title: string;
	description: string;
	type: ProjectType[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export interface ResumeData {
	name: string;
	title: string;
	location: string;
	email: string;
	about: string[];
}

export const resume: ResumeData = {
	name: '謝孟哲',
	title: '全端工程師',
	location: '台灣・新竹',
	email: 'contact@hsieh-dev.us.ci',
	about: [
		'我是 謝孟哲，你可以叫我 阿哲 或 Jay！',
		'我是一名對開發充滿熱情的學生，有 4 年全端開發經驗，熟悉 Node.js、Svelte 與 TypeScript。',
		'目前持續精進中，也歡迎任何交流與合作機會！'
	]
};

export const socialLinks: SocialLink[] = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/jayxie9499/',
		icon: 'facebook'
	},
	{
		name: 'Discord',
		url: 'https://discordapp.com/users/263613963034427392',
		icon: 'discord'
	},
	{
		name: 'GitHub',
		url: 'https://github.com/JayXie9499',
		icon: 'github'
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/mengche0220',
		icon: 'linkedin'
	}
];

export const education: Education[] = [
	{
		institution: '國立雲林科技大學',
		location: '雲林縣斗六市大學路三段123號',
		period: '2024 - NOW'
	},
	{
		institution: '國立新竹高級工業職業學校',
		location: '新竹市東區中華路二段2號',
		period: '2021 - 2024'
	},
	{
		institution: '新竹市立光華國民中學',
		location: '新竹市北區光華北街10號',
		period: '2018 - 2021'
	},
	{
		institution: '新竹市北區北門國民小學',
		location: '新竹市北區水田街33號',
		period: '2012 - 2018'
	}
];

export const skillCategories: SkillCategory[] = [
	{
		category: '前端開發',
		skills: [
			{ name: 'HTML', icon: 'html5' },
			{ name: 'CSS', icon: 'css' },
			{ name: 'JavaScript', icon: 'javascript' },
			{ name: 'TypeScript', icon: 'typescript' },
			{ name: 'Svelte', icon: 'svelte' },
			{ name: 'Vue.js', icon: 'vuedotjs' },
			{ name: 'Tailwind CSS', icon: 'tailwindcss' },
			{ name: 'Flutter', icon: 'flutter' }
		]
	},
	{
		category: '後端開發',
		skills: [
			{ name: 'Node.js', icon: 'nodedotjs' },
			{ name: 'Python', icon: 'python' },
			{ name: 'Express', icon: 'express' },
			{ name: 'FastAPI', icon: 'fastapi' },
			{ name: 'REST', icon: 'rest' },
			{ name: 'GraphQL', icon: 'graphql' }
		]
	},
	{
		category: '資料管理',
		skills: [
			{ name: 'PostgreSQL', icon: 'postgresql' },
			{ name: 'Redis', icon: 'redis' },
			{ name: 'MongoDB', icon: 'mongodb' },
			{ name: 'SQLite', icon: 'sqlite' }
		]
	},
	{
		category: '網路與伺服器',
		skills: [
			{ name: 'Docker', icon: 'docker' },
			{ name: 'GitHub Actions', icon: 'githubactions' },
			{ name: 'AWS', icon: 'aws' },
			{ name: 'GCP', icon: 'googlecloud' },
			{ name: 'Railway', icon: 'railway' },
			{ name: 'Cloudflare', icon: 'cloudflare' }
		]
	}
];

export const skillIconCredits: SkillIconCredit[] = [
	{
		skillName: 'HTML',
		icon: 'html5',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/html5.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'CSS',
		icon: 'css',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/css.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'JavaScript',
		icon: 'javascript',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/javascript.svg',
		license: 'MIT',
		licenseUrl: 'https://spdx.org/licenses/MIT',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'TypeScript',
		icon: 'typescript',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/typescript.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Svelte',
		icon: 'svelte',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/svelte.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Vue.js',
		icon: 'vuedotjs',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/vuedotjs.svg',
		license: 'CC-BY-NC-SA-4.0',
		licenseUrl: 'https://spdx.org/licenses/CC-BY-NC-SA-4.0',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Tailwind CSS',
		icon: 'tailwindcss',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/tailwindcss.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Flutter',
		icon: 'flutter',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/flutter.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Node.js',
		icon: 'nodedotjs',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/nodedotjs.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Python',
		icon: 'python',
		sourceName: 'Python.org',
		sourceUrl: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Express',
		icon: 'express',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/express.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'FastAPI',
		icon: 'fastapi',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/fastapi.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'REST',
		icon: 'rest',
		sourceName: 'Project custom icon',
		license: 'Proprietary (this project)',
		note: 'Drawn and maintained in this repository.'
	},
	{
		skillName: 'GraphQL',
		icon: 'graphql',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/graphql.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'PostgreSQL',
		icon: 'postgresql',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/postgresql.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Redis',
		icon: 'redis',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/redis.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'MongoDB',
		icon: 'mongodb',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/mongodb.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'SQLite',
		icon: 'sqlite',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/sqlite.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Docker',
		icon: 'docker',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/docker.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'GitHub Actions',
		icon: 'githubactions',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/githubactions.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'AWS',
		icon: 'aws',
		sourceName: 'Wikimedia Commons (source: Amazon)',
		sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_Logo.svg',
		license: 'Apache License 2.0',
		licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0',
		note: 'Copyright Amazon Web Services; trademark usage still follows AWS trademark guidelines.'
	},
	{
		skillName: 'GCP',
		icon: 'googlecloud',
		sourceName: 'Wikimedia Commons',
		sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
		license: 'CC0 1.0 Universal',
		modified: true,
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Modified for text removal. Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Railway',
		icon: 'railway',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/railway.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		skillName: 'Cloudflare',
		icon: 'cloudflare',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/cloudflare.svg',
		license: 'CC0 1.0 Universal',
		licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
		note: 'Brand names and trademarks belong to their respective owners.'
	}
];

export const projects: Project[] = [
	{
		id: '1',
		title: 'Daily Quote Generator',
		description:
			'A simple web app that displays a random daily quote, built with HTML, CSS, and JavaScript.',
		type: [],
		technologies: ['HTML', 'CSS', 'JavaScript'],
		githubUrl: 'https://github.com/JayXie9499/daily-quote-generator',
		liveUrl: '/daily-quote-generator'
	},
	{
		id: '2',
		title: 'Password Strength Checker',
		description:
			'A password strength checker that evaluates passwords based on length, character diversity, and common patterns, providing feedback and suggestions.',
		type: [],
		technologies: ['Python'],
		githubUrl: 'https://github.com/JayXie9499/password-strength-checker',
		liveUrl: '/password-strength-checker'
	},
	{
		id: '3',
		title: 'Pomodoro Timer',
		description:
			'A simple Pomodoro timer built with Vue 3. Supports custom intervals, plays a ringtone at phase transitions, and allows volume adjustment.',
		type: [],
		technologies: ['Vue.js'],
		githubUrl: 'https://github.com/JayXie9499/pomodoro-timer',
		liveUrl: '/pomodoro-timer'
	}
];

export const certificates: Certificate[] = [
	{
		name: 'TOEIC Gold (885)',
		issuer: 'ETS',
		date: '2023',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/toeic-2023.webp'
	},
	{
		name: '工業電子丙級',
		issuer: '中華民國勞動部',
		date: '2023',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/industrial-electronics-c.webp'
	},
	{
		name: '工業配線丙級',
		issuer: '中華民國勞動部',
		date: '2022',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/industrial-wiring-c.webp'
	},
	{
		name: 'GEPT 中級',
		issuer: 'LTTC',
		date: '2019',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/gept-intermediate.webp'
	},
	{
		name: 'GEPT 初級',
		issuer: 'LTTC',
		date: '2018',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/gept-elementary.webp'
	}
];

export const navLinks: NavigationLink[] = [
	{ id: 'about', label: '關於', href: '#about' },
	{ id: 'certificates', label: '證照', href: '#certificates' },
	{ id: 'skills', label: '技能', href: '#skills' },
	{ id: 'portfolio', label: '作品', href: '#portfolio' }
];

export const typingStrings = [
	'你好，我是謝孟哲。',
	'我是一名全端工程師。',
	"Hi, I'm Meng Che.",
	"I'm a Fullstack Developer."
];

export const projectFilters: { label: string; type: ProjectType }[] = [
	{ label: '全部', type: 'all' }
];
