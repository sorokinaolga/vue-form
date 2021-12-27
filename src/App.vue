<template>
  <div id="app">
    <h1>Регистрация нового клиента</h1>
    <FormUserCreate />
  </div>
</template>

<script>
import FormUserCreate from './components/form-user-create.vue';

export default {
  name: 'App',
  components: {
    FormUserCreate
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
</style>
