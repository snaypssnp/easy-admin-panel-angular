import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import Services from 'services';
import MessageItem from 'components/message-item';

import {MessageListComponent} from './message-list.component.js';

export default angular.module('app.messageList', [Services.name, MessageItem.name])
    .component(MessageListComponent.selector, MessageListComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('messages', {
        url: '/messages/:typeMessage',
        template: '<message-list messages="$ctrl.messages"></message-list>',
        resolve: {
            /* @ngInject */
            messages: function(MessagesService) {
                return MessagesService.getAll();
            }
        },

        /* @ngInject */
        controller: function(messages) {
            this.messages = messages;
        },
        controllerAs: '$ctrl'
    });
}