import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { PresentationModule } from './presentation/presentation.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './providers/categories.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule,
        AutoCompleteModule
    ],
    providers: [CategoriesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
