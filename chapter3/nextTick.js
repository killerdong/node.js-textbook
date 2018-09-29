const timeout = setTimeout(() => {
    console.log('0초 후 실행')
}, 0);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const nextTick = process.nextTick(() => {
    console.log('nextTick');
});


