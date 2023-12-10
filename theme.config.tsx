import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'LectureKit Docs',
  },
};

export default config;
