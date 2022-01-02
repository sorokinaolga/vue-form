<template>
    <div>
        <drop-down>
            <template #drop-dow-toggle>
                <base-input/>
            </template>
            <template #drop-dow-content>
                <div class="multiselect-list">
                    <div
                        v-for="(item, i) in items"
                        :key="`${item[propValue]}-${i}`"
                        :class="['multiselect-list__item', {'multiselect-list__item--selected': isSelected(item)}]"
                        @click="selectHandler(item)"
                    >
                        {{ item[propName] }}
                    </div>
                </div>
            </template>
        </drop-down>
    </div>
</template>

<script>
import Vue from 'vue';
import DropDown from "./drop-down.vue";
import BaseInput from "./base-input";

export default Vue.extend({
    name: 'MultiSelect',
    props: {
        items: {
            type: Array,
            default: () => ([])
        },
        selected: {
            type: Array,
            default: () => ([])
        },
        propName: {
            type: String,
            default: 'name'
        },
        propValue: {
            type: String,
            default: 'name'
        }
    },
    components: {
        DropDown,
        BaseInput
    },
    methods: {
        selectHandler(item) {
            this.$emit('selected', item);
        },
        isSelected(item) {
            return this.selected.findIndex(selected => selected[this.propValue] === item[this.propValue]) > -1;
        }
    }
});
</script>

<style lang="sass" scoped>
.multiselect-list
    position: absolute
    z-index: 1
    top: 40px
    left: 0
    right: 0
    background: #eee
    border: 1px solid #767676

.multiselect-list__item
    display: flex
    padding-left: 8px
    padding-bottom: 3px

.multiselect-list__item:hover,
.multiselect-list__item--selected
    cursor: pointer
    background: #1e90ff
    color: #fff
</style>