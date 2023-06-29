import { Component } from '@angular/core';
import { Skills, skillsData } from '../../models/skills';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsData: Skills[] = skillsData;
  mode: ProgressSpinnerMode = 'determinate';
}
