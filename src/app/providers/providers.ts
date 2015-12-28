import { RepoProvider } from './repo.provider';

export default angular.module('providers', [])
  .service('RepoProvider', RepoProvider)
  .name;
