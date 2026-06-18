/* ==========================================================================
   Skillora Main Interaction & Script Logic
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Data Store (Lessons, Challenges, Quizzes, Projects)
// --------------------------------------------------------------------------

const COURSES_DATA = {
    html: [
        {
            title: "HTML Introduction",
            content: `<h4>What is HTML?</h4>
            <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. It describes the structure of a Web page and consists of a series of elements which tell the browser how to display the content.</p>
            <h4>A Simple HTML Document</h4>
            <pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n&lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;h1&gt;My First Heading&lt;/h1&gt;\n&lt;p&gt;My first paragraph.&lt;/p&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;</pre>
            <p>Try running this basic structure in our code editor playground to see how tags render layout structures.</p>`,
            playgroundCode: {
                html: `<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>`,
                css: `body { font-family: sans-serif; padding: 20px; background-color: #f0fdf4; }`,
                js: `console.log("HTML Rendered!");`
            }
        },
        {
            title: "HTML Elements & Attributes",
            content: `<h4>HTML Elements</h4>
            <p>An HTML element is defined by a start tag, some content, and an end tag: <code>&lt;tagname&gt; Content goes here... &lt;/tagname&gt;</code>.</p>
            <p>HTML elements can also have <strong>attributes</strong>, which provide additional information about elements. Attributes are always specified in the start tag and usually come in name/value pairs like: <code>name="value"</code>.</p>
            <h4>Common Examples</h4>
            <ul>
                <li><code>&lt;a href="https://skillora.edu"&gt;</code> - The href attribute specifies the URL of the page the link goes to.</li>
                <li><code>&lt;img src="img_girl.jpg" alt="Girl"&gt;</code> - The src attribute specifies the path to the image to be displayed.</li>
            </ul>`
        }
    ],
    css: [
        {
            title: "CSS Introduction",
            content: `<h4>What is CSS?</h4>
            <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. It saves a lot of work because it can control the layout of multiple web pages all at once.</p>
            <h4>CSS Selector & Declaration Syntax</h4>
            <p>A CSS rule-set consists of a selector and a declaration block:</p>
            <pre>h1 {\n  color: #7C3AED;\n  font-size: 24px;\n}</pre>
            <p>The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons, defining the property name and value.</p>`,
            playgroundCode: {
                html: `<h1>Styling Header</h1>\n<p>See how the CSS modifications are applied when running.</p>`,
                css: `h1 {\n  color: #7C3AED;\n  font-family: 'Sora', sans-serif;\n  border-left: 5px solid #00D4FF;\n  padding-left: 10px;\n}`,
                js: ``
            }
        },
        {
            title: "CSS Box Model",
            content: `<h4>Understanding the Box Model</h4>
            <p>In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
            <ul>
                <li><strong>Content</strong> - The content of the box, where text and images appear.</li>
                <li><strong>Padding</strong> - Clears an area around the content. The padding is transparent.</li>
                <li><strong>Border</strong> - A border that goes around the padding and content.</li>
                <li><strong>Margin</strong> - Clears an area outside the border. The margin is transparent.</li>
            </ul>`
        }
    ],
    javascript: [
        {
            title: "JavaScript Basics",
            content: `<h4>What is JavaScript?</h4>
            <p>JavaScript (JS) is a lightweight, interpreted, or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.</p>
            <h4>DOM Manipulation Syntax</h4>
            <p>JavaScript allows you to dynamically change HTML content, attributes, and styles:</p>
            <pre>document.getElementById("demo").innerHTML = "Hello JS!";</pre>
            <p>Try running this method inside the playground by connecting HTML elements and firing JS click callbacks.</p>`,
            playgroundCode: {
                html: `<h1 id="headline">Original Text</h1>\n<button id="action-btn">Click Me!</button>`,
                css: `button {\n  background: #00D4FF;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n}`,
                js: `document.getElementById("action-btn").addEventListener("click", () => {\n  document.getElementById("headline").innerText = "Changed by JavaScript!";\n  document.getElementById("headline").style.color = "#7C3AED";\n});`
            }
        }
    ],
    python: [
        {
            title: "Python Syntax Basics",
            content: `<h4>Why Python?</h4>
            <p>Python is a popular programming language. It is used for web development (server-side), software development, mathematics, and system scripting. Python uses new lines to complete a command, unlike other programming languages which often use semicolons.</p>
            <h4>Indentation is Key</h4>
            <p>Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions, and classes. Other programming languages often use curly-brackets for this purpose.</p>
            <pre>if 5 > 2:\n    print("Five is greater than two!")</pre>`
        }
    ],
    java: [
        {
            title: "Java Variables & Data Types",
            content: `<h4>Java Variable Declarations</h4>
            <p>In Java, variables must be declared with their specific type. Java is a strongly typed object-oriented language.</p>
            <pre>String name = "John";\nint myNum = 15;\nfloat myFloatNum = 5.99f;\nchar myLetter = 'D';\nboolean myBool = true;</pre>`
        }
    ],
    sql: [
        {
            title: "SQL Query Basics",
            content: `<h4>What is SQL?</h4>
            <p>SQL stands for Structured Query Language. SQL lets you access and manipulate relational databases. It is an ANSI standard.</p>
            <h4>The SELECT Statement</h4>
            <pre>SELECT CustomerName, City FROM Customers;</pre>
            <p>The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.</p>`
        }
    ],
    react: [
        {
            title: "React components & Hooks",
            content: `<h4>What is React?</h4>
            <p>React is a JavaScript library created by Facebook for building user interfaces. It is used to build single-page applications and allows us to create reusable UI components.</p>
            <h4>useState Hook Example</h4>
            <pre>import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return &lt;button onClick={() => setCount(count + 1)}&gt;{count}&lt;/button&gt;;\n}</pre>`
        }
    ],
    node: [
        {
            title: "Node.js Server Creation",
            content: `<h4>What is Node.js?</h4>
            <p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
            <h4>Basic HTTP Server</h4>
            <pre>const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.end('Hello from Node!');\n});\nserver.listen(3000);</pre>`
        }
    ],
    c: [
        {
            title: "C Variables & Compilation",
            content: `<h4>Introduction to C</h4>
            <p>C is a powerful general-purpose programming language. It is fast, efficient, and gives direct access to systems resources.</p>
            <h4>C Basic Program Structure</h4>
            <pre>#include &lt;stdio.h&gt;\n\nint main() {\n  printf("Hello Skillora C!\\n");\n  return 0;\n}</pre>
            <p>Use pointers to manage memory addresses, and compile directly to native instructions.</p>`,
            playgroundCode: {
                html: `<div id="c-console">Running C Simulation...</div>`,
                css: `body { background: #111827; color: #10B981; font-family: monospace; padding: 20px; }`,
                js: `document.getElementById("c-console").innerText = "Output:\\nHello Skillora C!\\nProgram exited with code 0";`
            }
        }
    ],
    cpp: [
        {
            title: "C++ Objects & Classes",
            content: `<h4>Introduction to C++</h4>
            <p>C++ is an extension of C that incorporates Object-Oriented Programming principles, making it perfect for large-scale games, browsers, and systems software.</p>
            <h4>C++ Class Template</h4>
            <pre>#include &lt;iostream&gt;\nusing namespace std;\n\nclass Student {\n  public:\n    string name;\n    void introduce() {\n      cout &lt;&lt; "Hi, I am " &lt;&lt; name;\n    }\n};</pre>`,
            playgroundCode: {
                html: `<div id="cpp-console">Building objects...</div>`,
                css: `body { background: #0f172a; color: #38bdf8; font-family: monospace; padding: 20px; }`,
                js: `document.getElementById("cpp-console").innerText = "Hi, I am Alex\\nC++ Program simulated successfully!";`
            }
        }
    ]
};

const ENGLISH_DATA = {
    grammar: {
        title: "Grammar & Tenses Guide",
        content: `<h4>Active &amp; Passive Voice</h4>
        <p>In an active sentence, the subject performs the action. In a passive sentence, the subject receives the action.</p>
        <ul>
            <li><strong>Active:</strong> The developer wrote the JavaScript script.</li>
            <li><strong>Passive:</strong> The JavaScript script was written by the developer.</li>
        </ul>
        <h4>Conditional Clauses</h4>
        <p>Conditionals describe the result of something that might happen or might have happened:</p>
        <p><em>"If I practice coding daily (condition), I will pass the technical interview (result)."</em></p>`
    },
    conversations: {
        title: "Daily Conversation Starters & Idioms",
        content: `<h4>Useful Idioms in Tech &amp; Business</h4>
        <ul>
            <li><strong>"Byte the bullet"</strong> - Face a difficult situation with courage. (Derived from 'bite the bullet').</li>
            <li><strong>"Get your ducks in a row"</strong> - Organize your tasks cleanly.</li>
            <li><strong>"Hit the ground running"</strong> - Start a new project or job immediately with great energy.</li>
        </ul>
        <h4>Collaborative Phrases</h4>
        <p>Use these when working in teams: <em>"Let's sync up on this module tomorrow,"</em> or <em>"Could you shed some light on this pull request?"</em></p>`
    },
    interviews: {
        title: "Job Interview English Preparation",
        content: `<h4>The STAR Speaking Method</h4>
        <p>When answering behavioral interview questions, structure your answers using the STAR method:</p>
        <ol>
            <li><strong>Situation:</strong> Set the scene and give necessary details.</li>
            <li><strong>Task:</strong> Describe your responsibility in that situation.</li>
            <li><strong>Action:</strong> Explain exactly what steps you took to address it.</li>
            <li><strong>Result:</strong> Share what outcomes your actions achieved (use metrics!).</li>
        </ol>
        <h4>Example Prompt</h4>
        <p><em>"Tell me about a time you resolved a merge conflict..."</em> -> Start by setting up the scenario, detail the modules affected, the collaboration steps you took, and final green builds.</p>`
    },
    public: {
        title: "Public Speaking & Presentations",
        content: `<h4>Structuring a Technical Presentation</h4>
        <p>A professional presentation consists of three core components:</p>
        <ul>
            <li><strong>Introduction (The Hook):</strong> Grab attention and clearly define the problem statements.</li>
            <li><strong>Body (The Logic):</strong> Walk through solutions sequentially using clean slides and transitional phrases like <em>"Moving on to..."</em> or <em>"This brings us to the next metric..."</em>.</li>
            <li><strong>Conclusion (The Takeaway):</strong> Summarize key solutions and open the floor for Q&amp;A.</li>
        </ul>`
    }
};

const QUIZZES = {
    grammar: [
        {
            q: "Select the correct conditional sentence:",
            options: [
                "If I will study, I pass the exam.",
                "If I study, I will pass the exam.",
                "If I studied, I will passed the exam.",
                "If I study, I passed the exam."
            ],
            correct: 1,
            explanation: "The first conditional is formed using simple present in the 'if' clause and simple future ('will' + verb) in the main clause."
        },
        {
            q: "Fill in the blank: The code ________ by the team before the deployment yesterday.",
            options: [
                "was reviewed",
                "reviews",
                "has reviewed",
                "had reviewed"
            ],
            correct: 0,
            explanation: "'Was reviewed' is the correct passive voice construction for actions completed in the past."
        },
        {
            q: "Identify the incorrect usage: 'She explain me the database schema.'",
            options: [
                "The subject pronoun is wrong.",
                "The verb explain needs 'to me'.",
                "The word database should be data.",
                "No mistake in this sentence."
            ],
            correct: 1,
            explanation: "In English, the verb 'explain' takes a direct object first. We explain something *to* someone. Correct sentence: 'She explained the database schema to me.'"
        }
    ],
    vocabulary: [
        {
            q: "What is the synonym of the word 'Eloquence'?",
            options: [
                "Silence",
                "Fluency and expressiveness",
                "Confusion",
                "Aggression"
            ],
            correct: 1,
            explanation: "Eloquence is fluent, persuasive, and elegant speaking or writing."
        },
        {
            q: "What does the idiom 'Hit the ground running' mean?",
            options: [
                "To fall down while jogging.",
                "To start a new activity quickly and with enthusiasm.",
                "To delay projects deliberately.",
                "To inspect cables on the floor."
            ],
            correct: 1,
            explanation: "'Hit the ground running' means to start a job or project immediately and with great energy."
        }
    ],
    interview: [
        {
            q: "What does the 'R' in the STAR method stand for?",
            options: [
                "Reaction",
                "Review",
                "Result",
                "Responsibility"
            ],
            correct: 2,
            explanation: "STAR stands for Situation, Task, Action, and Result."
        },
        {
            q: "Which response demonstrates professional syntax when discussing a bug?",
            options: [
                "I broke the server and didn't know what to do.",
                "The server crashed, but I identified the memory leak and resolved the database connection pools.",
                "Our software is bad, it crashed a lot of times.",
                "It was my teammate's fault that the server went offline."
            ],
            correct: 1,
            explanation: "Focusing on the issue, identification path, and structured resolution showcases positive engineering communication skills."
        }
    ]
};

const CODE_CHALLENGES = {
    "rev-string": {
        title: "Reverse a String",
        desc: "Implement a function that reverses a given string input.",
        html: `<div id="output">Result will appear here</div>\n<button onclick="testReverse()">Run Reverse Test</button>`,
        css: `body { font-family: sans-serif; text-align: center; padding: 20px; }`,
        js: `function reverseString(str) {\n  // Write your code here\n  return str.split('').reverse().join('');\n}\n\nfunction testReverse() {\n  const result = reverseString("Skillora");\n  document.getElementById("output").innerText = "Input: 'Skillora' -> Output: '" + result + "'";\n}`
    },
    "find-dups": {
        title: "Find Duplicate Items",
        desc: "Return an array containing only the non-unique values from a list.",
        html: `<div id="output">Duplicates list...</div>\n<button onclick="testDups()">Run Duplicates Test</button>`,
        css: `body { font-family: sans-serif; text-align: center; padding: 20px; }`,
        js: `function findDuplicates(arr) {\n  // Write your code here\n  return arr.filter((item, index) => arr.indexOf(item) !== index);\n}\n\nfunction testDups() {\n  const list = [1, 2, 3, 2, 4, 5, 4];\n  const result = findDuplicates(list);\n  document.getElementById("output").innerText = "List: [1,2,3,2,4,5,4] -> Duplicates: [" + result.join(', ') + "]";\n}`
    },
    "api-retry": {
        title: "API Retry Mechanism",
        desc: "Construct a simulated function that logs retries.",
        html: `<div id="output">Status...</div>\n<button onclick="testRetry()">Run Retry Test</button>`,
        css: `body { font-family: sans-serif; text-align: center; padding: 20px; }`,
        js: `async function fetchWithRetry(url, retries = 3) {\n  for(let i = 0; i < retries; i++) {\n     console.log("Attempt " + (i+1));\n  }\n  return "Fetched successfully after retries!";\n}\n\nfunction testRetry() {\n  fetchWithRetry("mock-api").then(res => {\n     document.getElementById("output").innerText = res;\n  });\n}`
    }
};

const PROJECT_GUIDES = {
    calculator: {
        title: "Sleek Glass Calculator",
        content: `<h4>Overview</h4>
        <p>Create a stunning glassmorphic calculator using HTML grids and simple JS evaluation logic.</p>
        <h4>HTML Skeleton</h4>
        <pre>&lt;div class="calculator"&gt;\n  &lt;div class="display" id="display"&gt;0&lt;/div&gt;\n  &lt;div class="buttons"&gt;\n    &lt;button onclick="clear()"&gt;C&lt;/button&gt;\n    &lt;button onclick="press('/')"&gt;/&lt;/button&gt;\n    ...\n  &lt;/div&gt;\n&lt;/div&gt;</pre>
        <h4>JavaScript Eval Logic</h4>
        <pre>function press(val) {\n  document.getElementById("display").innerText += val;\n}\nfunction calculate() {\n  let exp = document.getElementById("display").innerText;\n  document.getElementById("display").innerText = eval(exp);\n}</pre>`
    },
    weather: {
        title: "Geo-Weather Forecast App",
        content: `<h4>Overview</h4>
        <p>Integrate a weather dashboard using public fetch endpoints.</p>
        <h4>JavaScript Fetch Call</h4>
        <pre>async function getWeather(city) {\n  const key = "YOUR_API_KEY";\n  const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${key}\`);\n  const data = await res.json();\n  renderWeather(data);\n}</pre>
        <h4>Tips</h4>
        <p>Use modern CSS variables to dynamically change the background gradient to match temperature parameters (e.g. warm orange for high heat, cool blue for low temperatures).</p>`
    },
    dashboard: {
        title: "Interactive E-Commerce Dashboard",
        content: `<h4>Overview</h4>
        <p>A full responsive management dashboard complete with dynamic SVG charts, local storage data syncing, and user tracking indicators.</p>
        <h4>Key Steps</h4>
        <ol>
            <li>Structure grid sections for Sidebar, Stats row, and Main Chart canvas.</li>
            <li>Write a local data sync utility using JSON parse/stringify in localStorage to retain newly added product items.</li>
            <li>Render responsive SVG lines mapping monthly sales figures.</li>
        </ol>`
    },
    todo: {
        title: "Smart To-Do Application",
        content: `<h4>Overview</h4>
        <p>Assemble a task tracker syncing dynamically with browser memory caches.</p>
        <h4>JavaScript Local Sync</h4>
        <pre>function saveTodos(todos) {\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\nfunction loadTodos() {\n  return JSON.parse(localStorage.getItem('todos')) || [];\n}</pre>`
    },
    landing: {
        title: "SaaS Landing Page",
        content: `<h4>Overview</h4>
        <p>Design a stunning startup showcase highlighting key product attributes.</p>
        <h4>Key Elements</h4>
        <p>Focus on smooth CSS keyframe entries, layout structures utilizing CSS grids, responsive elements matching mobile frames, and active buttons with custom glowing effects.</p>`
    },
    quiz: {
        title: "Interactive Quiz App",
        content: `<h4>Overview</h4>
        <p>A robust interactive web quiz referencing variable questions databases.</p>
        <h4>JavaScript Question Loop</h4>
        <pre>questions.forEach((q, index) => {\n  let btn = document.createElement('button');\n  btn.innerText = q.text;\n  btn.onclick = () => check(index);\n});</pre>`
    },
    portfolio: {
        title: "Developer Portfolio Resume",
        content: `<h4>Overview</h4>
        <p>Establish a gorgeous web presence displaying your projects, skills details, and testimonials carousel.</p>
        <h4>Tips</h4>
        <p>Incorporate dark theme configurations matching client devices preferences, alongside validated custom contact fields.</p>`
    },
    chat: {
        title: "Real-time Chat Portal UI",
        content: `<h4>Overview</h4>
        <p>Design a technical messaging viewport modeling active chats.</p>
        <h4>Layout</h4>
        <p>Format using CSS flexbox matching standard screen frames. Include automated robot response flows responding dynamically to custom typing queries.</p>`
    },
    ecommerce: {
        title: "E-Commerce Cart System",
        content: `<h4>Overview</h4>
        <p>Create a full-scale shopping basket including catalog selectors, dynamic item counting, and checkout totals.</p>
        <h4>Key Logic</h4>
        <pre>function addToCart(productId) {\n  cart.push(productId);\n  updateCartBadge();\n  renderCartSummary();\n}</pre>`
    },
    aiassistant: {
        title: "AI Assistant Dashboard Console",
        content: `<h4>Overview</h4>
        <p>Build a dynamic workspace dashboard mounting automated AI panels alongside responsive charting tools.</p>
        <h4>Layout</h4>
        <p>Assemble using responsive multi-column layouts, containing dynamic status cards, stats metrics, and command lists.</p>`
    }
};

// --------------------------------------------------------------------------
// 2. Global State & Initializer
// --------------------------------------------------------------------------

let state = {
    theme: 'light',
    userName: 'Skillora Learner',
    streak: 1,
    points: 0,
    coursesProgress: {
        html: 0,
        css: 0,
        javascript: 0,
        python: 0,
        java: 0,
        sql: 0,
        react: 0,
        node: 0,
        c: 0,
        cpp: 0
    },
    completedChallenges: [],
    completedQuizzes: []
};

// Load saved state from localStorage
function loadState() {
    const saved = localStorage.getItem('skillora_state');
    if (saved) {
        try {
            state = { ...state, ...JSON.parse(saved) };
        } catch (e) {
            console.error("Failed to parse local storage state", e);
        }
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('skillora_state', JSON.stringify(state));
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();

    initTheme();
    initTypingAnimation();
    initIntroOverlay();
    initScrollProgressBar();
    initStatsCounters();
    initScrollObserverAnimations();
    initCourseFilters();
    initCodeEditor();
    initQuizManager();
    initDashboard();
    initCommunityForum();
    initTestimonialsCarousel();
    initAIChatbot();
    initAuthModals();
    initTutorialModalLinks();
    initEnglishModalLinks();
    initProjectGuides();
    initFormHandlers();
    
    // Global search overlay listeners
    const searchNavToggle = document.getElementById('search-nav-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const globalSearchInput = document.getElementById('global-search-input');
    const searchResults = document.getElementById('search-results');

    if (searchNavToggle && searchOverlay && closeSearchBtn) {
        searchNavToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            globalSearchInput.focus();
        });

        closeSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

        // Close search on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchOverlay.classList.remove('active');
            }
        });
    }

    if (globalSearchInput && searchResults) {
        globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';
            
            if (query.length < 2) return;

            // Search courses
            Object.keys(COURSES_DATA).forEach(courseId => {
                COURSES_DATA[courseId].forEach((lesson, index) => {
                    if (lesson.title.toLowerCase().includes(query) || courseId.includes(query)) {
                        const item = document.createElement('a');
                        item.href = '#programming';
                        item.className = 'search-result-item';
                        item.innerHTML = `<i class="fa-solid fa-code text-cyan"></i> <strong>${lesson.title}</strong> (Course: ${courseId.toUpperCase()})`;
                        item.addEventListener('click', () => {
                            searchOverlay.classList.remove('active');
                            openTutorialModal(courseId, index);
                        });
                        searchResults.appendChild(item);
                    }
                });
            });

            // Search English modules
            Object.keys(ENGLISH_DATA).forEach(moduleId => {
                const mod = ENGLISH_DATA[moduleId];
                if (mod.title.toLowerCase().includes(query) || moduleId.includes(query)) {
                    const item = document.createElement('a');
                    item.href = '#english';
                    item.className = 'search-result-item';
                    item.innerHTML = `<i class="fa-solid fa-book-open text-purple"></i> <strong>${mod.title}</strong>`;
                    item.addEventListener('click', () => {
                        searchOverlay.classList.remove('active');
                        openEnglishModal(moduleId);
                    });
                    searchResults.appendChild(item);
                }
            });
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// --------------------------------------------------------------------------
// 3. Theme Toggle & Custom Cursor Logic
// --------------------------------------------------------------------------

function initTheme() {
    const html = document.documentElement;
    
    // Force light theme always
    state.theme = 'light';
    html.setAttribute('data-theme', 'light');
    saveState();

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.style.display = 'none';
    }
}

function updateThemeBtnIcon() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    if (state.theme === 'light') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

function initIntroOverlay() {
    const overlay = document.getElementById('intro-overlay');
    const step1 = document.getElementById('intro-step-1');
    const step2 = document.getElementById('intro-step-2');
    
    if (!overlay || !step1 || !step2) return;

    // Lock page scroll initially
    document.body.style.overflow = 'hidden';

    let introStep = 1;
    let transitioning = false;

    function nextStep() {
        if (transitioning) return;
        transitioning = true;

        if (introStep === 1) {
            step1.classList.remove('active');
            setTimeout(() => {
                step2.classList.add('active');
                introStep = 2;
                // Wait 1.5 seconds after showing step 2 to allow the user to read the developer credit text.
                // This prevents fast/inertia scrolling from immediately skipping it.
                setTimeout(() => {
                    transitioning = false;
                }, 1500);
            }, 600);
        } else if (introStep === 2) {
            step2.classList.remove('active');
            overlay.classList.add('fade-out');
            setTimeout(() => {
                document.body.style.overflow = ''; // Restore browser scrolling
                
                // Reset scroll to 0,0 and temporarily lock scroll momentum to avoid automatic scroll down
                window.scrollTo(0, 0);
                const lockScroll = () => {
                    if (window.scrollY > 0) {
                        window.scrollTo(0, 0);
                    }
                };
                window.addEventListener('scroll', lockScroll);
                setTimeout(() => {
                    window.removeEventListener('scroll', lockScroll);
                }, 300); // absorb momentum for 300ms
                
                transitioning = false;
                showToast("Welcome to Skillora!", "success");
            }, 800);
        }
    }

    // Scroll listener on wheel (desktop)
    overlay.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 0) { // Scroll Down
            nextStep();
        }
    }, { passive: false });

    // Touch listeners (mobile swipes)
    let touchStartY = 0;
    overlay.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    overlay.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].screenY;
        if (touchStartY - touchEndY > 50) { // Swipe Up (Scroll Down)
            nextStep();
        }
    }, { passive: true });

    // Keyboard controls (Space, Enter, Down Arrow)
    window.addEventListener('keydown', (e) => {
        if (overlay && !overlay.classList.contains('fade-out')) {
            if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown') {
                e.preventDefault();
                nextStep();
            }
        }
    });


}

// --------------------------------------------------------------------------
// 4. Typing Text & Scroll Progress Bar
// --------------------------------------------------------------------------

function initTypingAnimation() {
    const typedSpan = document.getElementById('typed-text');
    if (!typedSpan) return;

    const words = ["Master Programming", "Speak English Confidently", "Practice Coding Free", "Build Modern Projects"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        typedSpan.classList.add('typing-cursor');

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }
    type();
}

function initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// --------------------------------------------------------------------------
// 5. Counters & IntersectionObserver Animations
// --------------------------------------------------------------------------

function initStatsCounters() {
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: "0px"
    };

    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const limit = parseInt(target.getAttribute('data-target'));
                const suffix = target.getAttribute('data-suffix') || '';
                let count = 0;
                const increment = Math.ceil(limit / 50); // Divide to target count rate

                const timer = setInterval(() => {
                    count += increment;
                    if (count >= limit) {
                        target.innerText = limit.toLocaleString() + suffix;
                        clearInterval(timer);
                    } else {
                        target.innerText = count.toLocaleString() + suffix;
                    }
                }, 30);
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => countUpObserver.observe(stat));
}

function initScrollObserverAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(elem => observer.observe(elem));
}

// --------------------------------------------------------------------------
// 6. Course Navigation, Filtering & Modal Tutorials
// --------------------------------------------------------------------------

function initCourseFilters() {
    const searchInput = document.getElementById('course-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.course-card');

    function filterCourses() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

        cards.forEach(card => {
            const title = card.querySelector('.course-title').innerText.toLowerCase();
            const desc = card.querySelector('.course-desc').innerText.toLowerCase();
            const cat = card.getAttribute('data-category');
            
            const matchesSearch = title.includes(query) || desc.includes(query);
            const matchesFilter = activeFilter === 'all' || cat === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterCourses();
        });
    });
}

// Active Nav highlight based on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = 'hero';

    sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });

    // Sticky Navbar
    const header = document.getElementById('header-nav');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
});

// Mobile Nav Toggle
const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggleBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close menu on nav item click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggleBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });
}

// Course dynamic lessons loader modal
let currentLessonState = {
    courseId: '',
    lessonIndex: 0
};

function initTutorialModalLinks() {
    const startBtns = document.querySelectorAll('.start-course-btn');
    startBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const courseId = btn.getAttribute('data-course');
            openTutorialModal(courseId, 0);
        });
    });

    const closeTutBtn = document.getElementById('close-tut-btn');
    const tutModal = document.getElementById('tutorial-modal');
    if (closeTutBtn && tutModal) {
        closeTutBtn.addEventListener('click', () => {
            tutModal.classList.remove('active');
        });
    }

    const prevBtn = document.getElementById('tut-prev-btn');
    const nextBtn = document.getElementById('tut-next-btn');
    const tryBtn = document.getElementById('tut-try-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentLessonState.lessonIndex > 0) {
                openTutorialModal(currentLessonState.courseId, currentLessonState.lessonIndex - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const courseLessons = COURSES_DATA[currentLessonState.courseId];
            if (currentLessonState.lessonIndex < courseLessons.length - 1) {
                openTutorialModal(currentLessonState.courseId, currentLessonState.lessonIndex + 1);
            } else {
                // Course fully read! Save progress to State
                state.coursesProgress[currentLessonState.courseId] = 100;
                saveState();
                updateCourseProgressUI();
                updateDashboardUI();
                document.getElementById('tutorial-modal').classList.remove('active');
                showToast(`Congratulations! You completed the ${currentLessonState.courseId.toUpperCase()} module!`, 'success');
            }
        });
    }

    if (tryBtn) {
        tryBtn.addEventListener('click', () => {
            const lesson = COURSES_DATA[currentLessonState.courseId][currentLessonState.lessonIndex];
            if (lesson.playgroundCode) {
                document.getElementById('code-html').value = lesson.playgroundCode.html || '';
                document.getElementById('code-css').value = lesson.playgroundCode.css || '';
                document.getElementById('code-js').value = lesson.playgroundCode.js || '';
                document.getElementById('tutorial-modal').classList.remove('active');
                
                // Switch editor tab to HTML and trigger compilation
                document.querySelector('.editor-tab[data-tab="html"]').click();
                runCode();
                
                window.scrollTo({
                    top: document.getElementById('playground').offsetTop - 80,
                    behavior: 'smooth'
                });
                showToast("Code copied to Playground!", "info");
            }
        });
    }
}

function openTutorialModal(courseId, index) {
    const modal = document.getElementById('tutorial-modal');
    const title = document.getElementById('tut-title');
    const content = document.getElementById('tut-content');
    const prevBtn = document.getElementById('tut-prev-btn');
    const nextBtn = document.getElementById('tut-next-btn');
    const tryBtn = document.getElementById('tut-try-btn');

    const lessons = COURSES_DATA[courseId];
    if (!lessons || !lessons[index]) return;

    currentLessonState.courseId = courseId;
    currentLessonState.lessonIndex = index;

    const lesson = lessons[index];
    title.innerText = `${courseId.toUpperCase()}: ${lesson.title}`;
    content.innerHTML = lesson.content;

    // Set buttons states
    prevBtn.disabled = index === 0;
    
    if (index === lessons.length - 1) {
        nextBtn.innerText = "Finish Module";
    } else {
        nextBtn.innerText = "Next Lesson";
    }

    if (lesson.playgroundCode) {
        tryBtn.style.display = 'inline-flex';
    } else {
        tryBtn.style.display = 'none';
    }

    // Mark progression in storage (incremental fraction read)
    const currentProgressPercent = Math.ceil(((index + 1) / lessons.length) * 100);
    if (currentProgressPercent > state.coursesProgress[courseId]) {
        state.coursesProgress[courseId] = currentProgressPercent;
        state.points += 5; // Add points for reading lessons
        saveState();
        updateCourseProgressUI();
        updateDashboardUI();
    }

    modal.classList.add('active');
}

function updateCourseProgressUI() {
    Object.keys(state.coursesProgress).forEach(courseId => {
        const fillBar = document.getElementById(`progress-${courseId}`);
        const textPercent = document.getElementById(`text-${courseId}`);
        if (fillBar && textPercent) {
            const percent = state.coursesProgress[courseId];
            fillBar.style.width = percent + '%';
            textPercent.innerText = `${percent}% Done`;
        }
    });
}

// --------------------------------------------------------------------------
// 7. English Modals & Speech Synthesizer
// --------------------------------------------------------------------------

function initEnglishModalLinks() {
    const openBtns = document.querySelectorAll('.open-english-module');
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const moduleId = btn.getAttribute('data-module');
            openEnglishModal(moduleId);
        });
    });

    const closeBtn = document.getElementById('close-eng-btn');
    const engModal = document.getElementById('english-modal');
    if (closeBtn && engModal) {
        closeBtn.addEventListener('click', () => {
            engModal.classList.remove('active');
        });
    }

    // Word of the Day speech synthesis
    const speechBtn = document.getElementById('word-audio-btn');
    if (speechBtn) {
        speechBtn.addEventListener('click', () => {
            const textToSpeak = document.getElementById('word-title').innerText;
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
                showToast("Playing pronunciation guide...", "info");
            } else {
                showToast("Web Speech API not supported in your browser.", "error");
            }
        });
    }
}

function openEnglishModal(moduleId) {
    const modal = document.getElementById('english-modal');
    const title = document.getElementById('eng-title');
    const content = document.getElementById('eng-content');

    const mod = ENGLISH_DATA[moduleId];
    if (!mod) return;

    title.innerText = mod.title;
    content.innerHTML = mod.content;

    // Add vocabulary practice bonus points when viewing module
    state.points += 5;
    saveState();
    updateDashboardUI();

    modal.classList.add('active');
}

// --------------------------------------------------------------------------
// 8. Interactive Code Editor Compilation
// --------------------------------------------------------------------------

function initCodeEditor() {
    const tabs = document.querySelectorAll('.editor-tab');
    const panes = document.querySelectorAll('.editor-pane');
    const runBtn = document.getElementById('run-code-btn');
    const clearBtn = document.getElementById('clear-editor-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetTab = tab.getAttribute('data-tab');
            document.getElementById(`pane-${targetTab}`).classList.add('active');
        });
    });

    if (runBtn) {
        runBtn.addEventListener('click', runCode);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.getElementById('code-html').value = '';
            document.getElementById('code-css').value = '';
            document.getElementById('code-js').value = '';
            runCode();
            showToast("Editor workspace cleared", "info");
        });
    }

    // Initial compile on load
    runCode();
}

function runCode() {
    const htmlCode = document.getElementById('code-html').value;
    const cssCode = document.getElementById('code-css').value;
    const jsCode = document.getElementById('code-js').value;
    const iframe = document.getElementById('editor-iframe');
    
    if (!iframe) return;

    // Combine code
    const combinedContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode}
            <script>
                try {
                    ${jsCode}
                } catch (err) {
                    console.error("Iframe JS execution error:", err);
                    document.body.innerHTML += "<div style='color:red; background:rgba(255,0,0,0.1); padding:10px; border-radius:5px; margin-top:20px;'>JavaScript Error: " + err.message + "</div>";
                }
            </script>
        </body>
        </html>
    `;

    iframe.srcdoc = combinedContent;
}

// --------------------------------------------------------------------------
// 9. Practice Challenges & Quizzes System
// --------------------------------------------------------------------------

let currentQuizState = {
    quizId: '',
    qIndex: 0,
    score: 0
};

function initQuizManager() {
    // Tab controls
    const tabs = document.querySelectorAll('.challenge-tab');
    const panes = document.querySelectorAll('.challenge-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Launch Coding challenge button logic
    const launchChallengeBtns = document.querySelectorAll('.launch-challenge-btn');
    launchChallengeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const chId = btn.getAttribute('data-challenge');
            const ch = CODE_CHALLENGES[chId];
            if (!ch) return;

            // Load into editor workspace
            document.getElementById('code-html').value = ch.html;
            document.getElementById('code-css').value = ch.css;
            document.getElementById('code-js').value = ch.js;

            // Trigger click on HTML tab to activate editor panel
            document.querySelector('.editor-tab[data-tab="html"]').click();
            runCode();

            // Track code challenge completion in progress
            if (!state.completedChallenges.includes(chId)) {
                state.completedChallenges.push(chId);
                state.points += 20; // 20 XP for challenge loading/solving
                saveState();
                updateDashboardUI();
            }

            // Scroll to Editor
            window.scrollTo({
                top: document.getElementById('playground').offsetTop - 80,
                behavior: 'smooth'
            });
            showToast(`Challenge template '${ch.title}' loaded in playground!`, "success");
        });
    });

    // Launch English Quizzes
    const startQuizBtns = document.querySelectorAll('.start-quiz-btn');
    startBtnsInit(startQuizBtns);

    const closeQuizBtn = document.getElementById('close-quiz-btn');
    if (closeQuizBtn) {
        closeQuizBtn.addEventListener('click', () => {
            document.getElementById('quiz-modal').classList.remove('active');
        });
    }

    const nextQBtn = document.getElementById('quiz-next-q-btn');
    if (nextQBtn) {
        nextQBtn.addEventListener('click', () => {
            const quizQuestions = QUIZZES[currentQuizState.quizId];
            if (currentQuizState.qIndex < quizQuestions.length - 1) {
                currentQuizState.qIndex++;
                renderQuizQuestion();
            } else {
                // Quiz fully finished! Save to State
                document.getElementById('quiz-modal').classList.remove('active');
                if (!state.completedQuizzes.includes(currentQuizState.quizId)) {
                    state.completedQuizzes.push(currentQuizState.quizId);
                }
                
                const finalXP = currentQuizState.score * 15;
                state.points += finalXP;
                saveState();
                updateDashboardUI();
                
                showToast(`Quiz completed! Score: ${currentQuizState.score}/${quizQuestions.length}. Earned +${finalXP} XP!`, 'success');
            }
        });
    }
}

function startBtnsInit(btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const quizId = btn.getAttribute('data-quiz');
            const questions = QUIZZES[quizId];
            if (!questions || questions.length === 0) return;

            currentQuizState.quizId = quizId;
            currentQuizState.qIndex = 0;
            currentQuizState.score = 0;

            document.getElementById('quiz-modal').classList.add('active');
            renderQuizQuestion();
        });
    });
}

function renderQuizQuestion() {
    const questions = QUIZZES[currentQuizState.quizId];
    const q = questions[currentQuizState.qIndex];

    const progressLbl = document.getElementById('quiz-q-progress');
    const qText = document.getElementById('quiz-q-text');
    const optionsBox = document.getElementById('quiz-options-box');
    const feedbackBox = document.getElementById('quiz-feedback');

    progressLbl.innerText = `Question ${currentQuizState.qIndex + 1} of ${questions.length}`;
    qText.innerText = q.q;
    optionsBox.innerHTML = '';
    feedbackBox.classList.add('hidden');

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = opt;
        btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
        optionsBox.appendChild(btn);
    });
}

function handleQuizAnswer(selectedIdx, selectedBtn) {
    const questions = QUIZZES[currentQuizState.quizId];
    const q = questions[currentQuizState.qIndex];
    const optionsBox = document.getElementById('quiz-options-box');
    const feedbackBox = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('quiz-feedback-text');

    // Disable all options
    const optionBtns = optionsBox.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => btn.disabled = true);

    if (selectedIdx === q.correct) {
        selectedBtn.classList.add('correct');
        feedbackText.innerHTML = `<span style="color:var(--color-accent)"><i class="fa-solid fa-circle-check"></i> Correct!</span> ${q.explanation}`;
        currentQuizState.score++;
    } else {
        selectedBtn.classList.add('wrong');
        optionBtns[q.correct].classList.add('correct');
        feedbackText.innerHTML = `<span style="color:var(--color-error)"><i class="fa-solid fa-circle-xmark"></i> Incorrect.</span> ${q.explanation}`;
    }

    feedbackBox.classList.remove('hidden');
}

// --------------------------------------------------------------------------
// 10. Dashboard Management, SVG Charting & Certificates
// --------------------------------------------------------------------------

function initDashboard() {
    updateCourseProgressUI();
    updateDashboardUI();

    // Setup claim credential action
    const claimCodeBtn = document.getElementById('claim-cert-code');
    const claimEngBtn = document.getElementById('claim-cert-english');

    if (claimCodeBtn) {
        claimCodeBtn.addEventListener('click', () => {
            openCertificateModal("Programming Foundations", "SK-CODE-" + Math.floor(Math.random() * 90000 + 10000));
        });
    }

    if (claimEngBtn) {
        claimEngBtn.addEventListener('click', () => {
            openCertificateModal("English Fluency", "SK-ENG-" + Math.floor(Math.random() * 90000 + 10000));
        });
    }

    const closeCert = document.getElementById('close-cert-btn');
    if (closeCert) {
        closeCert.addEventListener('click', () => {
            document.getElementById('cert-modal').classList.remove('active');
        });
    }

    // Print button logic
    const printBtn = document.getElementById('print-cert-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

function updateDashboardUI() {
    // Profile Sidebar items
    const displayStreak = document.getElementById('dash-streak');
    const displayPoints = document.getElementById('dash-points');
    const displayName = document.getElementById('user-display-name');
    const displayCompleted = document.getElementById('dash-completed-courses');

    // Calculate completed courses (100% progress)
    let completedCount = 0;
    Object.keys(state.coursesProgress).forEach(cid => {
        if (state.coursesProgress[cid] === 100) {
            completedCount++;
        }
    });

    if (displayName) displayName.innerText = state.userName;
    if (displayStreak) displayStreak.innerText = `${state.streak} ${state.streak === 1 ? 'Day' : 'Days'}`;
    if (displayPoints) displayPoints.innerText = `${state.points} XP`;
    if (displayCompleted) displayCompleted.innerText = completedCount;

    // SVG Mastery Circle Rings Calculations
    // 2 * PI * r = 2 * 3.14159 * 32 = 201.06 circumference
    const circ = 201.06;
    
    // Coding progress
    const codingMasteryRing = document.getElementById('circle-prog-code');
    const codingLabel = document.getElementById('percent-lbl-code');
    
    // Average progress of coding courses (html, css, js, python, java, sql, react, node, c, cpp)
    const codeKeys = ['html', 'css', 'javascript', 'python', 'java', 'sql', 'react', 'node', 'c', 'cpp'];
    let totalCodeProg = 0;
    codeKeys.forEach(k => totalCodeProg += state.coursesProgress[k]);
    const avgCodeProg = Math.ceil(totalCodeProg / codeKeys.length);

    if (codingMasteryRing && codingLabel) {
        codingLabel.innerText = `${avgCodeProg}%`;
        const offset = circ - (avgCodeProg / 100) * circ;
        codingMasteryRing.style.strokeDashoffset = offset;
    }

    // English progress
    const englishMasteryRing = document.getElementById('circle-prog-english');
    const englishLabel = document.getElementById('percent-lbl-english');

    // Calculated by quizzes cleared
    const maxQuizzes = 3;
    const avgEnglishProg = Math.ceil((state.completedQuizzes.length / maxQuizzes) * 100);

    if (englishMasteryRing && englishLabel) {
        englishLabel.innerText = `${avgEnglishProg}%`;
        const offset = circ - (avgEnglishProg / 100) * circ;
        englishMasteryRing.style.strokeDashoffset = offset;
    }

    // Unlock Claim Certificates Buttons
    const claimCodeBtn = document.getElementById('claim-cert-code');
    const codeStatus = document.getElementById('cert-code-status');
    const countSolved = state.completedChallenges.length;

    if (claimCodeBtn && codeStatus) {
        if (countSolved >= 3) {
            claimCodeBtn.removeAttribute('disabled');
            codeStatus.innerText = "Completed! Claim your credential now.";
        } else {
            claimCodeBtn.setAttribute('disabled', 'true');
            codeStatus.innerText = `Incomplete (Completed ${countSolved}/3 coding tasks)`;
        }
    }

    const claimEngBtn = document.getElementById('claim-cert-english');
    const engStatus = document.getElementById('cert-english-status');
    const countQuizzes = state.completedQuizzes.length;

    if (claimEngBtn && engStatus) {
        if (countQuizzes >= 3) {
            claimEngBtn.removeAttribute('disabled');
            engStatus.innerText = "Completed! Claim your credential now.";
        } else {
            claimEngBtn.setAttribute('disabled', 'true');
            engStatus.innerText = `Incomplete (Completed ${countQuizzes}/3 English quizzes)`;
        }
    }

    // Update dynamic points array path inside activity SVG chart to simulate week metrics
    const path = document.querySelector('#activity-chart path');
    if (path) {
        const mon = 100;
        const tue = Math.max(20, 100 - state.points * 0.1);
        const wed = Math.max(10, 80 - state.points * 0.2);
        const thu = Math.max(5, 60 - state.points * 0.3);
        const fri = Math.max(5, 40 - state.points * 0.4);
        const sat = Math.max(5, 30 - state.points * 0.5);
        const sun = Math.max(5, 20 - state.points * 0.6);
        
        path.setAttribute('d', `M 30 ${mon} L 70 ${tue} L 110 ${wed} L 150 ${thu} L 190 ${fri} L 230 ${sat} L 270 ${sun}`);
    }
}

function openCertificateModal(subject, id) {
    const modal = document.getElementById('cert-modal');
    const recipient = document.getElementById('cert-recipient-name');
    const reasonText = document.getElementById('cert-reason');
    const dateText = document.getElementById('cert-date');
    const idText = document.getElementById('cert-id');

    if (recipient) recipient.innerText = state.userName;
    if (idText) idText.innerText = id;
    if (dateText) {
        const today = new Date();
        dateText.innerText = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    if (reasonText) {
        if (subject.includes("Programming")) {
            reasonText.innerText = "for successfully demonstrating mastery in Programming Foundations through practical code execution challenges and evaluation tests on the Skillora platform.";
        } else {
            reasonText.innerText = "for outstanding completion of the English Communication course syllabus, exhibiting fluency in professional presentation structures and interview protocols.";
        }
    }

    modal.classList.add('active');
}

// --------------------------------------------------------------------------
// 11. Projects Guide
// --------------------------------------------------------------------------

function initProjectGuides() {
    const filterBtns = document.querySelectorAll('.proj-filter-btn');
    const cards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const level = btn.getAttribute('data-level');
            cards.forEach(card => {
                if (level === 'all' || card.getAttribute('data-level') === level) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const openGuideBtns = document.querySelectorAll('.open-project-guide');
    openGuideBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projId = btn.getAttribute('data-project');
            const guide = PROJECT_GUIDES[projId];
            if (!guide) return;

            const modal = document.getElementById('english-modal');
            const title = document.getElementById('eng-title');
            const content = document.getElementById('eng-content');

            title.innerText = `Project Guide: ${guide.title}`;
            content.innerHTML = guide.content;
            modal.classList.add('active');
        });
    });
}

// --------------------------------------------------------------------------
// 12. Community Showcase & Carousel Testimonials
// --------------------------------------------------------------------------

function initCommunityForum() {
    const form = document.getElementById('forum-post-form');
    const feed = document.getElementById('forum-feed-container');

    if (form && feed) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const author = document.getElementById('forum-author').value;
            const cat = document.getElementById('forum-category').value;
            const message = document.getElementById('forum-message').value;

            // Create post HTML
            const post = document.createElement('div');
            post.className = 'forum-post';
            post.innerHTML = `
                <div class="post-header">
                    <span class="author"><i class="fa-solid fa-user-circle"></i> ${author}</span>
                    <span class="post-tag tag-${cat}">${cat}</span>
                </div>
                <p class="post-text">${message}</p>
                <div class="post-footer"><span><i class="fa-regular fa-heart"></i> 0</span> <span><i class="fa-regular fa-comment"></i> 0</span></div>
            `;

            // Insert post at the beginning
            feed.insertBefore(post, feed.firstChild);
            
            // Add points to learner for participation
            state.points += 10;
            saveState();
            updateDashboardUI();

            // Clear inputs
            document.getElementById('forum-message').value = '';
            showToast("Showcase post submitted successfully! Earned +10 XP.", "success");
        });
    }
}

function initTestimonialsCarousel() {
    const reviews = [
        {
            text: `"Skillora bridged a huge gap for me. I wanted to learn code, but I also needed to talk to clients. The parallel structure is genius."`,
            author: "David K.",
            sub: "Junior Developer, Canada"
        },
        {
            text: `"The word audio speech synthesizer helped me check my pronunciation, and running code on the editor made learning CSS animations straightforward."`,
            author: "Sophia L.",
            sub: "Linguistic Student, Spain"
        },
        {
            text: `"I cleared my tech interview at my startup company using the STAR framework. Huge thanks to Skillora!"`,
            author: "Rohan M.",
            sub: "Full-Stack Engineer, India"
        }
    ];

    const container = document.querySelector('.carousel-container');
    if (!container) return;

    let idx = 0;

    function renderReview() {
        container.innerHTML = `
            <div class="testimonial-card active">
                <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
                <p class="testimonial-text">${reviews[idx].text}</p>
                <div class="reviewer-info">
                    <h5>${reviews[idx].author}</h5>
                    <p>${reviews[idx].sub}</p>
                </div>
            </div>
        `;
        idx = (idx + 1) % reviews.length;
    }
    
    renderReview();
    setInterval(renderReview, 4500); // Swap testimonial slides
}

// --------------------------------------------------------------------------
// 13. AI Learning Assistant Chat Widget (Rule-based Bot)
// --------------------------------------------------------------------------

function initAIChatbot() {
    const bubble = document.getElementById('ai-chat-bubble');
    const container = document.getElementById('ai-chat-container');
    const closeBtn = document.getElementById('close-chat-btn');
    const form = document.getElementById('chat-input-form');
    const inputBox = document.getElementById('chat-user-message');
    const msgsBox = document.getElementById('chat-messages-box');
    const suggBtns = document.querySelectorAll('.chat-sugg-btn');

    if (bubble && container) {
        bubble.addEventListener('click', () => {
            container.classList.toggle('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    // Set suggestions buttons actions
    suggBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            inputBox.value = btn.innerText;
            form.dispatchEvent(new Event('submit'));
        });
    });

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const text = inputBox.value.trim();
            if (!text) return;

            // Render User bubble
            appendMessage(text, 'user');
            inputBox.value = '';

            const query = text.toLowerCase();

            // 1. Direct Intercept for Developer Credential Questions
            if (query.includes('develop') || query.includes('create') || query.includes('build') || 
                query.includes('maker') || query.includes('creator') || query.includes('owner') || 
                query.includes('who are you') || query.includes('who made you')) {
                
                const response = "I was created and developed by Vignesh B.Sc,.Cs(AI&ML) as the official AI Learning Coach for the Skillora educational platform.";
                setTimeout(() => {
                    appendMessage(response, 'bot');
                }, 800);
                return;
            }

            // Show a visual typing indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'chat-msg bot typing-indicator-msg';
            typingIndicator.innerHTML = '<div class="typing-dots"><span>.</span><span>.</span><span>.</span></div>';
            msgsBox.appendChild(typingIndicator);
            msgsBox.scrollTop = msgsBox.scrollHeight;

            try {
                // 2. Call the Puter.js free AI chat model
                const systemPrompt = `You are the Skillora AI Coach, a friendly, encouraging learning assistant for the Skillora educational platform. 
Skillora is a platform for learning programming (HTML, CSS, JS, Python, Java, SQL, React, Node, C, C++) and English communication.
IMPORTANT: If the user asks who developed you, who created you, who built you, or asks about your creator/developer, you MUST respond exactly that you were created and developed by Vignesh B.Sc,.Cs(AI&ML). Keep this answer professional and polite.
Keep your technical explanations clear, concise, and educational. Use HTML tags like <strong> or <code> or list tags to structure your responses nicely.`;

                const messages = [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: text }
                ];

                // Call Puter AI Chat
                const response = await puter.ai.chat(messages, { model: 'gpt-4o-mini' });
                
                // Remove typing indicator and append message
                typingIndicator.remove();
                appendMessage(response, 'bot');
            } catch (error) {
                console.error("Puter AI Chat failed, falling back to keywords:", error);
                typingIndicator.remove();

                // Fallback to static rule-based responses if API fails/offline
                let response = "I'm still studying technical expressions! Try asking me about 'closures in JS', 'variables', 'conditional tenses', or 'job interview frameworks' and I will gladly explain.";

                if (query.includes('closure')) {
                    response = `A <strong>closure</strong> is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JS, closures are created every time a function is created, at function creation time.\n\n<code>function outer() {\n  let code = "JS";\n  return function() { console.log(code); };\n}</code>`;
                } else if (query.includes('variable')) {
                    response = `A <strong>variable</strong> is a container for storing data values. In JavaScript, we declare variables using: \n- <code>let</code> (block-scoped, mutable)\n- <code>const</code> (block-scoped, immutable)\n- <code>var</code> (function-scoped, legacy)\n\nIn Python, you declare variables directly without keywords: <code>x = 5</code>.`;
                } else if (query.includes('tense') || query.includes('passive') || query.includes('conditional')) {
                    response = `English conditionals express that one action depends on another. \n- <strong>Zero Conditional:</strong> Facts (If you heat ice, it melts).\n- <strong>First Conditional:</strong> Future possibility (If it rains, we will stay inside).\n- <strong>Second Conditional:</strong> Imaginary/unlikely (If I won the lottery, I would buy a yacht).`;
                } else if (query.includes('interview') || query.includes('star')) {
                    response = `To excel in coding interviews, communicate your logic using the <strong>STAR Framework</strong>:\n- <strong>S</strong>ituation: Briefly define the issue.\n- <strong>T</strong>ask: State your objective.\n- <strong>A</strong>ction: Detail your steps/design.\n- <strong>R</strong>esult: Show data or outcomes.`;
                } else if (query.includes('html') || query.includes('tag')) {
                    response = `HTML tags define structural layouts. Elements typically contain an opening tag <code>&lt;p&gt;</code>, contents, and a closing tag <code>&lt;/p&gt;</code>. Let me know if you'd like a specific guide on tables or lists!`;
                } else if (query.includes('hello') || query.includes('hi')) {
                    response = `Hello! How can I support your programming or english study session today?`;
                } else if (query.includes('css')) {
                    response = `CSS (Cascading Style Sheets) manages visual styling. Use selector blocks to apply styles:\n\n<code>.box {\n  background: var(--color-primary);\n  border-radius: 12px;\n}</code>`;
                }

                appendMessage(response, 'bot');
            }
        });
    }

    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-msg ${sender}`;
        msg.innerHTML = text;
        msgsBox.appendChild(msg);
        msgsBox.scrollTop = msgsBox.scrollHeight;
    }
}

// --------------------------------------------------------------------------
// 14. Modals (Login/Signup & guide accordion presets)
// --------------------------------------------------------------------------

function initAuthModals() {
    const modal = document.getElementById('auth-modal');
    const closeBtn = modal ? modal.querySelector('.close-modal-btn') : null;
    const loginTab = document.getElementById('tab-login');
    const signupTab = document.getElementById('tab-signup');
    const loginForm = document.getElementById('auth-form-login');
    const signupForm = document.getElementById('auth-form-signup');

    if (!modal) return;

    // Show modal trigger logic
    document.querySelectorAll('.show-login-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            loginTab.click();
        });
    });

    document.querySelectorAll('.show-signup-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            signupTab.click();
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Tabs toggle
    if (loginTab && signupTab && loginForm && signupForm) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        });

        signupTab.addEventListener('click', () => {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
        });
    }

    // Form handlers
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            state.userName = email.split('@')[0]; // simple user name mapping
            state.streak = 2; // trigger streak bump
            saveState();
            updateDashboardUI();
            modal.classList.remove('active');
            showToast(`Welcome back, ${state.userName}!`, "success");
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            state.userName = name;
            state.points += 50; // Sign up reward
            saveState();
            updateDashboardUI();
            modal.classList.remove('active');
            showToast(`Welcome to Skillora, ${state.userName}! +50 XP bonus!`, "success");
        });
    }
}

// --------------------------------------------------------------------------
// 15. Form Submission Alerts & Newsletter handler
// --------------------------------------------------------------------------

function initFormHandlers() {
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            showToast(`Thank you, ${name}! Your inquiry has been dispatched to our tutors.`, "success");
            contactForm.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('news-email').value;
            showToast(`Successfully subscribed ${email} to weekly challenges!`, "success");
            newsletterForm.reset();
        });
    }
}

// Toast alerts utility helper
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    // Fade out after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(50px)';
        toast.style.transition = 'all 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
