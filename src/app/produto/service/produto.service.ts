import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProdutoModel } from '../model/produto.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }

  salvar(produto: ProdutoModel) { 
    return this.db.list('produto').push(produto);   
  }

  excluir(key: any) {
    return this.db.object('produto/'+key).remove();
  }

  carregar(key: any) : Observable<any> {
    return this.db.object('produto/'+key).valueChanges();
  }

  alterar(key: any, produto: ProdutoModel) {
    return this.db.object('produto/'+key).update(produto);
  }

  listar() {
    return this.db.list('produto').snapshotChanges()
    .pipe(
      map(changes => {
        console.log(changes);
        return changes.map(c => ({ key: c.key, 
          ...c.payload.val() as ProdutoModel}));
      })
    );
  }

}
