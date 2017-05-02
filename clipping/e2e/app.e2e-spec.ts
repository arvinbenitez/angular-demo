import { ClippingPage } from './app.po';

describe('clipping App', () => {
  let page: ClippingPage;

  beforeEach(() => {
    page = new ClippingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
