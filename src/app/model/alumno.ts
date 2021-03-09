export class Alumno{
	public idAlumno: String;
    public nombre: String;
	public apellidoPaterno: String;
	public apellidoMaterno: String;
	public grupo: String;
	public promedio: any;

	constructor(idAlumno: String,nombre: String,apellidoPaterno: String,apellidoMaterno: String,grupo: String, promedio: any){
		this.idAlumno = idAlumno;
		this.nombre = nombre;
		this.apellidoPaterno = apellidoPaterno;
		this.apellidoMaterno = apellidoMaterno;
		this.grupo = grupo;
		this.promedio = promedio;
	}
}