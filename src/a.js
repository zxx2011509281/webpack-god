console.log('我是 a.js')

class B {
    b = 111
}

function* gen(){
    yield 1;
}
gen().next()