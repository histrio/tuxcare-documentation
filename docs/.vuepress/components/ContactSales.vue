<template>
  <div class="contact-sales">
    <p class="contact-sales-text">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: { type: String, default: 'Request via sales@tuxcare.com.' },
});
</script>

<style scoped>
.contact-sales {
  border-radius: 10px;
  border: 1px solid #fed7aa;
  background: linear-gradient(135deg, #fffbf5 0%, #fff7ed 100%);
  padding: 0.85rem 1.25rem;
  margin: 1.25rem 0;
}

.contact-sales-text {
  margin: 0;
  font-size: 0.92rem;
  color: #374151;
  line-height: 1.6;
}
</style>
