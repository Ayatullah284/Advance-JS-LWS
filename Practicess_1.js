// 1. varriable nameing






// Default Object Value 
// bad
/* 
const shapeConfig = {
    type: 'circle',
    width: 150,
    height: null
}


function createShape(config){
    config.type = config.type || 'circle';
    config.width = config.width || 300;
    config.height = config.height || 300;
}



createShape(shapeConfig);
 */



//Good 
/* 
const shapeConfig = {
    type: 'circle',
    width: 150
};

function createShape(config){
    config = Object.assign(
        {
            type: 'circle',
            width: 300,
            height: 300,
        },
        config
    );
}
 */



// Prototype pollution 
// bad 
/* Array.prototype.myFunction = function myFunction(){
    //implementation
};

// Good 
class MyArray extends Array{
    myFunc(){
        // implementation
    }
}

 */



// Conditional shorthand 

// bad 
if(isValid === true){
    // do something...
}

if(isValid === false){
    // do something...
}


// Good
if(isValid){
    // do something...
}

if(!isValid){
    // do something...
}

/* 
Ayatullah, তুমি যেগুলো টাইমস্ট্যাম্পসহ দিয়েছো—এটা আসলে **JavaScript Good Practices / Clean Code Guidelines**-এর একটা পুরো লিস্ট। নিচে আমি **প্রতিটা পয়েন্ট সহজ বাংলা + ছোট উদাহরণ আইডিয়া** দিয়ে বুঝিয়ে দিচ্ছি 👇

---

## 0:00 – Intro

👉 কেন clean code দরকার

* কোড readable হয়
* bug কম হয়
* future-এ নিজে/টিম বুঝতে পারে

---

## 1:58 – Variable Naming

✅ ভ্যারিয়েবল নাম অর্থবোধক হওয়া দরকার

❌ খারাপ

```js
let x = 10;
```

✅ ভালো

```js
let userAge = 10;
```

Rule:

* camelCase ব্যবহার করো
* সংক্ষিপ্ত কিন্তু meaningful

---

## 9:42 – Function Naming

👉 function কী কাজ করে সেটা নামেই বোঝা উচিত

❌

```js
function data() {}
```

✅

```js
function getUserData() {}
```

---

## 10:44 – Function Arguments

👉 অপ্রয়োজনীয় বেশি argument না দেওয়া

❌

```js
function createUser(name, age, email, phone, address) {}
```

✅

```js
function createUser({ name, age, email }) {}
```

---

## 15:37 – Single Task per Function

👉 এক function = এক কাজ

❌

```js
function user() {
  validate();
  save();
  sendEmail();
}
```

✅

```js
function validateUser() {}
function saveUser() {}
function sendEmail() {}
```

---

## 18:14 – Type Checking

👉 ডেটার টাইপ যাচাই করা জরুরি

```js
if (typeof age !== "number") {
  return;
}
```

---

## 20:25 – Default Object Value

👉 undefined হলে default value ব্যবহার

```js
function createUser({ role = "user" } = {}) {
  console.log(role);
}
```

---

## 25:26 – Prototype Pollution

👉 object prototype modify করা বিপজ্জনক

❌

```js
Object.prototype.isAdmin = true;
```

⚠️ security issue হতে পারে

---

## 29:13 – Conditional Shorthand

👉 ছোট condition shorthand লিখো

```js
const isLoggedIn = user ? true : false;
```

আরও ভালো:

```js
const isLoggedIn = !!user;
```

---

## 30:26 – Method Chaining

👉 একের পর এক method সুন্দরভাবে লেখা

```js
arr
  .filter(x => x > 5)
  .map(x => x * 2)
  .reduce((a, b) => a + b);
```

---

## 32:01 – Avoid `eval()`

❌ কখনো `eval()` ব্যবহার করো না

* security risk
* performance খারাপ

---

## 33:33 – Curly Braces

👉 সবসময় `{}` ব্যবহার করো

❌

```js
if (x) console.log(x);
```

✅

```js
if (x) {
  console.log(x);
}
```

---

## 35:45 – Prototype Methods

👉 prototype দিয়ে method add করলে memory efficient

```js
User.prototype.login = function () {};
```

---

## 40:43 – for loop

👉 `for...of`, `forEach` বেশি readable

```js
for (const item of items) {
  console.log(item);
}
```

---

## 42:48 – Use `let`, `const`

✅ default `const`
👉 পরিবর্তন হলে `let`

---

## 44:16 – `var` Usage

❌ `var` এড়িয়ে চল
কারণ:

* hoisting issue
* scope problem

---

## 45:06 – Use Semicolon

👉 consistency বজায় রাখো

```js
const x = 10;
```

---

## 47:57 – Use IIFE

👉 private scope তৈরি করতে

```js
(function () {
  console.log("IIFE");
})();
```

---

## 49:36 – Module Pattern

👉 code organize + encapsulation

```js
const userModule = (() => {
  return {
    login() {}
  };
})();
```

---

## 54:27 – script src Tag

👉 `defer` ব্যবহার করো

```html
<script src="app.js" defer></script>
```

---

## 55:40 – Conclusion (Good Practices)

✔ readable code
✔ secure code
✔ maintainable code

---

চাও তো আমি এটাকে

* ✅ **note আকারে PDF**
* ✅ **interview question + answer**
* ✅ **real project coding rulebook**

যেকোনো একটা বানিয়ে দিতে পারি 👍
 */






/* 
for(var i = 0; i < someArray.length; i++){
  var container = document.getElementById('container');

  container.innerHtml += 'my number:' + i;
  console.log(i);
}





// good 
var container = document.getElementById('container');
for(var i = 0; i < someArray.length; i++){
  container.innerHtml += 'my number:' + i;
  console.log(i);
}

 */

// bad
/* 
var current = null;
function init(){
  // do something
}

function change(){
  // do something
}

function verify(){
  // do something
}

 */




// good

/* const myModule = (function(){
  var current = null;

  function init(){
    // do something
    console.log('init');
  }

  function change(){
    // do something
  }

  function verify(){
    // do something
  }

  return {
    init,
    change,
    bortoman: current,
  };
})();


myModule.init(); */



/* 
Ayatullah, এই কোডটা **JavaScript Module Pattern (IIFE module)**–এর খুব ক্লাসিক উদাহরণ। ধাপে ধাপে পরিষ্কার করে বুঝাই 👇

---

## 🔹 `module` বলতে এখানে কী বোঝানো হয়েছে?

এখানে `myModule` হলো একটা **module**
মানে—

> **নিজস্ব private data + public methods** একসাথে প্যাকেজ করা একটা অবজেক্ট।

---

## 🔹 কোডটা কীভাবে কাজ করছে?

### 1️⃣ IIFE (Immediately Invoked Function Expression)

```js
const myModule = (function () {
  ...
})();
```

👉 function ডিফাইন হবার সাথে সাথে execute হচ্ছে
👉 আলাদা scope তৈরি করছে
👉 ভিতরের জিনিস বাইরে থেকে সরাসরি access করা যাবে না

---

### 2️⃣ Private Variable

```js
var current = null;
```

* এটা **private**
* বাইরে থেকে `myModule.current` করলে পাওয়া যাবে না

---

### 3️⃣ Private Functions

```js
function init() {
  console.log('init');
}

function change() {}
function verify() {}
```

* এগুলোও private
* শুধু module-এর ভেতরে ব্যবহার করা যায়

---

### 4️⃣ Public API (return object)

```js
return {
  init,
  change,
  bortoman: current,
};
```

এখানেই module-এর **public অংশ** ঠিক করা হচ্ছে।

| নাম        | বাইরে থেকে access     |
| ---------- | --------------------- |
| `init`     | ✅ `myModule.init()`   |
| `change`   | ✅ `myModule.change()` |
| `bortoman` | ⚠️ শুধু value (copy)  |

---

## 🔹 কেন `bortoman` update হয় না?

```js
bortoman: current
```

এখানে `current` এর **value কপি** হচ্ছে, reference না।

👉 যদি `current` পরে change হয়,
`myModule.bortoman` তাতে update হবে না।

### ✅ সঠিক উপায় (getter function)

```js
return {
  init,
  change,
  getCurrent() {
    return current;
  }
};
```

---

## 🔹 ব্যবহার

```js
myModule.init(); // "init"
```

👉 কাজ করছে কারণ `init` public

---

## 🔹 সংক্ষেপে module কী?

✅ module =

* private data
* public methods
* global scope pollution এড়ায়
* clean & maintainable code

---

## 🔹 আজকাল real-world এ কী ব্যবহার হয়?

| পুরোনো        | আধুনিক            |
| ------------- | ----------------- |
| IIFE Module   | ES6 Module        |
| `var`         | `let / const`     |
| manual export | `export / import` |

### ES6 Module example

```js
export function init() {}
```

---

চাও তো আমি

* 🔁 এই module টাকে **ES6 module এ convert** করে দেখাবো
* 🧠 Interview question style এ explain করবো
* 🧩 Real project structure দেখাবো

যেটা চাইবে বলো 👍
 */



