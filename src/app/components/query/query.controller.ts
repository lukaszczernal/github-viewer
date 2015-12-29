export class QueryController {
  query: string = '';

  /** @ngInject */
  constructor(private RepoProvider: any,
              private $rootScope: angular.IRootScopeService) {}

  search() {
    this.$rootScope.$broadcast('SEARCH', this.query);
  }

}
