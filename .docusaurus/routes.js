
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','5ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','da2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','740'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','708'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','9ec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','870'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','fb1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','931'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','98e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro',
        component: ComponentCreator('/intro','283'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations','4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post','93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document','58e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page','e6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site','317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features','04e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/test/',
        component: ComponentCreator('/tutorial-basics/test/','42b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/test/index copy',
        component: ComponentCreator('/tutorial-basics/test/index copy','c57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/test/result',
        component: ComponentCreator('/tutorial-basics/test/result','c8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions','975'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site','ac7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
