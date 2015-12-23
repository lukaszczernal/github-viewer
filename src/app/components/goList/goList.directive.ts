import { GoListController } from './goList.controller';

/** @ngInject */
export function goList(): angular.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/goList/goList.html',
    controller: GoListController,
    controllerAs: 'goListVm',
    bindToController: true
  };

}
