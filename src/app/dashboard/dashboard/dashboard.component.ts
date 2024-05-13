import { Component } from '@angular/core';
import { ProdutoService } from '../../produto/service/produto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public produtos: any;

  constructor(private produtoService: ProdutoService,) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos;
    });
  }

}
