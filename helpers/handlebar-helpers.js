/* eslint-disable no-plusplus */

module.exports = {
  times(n, block) {
    let accum = '';
    for (let i = 0; i < n; ++i) accum += block.fn(i);
    return accum;
  },
};
