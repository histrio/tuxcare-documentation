<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  collapsible: {
    type: Boolean,
    default: false
  },
  expanded: {
    type: Boolean,
    default: true
  }
});

defineEmits(['toggle']);
</script>

<template>
  <div
      class="sidebar-section-header"
      :class="{ collapsible, expanded }"
      :role="collapsible ? 'button' : undefined"
      :tabindex="collapsible ? 0 : undefined"
      :aria-expanded="collapsible ? expanded : undefined"
      @click="collapsible && $emit('toggle')"
      @keydown.enter.prevent="collapsible && $emit('toggle')"
      @keydown.space.prevent="collapsible && $emit('toggle')"
  >
    <img :src="item.icon" class="language-logo" alt="language-logo" loading="lazy" />
    <span class="language-title">{{ item.title }}</span>
    <span v-if="collapsible" class="section-arrow" aria-hidden="true"></span>
  </div>
</template>

<style scoped>
.sidebar-section-header {
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem 0;
  gap: 0.5rem;
  position: relative;
  left: -1rem;
}

.sidebar-section-header.collapsible {
  cursor: pointer;
  user-select: none;
}

.sidebar-section-header.collapsible:hover .language-title {
  color: #1a73e8;
}

.sidebar-section-header.collapsible:focus-visible {
  outline: 2px solid #1a73e8;
  outline-offset: 2px;
  border-radius: 4px;
}

.language-logo {
  max-width: 2rem;
  height: auto;
}

.language-title {
  font-size: 1rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: 0.01em;
}

.section-arrow {
  margin-left: auto;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #2c3e50;
  transition: transform 0.15s ease-out;
  transform: rotate(-90deg);
}

.sidebar-section-header.expanded .section-arrow {
  transform: rotate(0deg);
}
</style>
