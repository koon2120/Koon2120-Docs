import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Koon2120 Docs",
  description:
    "koon2120 documentation | learn a web developer, game developer and more...",
  lang: "th",
  cleanUrls: true,
  srcDir: "src",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "หน้าหลัก", link: "/" },
      { text: "เกี่ยวกับ", link: "what-is" },
    ],

    sidebar: {
      "/": {
        text: "เริ่มต้น",
        base: "/",
        items: [
          { text: "Koon2120 Docs คืออะไร..?", link: "what-is" },
          { text: "วิธีการเรียนเบื้องต้น", link: "how-to-learn" },
          {
            text: "เนื้อหาทั้งหมด",
            items: [
              { text: "HTML 101 (เร็วๆ นี้)" },
              { text: "CSS 101 (เร็วๆ นี้)" },
              { text: "JSON 101 (เร็วๆ นี้)" },
              { text: "Python 101", link: "python" },
              { text: "C Sharp 101 (เร็วๆ นี้)" },
              { text: "Javascript 101 (เร็วๆ นี้)" },
              { text: "Typescript 101 (เร็วๆ นี้)" },
              { text: "Game Creator 101 (เร็วๆ นี้)" },
              { text: "GameMaker 101 (เร็วๆ นี้)" },
              { text: "Google Firebase 101 (เร็วๆ นี้)" },
              { text: "Unity Engine 101 (เร็วๆ นี้)" },
              { text: "Pixel Art 101 (เร็วๆ นี้)" },
              { text: "PyGame 101 (เร็วๆ นี้)" },
              { text: "Ren'py 101 (เร็วๆ นี้)" },
              { text: "Git & Github 101 (เร็วๆ นี้)" },
              { text: "Vue & Nuxt 101 (เร็วๆ นี้)" },
              { text: "React & Next 101 (เร็วๆ นี้)" },
              { text: "Express 101 (เร็วๆ นี้)" },
              { text: "Elysia 101 (เร็วๆ นี้)" },
              { text: "API 101 (เร็วๆ นี้)" },
              { text: "WebSocket 101 (เร็วๆ นี้)" },
              { text: "Tailwind css 101 (เร็วๆ นี้)" },
              { text: "SQL 101 (เร็วๆ นี้)" },
              { text: "Vitepress 101 (เร็วๆ นี้)" },
            ],
          },
        ],
      },
      "/python/": {
        text: "Python",
        base: "/python/",
        items: [
          { text: "ทำความรู้จักกับ Python", link: "what-is" },
          { text: "วิธีติดตั้ง Python", link: "installation" },
          {
            text: "เนื้อหา A",
            collapsed: true,
            items: [
              { text: "ทดสอบ 1", link: "test1" },
              { text: "ทดสอบ 2", link: "test2" },
              { text: "ทดสอบ 3", link: "test3" },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/koon2120/Koon2120-Docs" },
    ],
  },
});
