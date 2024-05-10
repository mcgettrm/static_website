<template>
    <NavBar></NavBar>
    <section>
        <h2>{{ $t('navbar.settings') }}</h2>
    </section>
    <section>
        <label for="languageSelect"> {{ $t('page.settings.select_language') }}</label>
        <br>
        <select name="languageSelect" v-model="selectedLanguage" :onChange="(event) => { handleLanguageSelection(event) }">
            <option v-for="localeItem in locales" :key="typeof localeItem === 'object' ? localeItem.code : localeItem"
                :value="typeof localeItem === 'object' ? localeItem.code : localeItem">{{ localeItem.name }}</option>
        </select>
    </section>
</template>
<script setup>
import NavBar from '~/components/NavBar.vue';
const { locales, locale, setLocale } = useI18n();

const selectedLanguage = ref(locale);

const handleLanguageSelection = (event) => {
    setLocale(event.target.value);
}


</script>
  