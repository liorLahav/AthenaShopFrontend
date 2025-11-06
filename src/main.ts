import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { persistState, snapshotManager } from '@datorama/akita';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

const persistStorage  = persistState({
  key : 'akita-store',
  include : ["user","cart"],
  storage : localStorage
})