import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloGetterSetter } from './custom-elements/getter-setter-component';
import { HelloElement } from './custom-elements/attribute-changed-callback-component';
import { HelloWorldEmitter } from './custom-elements/event-emitter-component';
import { HelloGetAttribute } from './custom-elements/get-attribute-component';

(<any>window).customElements.define('my-hello-getter-setter', HelloGetterSetter);
(<any>window).customElements.define('my-hello-element', HelloElement);
(<any>window).customElements.define('my-hello-emitter', HelloWorldEmitter);
(<any>window).customElements.define('my-hello-attribute', HelloGetAttribute);


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
