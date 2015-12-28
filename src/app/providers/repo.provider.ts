export class RepoProvider {
  public endpoint: string = 'https://api.github.com/users';

  /* @ngInject */
  constructor(private $http: angular.IHttpService) {};

  transformReponses = (res: any): any => {
    if (!res) { return ''; };
    let result = res.data;
    result.forEach(this.transformReponse);
    return result;
  };

  transformReponse(res: any, index: number, array: Array<any>) {
    array[index] = {
      id    : res.id,
      title : res.name,
      url   : res.html_url
    };
  }

  get(query: string): angular.IPromise<any> {
    let url: string;
    let promise: angular.IPromise<any>;

    url = [this.endpoint, query, 'repos'].join('/');

    promise = this.$http.get(url);
    promise = promise.then(this.transformReponses);

    return promise;
  }
}
