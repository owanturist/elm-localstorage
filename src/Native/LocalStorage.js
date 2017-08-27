var _invigos$www_webapp_dev$Native_LocalStorage = (function LocalStorage(Scheduler) {
var length = Scheduler.nativeBinding(function length(callback) {
    callback(
        Scheduler.succeed(localStorage.length)
    );
});

return {
    length: length
};
})(
    _elm_lang$core$Native_Scheduler
);
