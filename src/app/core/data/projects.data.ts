import { PortfolioProject } from '../models/project.model';

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'task-manager',
    title: 'Task Manager Full Stack',
    image: 'assets/images/projects/task-manager.png',
    description:
      'Aplicação web para gerenciamento de tarefas, com autenticação JWT e integração frontend/backend.',

    technologies: [
      'React',
      'Spring Boot',
      'API REST',
      'JWT'
    ],

    status: 'completed',

    githubUrl: 'https://github.com/gustavo-security/Task-Manager-Full-Stack',

    problem:
      'Organizar atividades pessoais por meio de uma aplicação web com autenticação e gerenciamento de tarefas.',

    solution:
      'Desenvolvimento de frontend em React integrado a uma API REST com Spring Boot, incluindo autenticação JWT e filtragem de tarefas por status.',

    challenges: [
      'Integração entre frontend e backend',
      'Implementação do fluxo de autenticação',
      'Gerenciamento e filtragem de tarefas'
    ]
  },
  {
    id: 'owasp-api-security',
    title: 'OWASP API Security Lab',
    image: 'assets/images/projects/owasp-api.png',
    description:
      'Laboratório de segurança para demonstração e mitigação de vulnerabilidades IDOR em APIs.',

    technologies: [
      'Python',
      'FastAPI',
      'JWT',
      'API Security'
    ],

    status: 'completed',

    githubUrl: 'https://github.com/gustavo-security/Owasp-Api-Security-Lab',

    problem:
      'Demonstrar como falhas de autorização em APIs podem permitir acesso indevido a recursos de outros usuários.',

    solution:
      'Construção de um ambiente de laboratório com FastAPI para demonstrar a vulnerabilidade IDOR e aplicar controles de autorização.',

    challenges: [
      'Diferenciar autenticação de autorização',
      'Validar permissões no acesso a recursos',
      'Demonstrar a falha e sua mitigação'
    ]
  }
];