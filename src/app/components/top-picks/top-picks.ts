import { Component, Input } from '@angular/core';
import { defalutShoe, DisplayShoe, getDisplayShoe, Shoe, shoesApiService } from '../../shoesApiService';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-top-picks',
  standalone: false,
  templateUrl: './top-picks.html',
  styleUrl: './top-picks.css'
})
export class TopPicks {
  constructor(private shoesService : shoesApiService){}
  @Input() location! : string;
  topPicksShoes : DisplayShoe[] = []
  ngOnInit() : void{
    this.getTopPicksShoes();
  }
  getTopPicksShoes(){
    this.shoesService.getTopNMostCompetiableShoes(4).pipe(
      tap((shoes : Shoe[]) => {
        this.topPicksShoes = shoes.sort((a : Shoe,b : Shoe) => b.rates.rank - a.rates.rank).map(shoe => getDisplayShoe(shoe));
      }),
      catchError((err) =>{
        this.topPicksShoes = Array(4).fill(defalutShoe);
        return of(this.topPicksShoes);
      })
    ).subscribe()
  }
}
