import angular from 'angular';
import {UserItemComponent} from './user-item.component.js';
import Services from 'services';

export default angular.module('app.userItem', [Services.name])
    .directive(UserItemComponent.selector, () => UserItemComponent)
;