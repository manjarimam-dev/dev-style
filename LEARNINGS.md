# DevStyle - My Learning & Architecture Notes

## 1. UI & Layout Architecture
- Built a 3-panel developer playground using HTML5 and Tailwind CSS v4.
- **Flexbox Fix:** Used `min-w-0` on the middle flex-1 container so the code preview box doesn't overflow horizontally on large components.

## 2. Core JavaScript & DOM Manipulation
- **State Tracking:** Created a global `activeKey` variable to track which component is currently selected in the sidebar.
- **Dynamic Rendering:** Used bracket notation (`componentsData[activeKey]`) to render HTML and dynamically target elements inside `#preview-area`.
- **Live Code Sync:** Synced `codePreview.textContent` directly with `preview.innerHTML` so users get live updated code.
- **Clipboard API:** Built a smooth Copy button using `navigator.clipboard.writeText()` and `setTimeout()` while targeting an inner `<span>` to protect the SVG icon.
