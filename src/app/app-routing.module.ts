import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const routes: Routes = [
{path:'TemplateDrivenFormComponentComponent',component:TemplateDrivenFormComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
