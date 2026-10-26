import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/#services') },
    { text: 'Work', href: getPermalink('/#work') },
    { text: 'Open source', href: getPermalink('/#open-source') },
    { text: 'Process', href: getPermalink('/#process') },
    { text: 'About', href: getPermalink('/#about') },
  ],
  actions: [{ text: 'Hire me', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Services', href: getPermalink('/#services') },
        { text: 'Selected work', href: getPermalink('/#work') },
        { text: 'Open source', href: getPermalink('/#open-source') },
        { text: 'About', href: getPermalink('/#about') },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { text: 'Upwork', href: 'https://www.upwork.com/freelancers/jigarprajapati4' },
        { text: 'LinkedIn', href: 'https://linkedin.com/in/buildaiwith-jigar-prajapati' },
        { text: 'GitHub', href: 'https://github.com/jigar48' },
        { text: 'Buy me a coffee', href: 'https://buymeacoffee.com/buildwithjigar' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/jigar48' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/buildaiwith-jigar-prajapati' },
  ],
  footNote: `
    © 2026 Jigar Prajapati · Ahmedabad, India · Intelligent Automation Solutions
  `,
};
