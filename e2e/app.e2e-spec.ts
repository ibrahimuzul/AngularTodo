import { AngularTodoPage } from './app.po';

describe('angular-todo App', function() {
  let page: AngularTodoPage;

  beforeEach(() => {
    page = new AngularTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
