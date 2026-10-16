
import { Component } from '@angular/core';

interface Highlight {
  label: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly highlights: Highlight[] = [
    {
      label: 'Formação',
      value: 'Ciência da Computação',
      description: 'PUC Minas · Em andamento'
    },
    {
      label: 'Experiência',
      value: 'Desenvolvimento Full Stack',
      description: 'Biobyte Sistemas · 2026'
    },
    {
      label: 'Principal stack',
      value: 'Angular · Node.js',
      description: 'TypeScript · Express · SQL'
    }
  ];
}
