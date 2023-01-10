import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servicesPopOpen = false;
  contactDialogOpen = false;

  private _servicesPopTimer: any = undefined;

  openServicesPop() {
    clearTimeout(this._servicesPopTimer);

    if (this.servicesPopOpen === false) {
      this.servicesPopOpen = true;
      this._servicesPopTimer = undefined;
    }
  }

  closeServicesPop() {
    console.log('leave', this.servicesPopOpen, this._servicesPopTimer);
    if (this.servicesPopOpen) {
      this._servicesPopTimer = setTimeout(() => {
        this.servicesPopOpen = false;
      }, 200);
    }
  }
}
