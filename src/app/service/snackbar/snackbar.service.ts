import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  snackbars: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.snackbars.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.snackbars = this.snackbars.filter(({textOrTpl}) => textOrTpl !== toast.textOrTpl);
  }
}
