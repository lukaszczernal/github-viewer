import { RepoProvider } from '../../dataProviders/repo.provider';

export class GoListController {
  repos: any

  /** @ngInject */
  constructor(private RepoProvider: any,
              private $scope: angular.IScope,
              private $rootScope: angular.IRootScopeService) {
    this.addEventListeners();
  }

  search = (query): angular.IPromise<any> => {
    return this.RepoProvider.get(query)
           .then(this.getRepoSuccess)
           .catch(this.getRepoFail);
  }

  private getRepoSuccess = (res) => {
    this.repos = res;
  }

  private getRepoFail = (err) => {
    console.log('go list err',err)
    this.repos = [];
  }

  private addEventListeners() {
    var onSearch = (evt, query) => { this.search(query); };
    var onSearchListener = this.$rootScope.$on('SEARCH', onSearch);

    this.$scope.$on('$destroy', function() { onSearchListener() });
  }

}
