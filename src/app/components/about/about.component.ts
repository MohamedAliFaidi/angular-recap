import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute : ActivatedRoute
  ){}
  param : string  ="";
  query_1  :string ="";
  query_2: string ="";
  ngOnInit(): void {
     //getting the params username from url look at routing module
    this.param = this.activatedRoute.snapshot.params['username']


    //getting the query  params from the url
    // you can test this exemple
    //"http://localhost:4200/about/daly?query_1=someFirstQueryParam&query_2=someSecondQueryParam"
    this.query_1 = this.activatedRoute.snapshot.queryParams['query_1']
    this.query_2 = this.activatedRoute.snapshot.queryParams['query_2']


    

    

  }

}
