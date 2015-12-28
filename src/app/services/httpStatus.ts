export default angular.module('HTTP_STATUS.service', [])
  .constant('HTTP_STATUS', httpStatus())
  .name;

function httpStatus() {
  return {
    NOT_FOUND: 'NOT_FOUND',
    NO_RESPONSE: 'NO_RESPONSE',
    TIMEOUT: 'TIMEOUT',
    NO_DATA: 'NO_DATA',
    SUCCESS: 'SUCCESS',
    LOADING: 'LOADING'
  }
}
