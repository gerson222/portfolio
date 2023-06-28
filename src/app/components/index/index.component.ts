import { Component } from '@angular/core';
import { Educacion, educaciones } from '../../models/educacion';
import { AboutMe, aboutMeData } from '../../models/aboutme';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  educaciones: Educacion[] = educaciones;
  aboutMeData: AboutMe [] = aboutMeData;

}
