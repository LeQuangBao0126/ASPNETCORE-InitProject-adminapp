import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCalbackModule } from './auth-calback/auth-calback.module';
import { AuthGuard } from './shared';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';


import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from './shared/modules/validation-message/validation-message.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        AuthCalbackModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        ValidationMessageModule
       
    ],
    declarations: [AppComponent],
    providers: [AuthGuard  , {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    } ],
    bootstrap: [AppComponent]
})
export class AppModule {}
