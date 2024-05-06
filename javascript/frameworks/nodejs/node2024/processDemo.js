console.log(process.argv);
// node processDemo.js import
// node processDemo.js import -s

console.log(process.argv[3]);

console.log(process.env);
console.log(process.env.LOGNAME);

// pid
console.log(process.pid); // nodejs process id

// cwd() - Current Work Directory
console.log(process.cwd());

// title of process
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime() - uptime of process
console.log(process.uptime());

process.on('exit', code => console.log(`About to exit with code: ${code}`));

// exit() - exit the process
process.exit(0);
console.log('Hello from after exit()');
