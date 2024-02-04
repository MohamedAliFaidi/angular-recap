import {Component, EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() message : any = {}
  @Input() index :number = -1

  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  deleteMessage  (){
 this.remove.emit(this.index)
  }
}



