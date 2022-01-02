<template>
    <input
        class="base-input"
        :value="value"
        placeholder="Группа клиентов"
        @input="inputHandler($event.target.value)"
    />
</template>

<script>
import clickInside from "../directives/clickInside";
import BaseInputMixin from "../mixins/BaseInputMixin";

export default {
    name: 'BaseInput',
    mixins: [BaseInputMixin],
    directives: {
        clickInside
    },
    methods: {
        inputHandler(value) {
            this.$emit('input', value);
        }
    }
}
</script>

<style lang="sass" scoped>
.base-input
    width: 100%
    height: 30px
    padding: 6px 16px 6px 6px
    box-sizing: border-box
    margin: 0
    border: 0
    outline: 0
    background-color: transparent
</style>