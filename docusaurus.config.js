// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AESOP Manual",
  tagline: "Systems from stories",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  customFields: {
    // Put your custom environment here
    GIT_USER: process.env.GIT_USER,
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/aesop-manual/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "d-lab-aesop", // Usually your GitHub org/user name.
  projectName: "aesop-manual", // Usually your repo name.
  deploymentBranch: "main",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "AESOP Manual",
        logo: {
          alt: "AESOP Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/d-lab-aesop/aesop-manual",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/d-lab-aesop/aesop-manual",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} D-Lab. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
