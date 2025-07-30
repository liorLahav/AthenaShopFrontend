import { Component, Input } from '@angular/core';
import { Shoe, shoesApiService,getDisplayShoe, DisplayShoe, defalutShoe } from '../shoesApiService';
import {  catchError, of, tap } from 'rxjs';
 
@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  constructor(private shoesService : shoesApiService){}
  lastShoeAdded : DisplayShoe | null = null;
  highestRatedShoe : DisplayShoe | null = null;
  ngOnInit() : void{
    this.getLastAddedShoe();
    this.getMostSoldShoe();
  }
  getLastAddedShoe(){
      this.shoesService.getLastNAddedShoe().pipe(
      tap((shoe : Shoe[]) =>{
        this.lastShoeAdded = getDisplayShoe(shoe[0]);
      }),
      catchError((err)=>{
        this.highestRatedShoe = getDisplayShoe(defalutShoe)
        return of(defalutShoe)
      })
    ).subscribe();
  }
  getMostSoldShoe(){
    this.shoesService.getTopNMostSoldShoes().pipe(
      tap(shoes =>{
        this.highestRatedShoe = getDisplayShoe(shoes[0]);
      }),
      catchError((err) => {
        this.highestRatedShoe = getDisplayShoe(defalutShoe)
        return of(defalutShoe)
      })
    ).subscribe()
  }
}
