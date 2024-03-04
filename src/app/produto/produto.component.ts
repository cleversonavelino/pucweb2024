import { Component } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  nome: FormControl = new FormControl('', 
    [Validators.required]);
  preco: FormControl = new FormControl('', 
    [Validators.required, Validators.min(5.1),
      Validators.
      pattern('^[0-9]+(\.[0-9]{1,2})?$')]);

  constructor() { }

  ngOnInit(): void {
  }

  salvar(): void {
    console.log('Salvando produto');

    if (this.nome.invalid) {
      console.log('Nome inválido');
      return;
    }

    if (this.preco.invalid) {
      console.log('Preço inválido');
      return;
    }

    console.log('Nome: ' + this.nome.value);
    console.log('Preço: ' + this.preco.value);
  }

}
