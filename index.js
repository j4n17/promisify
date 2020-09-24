
function promisify(fn, ctx = swan) {

    if (typeof fn !== 'function') {
        throw new TypeError(String(method) + ' is not a function');
    }

    return function (options) {

        if (Object.prototype.toString.call(options) !== '[object Object]') {
            throw new TypeError(String(options) + ' is not a object');
        }

        return new Promise((resolve, reject) => {

            options.success = function (...arg) {
                resolve(...arg);
            };

            options.fail = function (...arg) {
                reject(...arg);
            }

            try {
                fn.call(ctx, options);
            } catch (error) {
                reject(error);
            }

        });
        
    };
    
}

module.exports = promisify;