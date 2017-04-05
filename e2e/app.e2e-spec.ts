import { GravizoeditorPage } from './app.po';

describe('gravizoeditor App', () => {
  let page: GravizoeditorPage;

  beforeEach(() => {
    page = new GravizoeditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
