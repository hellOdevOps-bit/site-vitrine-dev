import {
  SiReact,
  SiJavascript,
  SiCss,
  SiVite,
  SiHtml5,
  SiNodedotjs,
  SiSupabase,
  SiMysql,
  SiPython,
  SiElevenlabs,
  SiOllama,
  SiMetaai,
  SiGithub,
  SiGit,
  SiCursor,
  SiAndroidstudio,
  SiFigma,
  SiVercel,
} from "react-icons/si"
import { TbBrandOpenai, TbBrandLinkedin, TbBrandVscode, TbSql } from "react-icons/tb"

const TECH_ICONS = {
  react: { Icon: SiReact, color: "#61dafb" },
  javascript: { Icon: SiJavascript, color: "#f7df1e" },
  css: { Icon: SiCss, color: "#264de4" },
  vite: { Icon: SiVite, color: "#646cff" },
  html: { Icon: SiHtml5, color: "#e34f26" },
  nodejs: { Icon: SiNodedotjs, color: "#339933" },
  supabase: { Icon: SiSupabase, color: "#3fcf8e" },
  mysql: { Icon: SiMysql, color: "#4479a1" },
  python: { Icon: SiPython, color: "#3776ab" },
  sql: { Icon: TbSql, color: "#00d9a5" },
  openai: { Icon: TbBrandOpenai, color: "#ffffff" },
  llama: { Icon: SiMetaai, color: "#0081fb" },
  elevenlabs: { Icon: SiElevenlabs, color: "#ffffff" },
  ollama: { Icon: SiOllama, color: "#ffffff" },
  linkedin: { Icon: TbBrandLinkedin, color: "#0a66c2" },
  github: { Icon: SiGithub, color: "#ffffff" },
  git: { Icon: SiGit, color: "#f05032" },
  cursor: { Icon: SiCursor, color: "#ffffff" },
  androidstudio: { Icon: SiAndroidstudio, color: "#3ddc84" },
  vscode: { Icon: TbBrandVscode, color: "#007acc" },
  figma: { Icon: SiFigma, color: "#f24e1e" },
  vercel: { Icon: SiVercel, color: "#ffffff" },
}

function TechIcon({ id, className = "arsenal-item-icon-svg" }) {
  const tech = TECH_ICONS[id]
  if (!tech) return null

  const { Icon, color } = tech
  return (
    <Icon
      className={className}
      style={{ color }}
      aria-hidden="true"
    />
  )
}

export default TechIcon
