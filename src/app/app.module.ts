import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokedetailComponent } from './pokedetail/pokedetail.component';  

import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,

    MyComponentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule , // Pour faire le Binding
    AppRoutingModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule , 
    DropdownModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


