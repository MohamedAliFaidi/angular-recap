import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
    title: string = 'angular-crash-course';
  myBtn: string = 'My Btn';

  isDisabled: boolean = true;
  angularLogo: string = "../favicon.ico"

  bgColor: string = "blue";
  titleColor: string = "white";
  Description: string = "font-size: 80px ; color :red; font-weight: bold;";


  redtext : string= "yes";
  counter: number = 0;
  increment () :void {
    this.counter++;
  }
  decrement () :void {
    this.counter--;
     this.counter
  }

  initial :string = "inrtial"

}
