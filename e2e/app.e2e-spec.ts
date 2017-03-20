import { KBPage } from './app.po';

describe('kb App', () => {
  let page: KBPage;

  beforeEach(() => {
    page = new KBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
