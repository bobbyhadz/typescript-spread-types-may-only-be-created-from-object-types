export {};

// Spread types may only be created from object types in TS

// EXAMPLE 1 - Make sure the value is an object before using the spread syntax

const obj1 = Math.random() > 0.5 ? { name: 'Bobby Hadz' } : true;

const result = { ...(obj1 as Record<string, unknown>) };
console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2 - Use a type guard to solve the error

// type Person = { name: string } | undefined;
// const val1: Person = Math.random() > 0.5 ? undefined : { name: 'Bobby Hadz' };

// const result = { ...(typeof val1 === 'object' ? val1 : {}) };

// console.log(result.name?.toUpperCase());

// ---------------------------------------------------

// // EXAMPLE 3 - Using the `Object.assign()` method instead

// const result = Object.assign({}, false, true, undefined, null, 0, {
//   name: 'Bobby Hadz',
// }) as { name: string };

// console.log(result.name); // 👉️ "Bobby Hadz"
