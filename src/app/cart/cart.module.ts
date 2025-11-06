import { NgModule } from "@angular/core";
import { componentsModule } from "../components/components.module";
import { Cart } from "./cart";
import { CommonModule } from "@angular/common";
import { OrderSummery } from "./checkout-order/checkout-summery";
import { Section } from './checkout-order/section/section';
import { CheckoutMessage } from "./checkout-message/checkout-message";
@NgModule({
    declarations : [
        Cart,
        OrderSummery,
        Section,
        CheckoutMessage
    ],
    imports : [componentsModule,CommonModule],
    exports : [Cart]
})

export class CartModule{}