<template>
    <NavBar></NavBar>
    <section>
        <h2>{{ $t('navbar.contact') }}</h2>
    </section>
    <section>
        <div>
            <h2>{{ $t('page.contact.get_in_touch') }}</h2>
            <form @submit.prevent="onSubmit">
                <input v-model="email" name="email" type="text" :placeholder="$t('page.contact.email')" />
                <input v-model="message" name="message" type="text" :placeholder="$t('page.contact.your_message')" />
                <input name="submitButton" type="submit" :value="$t('page.contact.submit')" />
            </form>
            <p>{{ responseMessage }}</p>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import NavBar from '~/components/NavBar.vue';
let email;
let message;
let postEndpoint = "https://api.michaelmcgettrick.com/contact";
let responseMessage = ref("");


let onSubmit = async (event) => {
    responseMessage.value = "Sending Email...";

    if (email && message) {
        let success;
        try {
            let response = await fetch(postEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    message: message,
                }),
            });
            success = response.ok;

        } catch (error) {
            success = false;
        }

        responseMessage.value = success ? "Your message has been received. Thank you!" : "Something went wrong, your message was not submitted";

    } else {
        responseMessage.value = "Please be sure to fill out all fields.";
    }
};
</script>
  