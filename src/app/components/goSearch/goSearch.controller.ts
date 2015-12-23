import { RepoProvider } from '../../dataProviders/repo.provider';

export class GoSearchController {
  query: string = 'lukaszczernal';

  /** @ngInject */
  constructor(private RepoProvider: any,
              private $rootScope: angular.IRootScopeService) {}

  search() {
    this.$rootScope.$broadcast('SEARCH', this.query);
  }

}
