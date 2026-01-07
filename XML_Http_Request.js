/* Ayatullah, **XMLHttpRequest (XHR)** হলো JavaScript-এর একটা পুরনো কিন্তু গুরুত্বপূর্ণ API, যেটা দিয়ে **পেজ রিলোড না করেই সার্ভার থেকে ডেটা আনা/পাঠানো** যায়। এটাকেই আগে **AJAX** বলা হতো।

---

## 🔹 XMLHttpRequest কেন দরকার?

* 🔁 পেজ রিলোড ছাড়াই ডেটা লোড
* 🌐 Server (API) থেকে JSON/XML আনা
* 📤 Form data পাঠানো
* ⚡ Dynamic website বানানো

---

## 🔹 Basic Flow (ধাপ)

1️⃣ XHR object বানানো
2️⃣ request configure করা
3️⃣ request পাঠানো
4️⃣ response handle করা

---

## 🧩 Basic Example (GET request)

```js
const xhr = new XMLHttpRequest();

// request setup
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// response handle
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.log("Error:", xhr.status);
  }
};

// request send
xhr.send();
```

---

## 🧩 POST request example

```js
const xhr = new XMLHttpRequest();

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function () {
  console.log(xhr.responseText);
};

xhr.send(
  JSON.stringify({
    title: "Hello",
    body: "World",
    userId: 1,
  })
);
```

---

## 🔹 Important Properties

| Property           | কাজ                |
| ------------------ | ------------------ |
| `xhr.readyState`   | request কোন স্টেজে |
| `xhr.status`       | HTTP status code   |
| `xhr.responseText` | response (string)  |
| `xhr.responseXML`  | XML response হলে   |

### readyState values

| Value | Meaning          |
| ----- | ---------------- |
| 0     | UNSENT           |
| 1     | OPENED           |
| 2     | HEADERS_RECEIVED |
| 3     | LOADING          |
| 4     | DONE             |

---

## 🔹 onreadystatechange ব্যবহার

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
```

---

## ⚠️ সমস্যা (Limitations)

* Code অনেক verbose 😵
* Promise নেই
* Error handling ঝামেলা
* Modern না

👉 এজন্য এখন সবাই ব্যবহার করে:

* `fetch()`
* `axios`

---

## 🔄 XMLHttpRequest vs fetch

| বিষয়    | XHR  | fetch |
| ------- | ---- | ----- |
| Syntax  | জটিল | সহজ   |
| Promise | ❌    | ✅     |
| Modern  | ❌    | ✅     |

---

## 📌 Interview Tip

> **XMLHttpRequest হলো AJAX-এর মূল ভিত্তি। Fetch আসার আগে এটিই standard ছিল।**

---

আপনি চাইলে আমি
✔️ XHR + callback hell example
✔️ XHR vs fetch deep comparison
✔️ Interview Q&A

বাংলায় বুঝিয়ে দিতে পারি। বলুন কোনটা চান?
 */




const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');


const sendRequest = function(method, url, data){
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // Get, Post, Put, Delete, Options, Head
      xhr.open(method, url);
      xhr.responseType = "json";
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(data);

      xhr.onload = function () {
          if(xhr.status >= 400){
            reject(xhr.response);
          }else{
            resolve(xhr.response)
          }
      };
      
      xhr.onerror = function(){
        reject('Something was wrong!');
      }
    })

    return promise;
}

const getData = function(){
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1').then((responseData) => {
      console.log(responseData);
    });
   
};
const sendData = function(){
  sendRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
      title: 'foo',
      body: 'bar',
      userID: 1,
    })
  ).then((responseData) => {
    console.log(responseData);
  }).catch(err => {
    console.log(err);
  })

};


getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);
