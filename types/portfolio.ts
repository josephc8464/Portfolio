export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | string
  url: string
}

export interface Skill {
  name: string
  level?: "beginner" | "intermediate" | "advanced" | "expert"
  icon?: React.ReactNode
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  repo?: string
  demo?: string
}

export interface Experience {
  company: string
  role: string
  start: string
  end?: string
  description: string[]
}
