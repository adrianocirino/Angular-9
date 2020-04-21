import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createProduto(): void{
    this.produtoService.showMessage('Operação realizada com sucesso');
  }

  cancel(): void{
    this.router.navigate(['/produtos']);
  }

}
