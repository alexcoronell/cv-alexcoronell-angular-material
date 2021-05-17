import { Component, OnInit } from '@angular/core';
import data from  '../../../assets/data/experiences.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  titlePage:string = "Experiencia Laboral";
  experienceData:any = data;
  
  constructor() { }

  ngOnInit(): void {

  }

}
