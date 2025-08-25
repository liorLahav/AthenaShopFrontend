import { Component, Input } from '@angular/core';
import { DisplayShoe, shoesApiService } from '../../services/shoesApi/shoesApiService';
import { cartService } from '../../state/cart/cart.service';

@Component({
  selector: 'app-shoe-card',
  standalone: false,
  templateUrl: './shoe-card.html',
  styleUrl: './shoe-card.css'
})
export class ShoeCard {
  constructor(private shoeService : shoesApiService,private cartService : cartService){}
  @Input() location : string = "shop";
  @Input() shoe! : DisplayShoe;
  sizes : number[] = []
  pressed = false;
  ngOnInit(){
    this.getShoeSizes()
  }
  onAddClick(){
    this.getShoeSizes();
    this.pressed = true;
  }
  onCancel(){
    this.pressed = false;
  }
  addShoeToCart(size : number){
    console.log("ttt")
    this.cartService.addShoe(this.shoe.id,size);
  }
  getShoeSizes(){
    this.shoeService.getSizesByShoe(this.shoe.id).subscribe( sizesData =>
      this.sizes = sizesData
    )
  }
}
