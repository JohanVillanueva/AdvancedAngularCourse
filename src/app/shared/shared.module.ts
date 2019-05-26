import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations:[
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    imports:[
        RouterModule,
        CommonModule
    ],
    exports:[
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})
export class SharedModule{}