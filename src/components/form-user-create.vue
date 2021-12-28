<template>
  <form class="user-form">

    <h2>Личные данные</h2>
    <div class="user-form__item">
      <label for="surname">Фамилия*</label>
      <input type="text" id="surname" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="name">Имя*</label>
      <input type="text" id="name" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="patronym">Отчество</label>
      <input type="text" id="patronym" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="birthdate">Дата рождения*</label>
      <input type="date" id="birthdate" />
    </div>
    <div class="user-form__item">
      <label for="phone">Номер телефона*</label>
      <input type="tel" id="phone" placeholder="" />
    </div>
    <div class="user-form__item">
      <span class="label">Пол</span>
      <div class="user-form__box">
        <input type="radio" id="man" name="gender" value="man" />
        <label for="man">Мужской</label>
        <input type="radio" id="woman" name="gender" value="woman" />
        <label for="woman">Женский</label>
      </div>
    </div>
    <div class="user-form__item">
      <label for="customer-group">Группа клиентов*</label>
      <select id="customer-group" multiple size="1">
        <option value="vip">VIP</option>
        <option value="trouble">Проблемные</option>
        <option value="insured">ОМС</option>
      </select>
    </div>
    <div class="user-form__item">
      <label for="doctor">Лечащий врач</label>
      <select id="doctor">
        <option value="Ivanov">Иванов</option>
        <option value="Zaharov">Захаров</option>
        <option value="Chernyshova">Чернышева</option>
      </select>
    </div>
    <div class="user-form__box">
      <input type="checkbox" id="no-send-sms">
      <label for="no-send-sms">Не отправлять СМС</label>
    </div>

    <h2>Адрес</h2>
    <div class="user-form__item">
      <label for="post-code">Индекс</label>
      <input type="number" id="post-code" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="country">Страна</label>
      <input type="text" id="country" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="area">Область</label>
      <input type="text" id="area" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="city">Город*</label>
      <input type="text" id="city" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="street">Улица</label>
      <input type="text" id="street" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="house">Дом</label>
      <input type="text" id="house" placeholder="" />
    </div>

    <h2>Удостоверяющий документ</h2>
    <div class="user-form__item">
      <label for="document-type">Тип документа</label>
      <select id="document-type">
        <option value="passport">Паспорт</option>
        <option value="birth-certificate">Свидетельство о рождении</option>
        <option value="driving-permit">Вод. удостоверение</option>
      </select>
    </div>
    <div class="user-form__item">
      <label for="series">Серия</label>
      <input type="number" id="series" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="number">Номер</label>
      <input type="number" id="number" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="issued-by-whom">Кем выдан</label>
      <input type="text" id="issued-by-whom" placeholder="" />
    </div>
    <div class="user-form__item">
      <label for="date-of-issue">Дата выдачи*</label>
      <input type="date" id="date-of-issue" />
    </div>

    <button type="submit" class="btn">Зарегистрировать</button>
  </form>
</template>

<script>

export default {
  name: 'FormUserCreate',
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

input[type="text"]:valid,
input[type="tel"]:valid,
input[type="number"]:valid
  border: solid 2px #05bc55

input[type="text"]:invalid,
input[type="tel"]:invalid,
input[type="number"]:invalid
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