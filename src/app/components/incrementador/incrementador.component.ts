import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress')
  txtProgress:ElementRef;

  @Input('leyenda')
  leyenda: string = 'Leyenda';

  @Input('progreso')
  progreso:number=50;

  @Output()
  cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { 
    console.log(this.leyenda,this.progreso);
    
  }

  ngOnInit() {
  }

  onChanges(value:number){
    console.log('value', value)

        if(value>=100) this.progreso=100;
    else if(value<=0) this.progreso=0;
    else this.progreso=value;
    
    this.txtProgress.nativeElement.value = Number(this.progreso);
    this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor){
    if(this.progreso >=100 && valor>0) return
    if(this.progreso <=0 && valor<0) return
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
  }
}
