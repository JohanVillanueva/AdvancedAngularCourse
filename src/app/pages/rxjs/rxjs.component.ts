import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  constructor() {
    

    this.subscription=this.regresaObservable()
    .pipe(
      retry(2)
    )
    .subscribe(
      numero=>console.log('num',numero),
      error=>console.error(error),
      ()=>console.log('El observe terminó')
    );
  }

  ngOnInit() {
  }

  regresaObservable():Observable<any>{
    return new Observable(observer=>{
      let contador = 0 ;
      let intervalo  = setInterval(()=>{
        contador++;
        let salida = {
          valor:contador
        }
        observer.next(salida);
        if(contador==3){
          clearInterval(intervalo);
          observer.complete();
        }
        // Test observer error and retry()
        // if(contador==2){
        //   clearInterval(intervalo);
        //   observer.error('error observer!')
        // }
      },1000);
    }).pipe(
      map((res:any)=> res.valor),
      filter((res)=>(res%2)==1)
    );
  }
  ngOnDestroy(){
    console.log('la pagina se cerró');
    this.subscription.unsubscribe();
  }
}
