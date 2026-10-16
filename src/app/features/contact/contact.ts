
import { Component } from '@angular/core';

import {
  LucideMail,
  LucideArrowUpRight
} from '@lucide/angular';

import { CONTACT_LINKS } from '../../core/data/contact.data';

@Component({
  selector: 'app-contact',
  imports: [
    LucideMail,
    LucideArrowUpRight
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly contacts = CONTACT_LINKS.filter(
    contact => contact.url.trim().length > 0
  );
}
