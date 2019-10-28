<template>
  <a style="color: #32c5d2; cursor: pointer" @click="changeLanguage">{{ $t('common.select_lang') }}</a>
</template>

<script>
  export default {
    name: "ChangeLangue",
    methods: {
      changeLanguage() {
        let currentLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
        let lang = currentLanguage == 'en' ? 'vi' : 'en';
        localStorage.setItem('language', lang);
        this.$root.$i18n.locale = lang;
      },
    }
  }
</script>

<style scoped>

</style>