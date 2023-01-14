let os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.version())
console.log(os.freemem())
console.log(os.cpus())
console.log(os.memory())
console.log(os.filesystem())
console.log(os.cpus().length)
console.log(os.uptime())

//////////////////
// Dell@Dell-PC MINGW64 ~/Desktop/node js (main)
/*$ cd inbuilt

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ node os.js

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ cd node os.js
bash: cd: too many arguments

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ node -v
v13.14.0

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ node os.js
win32

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ node os.js
win32
x64

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ node.js
bash: node.js: command not found

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$ node os.js
win32
x64
Windows 7 Ultimate Service Pack 1
1286365184
[
  {
    model: 'Pentium(R) Dual-Core CPU       T4500  @ 2.30GHz',
    speed: 2294,
    times: {
      user: 6010874,
      nice: 0,
      sys: 3025779,
      idle: 23042158,
      irq: 113958
    }
  },
  {
    model: 'Pentium(R) Dual-Core CPU       T4500  @ 2.30GHz',
    speed: 2294,
    times: {
      user: 6163131,
      nice: 0,
      sys: 3185244,
      idle: 22729283,
      irq: 119496
    }
  }
]
C:\Users\Dell\Desktop\node js\inbuilt\os.js:7
console.log(os.memory())
               ^

TypeError: os.memory is not a function
    at Object.<anonymous> (C:\Users\Dell\Desktop\node js\inbuilt\os.js:7:16)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1118:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1138:1
0)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:982:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:875:14)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_ma
in.js:71:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

Dell@Dell-PC MINGW64 ~/Desktop/node js/inbuilt (main)
$
