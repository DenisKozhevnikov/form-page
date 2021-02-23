import React, { useState } from "react";
import "./ServiceForm.scss";
import { Formik, Form, Field } from "formik";
import MaskedInput from "react-text-mask";
import { validateSchema } from "../../utils/validateSchema";
import { phoneNumberMask } from "../../utils/utils";
import Stage from "../stage";
import { ReactComponent as WarningIcon } from "../../images/warning-icon.svg";
import { ReactComponent as CheckboxCheck } from "../../images/checkbox-check.svg";

function ServiceForm() {
  const [isApplicationAccepted, setIsApplicationAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstStage, setFirstStage] = useState({
    isOpen: true,
    isChecked: false,
  });

  const [secondStage, setSecondStage] = useState({
    isOpen: false,
    isChecked: false,
    error: "",
  });

  const [thirdStage, setThirdStage] = useState({
    isOpen: false,
    isChecked: false,
    error: "",
  });

  const initialValues = {
    subject: "Константинопольский К.К.",
    surname: "",
    name: "",
    patronymic: "",
    email: "",
    phone: "",
    document: "",
    series: "",
    number: "",
    day: "",
    month: "",
    year: "",
    consent: false,
    result: false,
  };

  const onClickFirstPartButton = (errors) => {
    if (!errors.form) {
      setFirstStage({
        ...firstStage,
        isOpen: false,
        isChecked: true,
      });
      setSecondStage({ ...secondStage, isOpen: true });
    }
  };

  const onClickFirstPartArticle = () => {
    if (firstStage.isChecked) {
      setFirstStage({
        ...firstStage,
        isOpen: true,
        isChecked: false,
      });
      setSecondStage({
        ...secondStage,
        isOpen: false,
        isChecked: false,
      });
      setThirdStage({
        ...thirdStage,
        isOpen: false,
      });
    }
  };

  const onClickSecondPartArticle = () => {
    if (secondStage.isChecked) {
      setSecondStage({
        ...secondStage,
        isOpen: true,
        isChecked: false,
      });
      setThirdStage({
        ...thirdStage,
        isOpen: false,
      });
    }
  };

  const onClickSecondPartButton = (errors) => {
    if (
      !errors.surname &&
      !errors.name &&
      !errors.patronymic &&
      !errors.email &&
      !errors.phone &&
      !errors.document &&
      !errors.series &&
      !errors.number &&
      !errors.day &&
      !errors.month &&
      !errors.year
    ) {
      setSecondStage({
        ...secondStage,
        isOpen: false,
        isChecked: true,
        error: "",
      });
      setThirdStage({
        ...thirdStage,
        isOpen: true,
      });
    } else {
      setSecondStage({
        ...secondStage,
        error:
          errors.surname ||
          errors.name ||
          errors.patronymic ||
          errors.email ||
          errors.phone ||
          errors.document ||
          errors.series ||
          errors.number ||
          errors.day ||
          errors.month ||
          errors.year,
      });
    }
  };

  const onClickThirdStageButton = (errors) => {
    if (errors.consent || errors.result) {
      setThirdStage({
        ...thirdStage,
        error: errors.consent || errors.result,
      });
    } else {
      setThirdStage({
        ...thirdStage,
        error: "",
      });
    }
  };

  const handleSubmit = (values) => {
    setIsLoading(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 500);
    });
    promise
      .then(() => setIsApplicationAccepted(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isApplicationAccepted ? (
        <Stage
          title={"Заявление принято"}
          part={"1"}
          onClick={onClickFirstPartArticle}
          contentStyle={"stage__content_success"}
        >
          <p className="stage__text">
            Номер заявления <span className="form__number">RU-1234567.</span>{" "}
            Максимальный срок предоставления услуги — 20 рабочих дней. Следите
            за статусом заявления в 
            <a className="stage__link" href="./">
              Личном кабинете
            </a>
            .{" "}
          </p>
          <p className="stage__text">
            Если у вас остались вопросы по оказанию услуги, пожалуйста,
            обращайтесь по телефону +7 (342) 123-45-67.
          </p>
          <div className="stage__links">
            <a href="./" className="stage__link-button">
              Вернуться в каталог
            </a>
            <a
              href="./"
              className="stage__link-button stage__link-button_transparent"
            >
              Перейти в личный кабинет
            </a>
          </div>
        </Stage>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validateSchema}
          validateOnMount={true}
          validateOnBlur={false}
        >
          {(props) => {
            const { errors } = props;
            return (
              <Form action="#" method="post" className="form" noValidate>
                <Stage
                  title={"Выбор заявителя"}
                  part={"1"}
                  stageState={firstStage}
                  onClick={onClickFirstPartArticle}
                >
                  <label className="form__label">
                    <Field
                      className="form__input-switch"
                      name="subject"
                      type="radio"
                      value="Константинопольский К.К."
                    />
                    <div className="form__container">
                      <div className="form__radio"></div>
                      <span className="form__name">
                        Константинопольский К.К.
                      </span>
                      <span className="form__status">Физическое лицо</span>
                    </div>
                  </label>
                  <label className="form__label">
                    <Field
                      className="form__input-switch"
                      name="subject"
                      type="radio"
                      value="ООО «Константинополь»"
                    />
                    <div className="form__container">
                      <div className="form__radio"></div>
                      <span className="form__name">ООО «Константинополь»</span>
                      <span className="form__status">Юридическое лицо</span>
                    </div>
                  </label>
                  <button
                    className="form__button"
                    type="button"
                    onClick={() => onClickFirstPartButton(errors)}
                  >
                    Продолжить
                  </button>
                </Stage>
                <Stage
                  title={"Данные заявителя"}
                  part={"2"}
                  stageState={secondStage}
                  onClick={onClickSecondPartArticle}
                >
                  <label className="form__label">
                    <span className="form__label-text">Фамилия</span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="surname"
                      placeholder="Фамилия"
                    />
                  </label>
                  <label className="form__label">
                    <span className="form__label-text">Имя</span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="name"
                      placeholder="Имя"
                    />
                  </label>
                  <label className="form__label">
                    <span className="form__label-text">Отчество</span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="patronymic"
                      placeholder="Отчество"
                    />
                  </label>
                  <label className="form__label">
                    <span className="form__label-text">Электронная почта</span>
                    <Field
                      className="form__input-text"
                      type="email"
                      name="email"
                      placeholder="Электронная почта"
                    />
                  </label>
                  <label className="form__label">
                    <span className="form__label-text">Телефон</span>
                    <Field name="phone">
                      {({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          placeholder="Введите номер"
                          type="text"
                          className="form__input-text"
                        />
                      )}
                    </Field>
                  </label>
                  <p className="stage__heading">
                    Документ, удостоверяющий личность
                  </p>
                  <label className="form__label">
                    <span className="form__label-text">Документ</span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="document"
                      placeholder="Документ"
                    />
                  </label>
                  <label className="form__label form__label_series">
                    <span className="form__label-text">Серия</span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="series"
                      placeholder="Серия"
                    />
                  </label>
                  <label className="form__label form__label_number">
                    <span className="form__label-text">Номер</span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="number"
                      placeholder="Номер"
                    />
                  </label>
                  <span className="form__label-text">Когда выдан</span>
                  <label className="form__label form__label_date">
                    <span className="form__label-text form__label-text_lighter">
                      День
                    </span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="day"
                      placeholder="День"
                    />
                  </label>
                  <label className="form__label form__label_date">
                    <span className="form__label-text form__label-text_lighter">
                      Месяц
                    </span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="month"
                      placeholder="Месяц"
                    />
                  </label>
                  <label className="form__label form__label_year">
                    <span className="form__label-text form__label-text_lighter">
                      Год
                    </span>
                    <Field
                      className="form__input-text"
                      type="text"
                      name="year"
                      placeholder="Год"
                    />
                  </label>
                  <p className="form__error">{secondStage.error}</p>
                  <button
                    className="form__button"
                    type="button"
                    onClick={() => onClickSecondPartButton(errors)}
                  >
                    Продолжить
                  </button>
                </Stage>
                <Stage title={"Согласие"} part={"3"} stageState={thirdStage}>
                  <p className="stage__heading stage__heading_no_padding">
                    Требуется ваше согласие по следующим пунктам:
                  </p>
                  <ul className="stage__unordered-list">
                    <li className="stage__list">
                      Я подтверждаю, что вся представленная информация является
                      достоверной и точной;
                    </li>
                    <li className="stage__list">
                      Я несу ответственность в соответствии с действующим
                      законодательством Российской Федерации за предоставление
                      заведомо ложных или неполных сведений;
                    </li>
                    <li className="stage__list">
                      Я выражаю свое согласие на необходимое использование
                      и обработку своих персональных данных, в том числе
                      в информационных системах;
                    </li>
                    <li className="stage__list">
                      Со сроками оказания государственной услуги ознакомлен.
                    </li>
                  </ul>
                  <label className="form__label">
                    <Field
                      className="form__input-switch"
                      type="checkbox"
                      name="consent"
                    />
                    <div className="form__container">
                      <div className="form__checkbox">
                        <CheckboxCheck />
                      </div>
                      <span className="form__status">
                        Я подтверждаю свое согласие со всеми вышеперечисленными
                        пунктами
                      </span>
                    </div>
                  </label>
                  <label className="form__label">
                    <Field
                      className="form__input-switch"
                      type="checkbox"
                      name="result"
                    />
                    <div className="form__container">
                      <div className="form__checkbox">
                        <CheckboxCheck />
                      </div>
                      <span className="form__status">
                        Я уведомлен о том, что результат будет получен
                        в электронном виде
                      </span>
                    </div>
                  </label>
                  <div className="warning">
                    <WarningIcon className="warning__icon" />
                    <p className="warning__text">
                      Пожалуйста, еще раз внимательно проверьте все данные перед
                      отправкой
                    </p>
                  </div>
                  <p className="form__error">{thirdStage.error}</p>
                  <button
                    className="form__button"
                    type="submit"
                    disabled={isLoading}
                    onClick={() => onClickThirdStageButton(errors)}
                  >
                    {isLoading ? "Отправляем..." : "Отправить"}
                  </button>
                  <p className="form__agreement">
                    Нажимая кнопку &#171;Отправить&#187;, вы соглашаетесь с{" "}
                    <a href="./" className="stage__link">
                      правилами хранения и обработки персональных данных
                    </a>
                  </p>
                </Stage>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default ServiceForm;
