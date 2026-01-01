/* 
Interpretation
Compilation
Mixture of both  
*/



// Just-in-time (JIT) Compiler 

/* 🧠 সহজ তুলনা (Real life)

Interpreter → শিক্ষক বোর্ডে লিখতে লিখতেই বুঝাচ্ছে

Compiler → বই আগে ছাপা, পরে পড়া

JIT → ক্লাস চলার সময়ই নোট বানিয়ে ফেলা 😄 */







/* 

চল এগুলো **JavaScript execution** এর context এ সহজ বাংলায় পরিষ্কার করি 👇

---

## 🔹 Interpretation

👉 কোড **লাইন বাই লাইন** পড়ে সাথে সাথে execute করা

* পুরো কোড আগে translate করে না
* Error পেলে তখনই থামে
* শুরু করতে সময় কম, কিন্তু run ধীর হতে পারে

📌 উদাহরণ: পুরনো JavaScript engines

---

## 🔹 Compilation

👉 কোড **আগে পুরোটা** machine code এ translate হয়, তারপর run

* Run করার আগে error ধরা পড়ে
* Execution fast
* Start হতে সময় বেশি

📌 উদাহরণ: C, C++

---

## 🔹 Mixture of Both (JavaScript যেটা করে)

👉 JavaScript **পুরোপুরি interpreted না, আবার পুরো compiled ও না**

### JavaScript কীভাবে চলে?

1️⃣ প্রথমে **Parsing**
2️⃣ তারপর **Compilation (Just-in-Time)**
3️⃣ তারপর **Execution**

---

## 🔹 Just-in-Time (JIT) Compiler

👉 JavaScript engine (যেমন **V8**) কোড run করার সময়ই compile করে

### JIT কী করে?

* Code execute হওয়ার ঠিক আগ মুহূর্তে compile
* যেসব code বারবার চলে → optimized machine code বানায়
* Performance অনেক fast হয় 🔥

📌 Browser engines:

* Chrome / Node.js → **V8**
* Firefox → **SpiderMonkey**
* Safari → **JavaScriptCore**

---

## 🧠 সহজ তুলনা (Real life)

* **Interpreter** → শিক্ষক বোর্ডে লিখতে লিখতেই বুঝাচ্ছে
* **Compiler** → বই আগে ছাপা, পরে পড়া
* **JIT** → ক্লাস চলার সময়ই নোট বানিয়ে ফেলা 😄

---

## ✅ Interview-ready summary

```txt
JavaScript is a JIT compiled language.
It uses both interpretation and compilation.
```

---

চাও তো আমি পরের ধাপে

* JS Execution Context
* Call Stack
* Hoisting + JIT relation

এসবও বাংলায় diagram সহ বুঝিয়ে দিতে পারি 👍
 */  



/* 
Global Execution Context 

phase: loading/creation 
window: global object 
this: window 
variable object 
scope chain 

 */

var topic = "JavaScript Execution Context";
function getTopic(){
    return topic;
}
getTopic()

// Phase: Loading/Creation 
/* window: global object 
this: window 
topic: undefined 
getTopic: fn() (address)
scope chain  */


// Phase: Execution 
/* window: global object
this: window 
topic: "JavaScript Execution Context"
getTopic: fn()
        //getTopic function Execution Context:
        phase: Loading/Creation
        argumente: {}
        this: window
scope chain  */




