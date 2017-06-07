## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> Your answer here... A react componont is a set of code/function that makes up what is considered a component.  Essencially you can classify a component as any part of piece of the wireframe that can have its own responsibility or job that is separate from everything else.  There is what is considered a dummy component which is a static version and then there is a smart react component that can manage state.  All components must return an object.
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> Your answer here... When deciding whether to use a simple function or to use a react component as a class that extends the component depends on whether or not the component is going to be managing the state of something on the page.  A simple function is going to be used when it is only returning an object.  When a component will have to be assigned a state and have to manage that you would use the class syntax.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> Your answer here...
<div>
    <h1 class='headline'>Hello Dojo!</h1>
</div>
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js) i couldnt figure out how to do it correctly in the same array so i returned a new array.

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> Your answer here... The new keyword will create a new instance of what is passed in to the funciton.  The new keyword creates a function and returns a call back.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> Your answer here... Callbacks...duh, but also objects because almost everything in js is an object.  I also promise you that you should push to Github often.
---

Done! Time to start the [React app](./app-details.md)!