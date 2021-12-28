<template>
  <form class="user-form" @submit.prevent="checkData">

    <h2>Личные данные</h2>
    <div class="user-form__item">
      <label for="surname">Фамилия*</label>
      <input
        :class="$v.user.surname.$error && 'invalid'"
        type="text" 
        id="surname" 
        placeholder="" 
        v-model.trim="user.surname"
      />
    </div>
    <div class="user-form__item">
      <label for="name">Имя*</label>
      <input
        :class="$v.user.name.$error && 'invalid'"
        type="text" 
        id="name" 
        placeholder=""
        v-model.trim="user.name"
      />
    </div>
    <div class="user-form__item">
      <label for="patronym">Отчество</label>
      <input 
        type="text" 
        id="patronym" 
        placeholder=""
        v-model.trim="user.patronym"
      />
    </div>
    <div class="user-form__item">
      <label for="birthdate">Дата рождения*</label>
      <input
        :class="$v.user.birthdate.$error && 'invalid'" 
        type="date" 
        id="birthdate"
        v-model="user.birthdate"
      />
    </div>
    <div class="user-form__item">
      <label for="phone">Номер телефона*</label>
      <input
        :class="$v.user.phone.$error && 'invalid'" 
        type="tel" 
        id="phone" 
        placeholder="79999999999"
        v-model="user.phone"
      />
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
        <label for="man">Мужской</label>
        <input 
          type="radio" 
          id="woman" 
          name="gender" 
          value="woman"
          v-model="user.gender"
        />
        <label for="woman">Женский</label>
      </div>
    </div>
    <div class="user-form__item">
      <label for="customer-group">Группа клиентов*</label>
      <select
        :class="$v.user.customerGroup.$error && 'invalid'"
        id="customer-group" 
        multiple 
        v-model="user.customerGroup"
      >
        <option value="vip">VIP</option>
        <option value="trouble">Проблемные</option>
        <option value="insured">ОМС</option>
      </select>
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
      <label for="no-send-sms">Не отправлять СМС</label>
    </div>

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
        :class="$v.user.address.city.$error && 'invalid'"
        type="text" 
        id="city" 
        placeholder="" 
        v-model.trim="user.address.city"
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

    <h2>Удостоверяющий документ</h2>
    <div class="user-form__item">
      <label for="document-type">Тип документа</label>
      <select 
        id="document-type" 
        v-model="user.document.type"
      >
        <option disabled value="">Тип документа</option>
        <option
          v-for="type in documentTypes"
          :key="type" 
          :value="type"
        >
          {{ type }}
        </option>
      </select>
    </div>
    <div class="user-form__item">
      <label for="series">Серия</label>
      <input 
        type="number" 
        id="series" 
        placeholder="" 
        v-model="user.document.series"
      />
    </div>
    <div class="user-form__item">
      <label for="number">Номер</label>
      <input 
        type="number" 
        id="number" 
        placeholder="" 
        v-model="user.document.number"
      />
    </div>
    <div class="user-form__item">
      <label for="issued-by-whom">Кем выдан</label>
      <input 
        type="text" 
        id="issued-by-whom" 
        placeholder="" 
        v-model.trim="user.document.issuedByWhom"
      />
    </div>
    <div class="user-form__item">
      <label for="date-of-issue">Дата выдачи*</label>
      <input
        :class="$v.user.document.dateOfIssue.$error && 'invalid'" 
        type="date" 
        id="date-of-issue" 
        v-model="user.document.dateOfIssue"
      />
    </div>

    <button type="submit" class="btn">Зарегистрировать</button>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      doctors: ["Иванов", "Захаров", "Чернышева"],
      documentTypes: ["Паспорт", "Свидетельство о рождении", "Водительское удостоверение"],
      user: {
        surname: '',
        name: '',
        patronym: '',
        birthdate: '',
        phone: '',
        gender: '',
        customerGroup: [],
        doctor: '',
        noSendSms: false,
        address: {
          postCode: '',
          country: '',
          area: '',
          city: '',
          street: '',
          house: '',
        },
        document: {
          type: '',
          series: '',
          number: '',
          issuedByWhom: '',
          dateOfIssue: '',
        }
      }
    }
  },
  validations: {
    user: {
      surname: { required },
      name: { required },
      birthdate: { required },
      phone: { required },
      customerGroup: { required },
      address: { 
        city: { required }
      },
      document: {
        dateOfIssue: { required }
      }
    }
  },
  methods: {
    checkData() {
      this.$v.user.$touch()
      if (!this.$v.user.$error) {
        alert('Новый клиент успешно создан');
      }
    }
  }
}
</script>

<style lang="sass">
.user-form
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
</style>