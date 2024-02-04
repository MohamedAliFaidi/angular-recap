import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() messages : Array<any> = []


  del (index:number ){
    this.messages.splice(index,1)
     }

}
