# 🔄 Drag & Drop List 

A clean, responsive, and smooth Drag & Drop list interface built using **both Vue 3 and React**. 

Instead of just building it once, I implemented this exact same UI and dragging logic in two different ecosystems. The goal was to deeply understand how each framework handles array mutations, DOM updates, and edge cases (like empty drop zones) under the hood.

---

### ✨ Features

- **Cross-List Dragging:** Items can be seamlessly dragged and dropped between multiple lists using a shared group configuration.
- **Empty List Recovery:** Implemented a 50px threshold (`empty-insert-threshold` / `emptyInsertThreshold`) to ensure items can always be dropped back into an empty list, preventing common UI lockups.
- **Smooth Animations:** Native Sortable.js animations provide a premium, fluid user experience.
- **Custom Tailwind UI:** Features a modern design with dashed borders, hover effects, and dynamic cursor states (`cursor-grab` to `cursor-grabbing`).

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Key Library:** `vue-draggable-plus`
- **Key Concept:** Uses `v-model` for reactive array updates and `:empty-insert-threshold="50"` for drop zone management.

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Library:** `react-sortablejs` (Powered by Sortable.js)
- **Key Concept:** Uses `list` and `setList` props for immutable state updates and `emptyInsertThreshold={50}` for drop zone management.

**Shared:**
- 🎨 **Tailwind CSS** (Utility-first styling)

---

### 🚀 Live Demos & Source

Experience the smooth animations live. Both versions share the exact same design language but are powered by different engines:

| Framework | Live Preview | Source Code |
| :--- | :--- | :--- |
| ⚡ **Vue 3** | [🔗 View Vue Live Demo]() | [`/vue`](#) |
| ⚛️ **React** | [🔗 View React Live Demo]() | [`/react`](#) |

---