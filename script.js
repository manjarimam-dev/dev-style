const componentsData = {

    headers: {
        html: `
            <header class="w-full max-w-full bg-slate-800 border-b border-blue-900/60 shadow-lg">
                <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">

                    <h1 class="text-2xl font-bold text-white">
                        DevStyle<span class="text-blue-400">.</span>
                    </h1>

                    <div class="flex flex-wrap items-center gap-6">
                        <a href="#" class="text-blue-400 font-medium hover:text-blue-300 transition">Home</a>
                        <a href="#" class="text-slate-300 hover:text-blue-400 transition">About</a>
                        <a href="#" class="text-slate-300 hover:text-blue-400 transition">Services</a>
                        <a href="#" class="text-slate-300 hover:text-blue-400 transition">Contact</a>
                    </div>

                    <button class="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                        Get Started
                    </button>

                </nav>
            </header>   `
    },

    buttons: {
        html: `
            <div class="flex flex-wrap items-center justify-center gap-4">

                <button class="px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all duration-200">
                    Primary Button
                </button>

                <button class="px-5 py-2.5 bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 hover:bg-slate-600 transition-all duration-200">
                    Secondary Button
                </button>

                <button class="px-5 py-2.5 bg-transparent text-blue-400 font-semibold rounded-lg border border-blue-400 hover:bg-blue-400/10 transition-all duration-200">
                    Outline Button
                </button>

                <button class="px-5 py-2.5 bg-red-500/10 text-red-400 font-semibold rounded-lg border border-red-500/30 hover:bg-red-500/20 transition-all duration-200">
                    Danger Button
                </button>

                <button class="px-5 py-2.5 bg-transparent text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200">
                    Ghost Button
                </button>

            </div>
        `
    },

    cards: {
        html: `
            <div class="max-w-sm bg-slate-800 border border-blue-900/60 rounded-xl shadow-xl overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
                    class="w-full h-48 object-cover"
                    alt="Technology"
                >

                <div class="p-5">

                    <span class="inline-block text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                        Technology
                    </span>

                    <h2 class="text-xl font-bold text-white mt-3">
                        Modern Web Development
                    </h2>

                    <p class="text-sm text-slate-400 mt-3 leading-relaxed">
                        Build beautiful and responsive websites using modern web technologies.
                    </p>

                    <div class="flex items-center justify-between mt-5">

                        <span class="text-xs text-slate-500">
                            5 min read
                        </span>

                        <button class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition">
                            Read More
                        </button>

                    </div>

                </div>
            </div>
        `
    },

    inputs: {
        html: `
            <div class="w-full max-w-sm space-y-5">

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-slate-300">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        class="w-full px-4 py-3 bg-slate-800 text-white placeholder-slate-500 border border-slate-600 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    >
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-slate-300">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        class="w-full px-4 py-3 bg-slate-800 text-white placeholder-slate-500 border border-slate-600 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    >
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-slate-300">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        class="w-full px-4 py-3 bg-slate-800 text-white placeholder-slate-500 border border-slate-600 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    >
                </div>

                <button class="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
                    Create Account
                </button>

            </div>
        `
    },

    lists: {
        html: `
            <div class="w-full max-w-sm bg-slate-800 border border-blue-900/60 rounded-xl p-5 shadow-lg">

                <h2 class="text-lg font-bold text-white mb-4">
                    Project Tasks
                </h2>

                <ul class="space-y-3">

                    <li class="flex items-center gap-3 p-3 bg-slate-700/60 rounded-lg border border-slate-700">
                        <span class="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-sm">
                            ✓
                        </span>
                        <span class="text-sm text-slate-300">
                            Design the homepage
                        </span>
                    </li>

                    <li class="flex items-center gap-3 p-3 bg-slate-700/60 rounded-lg border border-slate-700">
                        <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                            2
                        </span>
                        <span class="text-sm text-white">
                            Build responsive navbar
                        </span>
                    </li>

                    <li class="flex items-center gap-3 p-3 bg-slate-700/60 rounded-lg border border-slate-700">
                        <span class="flex items-center justify-center w-6 h-6 rounded-full bg-slate-600 text-slate-400 text-sm">
                            3
                        </span>
                        <span class="text-sm text-slate-400">
                            Implement JavaScript
                        </span>
                    </li>

                    <li class="flex items-center gap-3 p-3 bg-slate-700/60 rounded-lg border border-slate-700">
                        <span class="flex items-center justify-center w-6 h-6 rounded-full bg-slate-600 text-slate-400 text-sm">
                            4
                        </span>
                        <span class="text-sm text-slate-400">
                            Deploy the project
                        </span>
                    </li>

                </ul>

            </div>
        `
    }

};


let padding = document.querySelector("#paddingSlider");
let preview = document.querySelector("#preview-area");
let leftAllbtn = document.querySelectorAll(".nav-btn");
let leftheader = document.querySelector("#header");
let leftbtn = document.querySelector("#leftbtn");
let leftcard = document.querySelector("#card");
let leftinpt = document.querySelector("#leftinpt");
let leftlist = document.querySelector("#leftlist");

const leftsidecomponent = () => {
    leftheader.addEventListener("click", () => {
        preview.innerHTML = componentsData.headers.html;
    })
    leftbtn.addEventListener("click", () => {
        preview.innerHTML = componentsData.buttons.html;
    })
    leftcard.addEventListener("click", () => {
        preview.innerHTML = componentsData.cards.html;
    })
    leftinpt.addEventListener("click", () => {
        preview.innerHTML = componentsData.inputs.html;
    })
    leftlist.addEventListener("click", () => {
        preview.innerHTML = componentsData.lists.html;
    })
}
leftsidecomponent();

const leftSidebtnActiveStatus = () => {
    leftAllbtn.forEach((button) => {
        button.addEventListener("click", (event) => {
            // remove old stylings.
            leftAllbtn.forEach(item => {
                item.classList.remove('bg-[#0d1117]', 'text-white', 'font-semibold', 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]');
                item.classList.add('text-slate-300', 'font-medium', 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]');
            });
            // Active Btn Div !
            const clickedButton = event.currentTarget;

            clickedButton.classList.remove('text-slate-300', 'font-medium', 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]');

            clickedButton.classList.add('bg-[#0d1117]', 'text-white', 'font-semibold', 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]');

        })
    });
};
leftSidebtnActiveStatus();
preview.innerHTML = componentsData.headers.html;