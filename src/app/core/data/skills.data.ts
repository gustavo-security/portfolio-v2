import { SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces e aplicações web.',
    icon: '</>',
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Bootstrap',
      'Nebular',
      'React'
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs, serviços e regras de negócio.',
    icon: '{ }',
    technologies: [
      'Node.js',
      'Express',
      'APIs REST',
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI'
    ]
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    description: 'Persistência, consultas e modelagem.',
    icon: 'DB',
    technologies: [
      'MySQL',
      'SQL Server',
      'MongoDB',
      'Sequelize'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infraestrutura',
    description: 'Serviços em nuvem e ambientes de execução.',
    icon: '☁',
    technologies: [
      'AWS IAM',
      'AWS S3',
      'AWS EC2',
      'Docker',
      'Linux'
    ]
  },
  {
    id: 'tools',
    title: 'Ferramentas & Qualidade',
    description: 'Desenvolvimento, testes e manutenção.',
    icon: '⚙',
    technologies: [
      'Git',
      'GitHub',
      'Postman',
      'DBeaver',
      'R Markdown',
      'VS Code'
    ]
  }
];