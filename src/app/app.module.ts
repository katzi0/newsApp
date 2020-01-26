import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { MatInputModule } from '@angular/material/input';
import { NewsContainerComponent } from './news-container/news-container.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonToggleModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { HighlightDirective } from './news-container/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AddUserCustomParamsComponent } from './add-user-custom-params/add-user-custom-params.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsPanelComponent,
    NewsContainerComponent,
    HighlightDirective,
    LoadingSpinnerComponent,
    AddUserCustomParamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
