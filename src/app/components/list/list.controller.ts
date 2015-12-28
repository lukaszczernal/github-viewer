export class ListController {
  public repos: Array<any>;
  public msg: string;

  /** @ngInject */
  constructor(
    private HTTP_STATUS: any,
    private RepoProvider: any,
    private $scope: ng.IScope,
    private $rootScope: ng.IRootScopeService
  ) {
    this.setStatus('CLEAR');
    this.addEventListeners();
  }

  public search = (query: string): angular.IPromise<any> => {
    var promise;

    this.setStatus(this.HTTP_STATUS.LOADING);
    this.repos = [];

    promise = this.RepoProvider.get(query);
    promise.then(this.getRepoSuccess);
    promise.catch(this.getRepoFail);

    return promise;
  };

  private getRepoSuccess = (res: Array<any>) => {
    var status = (res.length > 0) ? this.HTTP_STATUS.SUCCESS : this.HTTP_STATUS.NO_DATA;
    this.repos = res;
    this.setStatus(status);
  };

  private getRepoFail = (err: string) => {
    this.setStatus(err);
  };

  private setStatus = (status: string) => {
    switch (status) {
      case this.HTTP_STATUS.SUCCESS:
        this.msg = '';
        break;
      case this.HTTP_STATUS.NO_RESPONSE: // 500
        this.msg = 'Ops! Something went wrong. Try again.';
        break;
      case this.HTTP_STATUS.NO_DATA: // 200 - no repos
        this.msg = 'User has no repos.';
        break;
      case this.HTTP_STATUS.NOT_FOUND: // 404
        this.msg = 'Username not found.';
        break;
      case this.HTTP_STATUS.LOADING:
        this.msg = 'Searching...';
        break;
      case 'CLEAR':
        this.msg = 'Type GitHub username and click search (or press Enter)';
        break;
    }
  };

  private addEventListeners() {
    var onSearch = (evt: ng.IAngularEvent, query: string) => { this.search(query); };
    var onSearchListener = this.$rootScope.$on('SEARCH', onSearch);

    this.$scope.$on('$destroy', function() { onSearchListener(); });
  };
};
