---
category:
- 前端
tag:
- js
- 手撕代码

data: 2022-03-14
permalink: /developer/web/code_achieve/promise.html
---

# Promise实现

## 观察者模式

我们先来看一个最简单的Promise的使用：

```js
const promsie = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result')
    }, 1000)
})
promsie.then(res => {
    console.log(res)
}, err => {
    console.log(err)
})
```

观察这个例子，我们先分析一下Promise的调用流程

- *Promise*的构造方法接受一个函数callback，在new Promise时就立即执行这个fn
- *callback*内部的异步任务被放入宏/微任务队列，等待执行
- *then*被执行，收集成功/失败回调，放入成功/失败队列
- *callback*的异步任务被执行，触发resolve/reject，从成功失败队列中去除回调依次执行

这里我们能发现，这是个*观察者模式*，这种<font style="color:red">收集依赖 -> 触发通知 -> 取出依赖执行</font>的方式，被广泛应用于观察者模式的实现。在Promise里，执行顺序是<font style="color:red">then收集依赖 -> 异步触发resolve -> resolve执行依赖</font>

依此，我们可先简单实现Promise的基础功能

```js
class MyPromise {
    // 构造方法接受一个回调
    constructor(callback) {
        // 初始化执行成功/失败回调队列
        this.resolveList = []
        this.rejectList = []

        // 初始化resolve函数
        const resolve = (value) => {
            // 从成功队列中取出回调依次执行
            while (this.resolveList.length) {
                const fn = this.resolveList.shift()
                fn(value)
            }
        }
        const reject = (value) => {
            // 从失败队列中取出回调依次执行
            while (this.rejectList.length) {
                const fn = this.rejectList.shift()
                fn(value)
            }
        }

        try {
            // 执行传入的回调，将resolve、reject作为参数传入
            callback(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    // then接受两个参数，一个成功的回调、一个失败的回调,将他们添加入队列
    then(resolveFn, rejectFn) {
        this.resolveList.push(resolveFn)
        this.rejectList.push(rejectFn)
    }
}
```

写完代码我们测试一下

```js
const promsie = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('result')
    }, 1000)
})
promsie.then(res => {
    console.log(res)
})

// 一秒后输出result
```

这里我们就实现了一个超低配的Promise，是我们能在then的回调里取得异步操作的返回值

## Promise A+规范

ES6的Promise实现，需要遵循[Promise/A+规范](https://promisesaplus.com/)。Promise/A+规范较长，这里只总结两点核心规则：
> 1、Promise本质是一个状态机，且状态只能分为以下三种：<font style="color:red">Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态）</font>，状态的变更是单向的，只能从Pending -> Fulfilled，Pending ->Rejected，且状态一旦变更，就不可改变
>  
>  
> 2、<font style="color:red">then方法</font>接受两个可选参数，分别对应状态改变时出发的回调。then方法返回一个Promise，then方法可以被连续调用。

根据这两点规范，我们再来补充一下代码

```js
const States = {
    PENDING: 'Pending',
    FULFILLED: 'Fulfilled',
    REJECTED: 'Rejected'
}

class MyPromise {
    // 构造方法接受一个回调
    constructor(callback) {
        // 初始化执行成功/失败回调队列
        this.resolveList = []
        this.rejectList = []
        // Promise状态
        this.state = States.PENDING

        // 初始化resolve函数
        const resolve = (value) => {
            // 对应规范中状态单向且不可重复改变
            if (this.state !== States.PENDING) return
            this.state = States.FULFILLED
            // 从成功队列中取出回调依次执行
            while (this.resolveList.length) {
                const fn = this.resolveList.shift()
                fn(value)
            }
        }
        const reject = (value) => {
            if (this.state !== States.PENDING) return
            this.state = States.REJECTED
            // 从失败队列中取出回调依次执行
            while (this.rejectList.length) {
                const fn = this.rejectList.shift()
                fn(value)
            }
        }

        try {
            // 执行传入的回调，将resolve、reject作为参数传入
            callback(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    // then接受两个参数，一个成功的回调、一个失败的回调,将他们添加入队列
    then(resolveFn, rejectFn) {
        this.resolveList.push(resolveFn)
        this.rejectList.push(rejectFn)
    }
}
```

## then的链式调用
Promise可以链式调用，我们先来观察一下他是如何使用的
```js
const promsie = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1')
    }, 1000)
})
promsie.then(res => {
    console.log(res, '第一次then')
    // then回调中可以return一个Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2')
        }, 1000)
    })
}).then(res => {
    console.log(res, '第二次then')
    return 3
}).then(res => {
    console.log(res, '第三次then')
})
```

输出
```shell
1 '第一次then'
2 '第二次then'
3 '第三次then'
```

思考一下如何实现这种链式调用
1. 显然<font style="color:red">.then()</font>需要返回一个Promise，这样他才能找到then方法
2. <font style="color:red">.then()</font>的回调需要拿到上一个<font style="color:red">.then()</font>的返回值
3. <font style="color:red">.then()</font>的回调需要按照顺序执行，比如上面的代码，中间虽然return了一个Promise，但执行顺序仍然是1 -> 2 -> 3。我们要等待当前Promise状态变更之后，再执行下一个then的回调，这就要求我们需要对then的返回值分类讨论

```js
class MyPromise {
    // ... 
    
    
    then(resolveFn, rejectFn) {
        // 返回一个Promise，使其能被连续调用
        return new MyPromise((resolve, reject) => {
            const fulfilledFn = (value) => {
                try {
                    const result = resolveFn(value)
                    // 判断类型分类讨论，如果是Promise，则等待Promise状态变更,不是则直接resolve
                    result instanceof MyPromise ? result.then(resolve, result) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }
            this.resolveList.push(fulfilledFn)
            const rejectedFn = (error) => {
                try {
                    const result = rejectedFn(error)
                    // reject同理
                    result instanceof MyPromise ? result.then(resolve, result) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }
            this.rejectList.push(rejectedFn)
        })
    }
}

```

测试

```js
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500);
})

p1
  .then(res => {
    console.log(res)
    return 2
  })
  .then(res => {
    console.log(res)
    return 3
  })
  .then(res => {
    console.log(res)
  })

//输出 1 2 3

```

## 值穿透、状态已变更的情况
then我们还有两个细节需要处理
1. *值穿透*：根据规范，如果then接受的参数不是function，我们应该忽略它。
2. *处理状态已经变更的情况*：有些时候，resolve/reject在then执行之前就已经执行（比如Promise.resolve）,所以，对于状态已经变更的情况，我们直接执行then回调

```js
class MyPromise {
    // 用来存储上一个then返回的值（见完整代码）
    _value
    // ...
    
    then(resolveFn, rejectFn) {
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ? rejectFn = error => {
            throw new Error(error)
        } : null
        
        return new MyPromise((resolve, reject) => {
            const fulfilledFn = (value) => {
                try{
                    const result = resolveFn(value)
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }
            const rejectedFn = (err) => {
                try{
                    const result = rejectedFn(err)
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }
            
            switch (this.state) {
                case States.PENDING:
                    // 正常从pending状态来，就加入队列
                    this.resolveList.push(fulfilledFn)
                    this.rejectList.push(rejectedFn)
                    break
                case States.FULFILLED:
                    // 状态已经改变时，就直接进行回调
                    fulfilledFn(this._value) // this._value是上一个then返回的值，见完整代码
                    break
                case States.REJECTED:
                    rejectedFn(this._value)
                    break
            }
        })
    }
}
```


## Promise.prototype.catch()
> catch方法返回一个Promise，处理拒绝的情况。

```js
class MyPromise {
    // ...
    
    // 本质就是执行then的第二个回调
    catch(rejectFn) {
        return this.then(undefined, rejectFn)
    }
}
```

## Promise.prototype.finally()
> finally方法是Promise不管是成功还是拒绝都会执行的回调函数。finally之后还可以继续then，并且会将值原封不动的传递给后面的then
```js
class MyPromise {
    // ...
    
    finally(callback) {
        return this.then(
            value => MyPromise.resolve(callback()).then(() => value),
            error => MyPromise.resolve(callback()).then(() => {throw error})
        )
    }
}
```

## Promise.resolve、Promise.reject、Promise.all、Promise.race

```js
class MyPromise {
    // ...
    
    static resolve(value) {
        // 根据规范，如果传入的是一个Promise，则直接返回
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve, reject) => resolve(value))
    }
    
    static reject(value) {
        return new MyPromise((resolve, reject) => reject(value))
    }
    
    /**
     * 当所有的项状态都成功，则成功，有一个失败则失败,成功时返回所有项
     * @param promiseList Promise组成的数组
     */
    static all(promiseList) {
        return new MyPromise((resolve, reject) => {
            let index = 0
            const result = []
            promiseList.forEach(it => {
                it.then(res => {
                    // 按顺序放入
                    result[index] = res
                    index++
                    if (index === promiseList.length) {
                        resolve(result)
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }
    
    /**
     * 当有一项成功或失败时，状态改变
     * @param promiseList Promise组成的数组
     */
    static race(promiseList) {
        return new MyPromise((resolve, reject) => {
            for (let p of promiseList) {
                p.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }
}
```


## 完整代码
```js
const States = {
    PENDING: 'Pending',
    FULFILLED: 'Fulfilled',
    REJECTED: 'Rejected'
}

class MyPromise {
    // 构造方法接受一个回调
    constructor(callback) {
        // 初始化执行成功/失败回调队列
        this.resolveList = []
        this.rejectList = []
        // Promise状态
        this.state = States.PENDING
        // 存储上一次then的返回值
        this._value = undefined

        // 初始化resolve函数
        const resolve = (value) => {
            // 对应规范中状态单向且不可重复改变
            if (this.state !== States.PENDING) return
            this.state = States.FULFILLED
            this._value = value
            // 从成功队列中取出回调依次执行
            while (this.resolveList.length) {
                const fn = this.resolveList.shift()
                fn(value)
            }
        }
        const reject = (value) => {
            if (this.state !== States.PENDING) return
            this.state = States.REJECTED
            this._value = value
            // 从失败队列中取出回调依次执行
            while (this.rejectList.length) {
                const fn = this.rejectList.shift()
                fn(value)
            }
        }

        try {
            // 执行传入的回调，将resolve、reject作为参数传入
            callback(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    // then接受两个参数，一个成功的回调、一个失败的回调,将他们添加入队列
    then(resolveFn, rejectFn) {
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ? rejectFn = error => {
            throw new Error(error)
        } : null

        return new MyPromise((resolve, reject) => {
            const fulfilledFn = (value) => {
                try{
                    const result = resolveFn(value)
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }
            const rejectedFn = (err) => {
                try{
                    const result = rejectedFn(err)
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }

            switch (this.state) {
                case States.PENDING:
                    // 正常从pending状态来，就加入队列
                    this.resolveList.push(fulfilledFn)
                    this.rejectList.push(rejectedFn)
                    break
                case States.FULFILLED:
                    // 状态已经改变时，就直接进行回调
                    fulfilledFn(this._value) // this._value是上一个then返回的值，见完整代码
                    break
                case States.REJECTED:
                    rejectedFn(this._value)
                    break
            }
        })
    }
    
    catch(rejectFn) {
        return this.then(undefined, rejectFn)
    }

    finally(callback) {
        return this.then(
            value => MyPromise.resolve(callback()).then(() => value),
            error => MyPromise.resolve(callback()).then(() => {throw error})
        )
    }


    static resolve(value) {
        // 根据规范，如果传入的是一个Promise，则直接返回
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve, reject) => resolve(value))
    }

    static reject(value) {
        return new MyPromise((resolve, reject) => reject(value))
    }

    /**
     * 当所有的项状态都成功，则成功，有一个失败则失败,成功时返回所有项
     * @param promiseList Promise组成的数组
     */
    static all(promiseList) {
        return new MyPromise((resolve, reject) => {
            let index = 0
            const result = []
            promiseList.forEach(it => {
                it.then(res => {
                    // 按顺序放入
                    result[index] = res
                    index++
                    if (index === promiseList.length) {
                        resolve(result)
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }

    /**
     * 当有一项成功或失败时，状态改变
     * @param promiseList Promise组成的数组
     */
    static race(promiseList) {
        return new MyPromise((resolve, reject) => {
            for (let p of promiseList) {
                p.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }
}
```


至此，我们就实现了一个Promise

---
