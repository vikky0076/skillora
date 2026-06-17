(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const I={html:[{title:"HTML Introduction",content:`<h4>What is HTML?</h4>
            <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. It describes the structure of a Web page and consists of a series of elements which tell the browser how to display the content.</p>
            <h4>A Simple HTML Document</h4>
            <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</pre>
            <p>Try running this basic structure in our code editor playground to see how tags render layout structures.</p>`,playgroundCode:{html:`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`,css:"body { font-family: sans-serif; padding: 20px; background-color: #f0fdf4; }",js:'console.log("HTML Rendered!");'}},{title:"HTML Elements & Attributes",content:`<h4>HTML Elements</h4>
            <p>An HTML element is defined by a start tag, some content, and an end tag: <code>&lt;tagname&gt; Content goes here... &lt;/tagname&gt;</code>.</p>
            <p>HTML elements can also have <strong>attributes</strong>, which provide additional information about elements. Attributes are always specified in the start tag and usually come in name/value pairs like: <code>name="value"</code>.</p>
            <h4>Common Examples</h4>
            <ul>
                <li><code>&lt;a href="https://skillora.edu"&gt;</code> - The href attribute specifies the URL of the page the link goes to.</li>
                <li><code>&lt;img src="img_girl.jpg" alt="Girl"&gt;</code> - The src attribute specifies the path to the image to be displayed.</li>
            </ul>`}],css:[{title:"CSS Introduction",content:`<h4>What is CSS?</h4>
            <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. It saves a lot of work because it can control the layout of multiple web pages all at once.</p>
            <h4>CSS Selector & Declaration Syntax</h4>
            <p>A CSS rule-set consists of a selector and a declaration block:</p>
            <pre>h1 {
  color: #7C3AED;
  font-size: 24px;
}</pre>
            <p>The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons, defining the property name and value.</p>`,playgroundCode:{html:`<h1>Styling Header</h1>
<p>See how the CSS modifications are applied when running.</p>`,css:`h1 {
  color: #7C3AED;
  font-family: 'Sora', sans-serif;
  border-left: 5px solid #00D4FF;
  padding-left: 10px;
}`,js:""}},{title:"CSS Box Model",content:`<h4>Understanding the Box Model</h4>
            <p>In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
            <ul>
                <li><strong>Content</strong> - The content of the box, where text and images appear.</li>
                <li><strong>Padding</strong> - Clears an area around the content. The padding is transparent.</li>
                <li><strong>Border</strong> - A border that goes around the padding and content.</li>
                <li><strong>Margin</strong> - Clears an area outside the border. The margin is transparent.</li>
            </ul>`}],javascript:[{title:"JavaScript Basics",content:`<h4>What is JavaScript?</h4>
            <p>JavaScript (JS) is a lightweight, interpreted, or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.</p>
            <h4>DOM Manipulation Syntax</h4>
            <p>JavaScript allows you to dynamically change HTML content, attributes, and styles:</p>
            <pre>document.getElementById("demo").innerHTML = "Hello JS!";</pre>
            <p>Try running this method inside the playground by connecting HTML elements and firing JS click callbacks.</p>`,playgroundCode:{html:`<h1 id="headline">Original Text</h1>
<button id="action-btn">Click Me!</button>`,css:`button {
  background: #00D4FF;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}`,js:`document.getElementById("action-btn").addEventListener("click", () => {
  document.getElementById("headline").innerText = "Changed by JavaScript!";
  document.getElementById("headline").style.color = "#7C3AED";
});`}}],python:[{title:"Python Syntax Basics",content:`<h4>Why Python?</h4>
            <p>Python is a popular programming language. It is used for web development (server-side), software development, mathematics, and system scripting. Python uses new lines to complete a command, unlike other programming languages which often use semicolons.</p>
            <h4>Indentation is Key</h4>
            <p>Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions, and classes. Other programming languages often use curly-brackets for this purpose.</p>
            <pre>if 5 > 2:
    print("Five is greater than two!")</pre>`}],java:[{title:"Java Variables & Data Types",content:`<h4>Java Variable Declarations</h4>
            <p>In Java, variables must be declared with their specific type. Java is a strongly typed object-oriented language.</p>
            <pre>String name = "John";
int myNum = 15;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;</pre>`}],sql:[{title:"SQL Query Basics",content:`<h4>What is SQL?</h4>
            <p>SQL stands for Structured Query Language. SQL lets you access and manipulate relational databases. It is an ANSI standard.</p>
            <h4>The SELECT Statement</h4>
            <pre>SELECT CustomerName, City FROM Customers;</pre>
            <p>The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.</p>`}],react:[{title:"React components & Hooks",content:`<h4>What is React?</h4>
            <p>React is a JavaScript library created by Facebook for building user interfaces. It is used to build single-page applications and allows us to create reusable UI components.</p>
            <h4>useState Hook Example</h4>
            <pre>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return &lt;button onClick={() => setCount(count + 1)}&gt;{count}&lt;/button&gt;;
}</pre>`}],node:[{title:"Node.js Server Creation",content:`<h4>What is Node.js?</h4>
            <p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
            <h4>Basic HTTP Server</h4>
            <pre>const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node!');
});
server.listen(3000);</pre>`}],c:[{title:"C Variables & Compilation",content:`<h4>Introduction to C</h4>
            <p>C is a powerful general-purpose programming language. It is fast, efficient, and gives direct access to systems resources.</p>
            <h4>C Basic Program Structure</h4>
            <pre>#include &lt;stdio.h&gt;

int main() {
  printf("Hello Skillora C!\\n");
  return 0;
}</pre>
            <p>Use pointers to manage memory addresses, and compile directly to native instructions.</p>`,playgroundCode:{html:'<div id="c-console">Running C Simulation...</div>',css:"body { background: #111827; color: #10B981; font-family: monospace; padding: 20px; }",js:'document.getElementById("c-console").innerText = "Output:\\nHello Skillora C!\\nProgram exited with code 0";'}}],cpp:[{title:"C++ Objects & Classes",content:`<h4>Introduction to C++</h4>
            <p>C++ is an extension of C that incorporates Object-Oriented Programming principles, making it perfect for large-scale games, browsers, and systems software.</p>
            <h4>C++ Class Template</h4>
            <pre>#include &lt;iostream&gt;
using namespace std;

class Student {
  public:
    string name;
    void introduce() {
      cout &lt;&lt; "Hi, I am " &lt;&lt; name;
    }
};</pre>`,playgroundCode:{html:'<div id="cpp-console">Building objects...</div>',css:"body { background: #0f172a; color: #38bdf8; font-family: monospace; padding: 20px; }",js:'document.getElementById("cpp-console").innerText = "Hi, I am Alex\\nC++ Program simulated successfully!";'}}]},C={grammar:{title:"Grammar & Tenses Guide",content:`<h4>Active &amp; Passive Voice</h4>
        <p>In an active sentence, the subject performs the action. In a passive sentence, the subject receives the action.</p>
        <ul>
            <li><strong>Active:</strong> The developer wrote the JavaScript script.</li>
            <li><strong>Passive:</strong> The JavaScript script was written by the developer.</li>
        </ul>
        <h4>Conditional Clauses</h4>
        <p>Conditionals describe the result of something that might happen or might have happened:</p>
        <p><em>"If I practice coding daily (condition), I will pass the technical interview (result)."</em></p>`},conversations:{title:"Daily Conversation Starters & Idioms",content:`<h4>Useful Idioms in Tech &amp; Business</h4>
        <ul>
            <li><strong>"Byte the bullet"</strong> - Face a difficult situation with courage. (Derived from 'bite the bullet').</li>
            <li><strong>"Get your ducks in a row"</strong> - Organize your tasks cleanly.</li>
            <li><strong>"Hit the ground running"</strong> - Start a new project or job immediately with great energy.</li>
        </ul>
        <h4>Collaborative Phrases</h4>
        <p>Use these when working in teams: <em>"Let's sync up on this module tomorrow,"</em> or <em>"Could you shed some light on this pull request?"</em></p>`},interviews:{title:"Job Interview English Preparation",content:`<h4>The STAR Speaking Method</h4>
        <p>When answering behavioral interview questions, structure your answers using the STAR method:</p>
        <ol>
            <li><strong>Situation:</strong> Set the scene and give necessary details.</li>
            <li><strong>Task:</strong> Describe your responsibility in that situation.</li>
            <li><strong>Action:</strong> Explain exactly what steps you took to address it.</li>
            <li><strong>Result:</strong> Share what outcomes your actions achieved (use metrics!).</li>
        </ol>
        <h4>Example Prompt</h4>
        <p><em>"Tell me about a time you resolved a merge conflict..."</em> -> Start by setting up the scenario, detail the modules affected, the collaboration steps you took, and final green builds.</p>`},public:{title:"Public Speaking & Presentations",content:`<h4>Structuring a Technical Presentation</h4>
        <p>A professional presentation consists of three core components:</p>
        <ul>
            <li><strong>Introduction (The Hook):</strong> Grab attention and clearly define the problem statements.</li>
            <li><strong>Body (The Logic):</strong> Walk through solutions sequentially using clean slides and transitional phrases like <em>"Moving on to..."</em> or <em>"This brings us to the next metric..."</em>.</li>
            <li><strong>Conclusion (The Takeaway):</strong> Summarize key solutions and open the floor for Q&amp;A.</li>
        </ul>`}},L={grammar:[{q:"Select the correct conditional sentence:",options:["If I will study, I pass the exam.","If I study, I will pass the exam.","If I studied, I will passed the exam.","If I study, I passed the exam."],correct:1,explanation:"The first conditional is formed using simple present in the 'if' clause and simple future ('will' + verb) in the main clause."},{q:"Fill in the blank: The code ________ by the team before the deployment yesterday.",options:["was reviewed","reviews","has reviewed","had reviewed"],correct:0,explanation:"'Was reviewed' is the correct passive voice construction for actions completed in the past."},{q:"Identify the incorrect usage: 'She explain me the database schema.'",options:["The subject pronoun is wrong.","The verb explain needs 'to me'.","The word database should be data.","No mistake in this sentence."],correct:1,explanation:"In English, the verb 'explain' takes a direct object first. We explain something *to* someone. Correct sentence: 'She explained the database schema to me.'"}],vocabulary:[{q:"What is the synonym of the word 'Eloquence'?",options:["Silence","Fluency and expressiveness","Confusion","Aggression"],correct:1,explanation:"Eloquence is fluent, persuasive, and elegant speaking or writing."},{q:"What does the idiom 'Hit the ground running' mean?",options:["To fall down while jogging.","To start a new activity quickly and with enthusiasm.","To delay projects deliberately.","To inspect cables on the floor."],correct:1,explanation:"'Hit the ground running' means to start a job or project immediately and with great energy."}],interview:[{q:"What does the 'R' in the STAR method stand for?",options:["Reaction","Review","Result","Responsibility"],correct:2,explanation:"STAR stands for Situation, Task, Action, and Result."},{q:"Which response demonstrates professional syntax when discussing a bug?",options:["I broke the server and didn't know what to do.","The server crashed, but I identified the memory leak and resolved the database connection pools.","Our software is bad, it crashed a lot of times.","It was my teammate's fault that the server went offline."],correct:1,explanation:"Focusing on the issue, identification path, and structured resolution showcases positive engineering communication skills."}]},U={"rev-string":{title:"Reverse a String",desc:"Implement a function that reverses a given string input.",html:`<div id="output">Result will appear here</div>
<button onclick="testReverse()">Run Reverse Test</button>`,css:"body { font-family: sans-serif; text-align: center; padding: 20px; }",js:`function reverseString(str) {
  // Write your code here
  return str.split('').reverse().join('');
}

function testReverse() {
  const result = reverseString("Skillora");
  document.getElementById("output").innerText = "Input: 'Skillora' -> Output: '" + result + "'";
}`},"find-dups":{title:"Find Duplicate Items",desc:"Return an array containing only the non-unique values from a list.",html:`<div id="output">Duplicates list...</div>
<button onclick="testDups()">Run Duplicates Test</button>`,css:"body { font-family: sans-serif; text-align: center; padding: 20px; }",js:`function findDuplicates(arr) {
  // Write your code here
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

function testDups() {
  const list = [1, 2, 3, 2, 4, 5, 4];
  const result = findDuplicates(list);
  document.getElementById("output").innerText = "List: [1,2,3,2,4,5,4] -> Duplicates: [" + result.join(', ') + "]";
}`},"api-retry":{title:"API Retry Mechanism",desc:"Construct a simulated function that logs retries.",html:`<div id="output">Status...</div>
<button onclick="testRetry()">Run Retry Test</button>`,css:"body { font-family: sans-serif; text-align: center; padding: 20px; }",js:`async function fetchWithRetry(url, retries = 3) {
  for(let i = 0; i < retries; i++) {
     console.log("Attempt " + (i+1));
  }
  return "Fetched successfully after retries!";
}

function testRetry() {
  fetchWithRetry("mock-api").then(res => {
     document.getElementById("output").innerText = res;
  });
}`}},G={calculator:{title:"Sleek Glass Calculator",content:`<h4>Overview</h4>
        <p>Create a stunning glassmorphic calculator using HTML grids and simple JS evaluation logic.</p>
        <h4>HTML Skeleton</h4>
        <pre>&lt;div class="calculator"&gt;
  &lt;div class="display" id="display"&gt;0&lt;/div&gt;
  &lt;div class="buttons"&gt;
    &lt;button onclick="clear()"&gt;C&lt;/button&gt;
    &lt;button onclick="press('/')"&gt;/&lt;/button&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;</pre>
        <h4>JavaScript Eval Logic</h4>
        <pre>function press(val) {
  document.getElementById("display").innerText += val;
}
function calculate() {
  let exp = document.getElementById("display").innerText;
  document.getElementById("display").innerText = eval(exp);
}</pre>`},weather:{title:"Geo-Weather Forecast App",content:`<h4>Overview</h4>
        <p>Integrate a weather dashboard using public fetch endpoints.</p>
        <h4>JavaScript Fetch Call</h4>
        <pre>async function getWeather(city) {
  const key = "YOUR_API_KEY";
  const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${key}\`);
  const data = await res.json();
  renderWeather(data);
}</pre>
        <h4>Tips</h4>
        <p>Use modern CSS variables to dynamically change the background gradient to match temperature parameters (e.g. warm orange for high heat, cool blue for low temperatures).</p>`},dashboard:{title:"Interactive E-Commerce Dashboard",content:`<h4>Overview</h4>
        <p>A full responsive management dashboard complete with dynamic SVG charts, local storage data syncing, and user tracking indicators.</p>
        <h4>Key Steps</h4>
        <ol>
            <li>Structure grid sections for Sidebar, Stats row, and Main Chart canvas.</li>
            <li>Write a local data sync utility using JSON parse/stringify in localStorage to retain newly added product items.</li>
            <li>Render responsive SVG lines mapping monthly sales figures.</li>
        </ol>`},todo:{title:"Smart To-Do Application",content:`<h4>Overview</h4>
        <p>Assemble a task tracker syncing dynamically with browser memory caches.</p>
        <h4>JavaScript Local Sync</h4>
        <pre>function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
function loadTodos() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}</pre>`},landing:{title:"SaaS Landing Page",content:`<h4>Overview</h4>
        <p>Design a stunning startup showcase highlighting key product attributes.</p>
        <h4>Key Elements</h4>
        <p>Focus on smooth CSS keyframe entries, layout structures utilizing CSS grids, responsive elements matching mobile frames, and active buttons with custom glowing effects.</p>`},quiz:{title:"Interactive Quiz App",content:`<h4>Overview</h4>
        <p>A robust interactive web quiz referencing variable questions databases.</p>
        <h4>JavaScript Question Loop</h4>
        <pre>questions.forEach((q, index) => {
  let btn = document.createElement('button');
  btn.innerText = q.text;
  btn.onclick = () => check(index);
});</pre>`},portfolio:{title:"Developer Portfolio Resume",content:`<h4>Overview</h4>
        <p>Establish a gorgeous web presence displaying your projects, skills details, and testimonials carousel.</p>
        <h4>Tips</h4>
        <p>Incorporate dark theme configurations matching client devices preferences, alongside validated custom contact fields.</p>`},chat:{title:"Real-time Chat Portal UI",content:`<h4>Overview</h4>
        <p>Design a technical messaging viewport modeling active chats.</p>
        <h4>Layout</h4>
        <p>Format using CSS flexbox matching standard screen frames. Include automated robot response flows responding dynamically to custom typing queries.</p>`},ecommerce:{title:"E-Commerce Cart System",content:`<h4>Overview</h4>
        <p>Create a full-scale shopping basket including catalog selectors, dynamic item counting, and checkout totals.</p>
        <h4>Key Logic</h4>
        <pre>function addToCart(productId) {
  cart.push(productId);
  updateCartBadge();
  renderCartSummary();
}</pre>`},aiassistant:{title:"AI Assistant Dashboard Console",content:`<h4>Overview</h4>
        <p>Build a dynamic workspace dashboard mounting automated AI panels alongside responsive charting tools.</p>
        <h4>Layout</h4>
        <p>Assemble using responsive multi-column layouts, containing dynamic status cards, stats metrics, and command lists.</p>`}};let l={theme:"dark",userName:"Skillora Learner",streak:1,points:0,coursesProgress:{html:0,css:0,javascript:0,python:0,java:0,sql:0,react:0,node:0,c:0,cpp:0},completedChallenges:[],completedQuizzes:[]};function _(){const e=localStorage.getItem("skillora_state");if(e)try{l={...l,...JSON.parse(e)}}catch(o){console.error("Failed to parse local storage state",o)}}function f(){localStorage.setItem("skillora_state",JSON.stringify(l))}document.addEventListener("DOMContentLoaded",()=>{_(),Y(),V(),K(),X(),Z(),ee(),te(),se(),ie(),ce(),de(),ue(),me(),ge(),ne(),oe(),le(),pe();const e=document.getElementById("search-nav-toggle"),o=document.getElementById("search-overlay"),a=document.getElementById("close-search-btn"),t=document.getElementById("global-search-input"),n=document.getElementById("search-results");e&&o&&a&&(e.addEventListener("click",()=>{o.classList.add("active"),t.focus()}),a.addEventListener("click",()=>{o.classList.remove("active")}),window.addEventListener("keydown",s=>{s.key==="Escape"&&o.classList.remove("active")})),t&&n&&t.addEventListener("input",s=>{const r=s.target.value.toLowerCase().trim();n.innerHTML="",!(r.length<2)&&(Object.keys(I).forEach(c=>{I[c].forEach((u,d)=>{if(u.title.toLowerCase().includes(r)||c.includes(r)){const m=document.createElement("a");m.href="#programming",m.className="search-result-item",m.innerHTML=`<i class="fa-solid fa-code text-cyan"></i> <strong>${u.title}</strong> (Course: ${c.toUpperCase()})`,m.addEventListener("click",()=>{o.classList.remove("active"),w(c,d)}),n.appendChild(m)}})}),Object.keys(C).forEach(c=>{const u=C[c];if(u.title.toLowerCase().includes(r)||c.includes(r)){const d=document.createElement("a");d.href="#english",d.className="search-result-item",d.innerHTML=`<i class="fa-solid fa-book-open text-purple"></i> <strong>${u.title}</strong>`,d.addEventListener("click",()=>{o.classList.remove("active"),$(c)}),n.appendChild(d)}}))});const i=document.getElementById("back-to-top");i&&(window.addEventListener("scroll",()=>{window.scrollY>400?i.classList.add("active"):i.classList.remove("active")}),i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))});function Y(){const e=document.documentElement,o=document.getElementById("theme-toggle");e.setAttribute("data-theme",l.theme),z(),o&&o.addEventListener("click",()=>{l.theme=l.theme==="dark"?"light":"dark",e.setAttribute("data-theme",l.theme),z(),f(),p(`Theme switched to ${l.theme} mode`,"info")})}function z(){const e=document.getElementById("theme-toggle");if(!e)return;const o=e.querySelector("i");l.theme==="light"?o.className="fa-solid fa-sun":o.className="fa-solid fa-moon"}function K(){const e=document.getElementById("intro-overlay"),o=document.getElementById("intro-step-1"),a=document.getElementById("intro-step-2");if(!e||!o||!a)return;document.body.style.overflow="hidden";let t=1,n=!1;function i(){n||(n=!0,t===1?(o.classList.remove("active"),setTimeout(()=>{a.classList.add("active"),t=2,n=!1},600)):t===2&&(a.classList.remove("active"),e.classList.add("fade-out"),setTimeout(()=>{e.remove(),document.body.style.overflow="",n=!1,p("Welcome to Skillora!","success")},800)))}e.addEventListener("wheel",r=>{r.preventDefault(),r.deltaY>0&&i()},{passive:!1});let s=0;e.addEventListener("touchstart",r=>{s=r.changedTouches[0].screenY},{passive:!0}),e.addEventListener("touchend",r=>{const c=r.changedTouches[0].screenY;s-c>50&&i()},{passive:!0}),window.addEventListener("keydown",r=>{e.parentNode&&(r.key===" "||r.key==="Enter"||r.key==="ArrowDown")&&(r.preventDefault(),i())})}function V(){const e=document.getElementById("typed-text");if(!e)return;const o=["Master Programming","Speak English Confidently","Practice Coding Free","Build Modern Projects"];let a=0,t=0,n=!1,i=100;function s(){const r=o[a];n?(e.textContent=r.substring(0,t-1),t--,i=50):(e.textContent=r.substring(0,t+1),t++,i=100),e.classList.add("typing-cursor"),!n&&t===r.length?(n=!0,i=2e3):n&&t===0&&(n=!1,a=(a+1)%o.length,i=500),setTimeout(s,i)}s()}function X(){const e=document.getElementById("scroll-progress-bar");e&&window.addEventListener("scroll",()=>{const o=document.body.scrollTop||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-document.documentElement.clientHeight,t=o/a*100;e.style.width=t+"%"})}function Z(){const e=document.querySelectorAll(".stat-number"),o={threshold:.5,rootMargin:"0px"},a=new IntersectionObserver((t,n)=>{t.forEach(i=>{if(i.isIntersecting){const s=i.target,r=parseInt(s.getAttribute("data-target")),c=s.getAttribute("data-suffix")||"";let u=0;const d=Math.ceil(r/50),m=setInterval(()=>{u+=d,u>=r?(s.innerText=r.toLocaleString()+c,clearInterval(m)):s.innerText=u.toLocaleString()+c},30);n.unobserve(s)}})},o);e.forEach(t=>a.observe(t))}function ee(){const e=document.querySelectorAll(".reveal-on-scroll"),o=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&t.target.classList.add("active")})},{threshold:.15});e.forEach(a=>o.observe(a))}function te(){const e=document.getElementById("course-search"),o=document.querySelectorAll(".filter-btn"),a=document.querySelectorAll(".course-card");function t(){const n=e?e.value.toLowerCase().trim():"",i=document.querySelector(".filter-btn.active").getAttribute("data-filter");a.forEach(s=>{const r=s.querySelector(".course-title").innerText.toLowerCase(),c=s.querySelector(".course-desc").innerText.toLowerCase(),u=s.getAttribute("data-category");(r.includes(n)||c.includes(n))&&(i==="all"||u===i)?s.style.display="flex":s.style.display="none"})}e&&e.addEventListener("input",t),o.forEach(n=>{n.addEventListener("click",i=>{o.forEach(s=>s.classList.remove("active")),i.target.classList.add("active"),t()})})}window.addEventListener("scroll",()=>{const e=document.querySelectorAll("section, header"),o=document.querySelectorAll(".nav-link");let a="hero";e.forEach(n=>{const i=n.offsetTop-100,s=n.offsetHeight;window.scrollY>=i&&window.scrollY<i+s&&(a=n.getAttribute("id"))}),o.forEach(n=>{n.classList.remove("active"),n.getAttribute("data-section")===a&&n.classList.add("active")});const t=document.getElementById("header-nav");t&&(window.scrollY>50?t.classList.add("sticky"):t.classList.remove("sticky"))});const S=document.getElementById("mobile-menu-toggle"),b=document.getElementById("nav-menu");S&&b&&(S.addEventListener("click",()=>{b.classList.toggle("active");const e=S.querySelector("i");b.classList.contains("active")?e.className="fa-solid fa-xmark":e.className="fa-solid fa-bars"}),b.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{b.classList.remove("active"),S.querySelector("i").className="fa-solid fa-bars"})}));let h={courseId:"",lessonIndex:0};function ne(){document.querySelectorAll(".start-course-btn").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-course");w(r,0)})});const o=document.getElementById("close-tut-btn"),a=document.getElementById("tutorial-modal");o&&a&&o.addEventListener("click",()=>{a.classList.remove("active")});const t=document.getElementById("tut-prev-btn"),n=document.getElementById("tut-next-btn"),i=document.getElementById("tut-try-btn");t&&t.addEventListener("click",()=>{h.lessonIndex>0&&w(h.courseId,h.lessonIndex-1)}),n&&n.addEventListener("click",()=>{const s=I[h.courseId];h.lessonIndex<s.length-1?w(h.courseId,h.lessonIndex+1):(l.coursesProgress[h.courseId]=100,f(),q(),y(),document.getElementById("tutorial-modal").classList.remove("active"),p(`Congratulations! You completed the ${h.courseId.toUpperCase()} module!`,"success"))}),i&&i.addEventListener("click",()=>{const s=I[h.courseId][h.lessonIndex];s.playgroundCode&&(document.getElementById("code-html").value=s.playgroundCode.html||"",document.getElementById("code-css").value=s.playgroundCode.css||"",document.getElementById("code-js").value=s.playgroundCode.js||"",document.getElementById("tutorial-modal").classList.remove("active"),document.querySelector('.editor-tab[data-tab="html"]').click(),E(),window.scrollTo({top:document.getElementById("playground").offsetTop-80,behavior:"smooth"}),p("Code copied to Playground!","info"))})}function w(e,o){const a=document.getElementById("tutorial-modal"),t=document.getElementById("tut-title"),n=document.getElementById("tut-content"),i=document.getElementById("tut-prev-btn"),s=document.getElementById("tut-next-btn"),r=document.getElementById("tut-try-btn"),c=I[e];if(!c||!c[o])return;h.courseId=e,h.lessonIndex=o;const u=c[o];t.innerText=`${e.toUpperCase()}: ${u.title}`,n.innerHTML=u.content,i.disabled=o===0,o===c.length-1?s.innerText="Finish Module":s.innerText="Next Lesson",u.playgroundCode?r.style.display="inline-flex":r.style.display="none";const d=Math.ceil((o+1)/c.length*100);d>l.coursesProgress[e]&&(l.coursesProgress[e]=d,l.points+=5,f(),q(),y()),a.classList.add("active")}function q(){Object.keys(l.coursesProgress).forEach(e=>{const o=document.getElementById(`progress-${e}`),a=document.getElementById(`text-${e}`);if(o&&a){const t=l.coursesProgress[e];o.style.width=t+"%",a.innerText=`${t}% Done`}})}function oe(){document.querySelectorAll(".open-english-module").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-module");$(i)})});const o=document.getElementById("close-eng-btn"),a=document.getElementById("english-modal");o&&a&&o.addEventListener("click",()=>{a.classList.remove("active")});const t=document.getElementById("word-audio-btn");t&&t.addEventListener("click",()=>{const n=document.getElementById("word-title").innerText;if("speechSynthesis"in window){const i=new SpeechSynthesisUtterance(n);i.lang="en-US",i.rate=.9,window.speechSynthesis.speak(i),p("Playing pronunciation guide...","info")}else p("Web Speech API not supported in your browser.","error")})}function $(e){const o=document.getElementById("english-modal"),a=document.getElementById("eng-title"),t=document.getElementById("eng-content"),n=C[e];n&&(a.innerText=n.title,t.innerHTML=n.content,l.points+=5,f(),y(),o.classList.add("active"))}function se(){const e=document.querySelectorAll(".editor-tab"),o=document.querySelectorAll(".editor-pane"),a=document.getElementById("run-code-btn"),t=document.getElementById("clear-editor-btn");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),o.forEach(s=>s.classList.remove("active")),n.classList.add("active");const i=n.getAttribute("data-tab");document.getElementById(`pane-${i}`).classList.add("active")})}),a&&a.addEventListener("click",E),t&&t.addEventListener("click",()=>{document.getElementById("code-html").value="",document.getElementById("code-css").value="",document.getElementById("code-js").value="",E(),p("Editor workspace cleared","info")}),E()}function E(){const e=document.getElementById("code-html").value,o=document.getElementById("code-css").value,a=document.getElementById("code-js").value,t=document.getElementById("editor-iframe");if(!t)return;const n=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                ${o}
            </style>
        </head>
        <body>
            ${e}
            <script>
                try {
                    ${a}
                } catch (err) {
                    console.error("Iframe JS execution error:", err);
                    document.body.innerHTML += "<div style='color:red; background:rgba(255,0,0,0.1); padding:10px; border-radius:5px; margin-top:20px;'>JavaScript Error: " + err.message + "</div>";
                }
            <\/script>
        </body>
        </html>
    `;t.srcdoc=n}let g={quizId:"",qIndex:0,score:0};function ie(){const e=document.querySelectorAll(".challenge-tab"),o=document.querySelectorAll(".challenge-pane");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(c=>c.classList.remove("active")),o.forEach(c=>c.classList.remove("active")),s.classList.add("active");const r=s.getAttribute("data-target");document.getElementById(r).classList.add("active")})}),document.querySelectorAll(".launch-challenge-btn").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-challenge"),c=U[r];c&&(document.getElementById("code-html").value=c.html,document.getElementById("code-css").value=c.css,document.getElementById("code-js").value=c.js,document.querySelector('.editor-tab[data-tab="html"]').click(),E(),l.completedChallenges.includes(r)||(l.completedChallenges.push(r),l.points+=20,f(),y()),window.scrollTo({top:document.getElementById("playground").offsetTop-80,behavior:"smooth"}),p(`Challenge template '${c.title}' loaded in playground!`,"success"))})});const t=document.querySelectorAll(".start-quiz-btn");ae(t);const n=document.getElementById("close-quiz-btn");n&&n.addEventListener("click",()=>{document.getElementById("quiz-modal").classList.remove("active")});const i=document.getElementById("quiz-next-q-btn");i&&i.addEventListener("click",()=>{const s=L[g.quizId];if(g.qIndex<s.length-1)g.qIndex++,O();else{document.getElementById("quiz-modal").classList.remove("active"),l.completedQuizzes.includes(g.quizId)||l.completedQuizzes.push(g.quizId);const r=g.score*15;l.points+=r,f(),y(),p(`Quiz completed! Score: ${g.score}/${s.length}. Earned +${r} XP!`,"success")}})}function ae(e){e.forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-quiz"),t=L[a];!t||t.length===0||(g.quizId=a,g.qIndex=0,g.score=0,document.getElementById("quiz-modal").classList.add("active"),O())})})}function O(){const e=L[g.quizId],o=e[g.qIndex],a=document.getElementById("quiz-q-progress"),t=document.getElementById("quiz-q-text"),n=document.getElementById("quiz-options-box"),i=document.getElementById("quiz-feedback");a.innerText=`Question ${g.qIndex+1} of ${e.length}`,t.innerText=o.q,n.innerHTML="",i.classList.add("hidden"),o.options.forEach((s,r)=>{const c=document.createElement("button");c.className="quiz-option-btn",c.innerText=s,c.addEventListener("click",()=>re(r,c)),n.appendChild(c)})}function re(e,o){const t=L[g.quizId][g.qIndex],n=document.getElementById("quiz-options-box"),i=document.getElementById("quiz-feedback"),s=document.getElementById("quiz-feedback-text"),r=n.querySelectorAll(".quiz-option-btn");r.forEach(c=>c.disabled=!0),e===t.correct?(o.classList.add("correct"),s.innerHTML=`<span style="color:var(--color-accent)"><i class="fa-solid fa-circle-check"></i> Correct!</span> ${t.explanation}`,g.score++):(o.classList.add("wrong"),r[t.correct].classList.add("correct"),s.innerHTML=`<span style="color:var(--color-error)"><i class="fa-solid fa-circle-xmark"></i> Incorrect.</span> ${t.explanation}`),i.classList.remove("hidden")}function ce(){q(),y();const e=document.getElementById("claim-cert-code"),o=document.getElementById("claim-cert-english");e&&e.addEventListener("click",()=>{j("Programming Foundations","SK-CODE-"+Math.floor(Math.random()*9e4+1e4))}),o&&o.addEventListener("click",()=>{j("English Fluency","SK-ENG-"+Math.floor(Math.random()*9e4+1e4))});const a=document.getElementById("close-cert-btn");a&&a.addEventListener("click",()=>{document.getElementById("cert-modal").classList.remove("active")});const t=document.getElementById("print-cert-btn");t&&t.addEventListener("click",()=>{window.print()})}function y(){const e=document.getElementById("dash-streak"),o=document.getElementById("dash-points"),a=document.getElementById("user-display-name"),t=document.getElementById("dash-completed-courses");let n=0;Object.keys(l.coursesProgress).forEach(v=>{l.coursesProgress[v]===100&&n++}),a&&(a.innerText=l.userName),e&&(e.innerText=`${l.streak} ${l.streak===1?"Day":"Days"}`),o&&(o.innerText=`${l.points} XP`),t&&(t.innerText=n);const i=201.06,s=document.getElementById("circle-prog-code"),r=document.getElementById("percent-lbl-code"),c=["html","css","javascript","python","java","sql","react","node","c","cpp"];let u=0;c.forEach(v=>u+=l.coursesProgress[v]);const d=Math.ceil(u/c.length);if(s&&r){r.innerText=`${d}%`;const v=i-d/100*i;s.style.strokeDashoffset=v}const m=document.getElementById("circle-prog-english"),A=document.getElementById("percent-lbl-english"),M=Math.ceil(l.completedQuizzes.length/3*100);if(m&&A){A.innerText=`${M}%`;const v=i-M/100*i;m.style.strokeDashoffset=v}const B=document.getElementById("claim-cert-code"),x=document.getElementById("cert-code-status"),P=l.completedChallenges.length;B&&x&&(P>=3?(B.removeAttribute("disabled"),x.innerText="Completed! Claim your credential now."):(B.setAttribute("disabled","true"),x.innerText=`Incomplete (Completed ${P}/3 coding tasks)`));const T=document.getElementById("claim-cert-english"),k=document.getElementById("cert-english-status"),D=l.completedQuizzes.length;T&&k&&(D>=3?(T.removeAttribute("disabled"),k.innerText="Completed! Claim your credential now."):(T.setAttribute("disabled","true"),k.innerText=`Incomplete (Completed ${D}/3 English quizzes)`));const H=document.querySelector("#activity-chart path");if(H){const R=Math.max(20,100-l.points*.1),F=Math.max(10,80-l.points*.2),N=Math.max(5,60-l.points*.3),J=Math.max(5,40-l.points*.4),W=Math.max(5,30-l.points*.5),Q=Math.max(5,20-l.points*.6);H.setAttribute("d",`M 30 100 L 70 ${R} L 110 ${F} L 150 ${N} L 190 ${J} L 230 ${W} L 270 ${Q}`)}}function j(e,o){const a=document.getElementById("cert-modal"),t=document.getElementById("cert-recipient-name"),n=document.getElementById("cert-reason"),i=document.getElementById("cert-date"),s=document.getElementById("cert-id");if(t&&(t.innerText=l.userName),s&&(s.innerText=o),i){const r=new Date;i.innerText=r.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n&&(e.includes("Programming")?n.innerText="for successfully demonstrating mastery in Programming Foundations through practical code execution challenges and evaluation tests on the Skillora platform.":n.innerText="for outstanding completion of the English Communication course syllabus, exhibiting fluency in professional presentation structures and interview protocols."),a.classList.add("active")}function le(){const e=document.querySelectorAll(".proj-filter-btn"),o=document.querySelectorAll(".project-card");e.forEach(t=>{t.addEventListener("click",n=>{e.forEach(s=>s.classList.remove("active")),n.target.classList.add("active");const i=t.getAttribute("data-level");o.forEach(s=>{i==="all"||s.getAttribute("data-level")===i?s.style.display="flex":s.style.display="none"})})}),document.querySelectorAll(".open-project-guide").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-project"),i=G[n];if(!i)return;const s=document.getElementById("english-modal"),r=document.getElementById("eng-title"),c=document.getElementById("eng-content");r.innerText=`Project Guide: ${i.title}`,c.innerHTML=i.content,s.classList.add("active")})})}function de(){const e=document.getElementById("forum-post-form"),o=document.getElementById("forum-feed-container");e&&o&&e.addEventListener("submit",a=>{a.preventDefault();const t=document.getElementById("forum-author").value,n=document.getElementById("forum-category").value,i=document.getElementById("forum-message").value,s=document.createElement("div");s.className="forum-post",s.innerHTML=`
                <div class="post-header">
                    <span class="author"><i class="fa-solid fa-user-circle"></i> ${t}</span>
                    <span class="post-tag tag-${n}">${n}</span>
                </div>
                <p class="post-text">${i}</p>
                <div class="post-footer"><span><i class="fa-regular fa-heart"></i> 0</span> <span><i class="fa-regular fa-comment"></i> 0</span></div>
            `,o.insertBefore(s,o.firstChild),l.points+=10,f(),y(),document.getElementById("forum-message").value="",p("Showcase post submitted successfully! Earned +10 XP.","success")})}function ue(){const e=[{text:'"Skillora bridged a huge gap for me. I wanted to learn code, but I also needed to talk to clients. The parallel structure is genius."',author:"David K.",sub:"Junior Developer, Canada"},{text:'"The word audio speech synthesizer helped me check my pronunciation, and running code on the editor made learning CSS animations straightforward."',author:"Sophia L.",sub:"Linguistic Student, Spain"},{text:'"I cleared my tech interview at my startup company using the STAR framework. Huge thanks to Skillora!"',author:"Rohan M.",sub:"Full-Stack Engineer, India"}],o=document.querySelector(".carousel-container");if(!o)return;let a=0;function t(){o.innerHTML=`
            <div class="testimonial-card active">
                <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
                <p class="testimonial-text">${e[a].text}</p>
                <div class="reviewer-info">
                    <h5>${e[a].author}</h5>
                    <p>${e[a].sub}</p>
                </div>
            </div>
        `,a=(a+1)%e.length}t(),setInterval(t,4500)}function me(){const e=document.getElementById("ai-chat-bubble"),o=document.getElementById("ai-chat-container"),a=document.getElementById("close-chat-btn"),t=document.getElementById("chat-input-form"),n=document.getElementById("chat-user-message"),i=document.getElementById("chat-messages-box"),s=document.querySelectorAll(".chat-sugg-btn");e&&o&&e.addEventListener("click",()=>{o.classList.toggle("active")}),a&&a.addEventListener("click",()=>{o.classList.remove("active")}),s.forEach(c=>{c.addEventListener("click",()=>{n.value=c.innerText,t.dispatchEvent(new Event("submit"))})}),t&&t.addEventListener("submit",c=>{c.preventDefault();const u=n.value.trim();if(!u)return;r(u,"user"),n.value="";const d=u.toLowerCase();let m="I'm still studying technical expressions! Try asking me about 'closures in JS', 'variables', 'conditional tenses', or 'job interview frameworks' and I will gladly explain.";d.includes("closure")?m=`A <strong>closure</strong> is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JS, closures are created every time a function is created, at function creation time.

<code>function outer() {
  let code = "JS";
  return function() { console.log(code); };
}</code>`:d.includes("variable")?m=`A <strong>variable</strong> is a container for storing data values. In JavaScript, we declare variables using: 
- <code>let</code> (block-scoped, mutable)
- <code>const</code> (block-scoped, immutable)
- <code>var</code> (function-scoped, legacy)

In Python, you declare variables directly without keywords: <code>x = 5</code>.`:d.includes("tense")||d.includes("passive")||d.includes("conditional")?m=`English conditionals express that one action depends on another. 
- <strong>Zero Conditional:</strong> Facts (If you heat ice, it melts).
- <strong>First Conditional:</strong> Future possibility (If it rains, we will stay inside).
- <strong>Second Conditional:</strong> Imaginary/unlikely (If I won the lottery, I would buy a yacht).`:d.includes("interview")||d.includes("star")?m=`To excel in coding interviews, communicate your logic using the <strong>STAR Framework</strong>:
- <strong>S</strong>ituation: Briefly define the issue.
- <strong>T</strong>ask: State your objective.
- <strong>A</strong>ction: Detail your steps/design.
- <strong>R</strong>esult: Show data or outcomes.`:d.includes("html")||d.includes("tag")?m="HTML tags define structural layouts. Elements typically contain an opening tag <code>&lt;p&gt;</code>, contents, and a closing tag <code>&lt;/p&gt;</code>. Let me know if you'd like a specific guide on tables or lists!":d.includes("hello")||d.includes("hi")?m="Hello! How can I support your programming or english study session today?":d.includes("css")&&(m=`CSS (Cascading Style Sheets) manages visual styling. Use selector blocks to apply styles:

<code>.box {
  background: var(--color-primary);
  border-radius: 12px;
}</code>`),setTimeout(()=>{r(m,"bot")},800)});function r(c,u){const d=document.createElement("div");d.className=`chat-msg ${u}`,d.innerHTML=c,i.appendChild(d),i.scrollTop=i.scrollHeight}}function ge(){const e=document.getElementById("auth-modal"),o=e?e.querySelector(".close-modal-btn"):null,a=document.getElementById("tab-login"),t=document.getElementById("tab-signup"),n=document.getElementById("auth-form-login"),i=document.getElementById("auth-form-signup");e&&(document.querySelectorAll(".show-login-modal").forEach(s=>{s.addEventListener("click",()=>{e.classList.add("active"),a.click()})}),document.querySelectorAll(".show-signup-modal").forEach(s=>{s.addEventListener("click",()=>{e.classList.add("active"),t.click()})}),o&&o.addEventListener("click",()=>{e.classList.remove("active")}),a&&t&&n&&i&&(a.addEventListener("click",()=>{a.classList.add("active"),t.classList.remove("active"),n.classList.add("active"),i.classList.remove("active")}),t.addEventListener("click",()=>{t.classList.add("active"),a.classList.remove("active"),i.classList.add("active"),n.classList.remove("active")})),n&&n.addEventListener("submit",s=>{s.preventDefault();const r=document.getElementById("login-email").value;l.userName=r.split("@")[0],l.streak=2,f(),y(),e.classList.remove("active"),p(`Welcome back, ${l.userName}!`,"success")}),i&&i.addEventListener("submit",s=>{s.preventDefault();const r=document.getElementById("signup-name").value;l.userName=r,l.points+=50,f(),y(),e.classList.remove("active"),p(`Welcome to Skillora, ${l.userName}! +50 XP bonus!`,"success")}))}function pe(){const e=document.getElementById("contact-form");e&&e.addEventListener("submit",a=>{a.preventDefault();const t=document.getElementById("contact-name").value;p(`Thank you, ${t}! Your inquiry has been dispatched to our tutors.`,"success"),e.reset()});const o=document.getElementById("newsletter-form");o&&o.addEventListener("submit",a=>{a.preventDefault();const t=document.getElementById("news-email").value;p(`Successfully subscribed ${t} to weekly challenges!`,"success"),o.reset()})}function p(e,o="info"){const a=document.getElementById("toast-container");if(!a)return;const t=document.createElement("div");t.className=`toast ${o}`;let n="fa-circle-info";o==="success"&&(n="fa-circle-check"),o==="error"&&(n="fa-triangle-exclamation"),t.innerHTML=`<i class="fa-solid ${n}"></i> <span>${e}</span>`,a.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateX(50px)",t.style.transition="all 0.3s ease-out",setTimeout(()=>t.remove(),300)},4e3)}
