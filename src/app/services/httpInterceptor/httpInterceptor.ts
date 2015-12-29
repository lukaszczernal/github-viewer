/** @ngInject */
export function httpInterceptor($q: ng.IQService, HTTP_STATUS: any) {

  return {

    // global Ajax calls timeout
    request: function(config: ng.IRequestShortcutConfig) {
      config.timeout = 30000; // 30 sec
      return config;
    },

    // unifying Ajax error responses
    responseError: function (err: any) {
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
