<script setup>
const menu = [{ name: "Shop" }, { name: "Notices" }, { name: "About us" }, { name: "New Arrivals" }];
</script>

<template>
    <div class="container">
        <nav class="navbar">
            <div class="navbar__logo"><img src="@/assets/img/logo.svg" alt="logo" /></div>
            <ul class="navbar__list" v-for="item in menu" :key="item.name">
                <li class="navbar__list-item">
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
