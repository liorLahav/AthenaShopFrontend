import { Component, Inject, Input } from '@angular/core';
import {shoesApiService,getDisplayShoe, DisplayShoe, defalutShoe, SHOES_API_SERVICE_TOKEN } from '../services/shoesApi/shoesApiService';
import {  catchError, of, tap } from 'rxjs';
import { BasicShoe } from '../../graphql/generated';
import { Router } from '@angular/router';
import { ROUTES } from '../routes';
import { environment } from '../../environments/environment';
 
@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  constructor(@Inject(SHOES_API_SERVICE_TOKEN) private shoesService : shoesApiService,private router : Router){}
  lastShoeAdded : DisplayShoe | null = null;
  highestRatedShoe : DisplayShoe | null = null;
  ngOnInit() : void{
    this.getLastAddedShoe();
    this.getMostSoldShoe();
  }
  getLastAddedShoe() {
      this.shoesService.getLastNAddedShoe(1).pipe(
      tap((shoe : BasicShoe[]) =>{
        this.lastShoeAdded = getDisplayShoe(shoe[0]);
      }),
      catchError((err)=>{
        this.highestRatedShoe = getDisplayShoe(defalutShoe)
        return of(defalutShoe)
      })
    ).subscribe();
  }
  getMostSoldShoe() {
    this.shoesService.getTopNMostSoldShoes(1).pipe(
      tap(shoes =>{
        this.highestRatedShoe = getDisplayShoe(shoes[0]);
      }),
      catchError((err) => {
        this.highestRatedShoe = getDisplayShoe(defalutShoe)
        return of(defalutShoe)
      })
    ).subscribe()
  }
  onBuyNow(){
    this.router.navigate([ROUTES.SHOP]).then(()=>{
      window.location.reload();
    })
  }
}
