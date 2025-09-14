import { NgModule } from "@angular/core";
import { LogoHeadline } from "./logo-headline/logo-headline";
import { ShoeCard } from "./shoe-card/shoe-card";
import { TopPicks } from "./top-picks/top-picks";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShopDetails } from "./shoe-card/shop-details/shop-details";
import { Sizes } from "./shoe-card/shop-details/sizes/sizes";
import { WideShoeCard } from "./wide-shoe-card/wide-shoe-card";
import { Loading } from "./loading/loading";

@NgModule({
    declarations : [
        LogoHeadline,
        ShoeCard,
        TopPicks,
        ShopDetails,
        Sizes,
        WideShoeCard,
        Loading
    ],
    imports : [CommonModule,FormsModule],
    exports : [LogoHeadline,WideShoeCard,ShoeCard,TopPicks,Loading]
})

export class componentsModule{}