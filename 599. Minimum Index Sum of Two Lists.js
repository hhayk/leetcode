/*

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
    Input:
    ["Shogun", "Tapioca Express", "Burger King", "KFC"]
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

    Output: ["Shogun"]
    
    Explanation: The only restaurant they both like is "Shogun".

Example 2:
    Input:
    ["Shogun", "Tapioca Express", "Burger King", "KFC"]
    ["KFC", "Shogun", "Burger King"]

    Output: ["Shogun"]

    Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).


Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.

*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();
    list1.forEach((el, i) => map.set(el, [i]));
    list2.forEach((el, i) => {
        if (map.has(el)) map.set(el, [...map.get(el), i])
        else map.set(el, [i]);
    })

    let map2 = new Map();
    let min = Number.MAX_VALUE;
    for (let [key, value] of map.entries()) {
        if (value.length == 2) {
            let val = value[0] + value[1];
            min = Math.min(min, val);
            if (map2.has(val)) map2.set(val, [...map2.get(val), key]);
            else map2.set(val, [key]);
        }
    }

    return map2.get(min);
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));