import { PokeShareInfoService } from './../poke-share-info.service';
import { PokeAPIServiceService } from './../poke-apiservice.service';
import { Pokemon, PokeDetail } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string ='';
  pokes: Pokemon[] = [];
  selectedPokeId: string ='';
  searchPokeName = '';
  providers!: [PokeAPIServiceService];
  pokeDetail!: PokeDetail;
  myDate!: Date;
  parseInt = parseInt;

  
  
  toString(x: number){
    x.toString();
  }

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {

  }

  ngOnInit(): void {
   
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e: { name: string; url: string; }, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }

  
  go() {
    
    if (this.selectedPokeId != ''){

      console.log("on entre dans la bonne section")

      console.log("l'id tu poke selectionné est : ",  Number(this.selectedPokeId))
      
     
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => {
        this.pokeDetail = data;
        this.pokeShareInfoService.setValue(this.selectedPokeId);
      });
    }
  }

}
