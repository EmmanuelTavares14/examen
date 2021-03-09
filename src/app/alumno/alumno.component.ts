import { Component, OnInit } from '@angular/core';
import { Alumno } from '../model/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  public alumnos: Array<Alumno>;

  constructor() {
    this.alumnos = [
      new Alumno('1', 'Emmanuel', 'Tavares', 'Velázquez', 'DSM504', '10'),
      new Alumno('2', 'Nestor', 'Tavares', 'Velázquez', 'GTR101', '6.5'),
      new Alumno('3', 'Gael', 'Ponce', 'Alvarez', 'FTU604', '7.0'),
      new Alumno('4', 'Diana', 'Urrutia', 'Arenas', 'JHG404', '8.0'),
      new Alumno('5', 'Anayeli', 'Becerra', 'Ponce', 'ERT101', '9.5')
    ];
   }

	ngOnInit(){
		console.log("OnInit ejecutado");
	}

	ngDoCheck(){
		console.log("doCheck ejecutado");
	}

	ngOnDestroy(){
		console.log("Se eliminó un componente mascota");
	}
}
