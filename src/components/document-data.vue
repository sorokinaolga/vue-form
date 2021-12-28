<template>
  <div class="user-form__group" :class="$v.user.$error && 'user-form__group--invalid'">
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
        type="date" 
        id="date-of-issue"
        :class="$v.user.document.dateOfIssue.$error && 'invalid'"  
        v-model="user.document.dateOfIssue"
      />
    </div>

    <button type="button" class="btn" @click="checkData">Зарегистрировать</button>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { validDate } from '../validators';

export default {
  props: {
    documentTypes: {
      type: Array,
    },
    changeData: {
      type: Function,
    },
    action: {
      type: Function,
    }
  },
  mixins: [validationMixin],
  data() {
    return {
      user: {
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
      document: {
        dateOfIssue: { required, validDate }
      }
    }
  },
  methods: {
    checkData() {
      this.$v.user.$touch();
      if (!this.$v.user.$error) {
        this.changeData(this.user);
        this.action();
      }
    }
  }
}
</script>