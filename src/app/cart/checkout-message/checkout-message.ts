import { Component, EventEmitter, Input, Output } from '@angular/core';
import { checkoutResponse, getDisplayShoe } from '../../services/shoesApi/shoesApiService';

const defaultMessage = "Sorry we coulnd process your request at this moment please try again later"
const succsesMessage = "Your purchaces was succsesful"
@Component({
  selector: 'app-checkout-message',
  standalone: false,
  templateUrl: './checkout-message.html',
  styleUrl: './checkout-message.css'
})
export class CheckoutMessage {
  @Input({required : true}) checkoutResponse! : checkoutResponse;
  @Output() closeMessage = new EventEmitter<void>();
  title : string = ""
  content : string = ""
  ngOnInit(){
    if(this.checkoutResponse.success)
      this.title = succsesMessage;
    else if(this.checkoutResponse.missingShoes.length == 0)
      this.title = defaultMessage;
    else{
      this.title = "Some of the shoes you wanted to buy are missing"
      this.content = this.checkoutResponse.missingShoes.map(shoe => getDisplayShoe(shoe.type).name + "," + shoe.size).join("\n");
    }
  }
  onOk(){
    this.closeMessage.emit();
  }
}
