import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// If this global ngZone property is undefined, the micro frontend’s Angular
// instance uses a ngZone instance of its own. This is also the default behavior.
platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: (window as any).ngZone })
  .catch(err => console.error(err));
