import { RoutingappPage } from './app.po';

describe('routingapp App', () => {
  let page: RoutingappPage;

  beforeEach(() => {
    page = new RoutingappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
