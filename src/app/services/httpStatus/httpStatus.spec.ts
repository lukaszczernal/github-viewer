import moduleName from './httpStatus.module';

describe('HTTP_STATUS service', function() {
  var HTTP_STATUS;

  beforeEach(function() {
    angular.mock.module(moduleName);

    inject(function(_HTTP_STATUS_) {
      HTTP_STATUS = _HTTP_STATUS_;
    });

  });


  it('should contain proper statuses', function() {
    var statusMock = ['NOT_FOUND', 'NO_RESPONSE', 'TIMEOUT', 'NO_DATA', 'SUCCESS', 'LOADING'];

    statusMock.forEach(function(key) {
      expect(HTTP_STATUS[key]).toBeDefined();
    });
  });

});
