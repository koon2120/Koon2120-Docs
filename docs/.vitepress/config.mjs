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
      { text: "เนื้อหาทั้งหมด", items: [{ text: "Vue.js", link: "vuejs" }] },
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
            items: [{ text: "Vue.js", link: "vuejs" }],
          },
          {
            text: "เกร็ดความรู้",
            items: [
              { text: "Front-end กับ Back-end ต่างกันยังไง..?", link: "funfact/frontend-and-backend" },
            ],
          },
        ],
      },
      "/vuejs/": {
        text: "Vue.js",
        base: "/vuejs/",
        items: [
          { text: "ทำความรู้จักกับ Vue.js", link: "what-is" },
          { text: "วิธีติดตั้ง Vue.js", link: "installation" },
          {
            text: "บทเรียนพื้นฐาน",
            collapsed: false,
            items: [
              { text: "ทดสอบ 1", link: "test1" },
            ],
          },
          {
            text: "บทเรียนระดับกลาง",
            collapsed: false,
            items: [
              { text: "ทดสอบ 2", link: "test2" },
            ],
          },
          {
            text: "บทเรียนสูง",
            collapsed: false,
            items: [
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
