import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public encerramento: string | undefined

  encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.encerramento = tipo
  }

  reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.encerramento = undefined
  }
}
