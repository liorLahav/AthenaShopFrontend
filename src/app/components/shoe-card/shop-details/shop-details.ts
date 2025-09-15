import { Component, Input } from '@angular/core';
import { Shoe, shoesApiService } from '../../../services/shoesApi/shoesApiService';
import { cartService } from '../../../state/cart/cart.service';
import { cartQuery } from '../../../state/cart/cart.query';

@Component({
  selector: 'app-shop-details',
  standalone: false,
  templateUrl: './shop-details.html',
  styleUrl: './shop-details.css'
})
export class ShopDetails {
  constructor(private shoeService : shoesApiService,private cartService : cartService,private cartQuery : cartQuery){}
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
    this.cartService.addShoe(this.shoe,size);
    this.pressed = false;
  }
  getShoeSizes(){
    this.shoeService.getSizesByShoe(this.shoe.id).subscribe( sizesData =>{
      const cart = [...this.cartQuery.getShoes]
      this.sizes = sizesData.reduce((acc,cur) =>{
        const shoeIndex = cart.findIndex(s => s.type.id == this.shoe.id && cur == s.size)
        if(shoeIndex == -1){
          acc.push(cur)
        }
        else{
          cart.splice(shoeIndex,1)
        }
        return acc;
      },[] as number[])
    })
  }
  
}
