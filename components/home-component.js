function homeController() {
        var model = this;
        model.message = "Hello from home component";
}

const HOME_COMPONENT = {
    controller: homeController,
    template: '{{$ctrl.message}}'
}

export default HOME_COMPONENT;