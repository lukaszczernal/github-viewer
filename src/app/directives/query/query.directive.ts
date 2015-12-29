import { QueryController } from './query.controller';

/** @ngInject */
export function query(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/query/query.html',
    controller: QueryController,
    controllerAs: 'goSearchVm'
  };

}
