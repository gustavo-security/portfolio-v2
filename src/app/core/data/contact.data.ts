export interface ContactLink {
  id: string;
  label: string;
  description: string;
  url: string;
  icon: 'mail' | 'linkedin' | 'github';
  external: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: 'email',
    label: 'E-mail',
    description: 'salesgustavo003@gmail.com',
    url: 'mailto:salesgustavo003@gmail.com',
    icon: 'mail',
    external: false
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'linkedin.com/in/gust4voss/',
    url: 'https://www.linkedin.com/in/gust4voss/',
    icon: 'linkedin',
    external: true
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'Projetos e repositórios',
    url: 'https://github.com/gustavo-security',
    icon: 'github',
    external: true
  }
];