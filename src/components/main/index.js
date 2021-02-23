import React from "react";
import "./Main.scss";
import frame from "../../images/frame.png";
import ServiceForm from "../formWithStages";

function Main() {
  return (
    // <main> не поддерживается в ie
    <section className="main">
      <div className="main__container">
        <section className="info">
          <div className="info__content">
            <h1 className="info__title">
              Выдача градостроительного плана земельного участка
            </h1>
            <p className="info__text">
              Градостроительный план земельного участка выдается в&nbsp;целях
              обеспечения субъектов градостроительной деятельности информацией,
              необходимой для архитектурно&#8209;строительного проектирования,
              строительства, реконструкции объектов капитального строительства
              в&nbsp;границах земельного участка.
            </p>
          </div>
          <div className="info__sidebar">
            <img
              className="info__emblem"
              alt="Эмблема министерства"
              src={frame}
            />
            <p className="info__provided-by">Услугу предоставляет</p>
            <p className="info__sidebar-text">Орган местного самоуправления</p>
          </div>
        </section>
        <section className="application">
          <ServiceForm />
        </section>
      </div>
    </section>
  );
}

export default Main;
