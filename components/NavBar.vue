<template>
    <section>
        <NuxtLink to="/"> {{ $t('navbar.home') }}</NuxtLink>
        <NuxtLink to="about">{{ $t('navbar.about') }}</NuxtLink>
        <NuxtLink to="contact">{{ $t('navbar.contact') }}</NuxtLink>
    </section>
</template>
