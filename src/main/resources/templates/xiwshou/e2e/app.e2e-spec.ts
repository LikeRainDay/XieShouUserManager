import { XiwshouPage } from './app.po';

describe('xiwshou App', () => {
  let page: XiwshouPage;

  beforeEach(() => {
    page = new XiwshouPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
