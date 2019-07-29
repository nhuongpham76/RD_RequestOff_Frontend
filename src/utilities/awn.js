export default class Awn {
    static success(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.success = title;
        vm.$awn.success(message);
    }

    static info(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.info = title;
        vm.$awn.info(message);
    }

    static warning(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.warning = title;
        vm.$awn.warning(message);
    }

    static error(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.alert = title;
        vm.$awn.alert(message);
    }
}