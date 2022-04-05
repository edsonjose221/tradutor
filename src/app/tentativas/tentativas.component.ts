import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Coracao } from 'src/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  @Input() public tentativas: number = 0

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true), 
  ]

  constructor() { }

  ngOnChanges(): void {
    // this.tentativas
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas

      // 3 - 2 = 1
      this.coracoes[indice - 1].cheio = false
    }

  }

  ngOnInit(): void {
  }

}
