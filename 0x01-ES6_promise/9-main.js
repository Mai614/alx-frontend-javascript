import guardrail from '/alx-frontend-javascript/0x01-ES6_promise/9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
