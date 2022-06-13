import { NodejsService } from './nodejs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoNovo';
  cliente: any [] = [];

  constructor(private servico: NodejsService){}
  listarTodos(): void{
    this.servico.getCliente().subscribe({
      next: (retorno) => this.cliente = retorno,
      error: (erro) => {
        console.log(erro)
      }
    })
  }
}
