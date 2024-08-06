// 2622. Cache With Time Limit


var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    let existingEntry = this.cache.get(key);
    let keyExisted = false;
    if(existingEntry && existingEntry.expirationTime>currentTime){
        keyExisted = true;
        clearTimeout(existingEntry.timer);
    }
    const expirationTime = currentTime + duration;

    const timer = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, expirationTime, timer });

    return keyExisted;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();
    const entry = this.cache.get(key);
    if(entry && entry.expirationTime>currentTime){
        return entry.value;
    }else{
        this.cache.delete(key);
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;
    for([key,value] of this.cache){
        if(value.expirationTime > currentTime){
            count++;
        }else{
            this.chache.deleteKey(key);
        }
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */