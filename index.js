import angular from "angular";
import HOME_COMPONENT from "./components/home-component";

angular.module("AngularComponentDemo", [])
    .component("homeComponent", HOME_COMPONENT);