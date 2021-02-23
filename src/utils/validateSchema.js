import * as yup from "yup";

const phoneRegExp = /\d\(\d\d\d\) \d\d\d\-\d\d\-\d\d/;

const validateSchema = yup.object().shape({
  subject: yup.string().required("Необходимо выбрать заявителя"),
  surname: yup.string().required('Поле "Фамилия" должно быть заполнено'),
  name: yup.string().required('Поле "Имя" должно быть заполнено'),
  patronymic: yup.string().required('Поле "Отчество" должно быть заполнено'),
  email: yup
    .string()
    .email("Необходимо указать правильный email адрес")
    .required('Поле "Email" должно быть заполнено'),
  phone: yup
    .string()
    .matches(phoneRegExp, "Неправильно указан номер телефона")
    .required('Поле "Телефон" должно быть заполнено'),
  document: yup.string().required('Поле "Документ" должно быть заполнено'),
  series: yup
    .number()
    .typeError('Поле "Серия" должно быть заполнено в виде числа')
    .required('Поле "Серия" должно быть заполнено'),
  number: yup
    .number()
    .typeError('Поле "Номер" должно быть заполнено в виде числа')
    .required('Поле "Номер" должно быть заполнено'),
  day: yup
    .number()
    .typeError('Поле "День" должно быть заполнено в виде числа')
    .required('Поле "День" должно быть заполнено'),
  month: yup
    .number()
    .typeError('Поле "Месяц" должно быть заполнено в виде числа')
    .required('Поле "Месяц" должно быть заполнено'),
  year: yup
    .number()
    .typeError('Поле "Год" должно быть заполнено в виде числа')
    .required('Поле "Год" должно быть заполнено'),
  consent: yup
    .boolean()
    .oneOf([true], "Вы должны подтвердить согласие с требованиями"),
  result: yup
    .boolean()
    .oneOf([true], "Вы должны подтвердить уведомление о результате"),
});

export { validateSchema };
