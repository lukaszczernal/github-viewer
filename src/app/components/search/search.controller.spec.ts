import { SearchController } from './search.controller.ts';

describe("Search component: Controller", function() {

  it('is defined', function() {
    expect(SearchController).toBeDefined();
  });

  it('contains title property', function() {
    let searchCtrl = new SearchController();
    expect(searchCtrl.title).toBeDefined();
  });

});
