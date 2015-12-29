import { httpInterceptor } from './httpInterceptor';

export default angular.module('httpInterceptor.service', [])
  .factory('httpInterceptor', httpInterceptor)
  .name;
