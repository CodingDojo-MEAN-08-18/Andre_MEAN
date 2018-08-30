var _ = {
    map: function(arr, callback) {
        for (let each = 0; each < arr.length; each++) {
            arr[each] = callback(arr[each]);
        }
    },

    reduce: function(arr, callback, memo) {
        if (typeof(memo) == "undefined") {
            memo = arr[0];
            arr[0] = 0;
        }
        for (let i = 0; i < arr.length; i++) {
            memo = callback(arr[i], memo);
        }
        return memo;
    },

    find: function(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },

    filter: function(arr, callback) {
        var result = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reject: function(arr, callback) {
        var result = [];
        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
};

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
console.log(evens);