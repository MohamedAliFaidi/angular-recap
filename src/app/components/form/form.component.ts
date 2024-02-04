import { Component } from '@angular/core';
import { TMessage } from '../../../types/type';
import { FirstService } from '../../services/first.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  name: string = "";
  email: string = "";
  subject: string = "";
  isSubmite: boolean = false;
  messages: Array<TMessage> = [];
  constructor(
    private service: FirstService
  ) {
    this.messages = this.service.getMessages();
    this.isSubmite = this.messages.length > 0;
  };
  submit(): void {
    this.isSubmite = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'subject': this.subject,
      'isSubmite': this.isSubmite
    });
  }
};
