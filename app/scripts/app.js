'use strict';

/**
* @ngdoc overview
* @name adminApp
* @description
* # adminApp
*
* Main module of the application.
*/
angular
    .module('adminApp', [
        'ngAria',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'pascalprecht.translate'
    ])
    .config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {

        //$translateProvider.translations('pt_BR', {
        //    'HEADLINE': 'Introducing ngTranslate',
        //    'SUB_HEADLINE': 'Translations for your Angular Apps!',
        //    'AUTHOR_NAME': 'Pascal Precht',
        //    'GITHUB_LINK_TEXT': 'View source on GitHub',
        //    'FORGOT_PASSWORD': 'Esqueceuuu'
        //});
        $translateProvider.useStaticFilesLoader({
            prefix: 'translates/locale-',// path to translations files
            suffix: '.json'// suffix, currently- extension of the translations
        });

        $translateProvider.preferredLanguage('pt_BR');

        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);
