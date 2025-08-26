import { Component, Input } from '@angular/core';
import { Shoe, shoesApiService } from '../../../services/shoesApi/shoesApiService';
import { cartService } from '../../../state/cart/cart.service';

@Component({
  selector: 'app-shop-details',
  standalone: false,
  templateUrl: './shop-details.html',
  styleUrl: './shop-details.css'
})
export class ShopDetails {
  constructor(private shoeService : shoesApiService,private cartService : cartService){}
  @Input({required : true}) location! : string;
  @Input({required : true}) shoe! : Shoe;
  @Input({required : true}) title! : string;
  pressed = false;
  sizes : number[] = []
  onAddClick(){
    this.getShoeSizes();
    this.pressed = true;
  }
  onCancel(){
    this.pressed = false;
  }
  ngOnInit(){
    this.getShoeSizes()
  }
  addShoeToCart(size : number){
    console.log("ttt")
    this.cartService.addShoe(this.shoe,size);
  }
  getShoeSizes(){
    this.shoeService.getSizesByShoe(this.shoe.id).subscribe( sizesData =>
      this.sizes = sizesData
    )
  }
  
}
