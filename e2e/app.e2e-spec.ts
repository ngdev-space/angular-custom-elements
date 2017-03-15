import { AngularCustomElementsPage } from './app.po';

describe('angular-custom-elements App', () => {
  let page: AngularCustomElementsPage;

  beforeEach(() => {
    page = new AngularCustomElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
