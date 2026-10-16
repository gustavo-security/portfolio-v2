
import { Component } from '@angular/core';

import { Header } from './features/header/header';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Footer } from './features/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
