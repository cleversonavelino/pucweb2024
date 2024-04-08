import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../produto/model/produto.model';
import { ProdutoService } from '../produto/service/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent implements OnInit {

  public produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos);
    }, error => {
      console.error(error);
    });
  }

}
