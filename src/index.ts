import * as SayHello from './sayHello';
console.log('Hello from index.ts');
SayHello.sayHello();

function Test():any {
  throw new Error();
}
Test(); // won't cause type error
let test: boolean = Test(); // will cause type error