/** @ngInject */
export function config (
  $logProvider: ng.ILogProvider,
  $httpProvider: ng.IHttpService)
{
  // enable log
  $logProvider.debugEnabled(true);

  // Set global http interceptors
  $httpProvider.interceptors.push('httpInterceptor');

}
