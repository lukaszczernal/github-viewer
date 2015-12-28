export default angular.module('httpInterceptor.service', [])
  .factory('httpInterceptor', httpInterceptor)
  .name;

/** @ngInject */
function httpInterceptor($q: ng.IQService, HTTP_STATUS: any) {

  return {

    // Global Ajax calls timeout
    request: function(config) {
      config.timeout = 30000; // 30 sec
      return config;
    },

    // Unifying Ajax error responses
    responseError: function (err) {
      let reason: string;
      switch (err.status) {
        case 404:
          reason = HTTP_STATUS.NOT_FOUND;
          break;
        case 500:
          reason = HTTP_STATUS.NO_RESPONSE;
          break;
        case -1:
          reason = HTTP_STATUS.TIMEOUT;
          break;
      };

      return $q.reject(reason);
    }
  };
}
