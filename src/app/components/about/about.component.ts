import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  param: string = '';
  querys: any[] = [];
  ngOnInit(): void {
    //getting the params username from url look at routing module
    this.param = this.activatedRoute.snapshot.params['username'];
    //getting the query  params from the url
    // you can test this exemple
    //"http://localhost:4200/about/daly?query_1=someFirstQueryParam&query_2=someSecondQueryParam"
    //  Object.entries(this.activatedRoute.snapshot.queryParams).forEach((e)=>[
    //     console.log(e)
    //   ])

    // playing with querys
    Object.entries(this.activatedRoute.snapshot.queryParams).forEach((item) => {
      this.querys.push(item);
    });
  }
}
