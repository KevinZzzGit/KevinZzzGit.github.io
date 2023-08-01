import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // "/zh/demo/",
  {
    text: "代码笔记",
    icon: "book",
    prefix: "/code-note/",
    children: [
      {
        text: "前端",
        icon: "pen-to-square",
        
        children: [
          { text: "Vue", icon: "pen-to-square", link: "vue/" },
          { text: "React", icon: "pen-to-square", link: "react" }
        ],
      },
      {
        text: "后端",
        icon: "pen-to-square",
        children: [
          {
            text: "Node",
            icon: "pen-to-square",
            link: "node",
          },
          {
            text: "Go",
            icon: "pen-to-square",
            link: "go",
          },
          {
            text: "Python",
            icon: "pen-to-square",
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
            icon: "pen-to-square",
            link: "flutter",
          },
          {
            text: "UniApp",
            icon: "pen-to-square",
            link: "uniapp",
          },
          {
            text: "Electron",
            icon: "pen-to-square",
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
            icon: "pen-to-square",
            link: "ngnix",
          },
          {
            text: "Docker",
            icon: "pen-to-square",
            link: "docker",
          }
        ],
      },
    ],
  },
]);
