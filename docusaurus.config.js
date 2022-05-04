// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blankly Slate',
  tagline: 'Build and deploy trading algorithms in minutes instead of months',
  url: 'https://blankly.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'blankly-finance',
  projectName: 'slate-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/blankly-finance/slate-docs',
        },
        blog: false,
        gtag: {
          trackingID: '3543131248',
          anonymizeIP: true,
        }
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Slate Docs',
        logo: {
          alt: 'Blankly Logo',
          src: 'img/logo.svg',
          srcDark: 'img/blankly-white.svg',
        },
        items: [
          
          {to: '/examples/MACD', label: 'Examples', position: 'left'},
          {to: '/integrations/backtestingpy', label: 'Integrations', position: 'left'},
          {href: 'https://app.blankly.finance', label: 'Platform', position: 'left'},
          {href: 'https://package.blankly.finance', label: 'Package Docs', position: 'left'},
          {href: 'https://blankly.finance', label: 'Main Website', position: 'right'},
          {
            href: 'https://github.com/blankly-finance/slate-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xJAjGEAXNS',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/blanklyfinance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blankly.finance/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/blankly-finance/slate-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blankly Finance, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
