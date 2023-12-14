import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/geiger01/lecturekit-docs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/geiger01/lecturekit-docs',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Documentation | LectureKit" />
      <meta property="og:description" content="Learn how to leverage all the powerful features of LectureKit." />
      <meta property="og:image" content="https://lecturekit-assets.s3.amazonaws.com/og-ce7afca2-8b30-44c0-a04c-3bc9e3d0b0d2.png"></meta>
      <link rel="icon" type="image/png" href="/favicon.ico"></link>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Documentation - LectureKit',
      openGraph: {
        title: 'Documentation | LectureKit - API-Driven Platform for Creating & Managing Online Courses.',
        description: 'A powerful LMS tool for developers used to create and manage beautiful eLearning courses.',
        images: [{ url: 'https://lecturekit-assets.s3.amazonaws.com/og-ce7afca2-8b30-44c0-a04c-3bc9e3d0b0d2.png', width: 1200, height: 630 }]
      },
    };
  },
  footer: {
    text: 'LectureKit Docs',
  },
};

export default config;
