import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes:Ajustes={
    temaUrl:'assets/css/colors/default.css',
    tema:'default'
  };
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
    console.log('guardando ajustes en localStorage')
  }
  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando ajustes desde localStorage');
      this.aplicarTema(this.ajustes.tema);
    }else {
      console.log('Usando valores por defecto')
      this.aplicarTema(this.ajustes.tema);
    };
    
  }

  aplicarTema(tema:string){
    let urlTema = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', urlTema);

    this.ajustes.tema=tema;
    this.ajustes.temaUrl=urlTema;
    
    this.guardarAjustes();
  }
}

interface Ajustes{
  temaUrl:string;
  tema:string;
}
