export const countDupesArray = (array) => {
    const counts = {};
    array.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
};

// export const removeDupesArray = (array) => {
//     return [...new Set(array)];
// };

export const removeDupesArray = (arr) => {
    return arr.reduce((acc, current) => {
        const x = acc.find((item) => item.id === current.id);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
};
