import React from "react";
import BlockTitle from "./BlockTitle";

const StrikesTable = () => (
  <>
    <BlockTitle withContact>Вас поддерживают</BlockTitle>
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Предприятие/Завод</th>
            <th>Что там происходит, какая активность</th>
            <th>Требования</th>
            <th>Начало</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              4-я больница и РНПЦ Кардиологии - были акции солидарности против
              насилия
              <br />
            </td>
            <td>
              - Были акции солидарности против насилия рано утром перед работой.
              <br />- РНПЦ Кардиология написали открытое заявление с
              требованиями, там больше 210 подписей.
              <br />- Выходят каждый день утром.
            </td>
            <td>
              - настаивают на допуске медработников к пострадавшим
              <br />- требовали освобождения задержанных медиков
              <br />- прекратить использовать травмирующее и т.п. оружие
              <br />
              по отношению к безоружным людям
              <br />- соблюдать законы и Конституцию РБ
            </td>
            <td>14.08.2020</td>
          </tr>
          <tr>
            <td>Авиазавод в Барановичах</td>
            <td>
              NEXTA Live пишет, что авиазавод в Барановичах бастует! Есть фото и
              видео, скорее стоят в цепочке солидарности. Время околообеденное.
            </td>
            <td></td>
            <td>14.08.2020</td>
          </tr>
          <tr>
            <td>Автотранспортное отделение Белпочты</td>
            <td>
              Некоторые сотрудники атотранспортного отделения Белпочты также
              начали забастовку! К работникам сразу на переговоры приехал
              министр связи.
            </td>
            <td></td>
            <td>18.08.2020</td>
          </tr>
          <tr>
            <td>Автотранспортное отделение Белпочты</td>
            <td>
              Некоторые сотрудники атотранспортного отделения Белпочты также
              начали забастовку! К работникам сразу на переговоры приехал
              министр связи.
            </td>
            <td></td>
            <td>18.08.2020</td>
          </tr>
          <tr>
            <td>Атлант</td>
            <td>
              Рабочие выходили на акции солидарности против насилия, на акции
              солидарности с рабочими других заводов. Рабочих «Атлант» просят
              устроить забастовку, но работники боятся. С ними общался директор,
              отговаривал от забастовки, угрожал увольнением. Приезжала Мария
              Колесникова и разговаривала с гендиректором. Он пообещал, что
              увольнять никого не будет. Несколько дней у Атланта собирались
              люди для поддержки рабочих. Забастовки нет.
            </td>
            <td></td>
            <td>13.08.2020</td>
          </tr>
          <tr>
            <td>Аудиторы</td>
            <td>
              Профессиональные налоговые консультанты и аудиторы собрались на
              мирный протест с плакатами и калькуляторами у здания Минфина и
              МНС.
            </td>
            <td>
              На плакатах мы видим предложения помочь с подсчетами на новых
              выборах, непризнание Лукашенко их президентом. Выступают за
              честные выборы и против насилия.
            </td>
            <td>20.08.2020</td>
          </tr>
        </tbody>
      </table>
    </div>
    <style jsx>{`
      .title {
        text-align: center;
        font-size: 45px;
      }
      .white-on-red {
        background-color: #ff4d4f;
        color: #fff;
        padding: 0 12px;
      }
      .table {
        padding: 24px;
        width: 100%;
        overflow: auto;
      }
      .table > table {
        width: 100%;
        text-align: left;
        border-radius: 2px 2px 0 0;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #d0cfcf;
        table-layout: auto;
      }

      .table > table > thead > tr > th {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        text-align: center;
        border-bottom: 1px solid #d0cfcf;
        transition: background 0.3s ease;
        border-right: 1px solid #d0cfcf;
        position: relative;
        padding: 16px;
        font-weight: bold;
        background-color: #ff4d4f;
        color: #fff;
      }

      .table > table > tbody > tr > td {
        border-right: 1px solid #d0cfcf;
        position: relative;
        padding: 16px;
        border-bottom: 1px solid #d0cfcf;
      }

      .table > table > tbody > tr:hover > td {
        background: #fafafa;
      }
      @media (max-width: 768px) {
        .table {
          font-size: 10px;
          padding: 4px;
        }

        .table > table > thead > tr > th {
          padding 5px;
        }
        .table > table > tbody > tr > td {
          padding: 5px;
        }
      }
    `}</style>
  </>
);

export default StrikesTable;
