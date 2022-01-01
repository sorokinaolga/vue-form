<template>
  <div>
    <PersonalData 
      v-if="currentStep === 1" 
      :doctors="doctors" 
      :currentStep="currentStep"
      :changeData="changeData" 
      :goNext="goNext" 
    />
    <AddressData 
      v-if="currentStep === 2" 
      :currentStep="currentStep" 
      :changeData="changeData"
      :goNext="goNext" 
    />
    <DocumentData 
      v-if="currentStep === 3" 
      :documentTypes="documentTypes" 
      :changeData="changeData"
      :action="createNewUser"
    />
  </div>
</template>

<script>
import AddressData from './address-data.vue';
import PersonalData from './personal-data.vue';
import DocumentData from './document-data.vue';

export default {
  components: { PersonalData, AddressData, DocumentData },
  data() {
    return {
      currentStep: 1,
      doctors: ["Иванов", "Захаров", "Чернышева"],
      documentTypes: ["Паспорт", "Свидетельство о рождении", "Водительское удостоверение"],
      user: {},
    }
  },
  methods: {
    changeData(newData) {
      Object.assign(this.user, newData);
    },
    goNext(step) {
      this.currentStep = step;
    },
    createNewUser() {
      alert('Новый пользователь создан');
    }
  }
}
</script>

<style lang="sass">
.user-form__group
  background: #fff
  max-width: 600px
  text-align: left
  display: flex
  flex-direction: column
  margin: 30px auto
  padding: 26px
  border-radius: 14px
  box-shadow: 0 10px 25px rgba(0,0,0,0.2)
  border: solid 2px #ccc

.user-form__group--invalid
  border-color: #e63946

.user-form__item
  display: flex
  flex-direction: column

.user-form__box
  display: flex
  align-items: center

label,
.label
  font-weight: 500
  font-size: 16px
  padding: 6px

input,
select
  border: none
  background: #eee
  padding: 10px
  margin: 10px 5px
  border-radius: 10px
  font: inherit

select:focus
  outline: none
  background: #eee

select
  overflow: hidden
  border: solid 1px #ccc

input[type="checkbox"],
input[type="radio"]
  -webkit-appearance: none
  -moz-appearance: none
  background: #fff 
  font: inherit
  color: fill
  width: 18px
  height: 18px
  background: #eee
  border: solid 1px #ccc
  border-radius: 2px
  display: grid
  place-content: center

input[type="checkbox"]::before,
input[type="radio"]::before
  content: ""
  width: 14px
  height: 14px
  transform: scale(0)
  background: #05bc55
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)

input[type="radio"]
  border-radius: 50%

input[type="radio"]::before
  clip-path: ellipse(45% 45% at 50% 50%)

input[type="checkbox"]:checked::before,
input[type="radio"]:checked::before
  transform: scale(1)

.invalid
  border: solid 2px #e63946

.btn
  background: #05bc55
  border: none
  padding: 10px
  border-radius: 10px
  margin: 10px 5px
  font-weight: 600
  font-size: 16px
  transition: all .35s

.btn:hover
  background: #047a37

.error-message
  color: #e63946
  font-size: 10px
  line-height: 10px
  margin: 0
  padding: 2px
</style>