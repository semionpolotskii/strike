import React from "react";

import PageTemplate from "../components/PageTemplate";
import Card from "../components/Card";
import BlockTitle from "../components/BlockTitle";
// <div className="wrapper">
//   <h1>
//     Инициативы для тех, кто бастует, потерял или меняет работу в связи с
//     политической ситуацией в Беларуси
//   </h1>
//   <Card title="Фонды">

//   </Card>

// </div>

const Chats = () => {
  return (
    <>
      <PageTemplate>
        <div className="wrapper">
          <h3 className="title">
            <span>Забастовочные чаты предприятий</span>
          </h3>

          <Card>
            <span>
              Ваши вопросы и предложения относительно забастовочного движения
              Беларуси либо работы чатов предприятий можете отправлять
              администраторам чатов посредством бота{" "}
              <a href="https://t.me/Basta_infobot" target="_blank">
                @Basta_infobot
              </a>
            </span>
            <ul>
              <li>
                Амкодор -{" "}
                <a href="https://t.me/Amkodor_chat" target="_blank">
                  @Amkodor_chat
                </a>
              </li>
              <li>
                Атлант -{" "}
                <a href="https://t.me/Atlant_strana" target="_blank">
                  @Atlant_strana
                </a>
              </li>
              <li>
                БелАЗ -{" "}
                <a href="https://t.me/BelAZ_chat" target="_blank">
                  @BelAZ_chat
                </a>
                {", "}
                <a href="https://t.me/belaz_strana" target="_blank">
                  @belaz_strana
                </a>
              </li>
              <li>
                Белоруснефть -{" "}
                <a href="https://t.me/belorusneft_chat" target="_blank">
                  @belorusneft_chat
                </a>
              </li>
              <li>
                БМЗ -{" "}
                <a href="https://t.me/BMZ_chat" target="_blank">
                  @BMZ_chat
                </a>
              </li>

              <li>
                Беларуськалий -{" "}
                <a href="https://t.me/Belkaliy" target="_blank">
                  @Belkaliy
                </a>
              </li>
              <li>
                БелЖД -{" "}
                <a href="https://t.me/Beldor" target="_blank">
                  @Beldor
                </a>
              </li>

              <li>
                Белшина -{" "}
                <a href="https://t.me/Belshina_chat" target="_blank">
                  @Belshina_chat
                </a>
              </li>

              <li>
                БЕЛКОММУНМАШ -{" "}
                <a href="https://t.me/belkommunmash_chat" target="_blank">
                  @belkommunmash_chat
                </a>
              </li>

              <li>
                Белкард -{" "}
                <a href="https://t.me/belkard_chat" target="_blank">
                  @belkard_chat
                </a>
              </li>

              <li>
                Гродно Азот -{" "}
                <a href="https://t.me/Grodno_azot" target="_blank">
                  @Grodno_azot
                </a>
              </li>

              <li>
                Гомсельмаш -{" "}
                <a href="https://t.me/GomSM_chat" target="_blank">
                  @GomSM_chat
                </a>
              </li>

              <li>
                Интеграл -{" "}
                <a href="https://t.me/integral_chat" target="_blank">
                  @integral_chat
                </a>
              </li>

              <li>
                МЗКТ -{" "}
                <a href="https://t.me/MZKT_chat" target="_blank">
                  @MZKT_chat
                </a>
              </li>

              <li>
                МАЗ -{" "}
                <a href="https://t.me/MAZ_chat" target="_blank">
                  @MAZ_chat
                </a>
              </li>

              <li>
                МТЗ -{" "}
                <a href="https://t.me/MTZ_chat" target="_blank">
                  @MTZ_chat
                </a>
              </li>

              <li>
                ММЗ -{" "}
                <a href="https://t.me/mmz_chat" target="_blank">
                  @mmz_chat
                </a>
              </li>

              <li>
                Минский электротехнический завод им. Козлова -{" "}
                <a href="https://t.me/minskelectroteh" target="_blank">
                  @minskelectroteh
                </a>
              </li>

              <li>
                Медики -{" "}
                <a href="https://t.me/Mediki_chat" target="_blank">
                  @Mediki_chat
                </a>
              </li>

              <li>
                НАФТАН -{" "}
                <a href="https://t.me/Naftan_chat" target="_blank">
                  @Naftan_chat
                </a>
              </li>

              <li>
                Мозырский НПЗ -{" "}
                <a href="https://t.me/Mozyr_NPZ" target="_blank">
                  @Mozyr_NPZ
                </a>
              </li>

              <li>
                Пищевая промышленность -{" "}
                <a href="https://t.me/eda_chat" target="_blank">
                  @eda_chat
                </a>
              </li>

              <li>
                Работники транспорта -{" "}
                <a href="https://t.me/Transport_strana" target="_blank">
                  @Transport_strana
                </a>
              </li>

              <li>
                Свитанок -{" "}
                <a href="https://t.me/svitanok_strana" target="_blank">
                  @svitanok_strana
                </a>
              </li>

              <li>
                Строители -{" "}
                <a href="https://t.me/stroim_Stranu" target="_blank">
                  @stroim_Stranu
                </a>
              </li>

              <li>
                Торговля ВСЯ -{" "}
                <a href="https://t.me/Torgovlya_chat" target="_blank">
                  @Torgovlya_chat
                </a>
              </li>

              <li>
                Химволокно (все заводы в одном) -{" "}
                <a href="https://t.me/himprom_chat" target="_blank">
                  @himprom_chat
                </a>
              </li>

              <li>
                Энергетики -{" "}
                <a href="https://t.me/Strana_energo" target="_blank">
                  @Strana_energo
                </a>
              </li>

              {/* <li>
                - <a href="https://t.me/" target="_blank"></a>
              </li> */}
            </ul>
          </Card>
        </div>
      </PageTemplate>
      <style jsx>{`
        .social-posts {
          display: flex;
          flex-direction: column;
        }

        .title {
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

export default Chats;
