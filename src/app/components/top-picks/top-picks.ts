import { Component, Input } from '@angular/core';
import { defalutShoe, DisplayShoe, getDisplayShoe, Shoe, shoesApiService } from '../../services/shoesApi/shoesApiService';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTES } from '../../routes';

@Component({
  selector: 'app-top-picks',
  standalone: false,
  templateUrl: './top-picks.html',
  styleUrl: './top-picks.css'
})
export class TopPicks {
  constructor(private shoesService : shoesApiService, private router : Router){}
  @Input() location! : string;
  topPicksShoes : Shoe[] = []
  ngOnInit() : void{
    this.getTopPicksShoes();
  }
  getTopPicksShoes(){
    this.shoesService.getTopNMostCompetiableShoes(4).pipe(
      tap((shoes : Shoe[]) => {
        this.topPicksShoes = shoes.sort((a : Shoe,b : Shoe) => b.rates.rank - a.rates.rank);
      }),
      catchError((err) =>{
        console.error("Couldn't fetch top picks shoes");
        this.topPicksShoes = Array(4).fill(defalutShoe);
        return of(this.topPicksShoes);
      })
    ).subscribe()
  }
  onViewAllClick(){
    this.router.navigate([ROUTES.SHOP])
  }
}
