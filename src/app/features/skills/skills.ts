
import { Component } from '@angular/core';

import {
  LucideMonitor,
  LucideServer,
  LucideDatabase,
  LucideCloud,
  LucideWrench
} from '@lucide/angular';

import { SKILL_CATEGORIES } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [
    LucideMonitor,
    LucideServer,
    LucideDatabase,
    LucideCloud,
    LucideWrench
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly categories = SKILL_CATEGORIES;
}
