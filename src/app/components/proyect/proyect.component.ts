import { Component, Input } from '@angular/core';
import { Project, projects } from '../../models/projects';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {
  projects: Project[] = projects;
}
