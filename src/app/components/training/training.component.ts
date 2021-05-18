import { Component, OnInit } from '@angular/core';
import data from  '../../../assets/data/traning.json';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  titlePage:string = 'Formación';
  trainingData:any = data.reverse();

  constructor() { }

  ngOnInit(): void {
    console.log(this.trainingData)
  }

}
