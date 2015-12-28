import { ListController } from './list.controller.ts';
import { List } from './list.directive.ts';

export default angular.module('component.list',[])
  .controller('ListController', ListController)
  .directive('list', List)
  .name;
