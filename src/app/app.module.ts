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
  MatTooltipModule,
  MatAutocompleteModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { HighlightDirective } from './news-container/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UserCustomParamsComponent } from './user-custom-params/user-custom-params.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { SelectParamComponent } from './user-custom-params/select-param/select-param.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { customParamsReducer } from './reducers/custom-params.reducer';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    OptionsPanelComponent,
    NewsContainerComponent,
    HighlightDirective,
    LoadingSpinnerComponent,
    UserCustomParamsComponent,
    NewsItemComponent,
    SelectParamComponent,
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
    MatAutocompleteModule,
    StoreModule.forRoot({ customParamsReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
