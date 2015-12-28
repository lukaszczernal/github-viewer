import QueryModule from '../query/query.module';
import ListModule from '../list/list.module';
import { SearchController } from './search.controller.ts';

/** @ngInject */
export default angular.module('component.search' , [ListModule, QueryModule])
  .controller('SearchController', SearchController)
  .name;
