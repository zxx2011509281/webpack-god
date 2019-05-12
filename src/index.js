console.log('哈哈哈')
require('./a.js')
require('./css/index.css')
require('./less/index.less')
require('@babel/polyfill')

const fn = ()=>{
    console.log('es6箭头函数')
}
fn()

@log
class A{
    name = 'zs'
}

let a = new A()
console.log(a.name)

function log(target){
    console.log('target', target)
}

"nameiszs".includes('name')