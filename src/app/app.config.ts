import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideStore} from '@ngrx/store';
import {layoutReducer} from "./store/layout/layout.reducer";
import {storageMetaReducer} from "./store/meta.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(
      {layout: layoutReducer},
      {metaReducers: [storageMetaReducer]})
    ]
};
