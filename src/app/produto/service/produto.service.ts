import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  salvar(produto: ProdutoModel): Observable<ProdutoModel> { 
    return this.http.
    post('https://puc2024-574a5-default-rtdb.firebaseio.com/produto.json', 
    produto);   
  }

  listar(): Observable<ProdutoModel[]> {
    return this.http.
    get<ProdutoModel[]>('https://puc2024-574a5-default-rtdb.firebaseio.com/produto.json');
  }

}