import { TestBed } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';

describe('EstablishmentService', () => {
  let snackbarService: SnackbarService;

  beforeEach(() => {
    snackbarService = TestBed.inject(SnackbarService);
    snackbarService.snackbars = [];
  });

  it('should be created', () => {
    expect(snackbarService).toBeTruthy();
  });

  it('should show a snackbar', () => {
    snackbarService.show('Test snackbar');
    expect(snackbarService.snackbars.length).toBeGreaterThan(0);
  });

  it('should remove a snackbar', () => {
    let snackToRemove = { textOrTpl: 'Test snackbar' };
    snackbarService.remove(snackToRemove);
    expect(snackbarService.snackbars.find(t => t !== snackToRemove))
      .toBeUndefined('Unexpected value');
  });

});
