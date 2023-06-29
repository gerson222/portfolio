export interface Experiencia {
   imagen: string;
   puesto: string;
   empresa: string;
   inicio: string;
   fin: string;
   descripcion: string;
 }
 
 export const experiencias: Experiencia[] = [
   {
     imagen: "../../../assets/img/pato-con-cuchillo.jpg",
     puesto: "Puesto 1",
     empresa: "Empresa 1",
     inicio: "Enero 2020",
     fin: "Febrero 2021",
     descripcion: "Descripción de la experiencia 1"
   },
   {
     imagen: "../../../assets/img/pato-con-cuchillo.jpg",
     puesto: "Puesto 2",
     empresa: "Empresa 2",
     inicio: "Marzo 2018",
     fin: "Abril 2020",
     descripcion: "Descripción de la experiencia 2"
   },
   {
     imagen: "../../../assets/img/pato-con-cuchillo.jpg",
     puesto: "Puesto 3",
     empresa: "Empresa 3",
     inicio: "Mayo 2016",
     fin: "Junio 2018",
     descripcion: "Descripción de la experiencia 3"
   }
 ];
 