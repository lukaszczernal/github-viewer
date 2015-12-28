import { RepoProvider } from '../../dataProviders/repo.provider';
import { HTTP_STATUS } from '../../services/httpStatus';

export class GoListController {
  public repos: Array<any>;
  public msg: string;

  /** @ngInject */
  constructor(
    private HTTP_STATUS: any,
    private RepoProvider: any,
    private $scope: angular.IScope,
    private $rootScope: angular.IRootScopeService
  ) {
    this.setStatus('CLEAR');
    this.addEventListeners();
  }

  public search = (query): angular.IPromise<any> => {
    var promise;
    this.setStatus(this.HTTP_STATUS.LOADING);
    this.repos = [];

    promise = this.RepoProvider.get(query);
    promise.then(this.getRepoSuccess);
    promise.catch(this.getRepoFail);

    return promise;
  };

  private getRepoSuccess = (res) => {
    var status = (res.length > 0) ? this.HTTP_STATUS.SUCCESS : this.HTTP_STATUS.NO_DATA;
    this.repos = res;
    this.setStatus(status);
  };

  private getRepoFail = (err) => {
    this.setStatus(err);
  };

  private setStatus = (status) => {
    switch (status) {
      case this.HTTP_STATUS.SUCCESS:
        this.msg = '';
        break;
      case this.HTTP_STATUS.NO_RESPONSE: //500
        this.msg = 'Ops! Something went wrong. Try again.';
        break;
      case this.HTTP_STATUS.NO_DATA: //200 - no repos
        this.msg = 'User has no repos.';
        break;
      case this.HTTP_STATUS.NOT_FOUND: //404
        this.msg = 'Username not found.';
        break;
      case this.HTTP_STATUS.LOADING:
        this.msg = 'Searching...';
        break;
      case 'CLEAR':
        this.msg = 'Search for username';
        break;
    }
  };

  private addEventListeners() {
    var onSearch = (evt, query) => { this.search(query); };
    var onSearchListener = this.$rootScope.$on('SEARCH', onSearch);

    this.$scope.$on('$destroy', function() { onSearchListener(); });
  };
};
