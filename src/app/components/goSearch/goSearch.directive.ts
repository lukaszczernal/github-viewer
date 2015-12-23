import { GoSearchController } from './goSearch.controller';

/** @ngInject */
export function goSearch(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/goSearch/goSearch.html',
    controller: GoSearchController,
    controllerAs: 'goSearchVm'
  };

}

// function linkFunc(scope: IProjectsScope, el: JQuery, attr: any, vm: MalarkeyController) {
//   // var watcher;
//   // var typist = vm.malarkey(el[0], {
//   //   typeSpeed: 40,
//   //   deleteSpeed: 40,
//   //   pauseDelay: 800,
//   //   loop: true,
//   //   postfix: ' '
//   // });
//   //
//   // el.addClass('acme-malarkey');
//   //
//   // angular.forEach(scope.extraValues, function(value: string) {
//   //   typist.type(value).pause().delete();
//   // });
//   //
//   // watcher = scope.$watch('vm.contributors', function(current: IContributor, original: IContributor) {
//   //   angular.forEach(vm.contributors, function(contributor: IContributor) {
//   //     typist.type(contributor.login).pause().delete();
//   //   });
//   // });
//   //
//   // scope.$on('$destroy', function () {
//   //   watcher();
//   // });
// }

// export interface IContributor {
//   id: number;
//   login: string;
// }

// export class GoSearchController {
//   // public contributors: any[];
//
//   constructor() {
//     // console.log('tst');
//   }
//   //
//   // activate() {
//   //   return this.getContributors()
//   //     .then(() => {
//   //       this.$log.info('Activated Contributors View');
//   //     });
//   // }
//   //
//   // getContributors() {
//   //   return this.githubContributor.getContributors(10)
//   //     .then((data: any) => {
//   //       this.contributors = data;
//   //       return this.contributors;
//   //     });
//   // }
// }
