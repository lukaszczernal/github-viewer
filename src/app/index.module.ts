/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { goSearch } from '../app/components/goSearch/goSearch.directive';
import { goList } from '../app/components/goList/goList.directive';
import { RepoProvider } from './dataProviders/repo.provider';
import { httpInterceptor } from './services/httpInterceptor';
import { HTTP_STATUS } from './services/httpStatus';

// declare var malarkey: any;
declare var moment: moment.MomentStatic;

module goeuro {
  'use strict';

  angular.module('goeuro', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngNewRouter', 'ui.bootstrap', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('RouterController', RouterController)
    .controller('MainController', MainController)
    .service('RepoProvider', RepoProvider)
    .factory('httpInterceptor', httpInterceptor)
    .constant('HTTP_STATUS', HTTP_STATUS)
    .directive('acmeNavbar', acmeNavbar)
    .directive('goSearch', goSearch)
    .directive('goList', goList);
}
