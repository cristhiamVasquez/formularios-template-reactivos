import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Cristhiam',
    apellido: 'Vasquez',
    correo: 'cristhiam.vasquez@gmail.com',
    pais: 'CHL',
    genero: 'M'
  };

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;

        this.paises.unshift({
          nombre: '[ Seleccione un País ]',
          codigo: ''
        });

        // console.log(paises);
      } );

  }

  // tslint:disable-next-line: typedef
  guardar( forma: NgForm ){

    if ( forma.invalid ){
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      } );

      return;
    } 

    console.log(forma.value);
  }

}
