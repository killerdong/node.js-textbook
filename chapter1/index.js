function first() {
    second();
    console.log('첫 번쨰');
}

function second() {
    thrid();
    console.log('두 번째');
}

function thrid() {
    console.log('세 번째');
}

first();        // 세번째 두 번째 첫 번째


function run() {
    console.log('3초 후 실행');
}

console.log('시작');
setTimeout(run, 3);
console.log('끝');

/*
시작
끝
3초 후 실행
*/

function longRunningTask() {
    console.log('작업 끝');
}

console.log('시작');
longRunningTask();
console.log('다른작업');

console.log('시작');
setTimeout(longRunningTask, 0);
console.log('다른작업');
