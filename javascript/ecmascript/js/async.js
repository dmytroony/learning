const timeout = setTimeout(() => {
    console.log('After timeout');
}, 2500);
clearTimeout(timeout);