// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null) {
        return [];
    }
    const arr = [];
    matrix.forEach((e, index) => {
        if (index % 2 == 0 || index == 0) {
            arr.push(...e);
        } else {
            arr.push(...e.reverse());
        }
    });

    return arr;
};
