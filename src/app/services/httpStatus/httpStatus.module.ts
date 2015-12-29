import { HttpStatus } from './httpStatus';

export default angular.module('HTTP_STATUS.service', [])
  .constant('HTTP_STATUS', HttpStatus)
  .name;
