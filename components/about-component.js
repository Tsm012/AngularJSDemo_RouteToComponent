function aboutController() {
        var model = this;
        model.message = "Hello from about component";
}

const ABOUT_COMPONENT = {
    controller: aboutController,
    template: '{{$ctrl.message}}'
}

export default ABOUT_COMPONENT;