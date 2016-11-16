import { MadhatterPage } from './app.po';

describe('madhatter App', function() {
  let page: MadhatterPage;

  beforeEach(() => {
    page = new MadhatterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
