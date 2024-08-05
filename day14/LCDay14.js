// 2621. Sleep

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis)},millis);
        
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */




//  2637. Promise Time Limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {

        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result)=>{
                resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */