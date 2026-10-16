import { Component, input, signal } from '@angular/core';
import { PortfolioProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  readonly project = input.required<PortfolioProject>();

  readonly isExpanded = signal(false);

  toggleDetails(): void {
    this.isExpanded.update(value => !value);
  }
}