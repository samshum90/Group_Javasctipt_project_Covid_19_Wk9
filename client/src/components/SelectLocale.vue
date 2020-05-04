<template>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return { langs: ['English', '简体中文','Italiano','Español'] }
  }
}
</script>

<style scoped>
.font{
    size: 18px;
}

</style>