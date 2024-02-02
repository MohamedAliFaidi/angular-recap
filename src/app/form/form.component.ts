import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'

})


export class FormComponent {

  name : string = "";
  email : string = "";
  subject : string = "";
  isSubmite : boolean = false;
  messages : Array<any> = []
 submit () :void {
this.isSubmite = true;
 this.messages.push({
  'name': this.name,
  'email': this.email,
  'subject': this.subject,
  'isSubmite': this.isSubmite
 })

 console.log(this.messages)

 }
}
