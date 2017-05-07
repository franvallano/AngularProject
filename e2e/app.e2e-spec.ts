import { AngularprojectPage } from './app.po';

describe('angularproject App', () => {
  let page: AngularprojectPage;

  beforeEach(() => {
    page = new AngularprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
