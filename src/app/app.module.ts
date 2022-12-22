import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

import { FormsModule } from '@angular/forms';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { ActorComponentComponent } from './actor-component/actor-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponentComponent,
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
    ActorsComponentComponent,
    ActorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
