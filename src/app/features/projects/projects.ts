import { Component } from '@angular/core';

import { PROJECTS } from '../../core/data/projects.data';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  readonly projects = PROJECTS;
}