import React from "react";

const companiesList = [
  "4-я больница и РНПЦ Кардиологии",
  "Авиазавод в Барановичах",
  "Автотранспортное отделение Белпочты",
  "Атлант",
  "Аудиторы",
  "БТ",
  "ОНТ",
  "СТВ",
  "Бакунинский авторынок Гомеля",
  "БелАЭС в Островце",
  "Беларуськалий",
  "Белгосфилармония",
  "Белкард",
  "Белкоммунмаш",
  "Белмедпрепараты",
  "Белорусская железная дорога",
  "Белорусский металлургический завод (БМЗ)",
  "Белорусском автомобильном заводе (БелАЗ)",
  "Белрыба (Минск)",
  "Белтелерадиокомпания",
  "Белшина",
  "Белэнерго",
  "Врачи 9-ой клинической больницы Минска",
  "Гефест",
  "Гефест-техника",
  "Гомсельмаш",
  "Гродненское Химволокно",
  "Гродно Азот",
  "Гродно также бастует Южный рынок",
  "Гроднопромстрой",
  "Жабинковский сахарный завод",
  "Ждановичи",
  "Железнодорожники в Гродно",
  "Завод SARIA",
  "Институте химии новых материалов НАН Беларуси",
  "Керамин",
  "Лидский рынок",
  "Локомотивное депо 'Лида'",
  "МЗОР",
  "МИНСКОЕ МЕТРО",
  "МЭТЗ",
  "Машиностроительное предприятие КОМПО",
  "Минская ТЭЦ-4",
  "Минские кабельные сети",
  "Минский автомобильный завод (МАЗ)",
  "Минский завод колесных тягачей (МЗКТ)",
  "Минский метрополитен",
  "Минский механический завод имени Вавилова - холдинга БелОМО",
  "Минский моторный завод (ММЗ)",
  "Минский тракторный завод (МТЗ)",
  "Минский электротехнический завод им. Козлова",
  "На Кулешова в Минске строители тоже бастуют!",
  "Нафтан",
  "ОАО 'Гомельский мясокомбинат'",
  "ОАО 'СветлогорскХимволокно'",
  "ОАО «Галантэя»",
  "ОАО «Гродножилстрой»",
  "ОАО «Интеграл»",
  "ОАО «МАПИД»",
  "ОАО «Могилёвлифтмаш»",
  "ОАО «Мозырский НПЗ»",
  "ОАО «Полесьежилстрой» в Бресте",
  "ОАО «Строитель» в г. Ошмяны",
  "Поставский лесхоз",
  "РУП Белэнергосетьпроект",
  "Республиканский научно-практический центр онкологии и медицинской радиологии им. Н. Н. Александрова",
  "Рудники Белкалия",
  "Рынок в Новогрудке",
  "Сахарный завод в г. п. Городея Минской области",
  "Сахарный завод г. п. Городея",
  "Слуцкий сахарный завод",
  "Слуцкий сахарорафинадный комбинат",
  "Сотрудники республиканского научно-практического центра кардиологии в Минске",
  "Столичный метрополитен",
  "Студенты, преподаватели и выпускники университета БГУ",
  "Студия ландшафтного дизайна «AQUAFLORA» слушает хорошую музыку и тоже бастует!",
  "Театр Янки Купалы",
  "Терразит",
  "УКС Советского района г. Минска",
  "Ударник",
  "Филармония в Минске",
  "Химволокно в Светлогорске",
  "Центральный рынок Пинска",
  "Шахтёры «Беларуськалия»",
  "Шахтёры в Солигорске",
];

const CompaniesRoster = () => (
  <>
    <h1 className="title">Вы не одни!</h1>
    <div className="wrapper">
      {companiesList.map((company, index) => (
        <div className="company-item">{company}</div>
      ))}
    </div>
    <style jsx>{`
      .wrapper {
        width: 100%;
        padding: 0 32px;
        background: #fff;
        columns: 3 auto;
      }
      .title {
        text-align: center;
        text-transform: uppercase;
      }
      .company-item {
        padding: 5px;
        color: #56576e;
      }

      @media (max-width: 768px) {
      .wrapper {
        columns: 2 auto;
      }

      }
    `}</style>
  </>
);

export default CompaniesRoster;
