import { Project, ProjectTech } from "@/types/project";

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'Confiesa',
    type: 'Mobile App | Team Project',
    description: 'A website and full-stack mobile application for Android and iOS that implements an online community for Peruvian students to socialize through private gossip.',
    image: '/images/confiesa-image.svg',
    projectUrl: 'https://confiesa.app/',
    tags: ['Mobile', 'Realtime', 'Back-end'],
    techStack: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactjs.org/' },
      { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg', url: 'https://www.android.com/' },
      { name: 'Apple', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg', url: 'https://www.apple.com/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', url: 'https://www.firebase.google.com/' },
      { name: 'Expo', icon: '/icons/expo-icon.png', url: 'https://expo.dev/' }
    ]
  },
  {
    id: 2,
    title: 'Abroad Perú',
    type: 'Web-app | Team Project',
    description: 'A full-stack web-application that acts as a space of networking and information for Peruvian students who yearn for opportunities locally and abroad. Deployed with Vercel.',
    image: '/images/abroad-image.svg',
    projectUrl: 'https://abroadperu.org/',
    tags: ['Community', 'NoSQL', 'Cloud DB'],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactjs.org/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', url: 'https://firebase.google.com/' }
    ]
  },
  {
    id: 3,
    title: 'Radio Conexión',
    type: 'Website | Duo Project',
    description: 'An interactive website featuring an livestream player for a radio station with 10k+ monthly listeners. Deployed with Vercel.',
    image: '/images/radio-image.svg',
    projectUrl: 'https://radioconexion.vercel.app/',
    tags: ['3D Display', 'Hooks & Animations', 'UI Design'],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactjs.org/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
      { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', url: 'https://threejs.org/' }
    ]
  },
  {
    id: 4,
    title: 'Katharos',
    type: 'E-Commerce | Paid Project',
    description: 'A fully customized online store with admin. dashboards and incorporated metrics for a small Peruvian business.',
    image: '/images/katharos-image.svg',
    projectUrl: 'https://katharos-store.vercel.app',
    tags: ['Payments', 'Admin UI', 'Analytics'],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactjs.org/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', url: 'https://firebase.google.com/' }
    ]
  },
  {
    id: 5,
    title: 'Binat',
    type: 'E-Commerce | Team Project',
    description: 'Full-stack e-commerce website for a German business-clothing startup. Includes an administrative panel (dashboard) for users. Deployed with Heroku.',
    image: '/images/binat-image.svg',
    projectUrl: 'https://binat-businesswear.com',
    tags: ['Version Control', 'Templates', 'Resource Admin.'],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://www.python.org/' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', url: 'https://www.djangoproject.com' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg', url: 'https://www.postgresql.org' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com' }
    ]
  },
];