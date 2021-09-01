const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CrowdSec',
  tagline: 'CrowdSec, the open-source & participative IPS.',
  url: 'https://crowdsec.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CrowdSec',
  projectName: 'crowdsec-docs',
  themeConfig: {
    navbar: {
      items: [

      ],
    },
    navbar: {
      title: 'Crowdsec',
      logo: {
        alt: 'My Site Logo',
        src: 'img/crowdsec_logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'CrowdSec',
        },
        {
          type: 'doc',
          docId: 'cscli/cscli',
          position: 'left',
          label: 'Cscli',
        },
        {
          type: 'doc',
          docId: 'bouncers/intro',
          position: 'left',
          label: 'Bouncers',
        },
        {to: '/blog', label: 'Tutorials', position: 'left'},
        {
          type: 'doc',
          docId: 'faq',
          position: 'right',
          label: 'FAQ',
        },
        {
          href: 'https://github.com/crowdsecurity/crowdsec',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://gitter.im/crowdsec-project/community',
          label: 'Gitter',
          position: 'right',
        },
        {
          href: 'https://discourse.crowdsec.net',
          label: 'Discourse',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/tutorials',
            },
            {
              label: 'Documentation',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discourse',
              href: 'https://discourse.crowdsec.net/',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/crowdsec-project/community',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/crowd_security',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://crowdsec.net/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/crowdsecurity/crowdsec',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/crowdsecurity/crowdsec-docs/edit/doc_refactor/crowdsec-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/crowdsecurity/crowdsec-docs/edit/doc_refactor/crowdsec-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
