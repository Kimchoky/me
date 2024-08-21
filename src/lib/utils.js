/* could be run on both client/server side */


/**
 * returns iterator from start to end.
 * c.f.) iterate(0, 2) will return 0, 1, 2 in order.
 * @param {number} start 
 * @param {number} end 
 */
export function* iterate(start, end) {
    for (let i = start; i <= end; i++)
        yield i;
}