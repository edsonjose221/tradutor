import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Frase } from 'src/shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase;

  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {

      // trocar a pergunta da rodada
      this.rodada++

      // progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 4) {
        this.encerrarJogo.emit('Vitória')
      }
      
      // Atualiza o objeto rodadaFrase
      this.atualizaRodada()
    }
    else {
      // decrementar o atributo tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        alert('Derrota')
      }
    }
  }

  atualizaRodada(): void {

    // define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]

    // limpar a resposta
    this.resposta = ''
  }
}
