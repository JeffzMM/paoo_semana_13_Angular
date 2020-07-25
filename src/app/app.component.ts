import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nome: string;

alterarNome(event): void {

  console.log(event.target.value)
  this.nome = event.target.value;
}

adicionar(nomeInput): void {
  console.log(nomeInput);
}

}
