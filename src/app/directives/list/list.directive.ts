import { ListController } from './list.controller';

/** @ngInject */
export function list(): angular.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/list/list.html',
    controller: ListController,
    controllerAs: 'goListVm',
    bindToController: true
  };

}
