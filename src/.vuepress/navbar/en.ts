import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  // "/demo/",
  {
    text: "Code Note",
    icon: "pen-to-square",
    prefix: "/en/posts/",
    children: [
      {
        text: "Front End",
        icon: "pen-to-square",
        children: [
          { text: "Vue", icon: "pen-to-square", link: "vue" },
          { text: "React", icon: "pen-to-square", link: "react" }
        ],
      },
      {
        text: "Back End",
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
        text: "Hybrid",
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
        ]
      },
      {
        text: "O & M",
        icon: "pen-to-square",
        prefix: "dragonfruit/",
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
