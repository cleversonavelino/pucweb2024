import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  showSuccessMessages = false;
  showErrorMessages = false;

  formGroup = new FormGroup({
    nome: new FormControl('', 
      [Validators.required]),
    preco: new FormControl('', 
      [Validators.required, Validators.min(5.1),
       Validators.
       pattern('^[0-9]+(\.[0-9]{1,2})?$')])
  });

  constructor() { }

  ngOnInit(): void {
  }

  salvar(): void {
    console.log('Salvando produto');

    console.log(this.formGroup.controls.nome.invalid);
    console.log(this.formGroup.controls.nome.touched);   

    if (this.formGroup.invalid) { 
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    console.log(this.formGroup.controls.nome.value);
    console.log(this.formGroup.controls.preco.value);

    console.log('Formulário válido');
    this.showSuccessMessages = true;

   

   

    

    
  }

}
