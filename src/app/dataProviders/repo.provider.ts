/* @ngInject */

export class RepoProvider {
  public endpoint: string = 'https://api.github.com/users';

  constructor(private $http: angular.IHttpService) {};

  transformReponse(res, index, array) {
    array[index] = {
      title: res.name
    }
  }

  transformReponses = (res): any => {
    if (!res) return '';
    let result = res.data;
    result.forEach(this.transformReponse);
    return result;
  }

  get(query:string): angular.IPromise<any> {
    let url: string;
    let promise: angular.IPromise<any>;

    url = [this.endpoint, query, 'repos'].join('/');

    // promise = this.$http.get(url);
    promise = this.$http({
      method: "get",
      url: url
    });
    promise = promise.then(this.transformReponses);

    return promise;
  }
}

// export class RepoProvider {
//   public apiHost: string = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
//
//   /** @ngInject */
//   constructor(private $log: angular.ILogService, private $http: angular.IHttpService) {
//
//   }
//
//   getContributors(limit: number = 30): angular.IPromise<any[]> {
//     return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
//       .then((response: any): any => {
//         return response.data;
//       })
//       .catch((error: any): any => {
//         this.$log.error('XHR Failed for getContributors.\n', error.data);
//       });
//   }
// }
