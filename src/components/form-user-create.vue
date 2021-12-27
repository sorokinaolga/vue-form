<template>
  <form>

    <h2>Личные данные</h2>
    <div>
      <label for="surname">Фамилия*</label>
      <input type="text" id="surname" placeholder="" />
    </div>
    <div>
      <label for="name">Имя*</label>
      <input type="text" id="name" placeholder="" />
    </div>
    <div>
      <label for="patronym">Отчество</label>
      <input type="text" id="patronym" placeholder="" />
    </div>
    <div>
      <label for="birthdate">Дата рождения*</label>
      <input type="date" id="birthdate" />
    </div>
    <div>
      <label for="phone">Номер телефона*</label>
      <input type="tel" id="phone" placeholder="" />
    </div>
    <div>
      <h3>Пол</h3>
      <input type="radio" id="man" name="gender" value="man" />
      <label for="man">Мужской</label>
      <input type="radio" id="woman" name="gender" value="woman" />
      <label for="woman">Женский</label>
    </div>
    <div>
      <label for="customer-group">Группа клиентов*</label>
      <select id="customer-group" multiple size="1">
        <option value="vip">VIP</option>
        <option value="trouble">Проблемные</option>
        <option value="insured">ОМС</option>
      </select>
    </div>
    <div>
      <label for="doctor">Лечащий врач</label>
      <select id="doctor">
        <option value="Ivanov">Иванов</option>
        <option value="Zaharov">Захаров</option>
        <option value="Chernyshova">Чернышева</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="no-send-sms">
      <label for="no-send-sms">Не отправлять СМС</label>
    </div>

    <h2>Адрес</h2>
    <div>
      <label for="post-code">Индекс</label>
      <input type="number" id="post-code" placeholder="" />
    </div>
    <div>
      <label for="country">Страна</label>
      <input type="text" id="country" placeholder="" />
    </div>
    <div>
      <label for="area">Область</label>
      <input type="text" id="area" placeholder="" />
    </div>
    <div>
      <label for="city">Город*</label>
      <input type="text" id="city" placeholder="" />
    </div>
    <div>
      <label for="street">Улица</label>
      <input type="text" id="street" placeholder="" />
    </div>
    <div>
      <label for="house">Дом</label>
      <input type="text" id="house" placeholder="" />
    </div>

    <h2>Удостоверяющий документ</h2>
    <div>
      <label for="document-type">Тип документа</label>
      <select id="document-type">
        <option value="passport">Паспорт</option>
        <option value="birth-certificate">Свидетельство о рождении</option>
        <option value="driving-permit">Вод. удостоверение</option>
      </select>
    </div>
    <div>
      <label for="series">Серия</label>
      <input type="number" id="series" placeholder="" />
    </div>
    <div>
      <label for="number">Номер</label>
      <input type="number" id="number" placeholder="" />
    </div>
    <div>
      <label for="issued-by-whom">Кем выдан</label>
      <input type="text" id="issued-by-whom" placeholder="" />
    </div>
    <div>
      <label for="date-of-issue">Дата выдачи*</label>
      <input type="date" id="date-of-issue" />
    </div>

    <button type="submit">Зарегистрировать</button>
  </form>
</template>

<script>

export default {
  name: 'FormUserCreate',
}
</script>

<style lang="sass">
$secondary-color: #336789

h1
  background-color: $secondary-color
</style>