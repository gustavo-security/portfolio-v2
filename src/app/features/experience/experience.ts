
import { Component } from '@angular/core';

interface Responsibility {
  title: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly responsibilities: Responsibility[] = [
    {
      title: 'Desenvolvimento Frontend',
      description:
        'Implementação e manutenção de interfaces, formulários, filtros e componentes com Angular, TypeScript e Bootstrap.'
    },
    {
      title: 'Desenvolvimento Backend',
      description:
        'Desenvolvimento de APIs REST, endpoints, validações e regras de negócio utilizando Node.js e Express.'
    },
    {
      title: 'Banco de Dados e Relatórios',
      description:
        'Consultas e manipulação de dados em MySQL e SQL Server, além de manutenção de relatórios clínicos e epidemiológicos em R Markdown.'
    },
    {
      title: 'Infraestrutura AWS',
      description:
        'Gerenciamento de permissões IAM, organização de buckets S3 para logs e backups, deploy e manutenção de servidores EC2.'
    },
    {
      title: 'Qualidade e Manutenção',
      description:
        'Investigação e correção de bugs, testes de funcionalidades e utilização de Git, Docker, Postman e DBeaver.'
    }
  ];

  readonly technologies: string[] = [
    'Angular',
    'TypeScript',
    'Node.js',
    'Express',
    'MySQL',
    'SQL Server',
    'AWS',
    'Docker',
    'Git',
    'R Markdown'
  ];
}
