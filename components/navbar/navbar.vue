<script setup>
import { defineProps } from 'vue';

// Определение пропсов для передачи данных
const props = defineProps({
  logoBackground: {
    type: String,
    default: '#fe8d07'  // Значение по умолчанию
  }
});
</script>

<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar__logo" :style="{ backgroundColor: props.logoBackground }">
        <img src="@/assets/img/logo.svg" alt="logo" />
      </div>
      <ul class="navbar__list">
        <li v-for="item in menu" :key="item.name" class="navbar__list-item">
          <RouterLink to="#!">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="navbar__icons">
        <div class="navbar__icon"><img src="@/assets/img/basket.svg" alt="" /></div>
        <div class="navbar__icon"><img src="@/assets/img/Search.svg" alt="" /></div>
      </div>
    </nav>
  </div>
</template>