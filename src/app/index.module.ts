/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config, routerConfig } from './index.config';
import { RouterController } from './index.route';

import Directives from './directives/directives';
import Services from './services/services';
import Providers from './providers/providers';

import SearchModule from './components/search/search.module';

module goeuro {
  'use strict';

  angular.module('goeuro', [SearchModule, Services, Providers, Directives, 'ngNewRouter', 'ui.bootstrap'])
    .config(config)
    .config(routerConfig)
    .controller('RouterController', RouterController);

}
