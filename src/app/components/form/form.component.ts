import { Component, inject } from '@angular/core';
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


  // inject method from angular/core  can also can iject dependecies into components
  // private service: FirstService = inject(FirstService)


  constructor(
    // constructor dependencies injection
    private service: FirstService

  ) {
    this.messages = this.service.getMessages();
    this.isSubmite = this.messages.length > 0;
  };
  submit(): void {
    this.isSubmite = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'subject': this.subject,
      'isSubmite': this.isSubmite
    });
  }
};
