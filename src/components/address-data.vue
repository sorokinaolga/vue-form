<template>
  <div class="user-form__group" :class="$v.user.$error && 'user-form__group--invalid'">
    <h2>Адрес</h2>
    <div class="user-form__item">
      <label for="post-code">Индекс</label>
      <input 
        type="number" 
        id="post-code" 
        placeholder="" 
        v-model="user.address.postCode"
      />
    </div>
    <div class="user-form__item">
      <label for="country">Страна</label>
      <input 
        type="text" 
        id="country" 
        placeholder="" 
        v-model.trim="user.address.country"
      />
    </div>
    <div class="user-form__item">
      <label for="area">Область</label>
      <input 
        type="text" 
        id="area" 
        placeholder="" 
        v-model.trim="user.address.area"
      />
    </div>
    <div class="user-form__item">
      <label for="city">Город*</label>
      <input
        type="text" 
        id="city" 
        placeholder="" 
        v-model.trim="user.address.city"
        :class="$v.user.address.city.$error && 'invalid'" 
      />
    </div>
    <div class="user-form__item">
      <label for="street">Улица</label>
      <input 
        type="text" 
        id="street" 
        placeholder="" 
        v-model.trim="user.address.street"
      />
    </div>
    <div class="user-form__item">
      <label for="house">Дом</label>
      <input 
        type="text" 
        id="house" 
        placeholder="" 
        v-model.trim="user.address.house"
      />
    </div>

    <button type="button" class="btn" @click="checkData">Продолжить</button>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  props: {
    currentStep: {
      type: Number,
    },   
    goNext: {
      type: Function,
    },
    changeData: {
      type: Function,
    }
  },
  mixins: [validationMixin],
  data() {
    return {
      user: {
        address: {
          postCode: '',
          country: '',
          area: '',
          city: '',
          street: '',
          house: '',
        }
      }
    }
  },
  validations: {
    user: {
      address: { 
        city: { required }
      }
    }
  },
  methods: {
    checkData() {
      this.$v.user.$touch();
      if (!this.$v.user.$error) {
        this.changeData(this.user);
        this.goNext(this.currentStep + 1);
      }
    }
  }
}
</script>