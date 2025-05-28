export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://www.juicy.ag', // TODO: Update this if using a different domain
    title: 'Juicy Blog',
    subtitle: 'Insights on Solana LP Strategies & DeFi',
    description: 'Learn about maximizing Solana LP rewards, avoiding rugpulls, and advanced DeFi strategies with Juicy - your automated LP bot',
    image: {
        src: '/blog/juicy-blog-preview.jpg',
        alt: 'Juicy Blog - Solana LP Strategies'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/blog/'
        },
        {
            text: 'All Posts',
            href: '/blog/blog'
        },
        {
            text: 'Tags',
            href: '/blog/tags'
        },
        {
            text: 'Back to Juicy.ag',
            href: '/'
        }
    ],
    footerNavLinks: [
        {
            text: 'RSS Feed',
            href: '/blog/rss.xml'
        },
        {
            text: 'Juicy App',
            href: '/'
        }
    ],
    socialLinks: [
        {
            text: 'Twitter',
            href: 'https://twitter.com/juicy_ag'
        },
        {
            text: 'Discord',
            href: 'https://discord.gg/juicy'
        }
    ],
    hero: {
        title: 'Welcome to Juicy Blog',
        text: "Master Solana LP strategies, avoid rugpulls, and maximize your DeFi yields. Get insights from the team behind Juicy - the automated LP bot that helps you trade smarter on Solana.",
        image: {
            src: '/blog/hero-juicy.jpg',
            alt: 'Juicy LP Bot'
        },
        actions: [
            {
                text: 'Read Latest Posts',
                href: '/blog/blog'
            },
            {
                text: 'Try Juicy Bot',
                href: '/'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Juicy Updates',
        text: 'Get the latest LP strategies and DeFi insights delivered to your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
