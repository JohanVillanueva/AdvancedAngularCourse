import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _ajustes:SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiaTema(tema:string, elemRef:any){
    this.aplicarCheck(elemRef);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(linkHTML:any){
    let selectors:any = document.getElementsByClassName('selector');

    for(let ref of selectors){
      ref.classList.remove('working');
    }
    linkHTML.classList.add('working');
  }
  colocarCheck(){
    let selectors:any = document.getElementsByClassName('selector');

    let tema=this._ajustes.ajustes.tema;
    console.log('tema', tema)
    for(let ref of selectors){
      if(ref.getAttribute('data-theme')===tema){
        ref.classList.add('working');
        break;
      } 
    }
  }
}
