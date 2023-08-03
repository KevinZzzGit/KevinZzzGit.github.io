import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // "/zh/demo/",
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/code-note/",
    children: [
      {
        text: "前端",
        icon: "pen-to-square",
        
        children: [
          { text: "Vue", icon: "vue", link: "vue/" },
          { text: "React", icon: "react", link: "react" }
        ],
      },
      {
        text: "后端",
        icon: "pen-to-square",
        children: [
          {
            text: "Node",
            icon: "nodeJS",
            link: "node",
          },
          {
            text: "Go",
            icon: "Go",
            link: "go",
          },
          {
            text: "Python",
            icon: "Python",
            link: "python",
          },
        ],
      },
      {
        text: "混合开发",
        icon: "pen-to-square",
        children: [
          {
            text: "Flutter",
            icon: "flutter",
            link: "flutter",
          },
          {
            text: "UniApp",
            icon: "uniapp",
            link: "uniapp",
          },
          {
            text: "Electron",
            icon: "electron",
            link: "electron",
          }
        ],
      },
      {
        text: "运维",
        icon: "pen-to-square",
        children: [
          {
            text: "Ngnix",
            icon: "ngnix",
            link: "ngnix",
          },
          {
            text: "Docker",
            icon: "docker",
            link: "docker",
          }
        ],
      },
    ],
  },
]);
