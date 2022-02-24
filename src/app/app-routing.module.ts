import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {MiniWordComponent} from "./directives/mini-word/mini-word.component";
import {ColorComponent} from "./components/color/color.component";
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {AddPersonneComponent} from "./cv/add-personne/add-personne.component";
import {FrontComponent} from "./components/front/front.component";
import {BackComponent} from "./components/back/back.component";
import {NF404Component} from "./components/nf404/nf404.component";

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: '', component: FrontComponent, children: [
      {path: 'cv', children: [
          {path: '', component: CvComponent},
          {path: 'add', component: AddPersonneComponent},
          {path: ':id', component: DetailCvComponent},
      ]},
      {path: 'word', component: MiniWordComponent},
      {path: 'color/:favoriteColor', component: ColorComponent},
  ]},
  {path: 'back', component: BackComponent, children: [
    {path: 'todo', component: TodoComponent},
  ]},
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
