import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl(){
  return "http://hardeepbharaj-001-site1.btempurl.com/api"
}

export function getBaseImageUrl(){
  return "http://hardeepbharaj-001-site1.btempurl.com/Images/"
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'BASE_IMAGE_URL', useFactory: getBaseImageUrl, deps: [] }
]

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
