import { Component } from '@angular/core';
import { filter, fromEvent } from 'rxjs';
import { snapshotManager } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
})
export class App {
  protected title = 'AthenaShopFrontend';
    ngOnInit() {
    fromEvent<StorageEvent>(window, 'storage').pipe(
      filter(event => event.key === 'akita-store')
    ).subscribe(event => {
      if (event.newValue !== null) {
        snapshotManager.setStoresSnapshot(event.newValue, { skipStorageUpdate: true });
      }
    });
  }
}
