import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MdDialog) {}

  openModal() {
    let dialog = this.dialog.open(ModalComponent);

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          console.log('selection: ', selection);
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });
  }
}
