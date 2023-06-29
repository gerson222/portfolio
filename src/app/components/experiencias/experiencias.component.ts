import { Component, Input } from '@angular/core';
import { Experiencia, experiencias } from 'src/app/models/experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  @Input() experiencias: Experiencia[] = experiencias;

}
