function maxSubArray(arr) {

    const obj = {}

    if (arr.length === 1) {
        return arr[0];
    }

    let result = arr[0]
    let maxEnding = arr[0]

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            obj[i] = item;
        }
        console.log(obj)
        for (let j = 0; j < arr.length; j++) {
            maxEnding = Math.max(maxEnding + obj[j], obj[j]);
            console.log("maxEnding", maxEnding);
            result = Math.max(result, maxEnding);
            console.log("result", result);
        }
        return result;
    }
}

console.log(maxSubArray([2, 3, -8, 7, -1, 2, 3]));