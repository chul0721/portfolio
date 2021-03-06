import projectCardProps from './types/projectCardProps'
import skillCardProps from './types/skillCardProps'
import socialLinkProps from './types/socialLinkProps'

export const socialLinks: Record<string, socialLinkProps> = {
  github: {
    src: 'github.png',
    href: 'https://github.com/chul0721'
  },
  instagram: {
    src: 'instagram.png',
    href: 'https://instagram.com/bottle___iron'
  },
  twitter: {
    src: 'twitter.png',
    href: 'https://twitter.com/chul0721'
  }
}

export const skills: Record<string, skillCardProps> = {
  html: {
    name: 'HTML',
    src: 'html.png'
  },
  css: {
    name: 'CSS',
    src: 'css.png'
  },
  javascript: {
    name: 'JavaScript',
    src: 'javascript.png'
  },
  typescript: {
    name: 'TypeScript',
    src: 'typescript.png'
  },
  react: {
    name: 'React.js',
    src: 'react.webp'
  },
  next: {
    name: 'Next.js',
    src: 'nextjs.png'
  },
  svelte: {
    name: 'Svelte',
    src: 'svelte.png'
  },
  tailwind: {
    name: 'Tailwindcss',
    src: 'tailwindcss.png'
  },
  framermotion: {
    name: 'Framer Motion',
    src: 'framermotion.webp'
  },
  storybook: {
    name: 'StoryBook',
    src: 'storybook.svg'
  },
  apollo: {
    name: 'Apollo Client',
    src: 'apollo.svg'
  },
  expo: {
    name: 'Expo',
    src: 'expo.webp'
  },
  electron: {
    name: 'Electron',
    src: 'electron.png'
  },
  nest: {
    name: 'Nest.js',
    src: 'nestjs.png'
  },
  graphql: {
    name: 'GraphQL',
    src: 'graphql.png'
  },
  prisma: {
    name: 'Prisma',
    src: 'prisma.png'
  },
  go: {
    name: 'Go',
    src: 'golang.png'
  },
  postgresql: {
    name: 'PostgreSQL',
    src: 'postgresql.png'
  },
  mysql: {
    name: 'MySQL',
    src: 'mysql.png'
  },
  mongodb: {
    name: 'MongoDB',
    src: 'mongodb.webp'
  },
  linux: {
    name: 'Linux',
    src: 'linux.png'
  },
  docker: {
    name: 'Docker',
    src: 'docker.webp'
  }
}

export const projects: Record<string, projectCardProps> = {
  asserlang: {
    name: '어쩔랭',
    desc: '유행어 "어쩔티비"에 영감을 받아 만든 난해한 프로그래밍 언어',
    src: 'asserlang.png',
    color: 'white',
    href: 'https://github.com/assertive-lang/asserlang'
  },
  school: {
    name: '백현중 학생 자치회 커뮤니티',
    desc: '백현중학교의 학생 자치회 커뮤니티입니다.',
    src: 'school.png',
    color: 'black',
    href: 'https://github.com/BakhyunMS/community'
  }
}
