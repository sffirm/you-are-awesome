// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value',
    });
    return propertyName;
};

const createProtoMagicObject = () => {
    const magic = () => {};

    magic.prototype = magic.__proto__;

    return magic;
};

let incrementorCount = 0;

const incrementor = () => {
    incrementorCount++;
    return incrementor;
};

incrementor.toString = incrementor.valueOf = () => incrementorCount;

let asyncIncrementorCount = 0;

const asyncIncrementor = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            asyncIncrementorCount++;
            resolve(asyncIncrementorCount)
        }, 5);
    });
};

function* createIncrementer() {
    let index = 1;
    while(true)
        yield index++;
};

const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
};

const getDeepPropertiesCount = (object) => {
    let amount = 0;

    (countProps = (obj) => {
        amount += Object.keys(obj).length;

        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                countProps(obj[key]);
            }
        });
    })(object);

    return amount;
};

const createSerializedObject = () => ({
    property: 'value',
    toJSON: () => 'magic',
    toString: () => 'magic',
});

const sortByProto = (objects) => objects.sort((left, right) => left.__proto__ - right.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;