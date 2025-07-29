import { Component } from '@angular/core';
import { DisplayShoe, getDisplayShoe, Shoe, shoesApiService } from '../../shoesApiService';
import { tap } from 'rxjs';

@Component({
  selector: 'app-top-picks',
  standalone: false,
  templateUrl: './top-picks.html',
  styleUrl: './top-picks.css'
})
export class TopPicks {
  constructor(private shoesService : shoesApiService){}
  topPicksShoes : DisplayShoe[] | null = []
  ngOnInit() : void{
    this.getTopPicksShoes();
  }
  getTopPicksShoes(){
    this.shoesService.getTopNMostCompetiableShoes(4).pipe(
      tap((shoes : Shoe[]) => {
        this.topPicksShoes = shoes.map(shoe => getDisplayShoe(shoe));
      })
    ).subscribe()
  }
}
