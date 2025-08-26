import { NgModule } from "@angular/core";
import { LogoHeadline } from "./logo-headline/logo-headline";
import { ShoeCard } from "./shoe-card/shoe-card";
import { TopPicks } from "./top-picks/top-picks";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShopDetails } from "./shoe-card/shop-details/shop-details";
import { Sizes } from "./shoe-card/shop-details/sizes/sizes";

@NgModule({
    declarations : [
        LogoHeadline,
        ShoeCard,
        TopPicks,
        ShopDetails,
        Sizes,
    ],
    imports : [CommonModule,FormsModule],
    exports : [LogoHeadline,ShoeCard,TopPicks]
})

export class componentsModule{}