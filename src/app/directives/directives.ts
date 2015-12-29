import { query } from './query/query.directive';
import { list } from './list/list.directive';

export default angular.module('directives', [])
  .directive('query', query)
  .directive('list', list)
  .name;
