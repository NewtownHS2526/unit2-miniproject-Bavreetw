[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/bJLjrDj_)
# 🧩 Interactive Webpage Lab – JavaScript + Accessibility

Welcome! In this lab, you will turn a static website into a fully **interactive** and **accessible** experience using **JavaScript**.

You will work with:

- `index.html`
- `style.css`
- `script.js`
- `utils.js` (already provided for you)

Your job is to connect user inputs (radio buttons, number input, text input, checkbox, color picker, button) to real changes on the page.

---

## ✅ Step 0 — Explore First (Best Practice!)

Before writing any code:

1. Open `index.html` in the browser.
2. Click all inputs.
3. Notice: **nothing changes yet** when you interact.
4. Open `script.js` and `utils.js`.
5. Notice two functions you will use later:
   - `getRandomInt()` → Section 2
   - `isDark(hex)` → Section 4

👉 Always explore a project before coding.

---

# 🎨 Section 1 — Favorite Color Radio Buttons

## 🎯 Goal
When the user selects a color, display a message with a heart emoji of that color.

Examples:

- Blue → `You picked blue 💙`
- Green → `You picked green 💚`
- Pink → `You picked pink 💕`
- Black → `You picked black 🖤`

---

## 🛠 Tasks

### Task 1: Find the IDs in `index.html`
Look for the radio button group and the output area that currently says:

> `YOUR RADIO OUTPUT HERE`

Write down:
- the **ID of the radio input**
- the **ID of the output div**

---

### Task 2: Connect HTML to JS using `querySelector`
In `script.js`, connect:
- radio input element
- radio output element

✅ Method(s) you will use:
- `document.querySelector()`

---

### Task 3: Add an event listener (`change`)
When the user chooses a different radio option, your function should run.

✅ Method(s) you will use:
- `.addEventListener('change', ...)`

---

### Task 4: Read the selected value
Inside your function use:

✅ Method(s) you will use:
- `e.target.value`

---

### Task 5: Use conditionals to display the correct message
Use `if / else if` and update:

✅ Method(s) you will use:
- `if / else if`
- `.innerHTML`

---

## ♿ Accessibility Task
In `index.html`, on the output element, add:

```html
aria-live="polite" aria-atomic="true"
