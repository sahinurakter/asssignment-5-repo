Q:what is the difference between getelementById or getelimentByClassName or queryselector or queryselectorAll
ans:যদি একটি element নির্বাচন করতে হয়, তাহলে আমরা  getelementById ব্যবহার করি ,যদি একাধিক element নির্বাচন করতে হয়, তাহলে আমরা getElementByClassName ব্যবহার করি ,আবার queryselector 
getelementById এর মতো এটি একটি মাত্র এলিমেন্ট নিয়ে কাজ করে অন্যদিকে queryselectorAll অনেকটা getelimentByClassName  এর মতো অনেক এলিমেন্ট নিয়ে কাজ করে.
Q:how do you create and insert a new element in dom?
Ans: অনেক ভাবেই নতুন element যোগ করা যায়। আমরা এখন document.createElement() দিয়ে নতুন element তৈরি করি।
Q:What is Event Bubbling and how does it work ?
ana:Event Bubbling হলো একটি প্রক্রিয়া যেখানে DOM-এ কোনো ইভেন্ট প্রথমে child element-এ ঘটে এবং তারপর ধীরে ধীরে parent element-এর দিকে চলে যায় এবং শেষ পর্যন্ত DOM পর্যন্ত পৌঁছে।
Q:What is Event Deligation in javascript? why is it useful?
Ans:Event Delegation হলো এমন একটি প্রক্রিয়া যেখানে একটি parent element-এ event listener দেওয়া হয় এবং তারপর সেই parent-এর child element-গুলোকে সেই event listener দিয়ে 
handle করা হয়। আর সুবিধা হল অনেক child থাকলে ও একটা parent element নিয়ে কাজ করলেই হয় ।এতে করে কোড কম লাগে।
Q:what is the difference between preventdefult() and stopPropagation mathod?
ans: preventdefult() ব্যাবহার এর কারন হল কোনো ইভেন্টের ডিফল্ট কাজ বন্ধ করা। অনদিকে stopPropagation ব্যাবহার এর কারন হল Event Bubbling এর কাজ বন্ধ করা। 