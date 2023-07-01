import { Component } from '@angular/core';
import { Skills, skillsData } from '../../models/skills';
import { Project, projects } from '../../models/projects';
import { Experiencia, experiencias } from '../../models/experiencia';
import { Educacion, educaciones } from '../../models/educacion';
import { AboutMe, aboutMeData } from '../../models/aboutme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  skills: Skills[] = skillsData;
  projects: Project[] = projects;
  experiencias: Experiencia[] = experiencias;
  educaciones: Educacion[] = educaciones;
  aboutMe: AboutMe[] = aboutMeData;

  getFileName(filePath: string): string {
    return filePath.split('/').pop() || '';
  }
}
