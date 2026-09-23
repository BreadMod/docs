import { defineConfig } from 'vitepress'
import browserslistToEsbuild from 'browserslist-to-esbuild';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "BreadMod Documentation",
  description: "The official documentation for BreadMod.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  vite: {
    build: {
      target: browserslistToEsbuild()
    }
  },
  lastUpdated: true,
  
  sitemap: {
    hostname: 'https://example.com'
  }
})
