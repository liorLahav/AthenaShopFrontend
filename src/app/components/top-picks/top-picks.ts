import { Component, Inject, Input } from '@angular/core';
import { defalutShoe, DisplayShoe, getDisplayShoe, SHOES_API_SERVICE_TOKEN, shoesApiService } from '../../services/shoesApi/shoesApiService';
import { catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTES } from '../../routes';
import { BasicShoe } from '../../../graphql/generated';

const DISPLAYED_SHOES = 4

@Component({
  selector: 'app-top-picks',
  standalone: false,
  templateUrl: './top-picks.html',
  styleUrl: './top-picks.css'
})
export class TopPicks {
  constructor(@Inject(SHOES_API_SERVICE_TOKEN) private shoesService : shoesApiService, private router : Router){}
  @Input() location! : string;
  topPicksShoes : BasicShoe[] = []
  ngOnInit() : void{
    this.getTopPicksShoes();
  }
  getTopPicksShoes(){
    this.shoesService.getTopNMostCompetiableShoes(DISPLAYED_SHOES).pipe(
      map((shoes : BasicShoe[]) => {
        this.topPicksShoes = shoes.slice(0,DISPLAYED_SHOES);
      }),
      catchError((err) =>{
        console.error("Couldn't fetch top picks shoes",err);
        this.topPicksShoes = Array(4).fill(defalutShoe);
        return of(this.topPicksShoes);
      })
    ).subscribe()
  }
  onViewAllClick(){
    this.router.navigate([ROUTES.SHOP])
  }
}
