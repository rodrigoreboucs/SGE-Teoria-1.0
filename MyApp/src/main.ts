import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouteReuseStrategy, provideRouter, PreloadAllModules, withPreloading } from '@angular/router';
import { IonicRouteStrategy } from "@ionic/angular";
import { provideIonicAngular } from "@ionic/angular/standalone";
import { routes } from './app/app-routing.module';
import { withFetch, provideHttpClient } from "@angular/common/http";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withFetch())
  ],
});
