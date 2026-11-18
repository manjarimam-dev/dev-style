# DevStyle - My Learning & Architecture Notes

## 1. UI & Layout Architecture
- Built a 3-panel developer playground using HTML5 and Tailwind CSS v4.
- **Flexbox Fix:** Used `min-w-0` on the middle flex-1 container so the code preview box doesn't overflow horizontally on large components.

## 2. Core JavaScript & DOM Manipulation
- **State Tracking:** Created a global `activeKey` variable to track which component is currently selected in the sidebar.
- **Dynamic Rendering:** Used bracket notation (`componentsData[activeKey]`) to render HTML and dynamically target elements inside `#preview-area`.
- **Live Code Sync:** Synced `codePreview.textContent` directly with `preview.innerHTML` so users get live updated code.
- **Clipboard API:** Built a smooth Copy button using `navigator.clipboard.writeText()` and `setTimeout()` while targeting an inner `<span>` to protect the SVG icon.

## 3. Dynamic Tailwind Class Engine (18 Nov)
- **Replaced Inline Styles with Utility Classes:** Instead of applying raw inline CSS (`style="..."`), engineered a class-manipulation pipeline using `.split(" ")`, `.filter()`, `.push()`, and `.join(" ")`.
- **String Filtering Logic:** Used `!cls.startsWith()` with logical `&&` operators to cleanly strip old utility classes (`bg-`, `p-`, `px-`, `py-`, `border-`) before injecting new arbitrary values like `bg-[#ff6600]` and `p-[19px]`.
- **Multi-Property Targeting:** Added dedicated target selectors (`paddingTarget`, `borderTarget`, `textTarget`) inside the data object so different parts of a single component can be customized independently.
