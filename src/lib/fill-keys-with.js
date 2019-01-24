module.exports = (obj, value) => Object.keys(obj).reduce((acc, key) => {
    acc[key] = value;
    return acc;
}, {});
