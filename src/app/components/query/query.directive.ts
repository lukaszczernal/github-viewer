import { QueryController } from './query.controller';

/** @ngInject */
export function Query(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/query/query.html',
    controller: QueryController,
    controllerAs: 'goSearchVm'
  };

}
