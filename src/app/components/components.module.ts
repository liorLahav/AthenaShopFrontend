import { NgModule } from "@angular/core";
import { LogoHeadline } from "./logo-headline/logo-headline";
import { ShoeCard } from "./shoe-card/shoe-card";
import { TopPicks } from "./top-picks/top-picks";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Sizes } from './shoe-card/sizes/sizes';

@NgModule({
    declarations : [
        LogoHeadline,
        ShoeCard,
        TopPicks,
        Sizes,
    ],
    imports : [CommonModule,FormsModule],
    exports : [LogoHeadline,ShoeCard,TopPicks]
})

export class componentsModule{}