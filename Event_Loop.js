// Event Loop   
/* 
Heap memory
Call stack 
Web API 
Callback Queue 
Event Loop
 */



// Async Timer: 
/* const second = () => console.log('I am second');
const third = () => console.log('I am third');

const first = () => {
    console.log('I am first');

    setTimeout(second, 0);
    third();
};

first(); */





// Sync blocking code: 
/* function process(num){
    // process heavy sync task:

    console.log(num);
}


[1, 2, 3, 4, 5].forEach(i => {
    process(i);
})  */



// Promise a event loop:
const second = () => console.log('second');
const third = () => console.log('third');

const first = () => {
    console.log('first');
    setTimeout(second, 0);

    new Promise((resolve, reject) => {
        resolve('I am rigth after third, before second');
    }).then(resolve => console.log(resolve));
    third();

}



first();



// Microtask Queue 
// Callback Queue

// promise chole jai Microtask queue te 



/* 
Ayatullah, JavaScript **Event Loop**–এ কোনটা আগে চলবে এটা খুবই গুরুত্বপূর্ণ। সংক্ষেপে কিন্তু পরিষ্কারভাবে বলছি 👇

---

## 🔁 Event Loop–এর Priority Order (কে আগে চলবে)

### ✅ **১️⃣ Call Stack**

* সবসময় **সবার আগে**
* যদি stack ফাঁকা না হয় → Event Loop কিছুই চালাবে না

---

### ✅ **২️⃣ Microtask Queue (সবচেয়ে বেশি permission)**

👉 **Microtask Queue সবসময় Callback Queue–এর আগে execute হয়**

**Microtask এর উদাহরণ:**

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`
* `MutationObserver`

📌 নিয়ম:

> Call Stack ফাঁকা হলেই **Microtask Queue পুরোটা শেষ না হওয়া পর্যন্ত** Event Loop আর কিছুতে যাবে না

---

### ✅ **৩️⃣ Callback Queue (Macrotask Queue)**

👉 Microtask শেষ হলে তবেই Callback Queue

**Callback / Macrotask এর উদাহরণ:**

* `setTimeout`
* `setInterval`
* `setImmediate`
* DOM events (`click`, `scroll`)
* `setTimeout(fn, 0)` ❌ (তবুও microtask এর পরে)

---

## 🔢 Final Priority Flow (মনে রাখার শর্ট ফর্ম)

```
Call Stack
   ↓
Microtask Queue (Promise)
   ↓
Callback / Macrotask Queue (setTimeout, event)
```

---

## 🧪 ছোট Example

```js
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### 🖨️ Output হবে:

```
Start
End
Promise
setTimeout
```

👉 কারণ:

* `Promise` → **Microtask**
* `setTimeout` → **Callback Queue**

---

## 🧠 এক লাইনে উত্তর (Exam / Interview ready)

> **Microtask Queue সবসময় Callback Queue–এর আগে permission পায় Event Loop–এ।**

চাও তো আমি diagram এঁকে বা animation style এও বুঝিয়ে দিতে পারি 👍
 */








