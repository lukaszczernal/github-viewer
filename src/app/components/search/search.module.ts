import { SearchController } from './search.controller.ts';

/** @ngInject */
export default angular.module('component.search' , [])
  .controller('SearchController', SearchController)
  .name;
