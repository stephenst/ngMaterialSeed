import { NgMaterialSeedPage } from './app.po';

describe('ng-material-seed App', () => {
  let page: NgMaterialSeedPage;

  beforeEach(() => {
    page = new NgMaterialSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
