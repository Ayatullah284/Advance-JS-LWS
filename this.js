// This er jonno 4ta niom:
// সহজ ভাষায় বললে, this মানে হলো— কে/কোন অবজেক্ট থেকে ফাংশনটা কল হচ্ছে।
// ✅ this নির্ভর করে function কিভাবে কল হচ্ছে, কোথায় লেখা হয়েছে সেটা না

/* 
1. implicit binding 
2. explicit binding
3. new binding 
4. window binding 

 */





/* 
Ayatullah, JavaScript-এ **`this`** একটু tricky 😄
সহজ ভাষায় বললে, **`this` মানে হলো— কে/কোন অবজেক্ট থেকে ফাংশনটা কল হচ্ছে**।

নিচে ধাপে ধাপে বাংলায় বুঝাচ্ছি 👇

---

## 1️⃣ Global scope এ `this`

```js
console.log(this);
```

* **Browser এ** → `this` = `window`
* **Node.js এ** → `this` = `{}` (empty object)

---

## 2️⃣ Object এর ভিতরে `this`

সবচেয়ে common use 👇

```js
const person = {
  name: "Ayatullah",
  age: 29,
  sayName: function () {
    console.log(this.name);
  }
};

person.sayName(); // Ayatullah
```

👉 এখানে `this` = `person` object
কারণ `sayName()` কে `person` দিয়ে কল করা হয়েছে।

---

## 3️⃣ Function এ `this` (normal function)

```js
function show() {
  console.log(this);
}

show();
```

* **Browser** → `window`
* **Strict mode** → `undefined`

```js
"use strict";
function show() {
  console.log(this);
}
show(); // undefined
```

---

## 4️⃣ Arrow function এ `this`

⚠️ খুব গুরুত্বপূর্ণ

👉 Arrow function নিজের `this` বানায় না
👉 বাইরের scope থেকে `this` নেয়

```js
const user = {
  name: "Ayatullah",
  say: () => {
    console.log(this.name);
  }
};

user.say(); // undefined
```

❌ কারণ arrow function এ `this` এখানে `user` না

### ✅ সঠিক ব্যবহার

```js
const user = {
  name: "Ayatullah",
  say() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.say(); // Ayatullah
```

---

## 5️⃣ Constructor function এ `this`

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Ayatullah", 29);
console.log(p1.name); // Ayatullah
```

👉 এখানে `this` = নতুন তৈরি হওয়া object (`p1`)

---

## 6️⃣ Event handler এ `this`

```html
<button id="btn">Click</button>
```

```js
document.getElementById("btn").addEventListener("click", function () {
  console.log(this);
});
```

👉 `this` = যে element এ event ঘটেছে (`button`)

⚠️ কিন্তু arrow function হলে:

```js
btn.addEventListener("click", () => {
  console.log(this);
});
```

👉 `this` = `window`

---

## 7️⃣ call, apply, bind দিয়ে `this` control করা

```js
const user1 = { name: "Ayatullah" };
const user2 = { name: "Khan" };

function greet() {
  console.log(this.name);
}

greet.call(user1); // Ayatullah
greet.apply(user2); // Khan

const newFunc = greet.bind(user1);
newFunc(); // Ayatullah
```

---

## 🧠 মনে রাখার শর্ট রুল

✅ **`this` নির্ভর করে function কিভাবে কল হচ্ছে, কোথায় লেখা হয়েছে সেটা না**

---

চাও তো আমি

* React এ `this`
* Class vs function এ `this`
* Interview trick questions

এগুলাও বাংলায় বুঝিয়ে দিতে পারি 👍
 */


































// normal function:
/* var sakib = {
    name: 'Sakib',
    age: 35,

    printPlayerName: function(){
        console.log(this.name, this)
    }
}


sakib.printPlayerName() */





/* var printPlayerNameFunction = function(obj){
    obj.printPlayerName = function(){
        console.log(this.name, this)
    }
}

var sakib = {
    name: 'Sakib',
    age: 35
}
var tamim = {
    name: 'Tamim',
    age: 36
}


printPlayerNameFunction(sakib)
printPlayerNameFunction(tamim)


sakib.printPlayerName()
tamim.printPlayerName()
 */


var Person = function(name, age){
    return{
        name: name,
        age: age,
        printName: function(){
            console.log(this.name, this)
        },
        father: {
            name: 'Mr. XXX',
            printName: function(){
                console.log(this.name, this)
            }
        }
    }
}

var sakib = Person('Sakib', 35);
// console.log(typeof sakib)
sakib.printName()
sakib.father.printName()