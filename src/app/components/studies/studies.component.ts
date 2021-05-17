import { Component, OnInit } from '@angular/core';
import data from  '../../../assets/data/studies.json';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  titlePage:string = "Estudios";
  studiesData:any = data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.studiesData);
  }

}
