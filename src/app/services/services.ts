import httpInterceptor from './httpInterceptor';
import HTTP_STATUS from './httpStatus';

export default angular.module('services', [httpInterceptor, HTTP_STATUS]).name;
