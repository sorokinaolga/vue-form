<template>
  <div class="user-form__group" :class="$v.user.$error && 'user-form__group--invalid'">
    <h2>Личные данные</h2>
    <div class="user-form__item">
      <label for="surname">Фамилия*</label>
      <input
        type="text" 
        id="surname" 
        placeholder="Введите фамилию"
        :class="$v.user.surname.$error && 'invalid'" 
        v-model.trim="user.surname"
      />
      <p v-if="$v.user.surname.$error" class="error-message">
        Поле обязательно для заполнения
      </p>
    </div>
    <div class="user-form__item">
      <label for="name">Имя*</label>
      <input
        type="text" 
        id="name" 
        placeholder="Введите имя"
        :class="$v.user.name.$error && 'invalid'" 
        v-model.trim="user.name"
      />
      <p v-if="$v.user.name.$error" class="error-message">
        Поле обязательно для заполнения
      </p>
    </div>
    <div class="user-form__item">
      <label for="patronym">Отчество</label>
      <input 
        type="text" 
        id="patronym" 
        v-model.trim="user.patronym"
      />
    </div>
    <div class="user-form__item">
      <label for="birthdate">Дата рождения*</label>
      <input
        type="date" 
        id="birthdate"
        :class="$v.user.birthdate.$error && 'invalid'" 
        v-model="user.birthdate"
      />
      <p v-if="$v.user.birthdate.$error" class="error-message">
        Поле обязательно для заполнения, дата не позднее текущей
      </p>
    </div>
    <div class="user-form__item">
      <label for="phone">Номер телефона*</label>
      <input
        type="tel" 
        id="phone" 
        placeholder="79999999999"
        :class="$v.user.phone.$error && 'invalid'" 
        v-model="user.phone"
      />
      <p v-if="$v.user.phone.$error" class="error-message">
        Номер телефона должен быть заполнен в формате: 79999999999
      </p>
    </div>
    <div class="user-form__item">
      <span class="label">Пол</span>
      <div class="user-form__box">
        <input 
          type="radio" 
          id="man" 
          name="gender" 
          value="man"
          v-model="user.gender"
        />
        <label class="user-form__label" for="man">Мужской</label>
        <input 
          type="radio" 
          id="woman" 
          name="gender" 
          value="woman"
          v-model="user.gender"
        />
        <label class="user-form__label" for="woman">Женский</label>
      </div>
    </div>
    <div class="user-form__item">
      <label for="customer-group">Группа клиентов*</label>
      <multi-select
        class="multiselect"
        :class="$v.user.customerGroup.$error && 'invalid'" 
        :items="groups"
        :selected="user.customerGroup"
        prop-name="name"
        prop-value="id"
        @selected="updateCustomerGroup"
      />
      <div>
        <chip
          v-for="(item, i) in user.customerGroup"
          :key="`${item.id}-${i}`"
          :item="item"
          prop-name="name"
          prop-value="id"
          @remove="removeFromCustomerGroup"
        />
      </div>
      <p v-if="$v.user.customerGroup.$error" class="error-message">
        Поле обязательно для заполнения
      </p>
    </div>
    <div class="user-form__item">
      <label for="doctor">Лечащий врач</label>
      <select 
        id="doctor" 
        v-model="user.doctor"
      >
        <option disabled value="">Фамилия врача</option>
        <option
          v-for="doctor in doctors"
          :key="doctor" 
          :value="doctor"
        >
          {{ doctor }}
        </option>
      </select>
    </div>
    <div class="user-form__box">
      <input 
        type="checkbox" 
        id="no-send-sms" 
        v-model="user.noSendSms"
      >
      <label class="user-form__label" for="no-send-sms">Не отправлять СМС</label>
    </div>

    <button type="button" class="btn" @click="checkData">Продолжить</button>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import { validPhone, validDate } from '../validators';
import MultiSelect from './multi-select.vue';
import Chip from './chip.vue';

export default {
  components: {
    MultiSelect,
    Chip
  },
  mixins: [validationMixin],
  props: {
    doctors: {
        type: Array,
    },
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
  data() {
    return {
      groups: [
        {
          id: 1,
          name: 'VIP'
        },
        {
          id: 2,
          name: 'Проблемные'
        },
        {
          id: 3,
          name: 'ОМС'
        },
      ],
      user: {
        surname: '',
        name: '',
        patronym: '',
        birthdate: '',
        phone: '',
        gender: '',
        customerGroup: [],
        doctor: '',
        noSendSms: false
      }
    }
  },
  validations: {
    user: {
      surname: { required },
      name: { required },
      birthdate: { required, validDate },
      phone: { required, validPhone, minLength: minLength(11) },
      customerGroup: { required }
    }
  },
  methods: {
    checkData() {
      this.$v.user.$touch();
      if (!this.$v.user.$error) {
        this.changeData(this.user);
        this.goNext(this.currentStep + 1);
      }
    },
    addToSelected(item) {
      this.user.customerGroup.push(item);
    },
    removeFromCustomerGroup(item) {
      this.user.customerGroup = this.user.customerGroup.filter(selected => selected.id !== item.id);
    },
    updateCustomerGroup(item) {
      const foundIndex = this.user.customerGroup.findIndex(selected => selected.id === item.id);
        foundIndex > -1
          ? this.removeFromCustomerGroup(item)
          : this.addToSelected(item);
    }
  }
}
</script>