import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }  from './test-page/routing';

import { ModalComponent } from './-directives';
import { ModalService } from './_service';
import { HomeComponent } from './home';
import { TestPageComponent } from './test-page';

@NgModule({
    imports: [
         BrowserModule,
         FormsModule,
         routing
    ],
    declarations: [
        AppComponent,
        ModalComponent,
        HomeComponent,
        TestPageComponent
    ],
    providers: [
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }