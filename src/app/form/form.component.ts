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
 submit () :void {
  this.isSubmite = true;
 }
}
