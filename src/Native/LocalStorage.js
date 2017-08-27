var _invigos$www_webapp_dev$Native_LocalStorage = (function LocalStorage(
    Scheduler,
    Just,
    Nothing,
    Utils
) {
var length = Scheduler.nativeBinding(function bindedLength(callback) {
    callback(
        Scheduler.succeed(localStorage.length)
    );
});

var key = function key(n) {
    return Scheduler.nativeBinding(function bindedKey(callback) {
        var keyStr = localStorage.key(n);

        callback(
            Scheduler.succeed(
                keyStr === null ? Nothing : Just(keyStr)
            )
        );
    });
};

var getItem = function getItem(key) {
    return Scheduler.nativeBinding(function bindedGetItem(callback) {
        var value = localStorage.getItem(key);

        if (value === null) {
            Scheduler.succeed(Nothing);
        } else {
            try {
                Scheduler.succeed(
                    JSON.parse(value)
                );
            } catch (err) {
                Scheduler.fail(err)
            }
        }
    });
};

var setItem = function setItem(key, value) {
    return Scheduler.nativeBinding(function bindedSetItem(callback) {
        localStorage.setItem(key, JSON.stringify(value));

        Scheduler.succeed(Utils.Tuple0);
    });
};

var removeItem = function removeItem(key) {
    return Scheduler.nativeBinding(function bindedRemoveItem(callback) {
        localStorage.removeItem(key);

        Scheduler.succeed(Utils.Tuple0);
    });
};

var clear = Scheduler.nativeBinding(function bindedRemoveItem(callback) {
    localStorage.clear();

    Scheduler.succeed(Utils.Tuple0);
});

return {
    length: length,
    key: key,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear
};
})(
    _elm_lang$core$Native_Scheduler,
    _elm_lang$core$Maybe$Just,
    _elm_lang$core$Maybe$Nothing,
    _elm_lang$core$Native_Utils
);
