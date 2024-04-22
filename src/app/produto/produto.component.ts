import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoModel } from './model/produto.model';
import { ProdutoService } from './service/produto.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  showSuccessMessages = false;
  showErrorMessages = false;

  key?: string;
  formGroup = new FormGroup({
    nome: new FormControl('',
      [Validators.required]),
    preco: new FormControl('',
      [Validators.required, Validators.min(5.1),
      Validators.
        pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
    imagem: new FormControl('',
      [Validators.required]),
  });

  constructor(private produtoService: ProdutoService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.key = paramMap.get('key')?.toString();
      if (this.key) {
        this.produtoService.carregar(this.key).subscribe(produto => {
          this.formGroup.controls.nome.patchValue(produto.nome);
          this.formGroup.controls.imagem.patchValue(produto.imagem);
        });
      }
    })
  }

  salvar(): void {
    if (this.formGroup.invalid) {
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    var produto = new ProdutoModel();
    produto.nome = this.formGroup.controls.nome.value?.toString();
    produto.imagem = this.formGroup.controls.imagem?.value?.toString();
    //produto.preco = this.formGroup.controls.preco?.value;

    if (this.key) {
      //codigo para alterar o produto
      this.produtoService.alterar(this.key, produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    } else {
      //codigo para salvar o produto
      this.produtoService.salvar(produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    }
  }

}
