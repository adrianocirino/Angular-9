import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutoCrudComponent
  }
  ,
  {
    path: 'produtos/create',
    component: ProdutoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
