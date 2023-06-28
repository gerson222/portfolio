import { Component, Input } from '@angular/core';
import { Educacion, educaciones } from '../../models/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  @Input() educaciones: Educacion[] = educaciones;
}
