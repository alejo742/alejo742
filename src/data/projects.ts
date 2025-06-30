import { Project, ProjectTech } from "@/types/project";

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'Binat',
    type: 'E-Commerce Web | Team Project',
    description: 'Full-stack e-commerce website for a German business-clothing startup. Includes an administrative panel (dashboard) for users. Deployed with Heroku.',
    image: '/images/binat-image.svg',
    projectUrl: 'https://binat-businesswear.com',
    tags: ['Version Control', 'Templates', 'Resource Admin.'],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://www.w3.org/html/' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', url: 'https://www.djangoproject.com' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg', url: 'https://www.postgresql.org' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com' }
    ]
  },
  {
    id: 2,
    title: 'Confiesa',
    type: 'Mobile App | Team Project',
    description: 'A website and full-stack mobile application for Android and iOS that implements an online community for Peruvian students to socialize through private gossip.',
    image: '/images/confiesa-image.svg',
    projectUrl: 'https://confiesa.app/',
    tags: ['Mobile', 'Structuring', 'Back-end'],
    techStack: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactjs.org/' },
      { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg', url: 'https://www.android.com/' },
      { name: 'Apple', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg', url: 'https://www.apple.com/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', url: 'https://www.firebase.google.com/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' }
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
];