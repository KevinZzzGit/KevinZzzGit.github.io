export * from "./en.js";
import { sidebar } from "vuepress-theme-hope";
import { codeNoteSideBarArr } from "./code-note.js"
import {vueSideBarArr} from "./vue.js"
import { typescriptSideBarArr } from "./typescript.js";
export const zhSidebarConfig = sidebar({
    "/code-note/": codeNoteSideBarArr,
    "/code-note/vue":vueSideBarArr,
    "/code-note/typescript":typescriptSideBarArr
});