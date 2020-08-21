import React from "react";

import PageTemplate from "../components/PageTemplate";
import Card from "../components/Card";
import BlockTitle from '../components/BlockTitle'
// <div className="wrapper">
//   <h1>
//     Инициативы для тех, кто бастует, потерял или меняет работу в связи с
//     политической ситуацией в Беларуси
//   </h1>
//   <Card title="Фонды">

//   </Card>

// </div>

const Initiatives = () => {
  return (
    <>
      {/* <iframe
        src="https://www.instagram.com/p/CEB9e9cnKyS/embed"
        width="400"
        height="720"
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
      ></iframe> */}
      <PageTemplate>
        <div className="wrapper">
          <h3 className="title">
            <span>Волонтерские программы, инициативы и фонды для помощи пострадавшим
            во время митингов, бастующим и поддержки гражданского движения</span>
          </h3>
          <h5 style={{ textAlign: 'center'}}>
            Информация взята с сайта{" "}
            <a href="https://dev.by" target="_blank" rel="noopener">
              dev.by
            </a>
          </h5>

          <Card title="Экономическая помощь">
            <ul>
              <li>
                Гражданская инициатива{" "}
                <a
                  href="https://www.facebook.com/donate/1123543824684874/1160510944334849/"
                  target="_blank"
                  rel="noopener"
                >
                  BY_HELP
                </a>{" "}
                уже собрала более 2,5&nbsp;млн долларов на&nbsp;помощь
                пострадавшим во&nbsp;время протестов. Чтобы получить финансовую
                поддержку, надо заполнить специальную{" "}
                <a
                  href="https://docs.google.com/forms/d/1GRTVdI3aYddrf4xGgI97SQ1hHKRn5reWXAenCe61GJM/viewform?edit_requested=true&amp;fbclid=IwAR3-X4OlA579yORQYF_VoGgtgahsO0CALC92vdfaGe3UoyEFTjOqzXlsh6E"
                  target="_blank"
                  rel="noopener"
                >
                  Google-форму
                </a>
                . Каждая заявка рассматривается в&nbsp;индивидуальном
                порядке.&nbsp;
              </li>
              <li>
                Разные виды помощи предлагает фонд Валерия Цепкало «
                <a
                  href="https://belarus-future.org/pages/contacts/contacts_ru.html"
                  target="_blank"
                  rel="noopener"
                >
                  Беларусь будущего
                </a>
                ».
              </li>
              <li>
                «
                <a
                  href="https://help.honest-people.by/"
                  target="_blank"
                  rel="noopener"
                >
                  Честные люди
                </a>
                » найдут новую работу, переобучат, поддержат деньгами.
              </li>
              <li>
                На&nbsp;
                <a href="http://dapamazhy.by/" target="_blank" rel="noopener">
                  Дапамажы.by
                </a>{" "}
                собирают средтва для совестливых членов избирательных комиссий.
              </li>
            </ul>
          </Card>
          <Card title="Помощь бастующим рабочим">
            <ul>
              <li>
                Belarus Solidarity Foundation помогает бастующим рабочим
                и&nbsp;тем, кто лишился работы из-за политических взглядов.{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf4z_Cpzcj3iHDLz3RHmC2uDconnKStsuxxUIDwdJxexIOjeA/viewform?fbclid=IwAR0lEgzAlvqWUWOPV974T6uvupfjZZ_92E82Fx-CfP1J6HI01UqGEYovHJo"
                  target="_blank"
                  rel="noopener"
                >
                  Здесь
                </a>{" "}
                заявка на&nbsp;получение финансовой помощи,{" "}
                <a
                  href="https://www.facebook.com/donate/759400044849707/10158686884899592/"
                  target="_blank"
                  rel="noopener"
                >
                  здесь
                </a>
                &nbsp;— способы пожертвовать средства. Собрано более 800 тысяч
                долларов.&nbsp;
              </li>
              <li>
                Поддержать рабочих можно через{" "}
                <a
                  href="https://telegra.ph/Sozdan-orgkomitet-nacionalnogo-zabastovochnogo-komiteta-Vot-kakuyu-pomoshch-predlagayut-bastuyushchim-08-18"
                  target="_blank"
                  rel="noopener"
                >
                  Национальный забастовочный комитет
                </a>{" "}
                (на&nbsp;странице есть ссылки для перечисления
                средств).&nbsp;&nbsp;
              </li>
              <li>
                Благотворительный проект{" "}
                <a
                  href="https://www.instagram.com/p/CEB9e9cnKyS/"
                  target="_blank"
                  rel="noopener"
                >
                  KaliLaska
                </a>{" "}
                собирает вещи для школьников из&nbsp;семей, в&nbsp;которых
                родители бастуют.
              </li>
              <li>
                Рабочих в&nbsp;айтишников обещают переквалицировать{" "}
                <a
                  href="https://www.notion.so/5a2279dc206b42ada8e9091922ccb633"
                  target="_blank"
                  rel="noopener"
                >
                  здесь
                </a>{" "}
                и&nbsp;
                <a
                  href="https://www.instagram.com/p/CD-wCa-nRi0/"
                  target="_blank"
                  rel="noopener"
                >
                  здесь
                </a>
                .
              </li>
            </ul>
          </Card>
          <Card title="Инициативы от айтишников">
            <ul>
              <li>
                Сооснователи стартапа PandaDoc Сергей Борисюк и&nbsp;Микита
                Микадо готовы финансово поддержать силовиков, желающих уволиться
                со&nbsp;службы. К&nbsp;бизнесменам уже обратились{" "}
                <a
                  href="https://dev.by/news/30-silovikov-kotorye-ne-hotyat-bit-napisali-kofaunderu-pandadoc"
                  target="_blank"
                  rel="noopener"
                >
                  более 30 сотрудников органов
                </a>
                .&nbsp; Для оказания помощи создан сайт{" "}
                <a
                  href="https://www.protectbelarus.org/"
                  target="_blank"
                  rel="noopener"
                >
                  protectbelarus.org
                </a>
                .
              </li>
              <li>
                CEO в&nbsp;Hard &amp; Soft Skills Павел Вейник{" "}
                <a
                  href="https://www.facebook.com/pavel.veinik/posts/3300577576629798"
                  target="_blank"
                  rel="noopener"
                >
                  набирает людей
                </a>{" "}
                для обучения Java. Конечно, бесплатно. Тем&nbsp;же занят
                и&nbsp;программист{" "}
                <a
                  href="https://www.facebook.com/pavellitvinko/posts/3117243311686295"
                  target="_blank"
                  rel="noopener"
                >
                  Павел Литвинко
                </a>
                .
              </li>
              <li>
                WM&nbsp;Reply собирается бесплатно обучать уволенных бюджетников
                и&nbsp;призывает другие компании присоединиться. Подробности
                и&nbsp;контакты{" "}
                <a
                  href="https://dev.by/news/vw-reply-budet-besplatno-obuchat-uvolennyh-budzhetnikov"
                  target="_blank"
                  rel="noopener"
                >
                  по&nbsp;ссылке
                </a>
                .&nbsp;
              </li>
            </ul>
          </Card>
          <Card title="Юридическая помощь">
            <ul>
              <li>
                В&nbsp;
                <a
                  href="https://t.me/REVERA_firstaid"
                  target="_blank"
                  rel="noopener"
                >
                  телеграм-канале юридической компании REVERA
                </a>{" "}
                много информации по&nbsp;вопросам задержаний: памятки для
                пострадавших и&nbsp;их&nbsp;родственников, памятка
                по&nbsp;фиксации телесных повреждений, контакты РУВД
                и&nbsp;изоляторов.&nbsp;&nbsp;
              </li>
              <li>
                Правозащитный центр «Весна» и&nbsp;Всемирная организация против
                пыток{" "}
                <a
                  href="https://telegra.ph/Sobiraem-i-dokumentiruem-pytki-v-Belarusi-Teper-mozhno-i-cherez-gugl-formu-08-14"
                  target="_blank"
                  rel="noopener"
                >
                  документирует
                </a>{" "}
                случаи пыток и&nbsp;жестокого обращения в&nbsp;отношении
                участников протестных выступлений.&nbsp;&nbsp;
              </li>
              <li>
                <a
                  href="https://t.me/necodernotes/462"
                  target="_blank"
                  rel="noopener"
                >
                  Волонтёрский штаб для помощи адвокатам
                </a>{" "}
                набирает людей. Нужны юристы, айтишники (для настройки работы
                офиса, сети, интернета и&nbsp;автоматизации процессов), курьеры,
                специалисты колл-центра. Заявку можно оставить{" "}
                <a
                  href="https://docs.google.com/forms/d/1PWQ-08rTet1930pwdlRu2cSKA_VsYVV1kzM5diXS8gQ/viewform?fbclid=IwAR1tooCQYmj6deCTmpSQvZ2-ZNWPRgvb3HU8Un52OjcBNi_bdArCaFh76xs&amp;edit_requested=true"
                  target="_blank"
                  rel="noopener"
                >
                  здесь
                </a>
                .&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
              <li>
                Информационный центр{" "}
                <a href="https://probono.by/" target="_blank" rel="noopener">
                  Probono.by
                </a>{" "}
                помогает пострадавшим во&nbsp;время акций найти нужного
                специалиста:&nbsp; адвоката, врача, психолога.&nbsp;&nbsp;
              </li>
            </ul>
          </Card>
          <Card title="Медицинская помощь">
            <ul>
              <li>
                Платформа ИМЕНА предлагает пострадавшим оставить{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1_thKpIipxRr7uvrI8bJ-HngwvH5Y_p3rnibyCpmIB5zzLg/viewform"
                  target="_blank"
                  rel="noopener"
                >
                  заявку
                </a>{" "}
                на&nbsp;получение лекарств, лечения или реабилитации.&nbsp;
              </li>
              <li>
                Медицинский центр ЛОДЭ бесплатно{" "}
                <a
                  href="https://www.lode.by/news/vnimaniyu-postradavshikh-v-aktsiyakh-protesta/"
                  target="_blank"
                  rel="noopener"
                >
                  оказывает помощь
                </a>{" "}
                пострадавшим от&nbsp;насилия в&nbsp;мирных уличных акциях
                протеста 9–14&nbsp;августа.
              </li>
              <li>
                Сеть клиник Linline готова безвозмездно помочь избитым женщинам
                и&nbsp;детям&nbsp;—&nbsp; в&nbsp;частности,{" "}
                <a
                  href="https://linline-club.by/zhizn-linline/news/linline-protiv-nasiliya"
                  target="_blank"
                  rel="noopener"
                >
                  удалить с&nbsp;тела гематомы
                </a>{" "}
                (сеть специализируется на&nbsp;лазерной хирургии
                и&nbsp;косметологии).&nbsp;&nbsp;&nbsp;
              </li>
              <li>
                В&nbsp;этих стоматологических центрах тоже бескорыстно лечат
                пострадавших:{" "}
                <a href="https://triomed.by/" target="_blank" rel="noopener">
                  Триомед
                </a>
                ,{" "}
                <a
                  href="https://dentaldream.by/"
                  target="_blank"
                  rel="noopener"
                >
                  Dental Dream
                </a>
                , «
                <a
                  href="https://www.instagram.com/p/CD4C5-dh4oI/?utm_source=ig_embed"
                  target="_blank"
                  rel="noopener"
                >
                  Дудко и&nbsp;сыновья
                </a>
                ».&nbsp;
              </li>
              <li>
                Сервис 2doc{" "}
                <a
                  href="https://2doc.by/article/chastnye-medicinskie-centry-okazyvayut-besplatnuyu-pomoshch-postradavshim-v-mirnyh-piketah?fbclid=IwAR3q2yubRx-oqvHB8zFlE-7qdRgvXTu75_ghiClC1aIpC888zI4cwyCFhrU"
                  target="_blank"
                  rel="noopener"
                >
                  опубликовал список
                </a>{" "}
                из&nbsp;неравнодушных 28 медцентров в&nbsp;Минске, Жодино
                и&nbsp;Борисове. Там тоже помогают бесплатно.&nbsp;&nbsp;&nbsp;
              </li>
              <li>
                Врачи разных профилей и&nbsp;из&nbsp;разных городов предлагают
                свои услуги в&nbsp;телеграм-канале «
                <a
                  href="https://t.me/doctorstopeople"
                  target="_blank"
                  rel="noopener"
                >
                  Врачи людям
                </a>
                ». 18&nbsp;августа список продолжается дополняться.&nbsp;
              </li>
            </ul>
          </Card>
          <Card title="Помощь узникам Окрестина и&nbsp;других изоляторов">
            <ul>
              <li>
                Общая{" "}
                <a
                  href="https://blm-findpeople.web.app/search"
                  target="_blank"
                  rel="noopener"
                >
                  база задержанных
                </a>{" "}
                с&nbsp;10 по&nbsp;16&nbsp;августа. &nbsp;
              </li>
              <li>
                Ссылки на&nbsp;различные списки задержанных можно найти
                на&nbsp;сайте{" "}
                <a
                  href="https://belarushelp.org/"
                  target="_blank"
                  rel="noopener"
                >
                  BelarusHelp.org
                </a>
                . &nbsp;
              </li>
              <li>
                Списки задержанных и&nbsp;отпущенных обновляются
                в&nbsp;телеграм-каналах «
                <a
                  href="https://t.me/spiski_okrestina"
                  target="_blank"
                  rel="noopener"
                >
                  Окрестина списки
                </a>
                »,
                <a
                  href="https://t.me/okrestino_help"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  «Окрестино помощь»
                </a>
                ,
                <a href="https://t.me/okrestina" target="_blank" rel="noopener">
                  {" "}
                  «Окрестина задержанные»
                </a>
                .&nbsp;
              </li>
              <li>
                Приютить задержанных (которые часто выходят на&nbsp;волю ночью
                без ключей от&nbsp;дома) готовы волонтёры в&nbsp;телеграм-группе
                «
                <a
                  href="https://t.me/razmeshenieminsk"
                  target="_blank"
                  rel="noopener"
                >
                  Размещение пострадавших
                </a>
                ».&nbsp;&nbsp;
              </li>
            </ul>
          </Card>
          <Card title="Для автомобилистов">
            <ul>
              <li>
                СTO готовы помочь тем, чьи автомобили были разбиты во&nbsp;время
                протестов. Оставить заявку на&nbsp;ремонт или найти мастерскую
                в&nbsp;своём городе можно{" "}
                <a
                  href="https://www.facebook.com/alexander.vizavitin/posts/3145593225539185?_rdc=1&amp;_rdr"
                  target="_blank"
                  rel="noopener"
                >
                  в&nbsp;этой группе в&nbsp;Фейсбуке
                </a>
                . «
                <a
                  href="https://www.sudexpert.by/?gclid=Cj0KCQjw-O35BRDVARIsAJU5mQWfoLlqlKm8HPy_QycTr16Hn5xh9Du6emj_At1BwWev42UxKjZ4PlYaAr1LEALw_wcB"
                  target="_blank"
                  rel="noopener"
                >
                  Судебно-экспертная коллегия
                </a>
                » за&nbsp;20 руб проведёт оценку повреждений
                машин.&nbsp;&nbsp;&nbsp;
              </li>
              <li>
                В&nbsp;группе{" "}
                <a
                  href="https://t.me/avto_help97"
                  target="_blank"
                  rel="noopener"
                >
                  АВТО 97%
                </a>{" "}
                собираются водители, готовые подвезти протестующих или
                задержанных.&nbsp;
              </li>
              <li>
                В&nbsp;
                <a href="https://t.me/webtaxi" target="_blank" rel="noopener">
                  этом чате
                </a>{" "}
                собрались таксисты, готовые развозить пострадавших.
              </li>
            </ul>{" "}
          </Card>
        </div>
      </PageTemplate>
      <style jsx>{`
        .social-posts {
          display: flex;
          flex-direction: column;
        }

      .title{
        text-align: center;
        font-size: 27px;
        background-color: #ff4d4f;
        color: #fff;
        padding: 12px;
      }

        .wrapper {
          width: 700px;
          margin: 0 auto;
          font-weight: 600;
        }

        .wrapper a {
          color: #ff4d4f;
        }

        .wrapper a:hover {
          color: #801a1b;
        }

        .wrapper ul > li {
          padding-bottom: 12px;
        }

        .link {
          display: block;
          background: #ff4f4f;
          color: #ffffff;
          text-decoration: none;
          padding: 12px;
          margin: 12px;
        }

        .link:hover {
          background: #f94040;
        }

        @media (max-width: 768px) {
          .wrapper {
            width: 100%;
          }

          .title {
            width: 100%;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Initiatives;
