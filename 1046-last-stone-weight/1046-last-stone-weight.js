/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
     while (stones.length > 1) {
        // Sort descending
        stones.sort((a, b) => b - a);

        let first = stones.shift();   // biggest
        let second = stones.shift();  // second biggest

        if (first !== second) {
            stones.push(first - second);
        }
    }

    return stones.length ? stones[0] : 0;
};