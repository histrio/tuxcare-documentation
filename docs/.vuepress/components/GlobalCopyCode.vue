<template>
  <div />
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let observer = null;

const COPY_SVG = `<img src="/images/copy.webp" width="16" height="16" alt="Copy" />`;
const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>`;

function injectCopyButtons() {
  const codeBlocks = document.querySelectorAll(
    'div[class*="language-"] > pre'
  );

  codeBlocks.forEach((pre) => {
    const wrapper = pre.parentElement;
    if (!wrapper || wrapper.querySelector(".global-copy-btn")) return;
    if (wrapper.closest(".code-block-wrapper")) return;

    const btn = document.createElement("button");
    btn.className = "global-copy-btn";
    btn.setAttribute("aria-label", "Copy code");
    btn.innerHTML = COPY_SVG;

    btn.addEventListener("click", () => {
      const code = pre.querySelector("code");
      if (!code) return;
      navigator.clipboard.writeText(code.innerText);
      btn.innerHTML = CHECK_SVG;
      setTimeout(() => {
        btn.innerHTML = COPY_SVG;
      }, 2000);
    });

    wrapper.style.position = "relative";
    wrapper.appendChild(btn);
  });
}

function connectObserver() {
  if (observer || typeof MutationObserver === "undefined") return;

  observer = new MutationObserver(() => {
    injectCopyButtons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

onMounted(async () => {
  await nextTick();
  injectCopyButtons();
  connectObserver();
});

watch(() => route.path, async () => {
  await nextTick();
  injectCopyButtons();
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>
