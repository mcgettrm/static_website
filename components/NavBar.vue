<template>
    <section>
        <NuxtLink class="navbarButton" :to="localePath('/')"> {{ $t('navbar.home') }}</NuxtLink>
        <NuxtLink class="navbarButton" :to="localePath('/about')">{{ $t('navbar.about') }}</NuxtLink>
        <NuxtLink class="navbarButton" :to="localePath('/contact')">{{ $t('navbar.contact') }}</NuxtLink>
        <NuxtLink class="navbarButton" :to="localePath('/settings')">{{ $t('navbar.settings') }}</NuxtLink>
        <span>({{ locale }})</span>
    </section>
</template>
<script setup lang="ts">
const { locales, locale } = useI18n();
const localePath = useLocalePath();

</script>
<style>
.navbarButton {
    padding: 5px;
    display: inline-block;
    background-color: blue;
    color: white;
    font-weight: bold;
    margin: 2px;
    border-radius: 10px;
    text-decoration: none;
}

.navbarButton:hover {
    background-color: lightblue;
}
</style>
