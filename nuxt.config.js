import theme from "@nuxt/content-theme-docs";

export default theme({
  target: 'static',
  docs: {
    primaryColor: '#79eea6'
  },
  tailwindcss: {
    configPath: '~~/tailwind.config.js',
  },
  head: {
    title: "Build Trading Algorithms with Blankly | Documentation",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Blankly makes it extremely easy for you to build and deploy your models at scale, allowing you to write your code once and run it on any exchange. Check out our docs for more examples.'
      },
      {
        hid: 'url',
        name: 'url',
        content: 'https://docs.blankly.finance',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Build Quant Models with Blankly | Documentation',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://docs.blankly.finance/preview.png',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Blankly makes it extremely easy for you to build and deploy your models at scale, allowing you to write your code once and run it on any exchange. Check out our docs for more examples.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      { rel: 'stylesheet', href: '/container.css'}
    ],
    script: [
      {
        src: "/__/firebase/8.6.8/firebase-app.js",
        body: true,
      },
      {
        src: "/__/firebase/8.6.8/firebase-analytics.js",
        body: true,
      },
      {
        src: "/__/firebase/init.js",
        body: true,
      },
      {
        src: "/analytics_init.js",
        body: true,
      },
    ]
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://slate.docs.blankly.finance'
  },
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        ['rehype-katex', { output: 'html' }]
      ]
    }
  }
})
