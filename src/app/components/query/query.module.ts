import { QueryController } from './query.controller.ts';
import { Query } from './query.directive.ts';

export default angular.module('component.query',[])
  .controller('QueryController', QueryController)
  .directive('query', Query)
  .name;
