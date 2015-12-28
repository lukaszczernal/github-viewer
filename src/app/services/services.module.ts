import { httpInterceptor } from './httpInterceptor';
import { HTTP_STATUS } from './httpStatus';

module services {
  'use strict';

  angular.module('services', [])
    .constant('HTTP_STATUS', HTTP_STATUS)
    .factory('httpInterceptor', httpInterceptor)
}
