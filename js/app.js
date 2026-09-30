/* =========================================================
   MY LIFE OS
   COMPLETE APPLICATION LOGIC
========================================================= */


/* =========================================================
   STORAGE HELPERS
========================================================= */

function loadData(key, fallback) {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(key)
            );

        return data ?? fallback;

    } catch (error) {

        console.warn(
            "Could not load:",
            key,
            error
        );

        return fallback;
    }
}


function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );
}


/* =========================================================
   GLOBAL DATA
========================================================= */

let goals =
    loadData("lifeOSGoals", []).map(goal => ({
        id: goal.id || Date.now() + Math.random(),
        name: goal.name || "Unnamed Goal",
        category: goal.category || "Personal",
        deadline: goal.deadline || "",
        priority: goal.priority || "Medium",
        why: goal.why || "",
        nextAction: goal.nextAction || "",
        progress: Math.max(
            0,
            Math.min(
                100,
                Number(goal.progress) || 0
            )
        )
    }));


let habits =
    loadData("lifeOSHabits", []).map(habit => ({
        id: habit.id || Date.now() + Math.random(),
        name: habit.name || "Habit",
        category: habit.category || "Personal",
        target: habit.target || "daily",
        history: habit.history || {}
    }));


let tasks =
    loadData("lifeOSTasks", [
        {
            id: 1,
            text: "Review today's priorities",
            done: false
        },
        {
            id: 2,
            text: "Study for at least 45 minutes",
            done: false
        },
        {
            id: 3,
            text: "Work on an IT project",
            done: false
        }
    ]);


let events =
    loadData("lifeOSEvents", []);


let projects =
    loadData("lifeOSProjects", []);


let subjects =
    loadData("lifeOSSubjects", []);


let assignments =
    loadData("lifeOSAssignments", []);


let exams =
    loadData("lifeOSExams", []);


let studySessions =
    loadData("lifeOSStudySessions", []);


let learningTopics =
    loadData("lifeOSLearningTopics", []);


let careerState =
    loadData("lifeOSCareer", {});


let japanState =
    loadData("lifeOSJapan", {});


let settings =
    loadData(
        "lifeOSSettings",
        {
            name: "Yash",
            role: "IT Student"
        }
    );


/* =========================================================
   DEFAULT CAREER CHECKLIST
========================================================= */

const careerSections = [

    {
        title: "Programming",
        icon: "💻",
        items: [
            ["JavaScript", "Understand modern JavaScript fundamentals."],
            ["Python", "Learn Python for scripting, automation and development."],
            ["Java / C++", "Become comfortable with at least one strong OOP language."],
            ["Problem Solving", "Practice breaking problems into smaller logical steps."]
        ]
    },

    {
        title: "DSA",
        icon: "🧩",
        items: [
            ["Arrays & Strings", "Master common patterns and operations."],
            ["Linked Lists", "Understand nodes, traversal and manipulation."],
            ["Stacks & Queues", "Learn LIFO/FIFO structures and applications."],
            ["Trees", "Learn binary trees, BSTs and traversal."],
            ["Graphs", "Learn BFS, DFS and graph representations."],
            ["Dynamic Programming", "Learn states, transitions and optimization."]
        ]
    },

    {
        title: "CS Fundamentals",
        icon: "🧠",
        items: [
            ["OOP", "Classes, objects, inheritance, abstraction and polymorphism."],
            ["DBMS", "SQL, normalization, transactions and database design."],
            ["Operating Systems", "Processes, threads, memory and scheduling."],
            ["Computer Networks", "HTTP, TCP/IP, DNS and networking basics."],
            ["Software Engineering", "Version control, testing and development practices."]
        ]
    },

    {
        title: "Developer Skills",
        icon: "🛠️",
        items: [
            ["HTML & CSS", "Build responsive and accessible interfaces."],
            ["Git", "Use branches, commits, merges and useful workflows."],
            ["GitHub", "Maintain projects and document your work."],
            ["REST APIs", "Understand HTTP APIs and JSON."],
            ["Authentication", "Understand sessions, tokens and basic security."],
            ["Deployment", "Deploy projects so others can use them."]
        ]
    },

    {
        title: "Projects",
        icon: "🚀",
        items: [
            ["Beginner Project", "Build something small completely by yourself."],
            ["Full-Stack Project", "Connect frontend, backend and database."],
            ["Major Portfolio Project", "Build a polished project worth showing recruiters."],
            ["Team Project", "Learn collaboration and Git workflows."],
            ["Open Source", "Make at least one useful contribution."]
        ]
    },

    {
        title: "Career Preparation",
        icon: "🎯",
        items: [
            ["Resume", "Create a clear one-page technical resume."],
            ["Portfolio", "Show projects, skills and contact information."],
            ["GitHub Profile", "Keep repositories organized and documented."],
            ["LinkedIn", "Create a professional online presence."],
            ["Internship Search", "Track applications and opportunities."],
            ["Interview Preparation", "Practice technical and behavioral questions."],
            ["Communication", "Improve writing, explanation and speaking skills."]
        ]
    }

];


/* =========================================================
   ROADMAP DATA
========================================================= */

const roadmapData = [

    {
        id: "web",
        icon: "🌐",
        title: "Full-Stack Web Development",
        description:
            "Build modern websites and full-stack applications.",
        steps: [
            ["HTML & CSS", "Web foundations"],
            ["JavaScript", "Programming for the web"],
            ["Git & GitHub", "Version control"],
            ["React", "Modern frontend"],
            ["Node.js", "Backend development"],
            ["SQL", "Database fundamentals"],
            ["REST APIs", "Connect applications"],
            ["Deployment", "Put projects online"]
        ]
    },

    {
        id: "software",
        icon: "💻",
        title: "Software Engineering",
        description:
            "Build strong foundations for software development roles.",
        steps: [
            ["Programming", "Master one primary language"],
            ["OOP", "Object-oriented design"],
            ["DSA", "Problem solving"],
            ["DBMS", "Data management"],
            ["Operating Systems", "System fundamentals"],
            ["Networks", "Communication fundamentals"],
            ["System Design", "Design larger systems"],
            ["Projects", "Apply everything"]
        ]
    },

    {
        id: "data",
        icon: "📊",
        title: "Data & AI Foundations",
        description:
            "Develop a foundation for data and machine learning.",
        steps: [
            ["Python", "Programming foundation"],
            ["NumPy", "Numerical computing"],
            ["Pandas", "Data manipulation"],
            ["Statistics", "Understand data"],
            ["SQL", "Query databases"],
            ["Machine Learning", "Core concepts"],
            ["Projects", "Apply models"],
            ["Deployment", "Build usable systems"]
        ]
    },

    {
        id: "dsa",
        icon: "🧩",
        title: "DSA & Interview Preparation",
        description:
            "Build problem-solving skills for technical interviews.",
        steps: [
            ["Complexity", "Big O"],
            ["Arrays", "Basic patterns"],
            ["Strings", "String problems"],
            ["Linked Lists", "Pointers"],
            ["Stacks & Queues", "Linear structures"],
            ["Trees", "Hierarchical data"],
            ["Graphs", "Graph algorithms"],
            ["Dynamic Programming", "Advanced problems"]
        ]
    },

    {
        id: "career",
        icon: "🎯",
        title: "IT Career Preparation",
        description:
            "Turn technical learning into career readiness.",
        steps: [
            ["Core Skills", "Programming + CS"],
            ["Projects", "Build evidence"],
            ["GitHub", "Show your work"],
            ["Resume", "Present your skills"],
            ["Portfolio", "Professional presence"],
            ["Internships", "Gain experience"],
            ["Interviews", "Prepare effectively"],
            ["Continuous Learning", "Keep improving"]
        ]
    },

    {
        id: "japan",
        icon: "🇯🇵",
        title: "Japan IT Career",
        description:
            "Long-term preparation for opportunities in Japan.",
        steps: [
            ["Technical Skills", "Become employable"],
            ["Projects", "Build strong evidence"],
            ["Experience", "Internships/work"],
            ["Japanese", "Build language ability"],
            ["Culture", "Understand workplace expectations"],
            ["Resume", "Prepare applications"],
            ["Networking", "Connect with people"],
            ["Applications", "Explore opportunities"]
        ]
    }

];


/* =========================================================
   UTILITY
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function formatDate(dateString) {

    if (!dateString) return "No deadline";

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );
}


function todayKey() {

    const now = new Date();

    const y = now.getFullYear();

    const m = String(
        now.getMonth() + 1
    ).padStart(2, "0");

    const d = String(
        now.getDate()
    ).padStart(2, "0");

    return `${y}-${m}-${d}`;
}


function getDateKey(date) {

    const y = date.getFullYear();

    const m = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const d = String(
        date.getDate()
    ).padStart(2, "0");

    return `${y}-${m}-${d}`;
}


function clamp(number, min = 0, max = 100) {

    return Math.max(
        min,
        Math.min(max, Number(number) || 0)
    );
}


/* =========================================================
   NAVIGATION
========================================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.toggle(
                "active",
                page.id === pageId
            );

        });


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === pageId
            );

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


document.addEventListener(
    "click",
    event => {

        const nav =
            event.target.closest(".nav-item");

        if (nav) {

            showPage(
                nav.dataset.page
            );

            return;
        }


        const goto =
            event.target.closest("[data-goto]");

        if (goto) {

            showPage(
                goto.dataset.goto
            );
        }

    }
);


/* =========================================================
   PROFILE
========================================================= */

function updateProfileUI() {

    const name =
        settings.name || "Yash";

    document
        .querySelector("#dashboard-name")
        .textContent = name;

    document
        .querySelector("#sidebar-name")
        .textContent = name;

    document
        .querySelector("#settings-name")
        .value = name;

    document
        .querySelector("#settings-role")
        .value =
        settings.role || "IT Student";
}


/* =========================================================
   DATE
========================================================= */

function updateDate() {

    const now = new Date();

    const formatted =
        now.toLocaleDateString(
            "en-IN",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

    const element =
        document.querySelector(
            "#dashboard-date"
        );

    if (element) {
        element.textContent =
            formatted;
    }
}


/* =========================================================
   GOALS
========================================================= */

function saveGoals() {
    saveData("lifeOSGoals", goals);
}


function renderGoals() {

    const container =
        document.querySelector("#goals-list");

    if (!container) return;


    document.querySelector(
        "#goals-count-label"
    ).textContent =
        `${goals.length} goal${goals.length === 1 ? "" : "s"}`;


    if (!goals.length) {

        container.innerHTML = `
            <div class="card empty-state">
                <span>🎯</span>
                <p>
                    No goals yet. Create your first meaningful goal.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        goals.map(goal => {

            const status =
                goal.progress >= 100
                    ? "Completed"
                    : goal.progress > 0
                        ? "In Progress"
                        : "Not Started";


            return `

                <div class="card goal-card">

                    <div class="goal-top">

                        <div>

                            <span class="goal-category">
                                ${escapeHTML(goal.category)}
                            </span>

                            <h2 class="goal-title">
                                ${escapeHTML(goal.name)}
                            </h2>

                        </div>


                        <div class="goal-actions">

                            <button
                                class="small-icon-btn"
                                onclick="editGoal('${goal.id}')">
                                ✏️
                            </button>

                            <button
                                class="small-icon-btn"
                                onclick="deleteGoal('${goal.id}')">
                                🗑️
                            </button>

                        </div>

                    </div>


                    <div class="goal-meta">

                        <div class="meta-box">

                            <span>Priority</span>

                            <strong>
                                ${escapeHTML(goal.priority)}
                            </strong>

                        </div>


                        <div class="meta-box">

                            <span>Deadline</span>

                            <strong>
                                ${formatDate(goal.deadline)}
                            </strong>

                        </div>


                        <div class="meta-box">

                            <span>Status</span>

                            <strong>
                                ${status}
                            </strong>

                        </div>

                    </div>


                    ${goal.why
                    ? `
                                <div class="goal-why">

                                    <span>Why this matters</span>

                                    <p>
                                        ${escapeHTML(goal.why)}
                                    </p>

                                </div>
                              `
                    : ""
                }


                    ${goal.nextAction
                    ? `
                                <div class="goal-why">

                                    <span>Next action</span>

                                    <p>
                                        ${escapeHTML(goal.nextAction)}
                                    </p>

                                </div>
                              `
                    : ""
                }


                    <div class="goal-progress-row">

                        <span>Progress</span>

                        <strong>
                            ${clamp(goal.progress)}%
                        </strong>

                    </div>


                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="${clamp(goal.progress)}"
                        class="goal-slider"
                        data-goal-id="${goal.id}">


                    <span class="goal-status ${goal.progress >= 100 ? "completed" : ""}">
                        ${goal.progress >= 100
                    ? "✓ Completed"
                    : status
                }
                    </span>

                </div>

            `;

        }).join("");
}


function updateGoalStats() {

    const total =
        goals.length;

    const inProgress =
        goals.filter(
            goal =>
                goal.progress > 0 &&
                goal.progress < 100
        ).length;

    const completed =
        goals.filter(
            goal =>
                goal.progress >= 100
        ).length;


    const average =
        total
            ? Math.round(
                goals.reduce(
                    (sum, goal) =>
                        sum + clamp(goal.progress),
                    0
                ) / total
            )
            : 0;


    document.querySelector(
        "#goal-total"
    ).textContent = total;


    document.querySelector(
        "#goal-progress-count"
    ).textContent = inProgress;


    document.querySelector(
        "#goal-completed-count"
    ).textContent = completed;


    document.querySelector(
        "#goal-average-progress"
    ).textContent = `${average}%`;
}


document.addEventListener(
    "input",
    event => {

        const slider =
            event.target.closest(
                "[data-goal-id]"
            );

        if (!slider) return;


        const id =
            slider.dataset.goalId;


        const goal =
            goals.find(
                item =>
                    String(item.id) ===
                    String(id)
            );


        if (!goal) return;


        goal.progress =
            clamp(slider.value);


        saveGoals();

        renderGoals();

        updateGoalStats();

        updateDashboard();

        updateProgressPage();

        updateAchievements();

    }
);


window.editGoal =
    function (id) {

        const goal =
            goals.find(
                item =>
                    String(item.id) ===
                    String(id)
            );

        if (!goal) return;


        const newName =
            prompt(
                "Goal name:",
                goal.name
            );


        if (newName === null) return;


        if (newName.trim()) {
            goal.name =
                newName.trim();
        }


        saveGoals();

        renderGoals();

        updateGoalStats();

        updateDashboard();
    };


window.deleteGoal =
    function (id) {

        if (
            !confirm(
                "Delete this goal?"
            )
        ) return;


        goals =
            goals.filter(
                goal =>
                    String(goal.id) !==
                    String(id)
            );


        saveGoals();

        renderGoals();

        updateGoalStats();

        updateDashboard();

        updateProgressPage();

        updateAchievements();
    };


/* GOAL FORM */

document
    .querySelector("#open-goal-form")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector("#goal-form-card")
                .classList.remove("hidden");

        }
    );


document
    .querySelector("#cancel-goal-form")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector("#goal-form-card")
                .classList.add("hidden");

        }
    );


document
    .querySelector("#goal-form")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const goal = {

                id:
                    Date.now() +
                    Math.random(),

                name:
                    document.querySelector(
                        "#goal-name"
                    ).value.trim(),

                category:
                    document.querySelector(
                        "#goal-category"
                    ).value,

                deadline:
                    document.querySelector(
                        "#goal-deadline"
                    ).value,

                priority:
                    document.querySelector(
                        "#goal-priority"
                    ).value,

                why:
                    document.querySelector(
                        "#goal-why"
                    ).value.trim(),

                nextAction:
                    document.querySelector(
                        "#goal-next-action"
                    ).value.trim(),

                /* IMPORTANT:
                   NEW GOALS ALWAYS START AT 0
                */
                progress: 0

            };


            goals.unshift(goal);

            saveGoals();

            event.target.reset();

            document
                .querySelector("#goal-form-card")
                .classList.add("hidden");


            renderGoals();

            updateGoalStats();

            updateDashboard();

            updateProgressPage();

            updateAchievements();

        }
    );


/* =========================================================
   HABITS
========================================================= */

function saveHabits() {
    saveData("lifeOSHabits", habits);
}


function calculateStreak(habit) {

    let streak = 0;

    const date =
        new Date();


    while (true) {

        const key =
            getDateKey(date);


        if (
            habit.history &&
            habit.history[key]
        ) {

            streak++;

            date.setDate(
                date.getDate() - 1
            );

        } else {

            break;
        }
    }


    return streak;
}


function getHabitWeeklyCompletion(habit) {

    let completed = 0;


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const date =
            new Date();

        date.setDate(
            date.getDate() - i
        );


        if (
            habit.history[
            getDateKey(date)
            ]
        ) {
            completed++;
        }
    }


    return Math.round(
        (completed / 7) * 100
    );
}


function renderHabits() {

    const container =
        document.querySelector(
            "#habits-list"
        );


    if (!container) return;


    if (!habits.length) {

        container.innerHTML = `
            <div class="card empty-state">
                <span>🔥</span>
                <p>
                    No habits yet. Build your first routine.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        habits.map(habit => {

            const streak =
                calculateStreak(habit);


            const today =
                new Date();


            let daysHTML = "";


            for (
                let i = 6;
                i >= 0;
                i--
            ) {

                const date =
                    new Date();

                date.setDate(
                    today.getDate() - i
                );


                const key =
                    getDateKey(date);


                const checked =
                    !!habit.history[key];


                const isToday =
                    i === 0;


                const dayName =
                    date.toLocaleDateString(
                        "en-IN",
                        {
                            weekday: "short"
                        }
                    );


                daysHTML += `

                    <button
                        class="
                            habit-day
                            ${checked ? "checked" : ""}
                            ${isToday ? "today" : ""}
                        "
                        onclick="
                            toggleHabitDay(
                                '${habit.id}',
                                '${key}'
                            )
                        ">

                        ${dayName}

                        <strong>
                            ${date.getDate()}
                        </strong>

                    </button>

                `;
            }


            return `

                <div class="habit-card">

                    <div class="habit-card-header">

                        <div class="habit-title">

                            <div class="habit-large-icon">
                                🔥
                            </div>

                            <div>

                                <strong>
                                    ${escapeHTML(habit.name)}
                                </strong>

                                <small>
                                    ${escapeHTML(habit.category)}
                                    •
                                    ${escapeHTML(habit.target)}
                                </small>

                            </div>

                        </div>


                        <div class="habit-streak">

                            <strong>
                                ${streak}
                            </strong>

                            <span>
                                day streak
                            </span>

                        </div>

                    </div>


                    <div class="habit-days">
                        ${daysHTML}
                    </div>


                    <div class="habit-footer">

                        <span class="muted">
                            Weekly consistency:
                            ${getHabitWeeklyCompletion(habit)}%
                        </span>

                        <button
                            class="habit-delete"
                            onclick="
                                deleteHabit('${habit.id}')
                            ">
                            Delete
                        </button>

                    </div>

                </div>

            `;

        }).join("");
}


window.toggleHabitDay =
    function (id, dateKey) {

        const habit =
            habits.find(
                item =>
                    String(item.id) ===
                    String(id)
            );


        if (!habit) return;


        if (!habit.history) {
            habit.history = {};
        }


        habit.history[dateKey] =
            !habit.history[dateKey];


        saveHabits();

        renderHabits();

        updateHabitStats();

        updateDashboard();

        updateProgressPage();

        updateAchievements();
    };


window.deleteHabit =
    function (id) {

        if (
            !confirm(
                "Delete this habit?"
            )
        ) return;


        habits =
            habits.filter(
                habit =>
                    String(habit.id) !==
                    String(id)
            );


        saveHabits();

        renderHabits();

        updateHabitStats();

        updateDashboard();

        updateProgressPage();

        updateAchievements();
    };


function updateHabitStats() {

    const total =
        habits.length;


    const today =
        todayKey();


    const todayCompleted =
        habits.filter(
            habit =>
                habit.history &&
                habit.history[today]
        ).length;


    const todayPercent =
        total
            ? Math.round(
                (todayCompleted / total) *
                100
            )
            : 0;


    let bestStreak = 0;


    habits.forEach(habit => {

        let current = 0;

        const date =
            new Date();


        while (
            habit.history &&
            habit.history[
            getDateKey(date)
            ]
        ) {

            current++;

            date.setDate(
                date.getDate() - 1
            );
        }


        bestStreak =
            Math.max(
                bestStreak,
                current
            );

    });


    const weeklyValues =
        habits.map(
            getHabitWeeklyCompletion
        );


    const weekly =
        weeklyValues.length
            ? Math.round(
                weeklyValues.reduce(
                    (a, b) => a + b,
                    0
                ) /
                weeklyValues.length
            )
            : 0;


    document.querySelector(
        "#habit-total"
    ).textContent = total;


    document.querySelector(
        "#habit-today"
    ).textContent =
        `${todayPercent}%`;


    document.querySelector(
        "#best-streak"
    ).textContent =
        bestStreak;


    document.querySelector(
        "#habit-weekly"
    ).textContent =
        `${weekly}%`;
}


/* HABIT FORM */

document
    .querySelector("#open-habit-form")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector("#habit-form-card")
                .classList.remove("hidden");

        }
    );


document
    .querySelector("#cancel-habit-form")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector("#habit-form-card")
                .classList.add("hidden");

        }
    );


document
    .querySelector("#habit-form")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const habit = {

                id:
                    Date.now() +
                    Math.random(),

                name:
                    document.querySelector(
                        "#habit-name"
                    ).value.trim(),

                category:
                    document.querySelector(
                        "#habit-category"
                    ).value,

                target:
                    document.querySelector(
                        "#habit-target"
                    ).value,

                history: {}

            };


            habits.unshift(habit);

            saveHabits();

            event.target.reset();

            document
                .querySelector("#habit-form-card")
                .classList.add("hidden");


            renderHabits();

            updateHabitStats();

            updateDashboard();

            updateProgressPage();

            updateAchievements();

        }
    );


/* =========================================================
   TASKS
========================================================= */

function saveTasks() {
    saveData("lifeOSTasks", tasks);
}


function renderDashboardTasks() {

    const container =
        document.querySelector(
            "#dashboard-tasks"
        );


    const empty =
        document.querySelector(
            "#dashboard-task-empty"
        );


    if (!container) return;


    if (!tasks.length) {

        container.innerHTML = "";

        empty.classList.remove("hidden");

        return;
    }


    empty.classList.add("hidden");


    container.innerHTML =
        tasks.map(task => `

            <label class="task-item ${task.done ? "done" : ""}">

                <input
                    type="checkbox"
                    data-task-id="${task.id}"
                    ${task.done ? "checked" : ""}>

                <span>
                    ${escapeHTML(task.text)}
                </span>

            </label>

        `).join("");
}


document.addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest(
                "[data-task-id]"
            );


        if (!checkbox) return;


        const task =
            tasks.find(
                item =>
                    String(item.id) ===
                    String(
                        checkbox.dataset.taskId
                    )
            );


        if (!task) return;


        task.done =
            checkbox.checked;


        saveTasks();

        renderDashboardTasks();

        updateDashboard();

        updateAchievements();
    }
);


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    const activeGoals =
        goals.filter(
            goal =>
                goal.progress < 100
        ).length;


    const today =
        todayKey();


    const completedHabits =
        habits.filter(
            habit =>
                habit.history &&
                habit.history[today]
        ).length;


    const habitPercent =
        habits.length
            ? Math.round(
                (completedHabits /
                    habits.length) *
                100
            )
            : 0;


    document.querySelector(
        "#dashboard-goal-count"
    ).textContent =
        activeGoals;


    document.querySelector(
        "#dashboard-habit-today"
    ).textContent =
        `${habitPercent}%`;


    const studyProgress =
        calculateStudyProgress();


    document.querySelector(
        "#dashboard-study-progress"
    ).textContent =
        `${studyProgress}%`;


    const careerProgress =
        calculateCareerProgress();


    document.querySelector(
        "#dashboard-career-progress"
    ).textContent =
        `${careerProgress}%`;


    document.querySelector(
        "#dashboard-career-big"
    ).textContent =
        `${careerProgress}%`;


    document.querySelector(
        "#dashboard-career-bar"
    ).style.width =
        `${careerProgress}%`;


    updateDashboardGoals();

    updateDashboardHabits();

    renderDashboardTasks();

    updateDashboardEvents();

    updateTodayScore();

    renderWeeklyBars();
}


function updateDashboardGoals() {

    const container =
        document.querySelector(
            "#dashboard-goals"
        );


    if (!goals.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>🎯</span>
                <p>No goals yet.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        goals
            .slice(0, 4)
            .map(goal => `

                <div class="goal-preview">

                    <div class="goal-preview-top">

                        <span class="goal-preview-name">
                            ${escapeHTML(goal.name)}
                        </span>

                        <span class="goal-percent">
                            ${clamp(goal.progress)}%
                        </span>

                    </div>

                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            style="
                                width:${clamp(goal.progress)}%
                            ">
                        </div>

                    </div>

                </div>

            `)
            .join("");
}


function updateDashboardHabits() {

    const container =
        document.querySelector(
            "#dashboard-habits"
        );


    if (!habits.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>🔥</span>
                <p>No habits yet.</p>
            </div>
        `;

        return;
    }


    const today =
        todayKey();


    container.innerHTML =
        habits
            .slice(0, 5)
            .map(habit => {

                const done =
                    habit.history &&
                    habit.history[today];


                return `

                    <div class="dashboard-habit">

                        <div class="habit-name-mini">

                            <span
                                class="
                                    habit-dot
                                    ${done ? "done" : ""}
                                ">
                            </span>

                            ${escapeHTML(habit.name)}

                        </div>

                        <span class="muted">
                            ${calculateStreak(habit)}🔥
                        </span>

                    </div>

                `;

            })
            .join("");
}


function updateTodayScore() {

    const taskScore =
        tasks.length
            ? (
                tasks.filter(
                    task => task.done
                ).length /
                tasks.length
            ) * 100
            : 0;


    const habitScore =
        habits.length
            ? (
                habits.filter(
                    habit =>
                        habit.history &&
                        habit.history[todayKey()]
                ).length /
                habits.length
            ) * 100
            : 0;


    const goalScore =
        goals.length
            ? (
                goals.reduce(
                    (sum, goal) =>
                        sum + clamp(goal.progress),
                    0
                ) /
                goals.length
            )
            : 0;


    const score =
        Math.round(
            (
                taskScore +
                habitScore +
                goalScore
            ) / 3
        );


    document.querySelector(
        "#today-score"
    ).textContent =
        `${score}%`;


    document.querySelector(
        "#today-score-bar"
    ).style.width =
        `${score}%`;
}


function renderWeeklyBars() {

    const container =
        document.querySelector(
            "#weekly-bars"
        );


    if (!container) return;


    const today =
        new Date();


    const labels = [];


    for (
        let i = 6;
        i >= 0;
        i--
    ) {

        const date =
            new Date();

        date.setDate(
            today.getDate() - i
        );


        const key =
            getDateKey(date);


        const completed =
            habits.filter(
                habit =>
                    habit.history &&
                    habit.history[key]
            ).length;


        const percentage =
            habits.length
                ? Math.round(
                    (completed /
                        habits.length) *
                    100
                )
                : 0;


        labels.push({

            name:
                date.toLocaleDateString(
                    "en-IN",
                    {
                        weekday: "short"
                    }
                ).slice(0, 3),

            percentage

        });

    }


    container.innerHTML =
        labels.map(item => `

            <div class="week-day">

                <div class="week-bar">

                    <div
                        style="
                            height:${item.percentage}%
                        ">
                    </div>

                </div>

                <span>
                    ${item.name}
                </span>

            </div>

        `).join("");
}


/* =========================================================
   STUDENT CENTER
========================================================= */

function calculateStudyProgress() {

    const total =
        studySessions.reduce(
            (sum, session) =>
                sum + Number(session.minutes || 0),
            0
        );


    /*
       600 minutes = 100% for this overview.
       This is a real calculation, not random.
    */

    return clamp(
        Math.round(
            (total / 600) * 100
        )
    );
}


function renderStudent() {

    renderSubjects();

    renderAssignments();

    renderStudySessions();

    renderExams();


    document.querySelector(
        "#subject-count"
    ).textContent =
        subjects.length;


    const minutes =
        studySessions.reduce(
            (sum, session) =>
                sum + Number(session.minutes || 0),
            0
        );


    document.querySelector(
        "#study-hours"
    ).textContent =
        `${Math.floor(minutes / 60)}h`;


    document.querySelector(
        "#assignment-count"
    ).textContent =
        assignments.filter(
            item =>
                !item.done
        ).length;


    document.querySelector(
        "#academic-progress"
    ).textContent =
        `${calculateStudyProgress()}%`;
}


function renderSubjects() {

    const container =
        document.querySelector(
            "#subjects-list"
        );


    if (!subjects.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>📚</span>
                <p>Add your college subjects.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        subjects.map(subject => `

            <div class="subject-row">

                <div class="row-icon">
                    📖
                </div>

                <div class="row-content">

                    <strong>
                        ${escapeHTML(subject.name)}
                    </strong>

                    <small>
                        ${escapeHTML(subject.code || "Subject")}
                    </small>

                </div>

                <button
                    class="small-icon-btn"
                    onclick="
                        deleteSubject('${subject.id}')
                    ">
                    ×
                </button>

            </div>

        `).join("");
}


function renderAssignments() {

    const container =
        document.querySelector(
            "#assignments-list"
        );


    if (!assignments.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>📝</span>
                <p>No assignments.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        assignments.map(item => `

            <div class="assignment-row">

                <input
                    type="checkbox"
                    class="completed-check"
                    data-assignment-id="${item.id}"
                    ${item.done ? "checked" : ""}>

                <div class="row-content">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <small>
                        Due ${formatDate(item.deadline)}
                    </small>

                </div>

            </div>

        `).join("");
}


function renderStudySessions() {

    const container =
        document.querySelector(
            "#study-sessions-list"
        );


    if (!studySessions.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>⏱️</span>
                <p>No study sessions logged yet.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        studySessions
            .slice()
            .reverse()
            .slice(0, 8)
            .map(session => `

                <div class="study-row">

                    <div class="row-icon">
                        ⏱️
                    </div>

                    <div class="row-content">

                        <strong>
                            ${escapeHTML(session.topic)}
                        </strong>

                        <small>
                            ${formatDate(session.date)}
                        </small>

                    </div>

                    <div class="row-right">
                        ${session.minutes} min
                    </div>

                </div>

            `)
            .join("");
}


function renderExams() {

    const container =
        document.querySelector(
            "#exams-list"
        );


    if (!exams.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>🎓</span>
                <p>No exams added.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        exams
            .slice()
            .sort(
                (a, b) =>
                    a.date.localeCompare(b.date)
            )
            .map(exam => `

                <div class="exam-row">

                    <div class="row-icon">
                        🎓
                    </div>

                    <div class="row-content">

                        <strong>
                            ${escapeHTML(exam.name)}
                        </strong>

                        <small>
                            ${formatDate(exam.date)}
                        </small>

                    </div>

                    <button
                        class="small-icon-btn"
                        onclick="
                            deleteExam('${exam.id}')
                        ">
                        ×
                    </button>

                </div>

            `)
            .join("");
}


/* =========================================================
   STUDENT MODALS
========================================================= */

document
    .querySelector("#add-subject-btn")
    .addEventListener(
        "click",
        () => {

            openModal(`

                <span class="eyebrow">
                    ACADEMICS
                </span>

                <h2>Add Subject</h2>

                <form id="subject-modal-form">

                    <div class="input-group">
                        <label>Subject name</label>
                        <input
                            id="modal-subject-name"
                            required>
                    </div>

                    <div class="input-group">
                        <label>Subject code</label>
                        <input
                            id="modal-subject-code"
                            placeholder="Optional">
                    </div>

                    <br>

                    <button
                        class="primary-btn"
                        type="submit">
                        Add Subject
                    </button>

                </form>

            `);


            document
                .querySelector("#subject-modal-form")
                .addEventListener(
                    "submit",
                    event => {

                        event.preventDefault();


                        subjects.push({

                            id:
                                Date.now() +
                                Math.random(),

                            name:
                                document
                                    .querySelector(
                                        "#modal-subject-name"
                                    )
                                    .value.trim(),

                            code:
                                document
                                    .querySelector(
                                        "#modal-subject-code"
                                    )
                                    .value.trim()

                        });


                        saveData(
                            "lifeOSSubjects",
                            subjects
                        );


                        closeModal();

                        renderStudent();

                    }
                );

        }
    );


window.deleteSubject =
    function (id) {

        subjects =
            subjects.filter(
                item =>
                    String(item.id) !==
                    String(id)
            );

        saveData(
            "lifeOSSubjects",
            subjects
        );

        renderStudent();
    };


document
    .querySelector("#add-assignment-btn")
    .addEventListener(
        "click",
        () => {

            openModal(`

                <span class="eyebrow">
                    DEADLINE
                </span>

                <h2>Add Assignment</h2>

                <form id="assignment-modal-form">

                    <div class="input-group">
                        <label>Assignment</label>
                        <input
                            id="modal-assignment-name"
                            required>
                    </div>

                    <div class="input-group">
                        <label>Due date</label>
                        <input
                            type="date"
                            id="modal-assignment-date"
                            required>
                    </div>

                    <br>

                    <button
                        class="primary-btn"
                        type="submit">
                        Add Assignment
                    </button>

                </form>

            `);


            document
                .querySelector("#assignment-modal-form")
                .addEventListener(
                    "submit",
                    event => {

                        event.preventDefault();


                        assignments.push({

                            id:
                                Date.now() +
                                Math.random(),

                            name:
                                document
                                    .querySelector(
                                        "#modal-assignment-name"
                                    )
                                    .value.trim(),

                            deadline:
                                document
                                    .querySelector(
                                        "#modal-assignment-date"
                                    )
                                    .value,

                            done: false

                        });


                        saveData(
                            "lifeOSAssignments",
                            assignments
                        );


                        closeModal();

                        renderStudent();

                    }
                );

        }
    );


document.addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest(
                "[data-assignment-id]"
            );


        if (!checkbox) return;


        const assignment =
            assignments.find(
                item =>
                    String(item.id) ===
                    String(
                        checkbox.dataset.assignmentId
                    )
            );


        if (!assignment) return;


        assignment.done =
            checkbox.checked;


        saveData(
            "lifeOSAssignments",
            assignments
        );

        renderStudent();

        updateAchievements();

    }
);


document
    .querySelector("#add-exam-btn")
    .addEventListener(
        "click",
        () => {

            openModal(`

                <span class="eyebrow">
                    EXAM
                </span>

                <h2>Add Exam</h2>

                <form id="exam-modal-form">

                    <div class="input-group">
                        <label>Exam</label>
                        <input
                            id="modal-exam-name"
                            required>
                    </div>

                    <div class="input-group">
                        <label>Date</label>
                        <input
                            type="date"
                            id="modal-exam-date"
                            required>
                    </div>

                    <br>

                    <button
                        class="primary-btn"
                        type="submit">
                        Add Exam
                    </button>

                </form>

            `);


            document
                .querySelector("#exam-modal-form")
                .addEventListener(
                    "submit",
                    event => {

                        event.preventDefault();


                        exams.push({

                            id:
                                Date.now() +
                                Math.random(),

                            name:
                                document
                                    .querySelector(
                                        "#modal-exam-name"
                                    )
                                    .value.trim(),

                            date:
                                document
                                    .querySelector(
                                        "#modal-exam-date"
                                    )
                                    .value

                        });


                        saveData(
                            "lifeOSExams",
                            exams
                        );


                        closeModal();

                        renderStudent();

                    }
                );

        }
    );


window.deleteExam =
    function (id) {

        exams =
            exams.filter(
                item =>
                    String(item.id) !==
                    String(id)
            );

        saveData(
            "lifeOSExams",
            exams
        );

        renderStudent();
    };


document
    .querySelector("#open-study-form")
    .addEventListener(
        "click",
        () => {

            openModal(`

                <span class="eyebrow">
                    STUDY LOG
                </span>

                <h2>Add Study Session</h2>

                <form id="study-modal-form">

                    <div class="input-group">
                        <label>What did you study?</label>
                        <input
                            id="modal-study-topic"
                            placeholder="Example: JavaScript arrays"
                            required>
                    </div>

                    <div class="input-group">
                        <label>Minutes</label>
                        <input
                            type="number"
                            id="modal-study-minutes"
                            min="1"
                            required>
                    </div>

                    <div class="input-group">
                        <label>Date</label>
                        <input
                            type="date"
                            id="modal-study-date"
                            value="${todayKey()}"
                            required>
                    </div>

                    <br>

                    <button
                        class="primary-btn"
                        type="submit">
                        Log Session
                    </button>

                </form>

            `);


            document
                .querySelector("#study-modal-form")
                .addEventListener(
                    "submit",
                    event => {

                        event.preventDefault();


                        studySessions.push({

                            id:
                                Date.now() +
                                Math.random(),

                            topic:
                                document
                                    .querySelector(
                                        "#modal-study-topic"
                                    )
                                    .value.trim(),

                            minutes:
                                Number(
                                    document
                                        .querySelector(
                                            "#modal-study-minutes"
                                        )
                                        .value
                                ),

                            date:
                                document
                                    .querySelector(
                                        "#modal-study-date"
                                    )
                                    .value

                        });


                        saveData(
                            "lifeOSStudySessions",
                            studySessions
                        );


                        closeModal();

                        renderStudent();

                        updateDashboard();

                        updateProgressPage();

                    }
                );

        }
    );


/* =========================================================
   CAREER CHECKLIST
========================================================= */

function careerKey(title, item) {

    return `${title}::${item}`;
}


function renderCareer() {

    const container =
        document.querySelector(
            "#career-checklist"
        );


    container.innerHTML =
        careerSections.map(section => {

            const completed =
                section.items.filter(
                    item =>
                        careerState[
                        careerKey(
                            section.title,
                            item[0]
                        )
                        ]
                ).length;


            const percent =
                section.items.length
                    ? Math.round(
                        (
                            completed /
                            section.items.length
                        ) * 100
                    )
                    : 0;


            return `

                <div class="career-section">

                    <div class="career-section-header">

                        <h2>
                            ${section.icon}
                            ${section.title}
                        </h2>

                        <span>
                            ${percent}%
                        </span>

                    </div>


                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            style="
                                width:${percent}%
                            ">
                        </div>

                    </div>


                    ${section.items.map(
                item => {

                    const key =
                        careerKey(
                            section.title,
                            item[0]
                        );


                    const checked =
                        !!careerState[key];


                    return `

                                    <label
                                        class="
                                            career-item
                                            ${checked ? "completed" : ""}
                                        ">

                                        <input
                                            type="checkbox"
                                            data-career-key="${escapeHTML(key)}"
                                            ${checked ? "checked" : ""}>

                                        <div>

                                            <strong>
                                                ${escapeHTML(item[0])}
                                            </strong>

                                            <small>
                                                ${escapeHTML(item[1])}
                                            </small>

                                        </div>

                                    </label>

                                `;

                }
            ).join("")

                }

                </div>

            `;

        }).join("");


    updateCareerProgress();
}


function calculateCareerProgress() {

    let total = 0;
    let completed = 0;


    careerSections.forEach(section => {

        section.items.forEach(item => {

            total++;


            if (
                careerState[
                careerKey(
                    section.title,
                    item[0]
                )
                ]
            ) {
                completed++;
            }

        });

    });


    return total
        ? Math.round(
            (completed / total) *
            100
        )
        : 0;
}


function updateCareerProgress() {

    const percentage =
        calculateCareerProgress();


    document.querySelector(
        "#career-percentage"
    ).textContent =
        `${percentage}%`;


    document.querySelector(
        "#career-circle-number"
    ).textContent =
        `${percentage}%`;


    const circle =
        document.querySelector(
            ".career-circle"
        );


    if (circle) {

        circle.style.background =
            `conic-gradient(
                var(--purple)
                ${percentage * 3.6}deg,
                var(--cyan)
                ${percentage * 3.6}deg,
                rgba(255,255,255,0.06)
                ${percentage * 3.6}deg
            )`;
    }


    updateDashboard();
    updateCareerLearningConnection();
}
/* =========================================================
   IT CAREER → LEARNING HUB CONNECTION
   ========================================================= */

function updateCareerLearningConnection() {

    const categoryMap = {
        "Programming": "programming",
        "DSA": "dsa",
        "Developer Skills": "web",
        "CS Fundamentals": "cs"
    };

    Object.keys(categoryMap).forEach(function (careerCategory) {

        const learningCategory =
            categoryMap[careerCategory];

        const section =
            careerSections.find(
                section =>
                    section.title === careerCategory
            );

        if (!section) return;

        let completed = 0;

        section.items.forEach(function (item) {

            const key =
                careerKey(
                    section.title,
                    item[0]
                );

            if (careerState[key]) {
                completed++;
            }

        });

        const total =
            section.items.length;

        const percentage =
            total
                ? Math.round(
                    (completed / total) * 100
                )
                : 0;

        const bar =
            document.querySelector(
                `#learning-${learningCategory}-bar`
            );

        const label =
            document.querySelector(
                `#learning-${learningCategory}-percent`
            );

        if (bar) {
            bar.style.width =
                `${percentage}%`;
        }

        if (label) {
            label.textContent =
                `${percentage}%`;
        }

    });

}


document.addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest(
                "[data-career-key]"
            );


        if (!checkbox) return;


        careerState[
            checkbox.dataset.careerKey
        ] =
            checkbox.checked;


        saveData(
            "lifeOSCareer",
            careerState
        );


        renderCareer();

        updateCareerLearningConnection();

        updateProgressPage();

        updateAchievements();
    }
);


/* =========================================================
   ROADMAPS
========================================================= */

function getRoadmapProgress(roadmap) {

    const state =
        loadData(
            `lifeOSRoadmap_${roadmap.id}`,
            {}
        );


    const completed =
        roadmap.steps.filter(
            step =>
                state[step[0]]
        ).length;


    return roadmap.steps.length
        ? Math.round(
            (completed /
                roadmap.steps.length) *
            100
        )
        : 0;
}


function renderRoadmaps() {

    const container =
        document.querySelector(
            "#roadmaps-list"
        );


    container.innerHTML =
        roadmapData.map(roadmap => {

            const progress =
                getRoadmapProgress(
                    roadmap
                );


            const state =
                loadData(
                    `lifeOSRoadmap_${roadmap.id}`,
                    {}
                );


            return `

                <div class="card roadmap-card">

                    <div class="roadmap-icon">
                        ${roadmap.icon}
                    </div>

                    <h2>
                        ${roadmap.title}
                    </h2>

                    <p>
                        ${roadmap.description}
                    </p>


                    <div class="roadmap-progress">

                        <span>
                            Progress
                        </span>

                        <strong>
                            ${progress}%
                        </strong>

                    </div>


                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            style="
                                width:${progress}%
                            ">
                        </div>

                    </div>


                    <div class="roadmap-steps">

                        ${roadmap.steps.map(
                (step, index) => `

                                    <label class="roadmap-step">

                                        <input
                                            type="checkbox"
                                            data-roadmap-id="${roadmap.id}"
                                            data-roadmap-step="${escapeHTML(step[0])}"
                                            ${state[step[0]] ? "checked" : ""}>

                                        <span class="step-number">
                                            ${index + 1}
                                        </span>

                                        <div>

                                            <strong>
                                                ${escapeHTML(step[0])}
                                            </strong>

                                            <small>
                                                ${escapeHTML(step[1])}
                                            </small>

                                        </div>

                                    </label>

                                `
            ).join("")

                }

                    </div>

                </div>

            `;

        }).join("");
}


document.addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest(
                "[data-roadmap-id]"
            );


        if (!checkbox) return;


        const roadmapId =
            checkbox.dataset.roadmapId;


        const state =
            loadData(
                `lifeOSRoadmap_${roadmapId}`,
                {}
            );


        state[
            checkbox.dataset.roadmapStep
        ] =
            checkbox.checked;


        saveData(
            `lifeOSRoadmap_${roadmapId}`,
            state
        );


        renderRoadmaps();

        updateProgressPage();

        updateAchievements();

    }
);


/* =========================================================
   JAPAN CHECKLIST
========================================================= */

const japanItems = [

    "Learn strong programming fundamentals",
    "Build a strong IT project portfolio",
    "Complete multiple substantial projects",
    "Gain internship or practical experience",
    "Build GitHub portfolio",
    "Learn Japanese consistently",
    "Study Japanese workplace culture",
    "Research IT job opportunities",
    "Prepare technical resume",
    "Improve interview communication",
    "Build financial preparation",
    "Research future application pathways"

];


function renderJapan() {

    const container =
        document.querySelector(
            "#japan-checklist"
        );


    container.innerHTML =
        japanItems.map(item => {

            const checked =
                !!japanState[item];


            return `

                <label class="japan-check">

                    <input
                        type="checkbox"
                        data-japan-item="${escapeHTML(item)}"
                        ${checked ? "checked" : ""}>

                    <span>
                        ${escapeHTML(item)}
                    </span>

                </label>

            `;

        }).join("");
}


document.addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest(
                "[data-japan-item]"
            );


        if (!checkbox) return;


        japanState[
            checkbox.dataset.japanItem
        ] =
            checkbox.checked;


        saveData(
            "lifeOSJapan",
            japanState
        );


        updateAchievements();

    }
);


/* =========================================================
   LEARNING
========================================================= */

function renderLearning() {

    const categories = {

        programming: 0,
        dsa: 0,
        web: 0,
        cs: 0

    };


    const counts = {

        programming: 0,
        dsa: 0,
        web: 0,
        cs: 0

    };


    learningTopics.forEach(topic => {

        const category =
            topic.category;


        if (
            Object.prototype.hasOwnProperty
                .call(counts, category)
        ) {

            counts[category]++;

            if (topic.done) {
                categories[category]++;
            }
        }

    });


    Object.keys(categories)
        .forEach(category => {

            const percent =
                counts[category]
                    ? Math.round(
                        (
                            categories[category] /
                            counts[category]
                        ) * 100
                    )
                    : 0;


            const bar =
                document.querySelector(
                    `#learning-${category}-bar`
                );


            const label =
                document.querySelector(
                    `#learning-${category}-percent`
                );


            if (bar)
                bar.style.width =
                    `${percent}%`;


            if (label)
                label.textContent =
                    `${percent}%`;
        });


    const container =
        document.querySelector(
            "#learning-topics"
        );


    if (!learningTopics.length) {

        container.innerHTML = `
            <div class="empty-state">
                <span>🧠</span>
                <p>
                    Add learning topics as you study.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        learningTopics.map(topic => `

            <label class="learning-topic">

                <div>

                    <strong>
                        ${escapeHTML(topic.name)}
                    </strong>

                    <small class="muted">
                        ${escapeHTML(topic.category)}
                    </small>

                </div>

                <input
                    type="checkbox"
                    data-learning-id="${topic.id}"
                    ${topic.done ? "checked" : ""}>

            </label>

        `).join("");
}


document
    .querySelector("#add-learning-btn")
    .addEventListener(
        "click",
        () => {

            openModal(`

                <span class="eyebrow">
                    LEARNING
                </span>

                <h2>Add Learning Topic</h2>

                <form id="learning-modal-form">

                    <div class="input-group">

                        <label>
                            Topic
                        </label>

                        <input
                            id="modal-learning-name"
                            placeholder="Example: JavaScript Promises"
                            required>

                    </div>

                    <div class="input-group">

                        <label>
                            Category
                        </label>

                        <select id="modal-learning-category">

                            <option value="programming">
                                Programming
                            </option>

                            <option value="dsa">
                                DSA
                            </option>

                            <option value="web">
                                Web Development
                            </option>

                            <option value="cs">
                                CS Fundamentals
                            </option>

                        </select>

                    </div>

                    <br>

                    <button
                        class="primary-btn"
                        type="submit">
                        Add Topic
                    </button>

                </form>

            `);


            document
                .querySelector("#learning-modal-form")
                .addEventListener(
                    "submit",
                    event => {

                        event.preventDefault();


                        learningTopics.push({

                            id:
                                Date.now() +
                                Math.random(),

                            name:
                                document
                                    .querySelector(
                                        "#modal-learning-name"
                                    )
                                    .value.trim(),

                            category:
                                document
                                    .querySelector(
                                        "#modal-learning-category"
                                    )
                                    .value,

                            done: false

                        });


                        saveData(
                            "lifeOSLearningTopics",
                            learningTopics
                        );


                        closeModal();

                        renderLearning();

                        updateProgressPage();

                    }
                );

        }
    );


document.addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest(
                "[data-learning-id]"
            );


        if (!checkbox) return;


        const topic =
            learningTopics.find(
                item =>
                    String(item.id) ===
                    String(
                        checkbox.dataset.learningId
                    )
            );


        if (!topic) return;


        topic.done =
            checkbox.checked;


        saveData(
            "lifeOSLearningTopics",
            learningTopics
        );


        renderLearning();

        updateProgressPage();

        updateAchievements();

    }
);


/* =========================================================
   PROJECTS
========================================================= */

function saveProjects() {
    saveData(
        "lifeOSProjects",
        projects
    );
}


function renderProjects() {

    const container =
        document.querySelector(
            "#projects-list"
        );


    if (!projects.length) {

        container.innerHTML = `
            <div class="card empty-state">
                <span>🚀</span>
                <p>
                    Start building. Your projects will appear here.
                </p>
            </div>
        `;

    } else {

        container.innerHTML =
            projects.map(project => `

                <div class="card project-card">

                    <div class="project-top">

                        <div>

                            <span class="eyebrow">
                                ${escapeHTML(project.category)}
                            </span>

                            <h2>
                                ${escapeHTML(project.name)}
                            </h2>

                        </div>

                        <span class="project-status">
                            ${escapeHTML(project.status)}
                        </span>

                    </div>


                    <p class="project-description">
                        ${escapeHTML(project.description)}
                    </p>


                    <div class="tech-tags">

                        ${(project.tech || [])
                    .map(
                        tech =>
                            `
                                        <span class="tech-tag">
                                            ${escapeHTML(tech)}
                                        </span>
                                        `
                    )
                    .join("")
                }

                    </div>


                    <div class="project-meta">

                        <div class="project-meta-box">

                            <span>Progress</span>

                            <strong>
                                ${clamp(project.progress)}%
                            </strong>

                        </div>

                        <div class="project-meta-box">

                            <span>Next Task</span>

                            <strong>
                                ${escapeHTML(project.nextTask || "Not set")}
                            </strong>

                        </div>

                    </div>


                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            style="
                                width:${clamp(project.progress)}%
                            ">
                        </div>

                    </div>


                    ${project.github || project.demo
                    ? `

                                <div class="project-links">

                                    ${project.github
                        ? `
                                                <a
                                                    href="${escapeHTML(project.github)}"
                                                    target="_blank">
                                                    GitHub
                                                </a>
                                              `
                        : ""
                    }

                                    ${project.demo
                        ? `
                                                <a
                                                    href="${escapeHTML(project.demo)}"
                                                    target="_blank">
                                                    Demo
                                                </a>
                                              `
                        : ""
                    }

                                    <button
                                        class="secondary-btn"
                                        onclick="
                                            deleteProject('${project.id}')
                                        ">
                                        Delete
                                    </button>

                                </div>

                              `
                    : `
                                <div class="project-links">

                                    <button
                                        class="secondary-btn"
                                        onclick="
                                            deleteProject('${project.id}')
                                        ">
                                        Delete Project
                                    </button>

                                </div>
                              `
                }

                </div>

            `).join("");
    }


    updateProjectStats();
}


function updateProjectStats() {

    document.querySelector(
        "#project-total"
    ).textContent =
        projects.length;


    document.querySelector(
        "#project-active"
    ).textContent =
        projects.filter(
            project =>
                project.progress < 100
        ).length;


    document.querySelector(
        "#project-completed"
    ).textContent =
        projects.filter(
            project =>
                project.progress >= 100
        ).length;
}


window.deleteProject =
    function (id) {

        if (
            !confirm(
                "Delete this project?"
            )
        ) return;


        projects =
            projects.filter(
                project =>
                    String(project.id) !==
                    String(id)
            );


        saveProjects();

        renderProjects();

        updateProgressPage();

        updateAchievements();

    };


document
    .querySelector("#add-project-btn")
    .addEventListener(
        "click",
        () => {

            openModal(`

                <span class="eyebrow">
                    PROJECT
                </span>

                <h2>Create Project</h2>

                <form id="project-modal-form">

                    <div class="input-group">

                        <label>
                            Project name
                        </label>

                        <input
                            id="modal-project-name"
                            placeholder="Example: Personal Portfolio"
                            required>

                    </div>


                    <div class="input-group">

                        <label>
                            Description
                        </label>

                        <textarea
                            id="modal-project-description"
                            rows="3"
                            placeholder="What are you building?"></textarea>

                    </div>


                    <div class="input-group">

                        <label>
                            Category
                        </label>

                        <select id="modal-project-category">

                            <option>
                                Web Development
                            </option>

                            <option>
                                Chrome Extension
                            </option>

                            <option>
                                Mobile App
                            </option>

                            <option>
                                AI / Data
                            </option>

                            <option>
                                College Project
                            </option>

                            <option>
                                Personal
                            </option>

                        </select>

                    </div>


                    <div class="input-group">

                        <label>
                            Technologies
                        </label>

                        <input
                            id="modal-project-tech"
                            placeholder="HTML, CSS, JavaScript">

                    </div>


                    <div class="input-group">

                        <label>
                            Next task
                        </label>

                        <input
                            id="modal-project-next"
                            placeholder="Build login page">

                    </div>


                    <br>

                    <button
                        class="primary-btn"
                        type="submit">
                        Create Project
                    </button>

                </form>

            `);


            document
                .querySelector("#project-modal-form")
                .addEventListener(
                    "submit",
                    event => {

                        event.preventDefault();


                        projects.push({

                            id:
                                Date.now() +
                                Math.random(),

                            name:
                                document
                                    .querySelector(
                                        "#modal-project-name"
                                    )
                                    .value.trim(),

                            description:
                                document
                                    .querySelector(
                                        "#modal-project-description"
                                    )
                                    .value.trim(),

                            category:
                                document
                                    .querySelector(
                                        "#modal-project-category"
                                    )
                                    .value,

                            tech:
                                document
                                    .querySelector(
                                        "#modal-project-tech"
                                    )
                                    .value
                                    .split(",")
                                    .map(
                                        x =>
                                            x.trim()
                                    )
                                    .filter(Boolean),

                            nextTask:
                                document
                                    .querySelector(
                                        "#modal-project-next"
                                    )
                                    .value.trim(),

                            status:
                                "In Progress",

                            /* NO RANDOM PROGRESS */
                            progress: 0,

                            github: "",

                            demo: ""

                        });


                        saveProjects();

                        closeModal();

                        renderProjects();

                        updateProgressPage();

                    }
                );

        }
    );


/* =========================================================
   CALENDAR
========================================================= */

let calendarDate =
    new Date();


let selectedDate =
    todayKey();


function saveEvents() {
    saveData(
        "lifeOSEvents",
        events
    );
}


function renderCalendar() {

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    const monthName =
        calendarDate.toLocaleDateString(
            "en-IN",
            {
                month: "long",
                year: "numeric"
            }
        );


    document.querySelector(
        "#calendar-month"
    ).textContent =
        monthName;


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const container =
        document.querySelector(
            "#calendar-days"
        );


    let html = "";


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        html += `
            <div class="calendar-day empty"></div>
        `;
    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const date =
            new Date(
                year,
                month,
                day
            );


        const key =
            getDateKey(date);


        const todayClass =
            key === todayKey()
                ? "today"
                : "";


        const selectedClass =
            key === selectedDate
                ? "selected"
                : "";


        const hasEvent =
            events.some(
                event =>
                    event.date === key
            );


        html += `

            <button
                class="
                    calendar-day
                    ${todayClass}
                    ${selectedClass}
                "
                data-calendar-date="${key}">

                ${day}

                ${hasEvent
                ? `
                            <div class="calendar-event-dot"></div>
                          `
                : ""
            }

            </button>

        `;

    }


    container.innerHTML =
        html;


    renderEvents();
}


function renderEvents() {

    const container =
        document.querySelector(
            "#events-list"
        );


    const upcoming =
        events
            .slice()
            .sort(
                (a, b) =>
                    a.date.localeCompare(
                        b.date
                    )
            );


    if (!upcoming.length) {

        container.innerHTML = `
            <div class="empty-state">
                <span>📅</span>
                <p>No events yet.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        upcoming.map(event => {

            const date =
                new Date(
                    event.date +
                    "T00:00:00"
                );


            return `

                <div class="event-item">

                    <div class="event-date-box">

                        <strong>
                            ${date.getDate()}
                        </strong>

                        <span>
                            ${date.toLocaleDateString(
                "en-IN",
                {
                    month: "short"
                }
            )}
                        </span>

                    </div>


                    <div class="event-info">

                        <strong>
                            ${escapeHTML(event.title)}
                        </strong>

                        <small>
                            ${escapeHTML(
                event.type ||
                "Event"
            )}
                            ${event.time
                    ? " • " +
                    escapeHTML(
                        event.time
                    )
                    : ""
                }
                        </small>

                    </div>


                    <button
                        class="event-delete"
                        onclick="
                            deleteEvent('${event.id}')
                        ">
                        ×
                    </button>

                </div>

            `;

        }).join("");
}


document.addEventListener(
    "click",
    event => {

        const day =
            event.target.closest(
                "[data-calendar-date]"
            );


        if (!day) return;


        selectedDate =
            day.dataset.calendarDate;


        openEventModal(
            selectedDate
        );

    }
);


document
    .querySelector("#previous-month")
    .addEventListener(
        "click",
        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }
    );


document
    .querySelector("#next-month")
    .addEventListener(
        "click",
        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }
    );


document
    .querySelector("#add-event-btn")
    .addEventListener(
        "click",
        () => {

            openEventModal(
                selectedDate ||
                todayKey()
            );

        }
    );


function openEventModal(date) {

    openModal(`

        <span class="eyebrow">
            CALENDAR EVENT
        </span>

        <h2>Add Event</h2>

        <form id="event-modal-form">

            <div class="input-group">

                <label>
                    Event
                </label>

                <input
                    id="modal-event-title"
                    placeholder="Example: DBMS exam"
                    required>

            </div>


            <div class="input-group">

                <label>
                    Date
                </label>

                <input
                    type="date"
                    id="modal-event-date"
                    value="${date}"
                    required>

            </div>


            <div class="input-group">

                <label>
                    Time
                </label>

                <input
                    type="time"
                    id="modal-event-time">

            </div>


            <div class="input-group">

                <label>
                    Type
                </label>

                <select id="modal-event-type">

                    <option>Study</option>
                    <option>Exam</option>
                    <option>Assignment</option>
                    <option>Project</option>
                    <option>Personal</option>
                    <option>Other</option>

                </select>

            </div>


            <br>

            <button
                class="primary-btn"
                type="submit">
                Add Event
            </button>

        </form>

    `);


    document
        .querySelector("#event-modal-form")
        .addEventListener(
            "submit",
            event => {

                event.preventDefault();


                events.push({

                    id:
                        Date.now() +
                        Math.random(),

                    title:
                        document
                            .querySelector(
                                "#modal-event-title"
                            )
                            .value.trim(),

                    date:
                        document
                            .querySelector(
                                "#modal-event-date"
                            )
                            .value,

                    time:
                        document
                            .querySelector(
                                "#modal-event-time"
                            )
                            .value,

                    type:
                        document
                            .querySelector(
                                "#modal-event-type"
                            )
                            .value

                });


                saveEvents();

                closeModal();

                renderCalendar();

                updateDashboardEvents();

                updateAchievements();

            }
        );

}


window.deleteEvent =
    function (id) {

        events =
            events.filter(
                event =>
                    String(event.id) !==
                    String(id)
            );


        saveEvents();

        renderCalendar();

        updateDashboardEvents();

    };


function updateDashboardEvents() {

    const container =
        document.querySelector(
            "#dashboard-events"
        );


    if (!events.length) {

        container.innerHTML = `
            <div class="empty-state small">
                <span>📅</span>
                <p>No upcoming events.</p>
            </div>
        `;

        return;
    }


    const upcoming =
        events
            .slice()
            .sort(
                (a, b) =>
                    a.date.localeCompare(
                        b.date
                    )
            )
            .slice(0, 4);


    container.innerHTML =
        upcoming.map(event => `

            <div class="event-item">

                <div class="event-date-box">

                    <strong>
                        ${new Date(
            event.date +
            "T00:00:00"
        ).getDate()}
                    </strong>

                    <span>
                        ${new Date(
            event.date +
            "T00:00:00"
        ).toLocaleDateString(
            "en-IN",
            {
                month: "short"
            }
        )}
                    </span>

                </div>

                <div class="event-info">

                    <strong>
                        ${escapeHTML(event.title)}
                    </strong>

                    <small>
                        ${escapeHTML(event.type)}
                    </small>

                </div>

            </div>

        `).join("");
}


/* =========================================================
   PROGRESS
========================================================= */

function calculateGoalProgress() {

    if (!goals.length) return 0;


    return Math.round(
        goals.reduce(
            (sum, goal) =>
                sum + clamp(goal.progress),
            0
        ) / goals.length
    );
}


function calculateHabitProgress() {

    if (!habits.length) return 0;


    return Math.round(
        habits.reduce(
            (sum, habit) =>
                sum +
                getHabitWeeklyCompletion(habit),
            0
        ) / habits.length
    );
}


function calculateProjectProgress() {

    if (!projects.length) return 0;


    return Math.round(
        projects.reduce(
            (sum, project) =>
                sum + clamp(project.progress),
            0
        ) / projects.length
    );
}


function calculateOverallProgress() {

    const values = [

        calculateGoalProgress(),

        calculateHabitProgress(),

        calculateProjectProgress(),

        calculateCareerProgress(),

        calculateStudyProgress()

    ];


    return values.length
        ? Math.round(
            values.reduce(
                (a, b) => a + b,
                0
            ) /
            values.length
        )
        : 0;
}


function updateProgressPage() {

    const goalsProgress =
        calculateGoalProgress();


    const habitsProgress =
        calculateHabitProgress();


    const projectProgress =
        calculateProjectProgress();


    const careerProgress =
        calculateCareerProgress();


    const studyProgress =
        calculateStudyProgress();


    const overall =
        calculateOverallProgress();


    setProgress(
        "#progress-goals",
        "#progress-goals-bar",
        goalsProgress
    );


    setProgress(
        "#progress-habits",
        "#progress-habits-bar",
        habitsProgress
    );


    setProgress(
        "#progress-projects",
        "#progress-projects-bar",
        projectProgress
    );


    document.querySelector(
        "#overall-progress"
    ).textContent =
        `${overall}%`;


    document.querySelector(
        "#overall-progress-bar"
    ).style.width =
        `${overall}%`;


    const breakdown =
        document.querySelector(
            "#progress-breakdown"
        );


    breakdown.innerHTML = [

        ["Goals", goalsProgress],

        ["Habits", habitsProgress],

        ["Study", studyProgress],

        ["IT Career", careerProgress],

        ["Projects", projectProgress]

    ].map(item => `

        <div class="progress-breakdown-item">

            <span>
                ${item[0]}
            </span>

            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="
                        width:${item[1]}%
                    ">
                </div>

            </div>

            <strong>
                ${item[1]}%
            </strong>

        </div>

    `).join("");
}


function setProgress(
    labelSelector,
    barSelector,
    value
) {

    const label =
        document.querySelector(
            labelSelector
        );


    const bar =
        document.querySelector(
            barSelector
        );


    if (label)
        label.textContent =
            `${value}%`;


    if (bar)
        bar.style.width =
            `${value}%`;
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function getAchievements() {

    const completedGoals =
        goals.filter(
            goal =>
                goal.progress >= 100
        ).length;


    const habitDays =
        habits.reduce(
            (sum, habit) =>
                sum +
                Object.values(
                    habit.history || {}
                ).filter(Boolean).length,
            0
        );


    const completedCareer =
        calculateCareerProgress();


    const completedProjects =
        projects.filter(
            project =>
                project.progress >= 100
        ).length;


    const achievements = [

        {
            icon: "🌱",
            title: "First Step",
            description:
                "Create your first goal.",
            unlocked:
                goals.length >= 1
        },

        {
            icon: "🎯",
            title: "Goal Crusher",
            description:
                "Complete your first goal.",
            unlocked:
                completedGoals >= 1
        },

        {
            icon: "🔥",
            title: "Consistency",
            description:
                "Complete 7 habit check-ins.",
            unlocked:
                habitDays >= 7
        },

        {
            icon: "💪",
            title: "Discipline",
            description:
                "Reach a 7-day habit streak.",
            unlocked:
                habits.some(
                    habit =>
                        calculateStreak(habit) >= 7
                )
        },

        {
            icon: "💻",
            title: "Career Builder",
            description:
                "Complete 25% of your IT career checklist.",
            unlocked:
                completedCareer >= 25
        },

        {
            icon: "🚀",
            title: "Builder",
            description:
                "Create your first project.",
            unlocked:
                projects.length >= 1
        },

        {
            icon: "🏆",
            title: "Project Finisher",
            description:
                "Complete a project.",
            unlocked:
                completedProjects >= 1
        },

        {
            icon: "📚",
            title: "Student Mode",
            description:
                "Log your first study session.",
            unlocked:
                studySessions.length >= 1
        },

        {
            icon: "📅",
            title: "Organized",
            description:
                "Add your first calendar event.",
            unlocked:
                events.length >= 1
        },

        {
            icon: "🧠",
            title: "Learner",
            description:
                "Complete your first learning topic.",
            unlocked:
                learningTopics.some(
                    topic =>
                        topic.done
                )
        },

        {
            icon: "🇯🇵",
            title: "Future Vision",
            description:
                "Complete your first Japan preparation item.",
            unlocked:
                Object.values(
                    japanState
                ).some(Boolean)
        },

        {
            icon: "⭐",
            title: "Life OS Master",
            description:
                "Reach 75% overall progress.",
            unlocked:
                calculateOverallProgress() >= 75
        }

    ];


    return achievements;
}


function updateAchievements() {

    const achievements =
        getAchievements();


    const unlocked =
        achievements.filter(
            item =>
                item.unlocked
        ).length;


    document.querySelector(
        "#achievement-count"
    ).textContent =
        `${unlocked} / ${achievements.length}`;


    const container =
        document.querySelector(
            "#achievements-list"
        );


    container.innerHTML =
        achievements.map(item => `

            <div
                class="
                    card
                    achievement-card
                    ${item.unlocked ? "" : "locked"}
                ">

                <div class="achievement-icon">
                    ${item.icon}
                </div>

                <h2>
                    ${item.title}
                </h2>

                <p>
                    ${item.description}
                </p>

                ${item.unlocked
                ? `
                            <div class="achievement-unlocked">
                                ✓ UNLOCKED
                            </div>
                          `
                : `
                            <div class="achievement-unlocked">
                                🔒 LOCKED
                            </div>
                          `
            }

            </div>

        `).join("");
}


/* =========================================================
   MODAL
========================================================= */

function openModal(content) {

    document.querySelector(
        "#modal-content"
    ).innerHTML =
        content;


    document
        .querySelector("#modal-overlay")
        .classList.remove("hidden");
}


function closeModal() {

    document
        .querySelector("#modal-overlay")
        .classList.add("hidden");
}


document
    .querySelector("#modal-close")
    .addEventListener(
        "click",
        closeModal
    );


document
    .querySelector("#modal-overlay")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "modal-overlay"
            ) {

                closeModal();
            }

        }
    );


/* =========================================================
   SETTINGS
========================================================= */

document
    .querySelector("#save-settings")
    .addEventListener(
        "click",
        () => {

            settings.name =
                document
                    .querySelector(
                        "#settings-name"
                    )
                    .value.trim() ||
                "Yash";


            settings.role =
                document
                    .querySelector(
                        "#settings-role"
                    )
                    .value.trim() ||
                "IT Student";


            saveData(
                "lifeOSSettings",
                settings
            );


            updateProfileUI();

            alert(
                "Profile saved successfully."
            );

        }
    );


document
    .querySelector("#export-data")
    .addEventListener(
        "click",
        () => {

            const allData = {

                goals,

                habits,

                tasks,

                events,

                projects,

                subjects,

                assignments,

                exams,

                studySessions,

                learningTopics,

                careerState,

                japanState,

                settings

            };


            const blob =
                new Blob(
                    [
                        JSON.stringify(
                            allData,
                            null,
                            2
                        )
                    ],
                    {
                        type:
                            "application/json"
                    }
                );


            const url =
                URL.createObjectURL(blob);


            const a =
                document.createElement(
                    "a"
                );


            a.href = url;

            a.download =
                "my-life-os-backup.json";


            a.click();


            URL.revokeObjectURL(
                url
            );

        }
    );


document
    .querySelector("#reset-data")
    .addEventListener(
        "click",
        () => {

            const first =
                confirm(
                    "This will delete all My Life OS data. Continue?"
                );


            if (!first) return;


            const second =
                confirm(
                    "Are you absolutely sure? This cannot be undone."
                );


            if (!second) return;


            const keys = [

                "lifeOSGoals",
                "lifeOSHabits",
                "lifeOSTasks",
                "lifeOSEvents",
                "lifeOSProjects",
                "lifeOSSubjects",
                "lifeOSAssignments",
                "lifeOSExams",
                "lifeOSStudySessions",
                "lifeOSLearningTopics",
                "lifeOSCareer",
                "lifeOSJapan",
                "lifeOSSettings"

            ];


            keys.forEach(
                key =>
                    localStorage.removeItem(key)
            );


            roadmapData.forEach(
                roadmap =>
                    localStorage.removeItem(
                        `lifeOSRoadmap_${roadmap.id}`
                    )
            );


            location.reload();

        }
    );


/* =========================================================
   INITIALIZATION
========================================================= */

function initializeApp() {

    saveGoals();

    saveHabits();

    saveTasks();

    saveEvents();

    saveProjects();


    updateDate();

    updateProfileUI();


    renderGoals();

    updateGoalStats();


    renderHabits();

    updateHabitStats();


    renderStudent();


    renderCareer();


    renderRoadmaps();


    renderJapan();


    renderLearning();


    renderProjects();


    renderCalendar();


    updateProgressPage();


    updateAchievements();


    updateDashboard();

}


initializeApp();

/* =========================================================
   MOBILE SIDEBAR FIX
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("mobile-menu-btn");

    const sidebar =
        document.querySelector(".sidebar");

    const overlay =
        document.getElementById("mobile-sidebar-overlay");

    if (!menuButton || !sidebar) return;

    function openMenu() {
        sidebar.classList.add("mobile-open");

        if (overlay) {
            overlay.classList.add("mobile-open");
        }

        document.body.classList.add("mobile-menu-active");
    }

    function closeMenu() {
        sidebar.classList.remove("mobile-open");

        if (overlay) {
            overlay.classList.remove("mobile-open");
        }

        document.body.classList.remove("mobile-menu-active");
    }

    menuButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (sidebar.classList.contains("mobile-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    /* Close after selecting a navigation item */
    sidebar.addEventListener("click", function (event) {

        const navItem =
            event.target.closest(".nav-item");

        if (navItem) {
            closeMenu();
        }

    });

    /* Close with Escape */
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

});
