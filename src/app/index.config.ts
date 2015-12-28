/** @ngInject */
export function config ($logProvider: ng.ILogProvider,$httpProvider: ng.IHttpService){

  // enable log
  $logProvider.debugEnabled(true);

  // Set global http interceptors
  $httpProvider.interceptors.push('httpInterceptor');
}

/** @ngInject */
export function routerConfig($componentLoaderProvider: any) {
  $componentLoaderProvider.setTemplateMapping(function(name: String) {
    return 'app/components/' + name + '/' + name + '.html';
  });
}
