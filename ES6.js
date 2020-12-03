//数组
console.log(Array.of(1, 2, 3, 4)); //[1, 2, 3, 4]
console.log(Array.of(1, true, '2')); //[1, true, '2']
console.log(Array.of()); //[]

Array.from() //将数组对象或可迭代对象转化为数组
console.log(Array.from([1, 2])) //[1, 2]
console.log(Array.from([1, , 3])) //[1, undefined, 3]
console.log(Array.from([1, 2, 3], (n) => n * 2)); //[2, 4, 6]

let map = new Map();
map.set('key0', 'value0')
map.set('key1', 'value1')
console.log(Array.from(map)); //[['key0', 'value0'], ['key0', 'value0']]

let str = 'abc'
console.log(Array.from(str)); //['a', 'b', 'c']

let arr = Array.of(1, 2, 3, 4);
console.log(arr.find(item => item > 2)); // 3
//查找符合条件的元素索引
console.log(arr.findIndex(item => item =1)); //0
//填充
console.log(arr.fill(0, 1, 2)) //[1, 0, 3, 4]
//将一定范围索引的数组元素修改为此数组另一指定范围索引的元素
console.log(arr.copyWithin(0, 2, 4))

//遍历
for(let [key, value] of ['a', 'b'].entries) {
    console.log(key, value)
}
//0 'a'
//1 'b'
let entries = ['a', 'b'].entries();
console.log(entries.next().value); //[0, 'a']
console.log(entries.next().value); //[1, 'b']
console.log([, 'a'].entries()); //[0, undefined], [1, 'a']
for(let key of ['a', 'b'].keys) {
    console.log(key)
}
//0, 1
for(let value of ['a', 'b'].values) {
    console.log(value)
}
//'a' 'b'

//包含
[1, 2, 3].includes(1) //true
[1, NaN, 3].includes(NaN) //true

//嵌套数组转一维数组
console.log([1, [2, 3], 4].flat()); // [1, 2, 3, 4]
//指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)) //[1, 2, 3, [4, 5]]
//不管嵌套多少层
console.log([1,[2, [3, [4, 5]]]].flat(Infinity)) //[1, 2, 3, 4, 5]
console.log([1, , 3].flat()); //[1, 3]

//复制数组
let arr = [1, 2]
arr1 = [...arr]
console.log(arr1) // [1, 2]

{/* 函数  */}

function fn(name, age=17) {
    console.log(name + ',' + age)
}
fn('Amy', 18) // Amy,18

{/**类 */}
//匿名类
let Example = class {
    constructor(a) {
        this.a = a;
    }
}
//命名类
let Example = class Example {
    //类的默认方法 创建类的实例化对象时被调用
    constructor(a) {
        this.a = a;
    }
}
//类声明 不可重复声明
class Example {
    constructor(a) {
        this.a = a;
    }
    //静态属性
    static a = 2;
    //实力属性
    b = 1;
    //静态方法
    static sum(a, b) {
        console.log(a+b)
    }
    /**getter setter 必须同级出现 */
    get a() {
        console.log('getter')
        return this._a
    }

    set a(a) {
        console.log('setter')
        this._a = a
    }
}
//extends 继承
class SubExample extends Example {

}

let exampleInstance = new Example()
Example.sum(2, 2)
