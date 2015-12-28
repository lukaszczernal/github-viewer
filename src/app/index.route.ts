/** @ngInject */
export class RouterController {
  constructor($router: any) {
    $router.config([
      { path: '/', component: 'search' }
    ]);
  }
}
