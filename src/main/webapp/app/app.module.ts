import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SutiSharedModule } from 'app/shared/shared.module';
import { SutiCoreModule } from 'app/core/core.module';
import { SutiAppRoutingModule } from './app-routing.module';
import { SutiHomeModule } from './home/home.module';
import { SutiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SutiSharedModule,
    SutiCoreModule,
    SutiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SutiEntityModule,
    SutiAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SutiAppModule {}
