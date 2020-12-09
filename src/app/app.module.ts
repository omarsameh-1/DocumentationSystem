import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewComponent } from './all-files/view/view.component';
import { FormsModule } from '@angular/forms';
import { PhaseComponent } from './phase/phase.component';
import { InitialPhaseComponent } from './phase/initial-phase/initial-phase.component';
import { RequirementsPhaseComponent } from './phase/requirements-phase/requirements-phase.component';
import { DesignPhaseComponent } from './phase/design-phase/design-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AllFilesComponent,
    HomepageComponent,
    ViewComponent,
    PhaseComponent,
    InitialPhaseComponent,
    RequirementsPhaseComponent,
    DesignPhaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
