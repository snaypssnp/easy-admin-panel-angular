import template from './auth-login.tpl.html';
import './auth-login.css';

export let AuthLoginComponent = {
    template,
    selector: 'authLogin',
    controller: class MessageCreateCtrl {
        /* @ngInject */
        constructor(AuthService, $state) {
            Object.assign(this, {AuthService, $state});
        }

        login() {
            this.AuthService.authorize(this.email, this.password)
                .then((result) => {
                    this.error = null;
                    this.$state.go('dashboard');
                })
                .catch((error) => {
                    this.error = error.message;
                })
        }
    },

};