import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    

    this.contarTres().then(
      msg=>console.log('Termino!',msg)
    ).catch(e=>console.error(e))
  }

  ngOnInit() {
  }

  contarTres():Promise<boolean>{
    return new Promise((resolve,reject)=>{
      let contador=0;

      let intervalo = setInterval(()=>{
        contador++;
        console.log('contador', contador)
        if(contador==3) {
          resolve(true);
          clearInterval(intervalo);
        }  
      },1000)
    });
  }
}
