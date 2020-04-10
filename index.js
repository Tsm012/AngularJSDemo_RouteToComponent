import angular from "angular";
import "@uirouter/angularjs";
import HOME_COMPONENT from "./components/home-component";
import ABOUT_COMPONENT from "./components/about-component";

let app = angular.module("AngularComponentDemo", ['ui.router'])
    .component("homeComponent", HOME_COMPONENT)
    .component("aboutComponent", ABOUT_COMPONENT);

app.config(function($stateProvider) {
    var helloState = {
      name: 'home',
      url: '/',
      component: 'homeComponent'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      component: 'aboutComponent'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });

app.config(["$locationProvider", function ($locationProvider) {    
    $locationProvider.html5Mode(true);
}]);