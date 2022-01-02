<template>
    <div class="chip">
        {{ item[propName] }}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="chip-clear-icon"
            v-on="$listeners"
            @click="$emit('remove', item)"
        >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    propName: {
      type: String,
      default: 'name'
    },
    propValue: {
      type: String,
      default: 'name'
    }
  }
}
</script>

<style lang="sass" scoped>
.chip
  display: inline-flex
  align-items: center
  padding: 4px 8px
  box-sizing: border-box
  color: #05bc55
  border: 1px solid #05bc55
  border-radius: 10px
  margin-right: 5px
  margin-left: 5px
  margin-bottom: 5px

.chip-clear-icon 
  fill: #05bc55
  width: 16px
  margin-left: 8px
  cursor: pointer
</style>