/** @ngInject */

export function httpInterceptor($q: ng.IQService) {
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
          reason = 'NOT_FOUND';
        case 500:
          reason = 'NO_RESPONSE';
        case -1:
          reason = 'TIMEOUT';
      };

      return $q.reject(reason);
    }
  };
}
