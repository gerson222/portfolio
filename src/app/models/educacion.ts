export interface Educacion {
  imagen: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  institucion: string;
  inicio: string;
  fin: string;
}

export const educaciones: Educacion[] = [
  {
    imagen: '../../../assets/img/pato-con-cuchillo.jpg',
    titulo: 'Título de la educación 1',
    descripcion: 'Descripción de la educación 1',
    contenido: 'Contenido de la educación 1',
    institucion: 'Institución 1',
    inicio: 'Enero 2020',
    fin: 'Febrero 2021',
  },
  {
    imagen: '../../../assets/img/pato-con-cuchillo.jpg',
    titulo: 'Título de la educación 2',
    descripcion: 'Descripción de la educación 2',
    contenido: 'Contenido de la educación 2',
    institucion: 'Institución 2',
    inicio: 'Marzo 2018',
    fin: 'Abril 2020',
  },
  {
    imagen: '../../../assets/img/pato-con-cuchillo.jpg',
    titulo: 'Título de la educación 3',
    descripcion: 'Descripción de la educación 3',
    contenido: 'Contenido de la educación 3',
    institucion: 'Institución 3',
    inicio: 'Mayo 2016',
    fin: 'Junio 2018',
  },
];
