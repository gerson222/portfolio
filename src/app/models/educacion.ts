export interface Educacion {
   seccion: string;
   imagen: string;
   titulo: string;
   descripcion: string;
   contenido: string;
 }
 
 // Datos aleatorios para educaciones de ejemplo
 export const educaciones: Educacion[] = [
   {
     seccion: "Sección 1",
     imagen: "assets/img/imagen1.jpg",
     titulo: "Título de la educación 1",
     descripcion: "Descripción de la educación 1",
     contenido: "Contenido de la educación 1"
   },
   {
     seccion: "Sección 2",
     imagen: "assets/img/imagen2.jpg",
     titulo: "Título de la educación 2",
     descripcion: "Descripción de la educación 2",
     contenido: "Contenido de la educación 2"
   },
   {
     seccion: "Sección 3",
     imagen: "assets/img/imagen3.jpg",
     titulo: "Título de la educación 3",
     descripcion: "Descripción de la educación 3",
     contenido: "Contenido de la educación 3"
   }
 ];
 