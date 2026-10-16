
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  readonly technologies = [
    'Angular',
    'TypeScript',
    'Node.js',
    'Express',
    'AWS',
    'SQL'
  ];

  readonly resumeUrl = 'assets/documents/curriculo.pdf';
}
