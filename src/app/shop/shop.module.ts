import { NgModule } from "@angular/core";
import { Shop } from "./shop";
import { ShopSidebar } from "./shop-sidebar/shop-sidebar";
import { FilterBar } from "./shop-sidebar/filter-bar/filter-bar";
import { Range } from "./shop-sidebar/filter-bar/range/range";
import { Sizes } from "./shop-sidebar/filter-bar/sizes/sizes";
import { Checkbox } from "./shop-sidebar/filter-bar/checkbox/checkbox";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { componentsModule } from "../components/components.module";


@NgModule({
    declarations : [
        Shop,
        ShopSidebar,
        FilterBar,
        Range,
        Sizes,
        Checkbox,
    ],
    imports : [
        FormsModule,
        CommonModule,
        MatSliderModule,
        componentsModule
    ],
    exports: [Shop]
})

export class shopModule{}