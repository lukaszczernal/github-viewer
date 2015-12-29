import httpInterceptor from './httpInterceptor/httpInterceptor.module';
import HTTP_STATUS from './httpStatus/httpStatus.module';

export default angular.module('services', [httpInterceptor, HTTP_STATUS]).name;
