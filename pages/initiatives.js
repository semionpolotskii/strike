import React from "react";

import Card from "../components/Card";
import Header from "../components/Header";

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
      <Header />
      <div className="wrapper">
        <h1>
          Инициативы для тех, кто бастует, потерял или меняет работу в связи с
          политической ситуацией в Беларуси
        </h1>
        <Card title="Фонды">
          <a
            className="link"
            href="https://www.facebook.com/donate/759400044849707/"
          >
            Благотворительный фонд "Belarus Solidarity Foundation"
          </a>
          <a
            className="link"
            href="https://belarus-future.org/pages/contacts/contacts_ru.html"
          >
            Благотворительный фонд "Беларусь будущего" от Валерия Цепкало
          </a>
          <a className="link" href="https://help.honest-people.by/">
            Инициатива "Скорая взаимопомощь" от Честных Людей
          </a>

          {/* <a href="https://bit.ly/honesthelp">Заявки на помощь</a> */}

          {/* <a href="Заявки по ссылке https://bit.ly/3gZC63X">
              Заявки на помощь
            </a> */}
        </Card>
        <Card title="Помощь в составлении резюме и поиске вакансий">
          <div className="social-posts">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F100025082352368%2Fposts%2F718149339031138&show_text=true&width=552&height=752&appId"
              width="552"
              height="752"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>

            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnatalyadarmel%2Fposts%2F4232890550119079&show_text=true&width=552&height=288&appId"
              width="552"
              height="288"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </Card>
        <Card title="Вакансии для сотрудников государственных СМИ">
          <div className="social-posts">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FVadim.Kheifets%2Fposts%2F10224697723694631&show_text=true&width=552&height=571&appId"
              width="552"
              height="260"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>

            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeranin%2Fposts%2F4015000235193399&show_text=true&width=552&height=604&appId"
              width="552"
              height="604"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </Card>
        <Card title="Обучение и работа в IT для сотрудников гос. предприятий">
          <a
            className="link"
            href="https://dev.by/news/shkola-dizaina-besplatno-pereuchit-postradavshih-budzhetnikov"
          >
            Школа дизайна бесплатно переучит пострадавших бюджетников
          </a>
          <div className="social-posts">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpavel.veinik%2Fposts%2F3300577576629798&show_text=true&width=552&height=313&appId"
              width="552"
              height="313"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmityaone%2Fposts%2F10217975219427632&show_text=true&width=552&height=510&appId"
              width="552"
              height="510"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjana.busjko%2Fposts%2F3160092644045746&show_text=true&width=552&height=187&appId"
              width="552"
              height="187"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </Card>

        <Card title="Работа для учителей">
          <div className="social-posts">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbagdich%2Fposts%2F3241912732554682&show_text=true&width=552&height=250&appId"
              width="552"
              height="250"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvictoria.onokhovazhuravleva%2Fposts%2F1707827626034822&show_text=true&width=552&height=1048&appId"
              width="552"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </Card>

        <Card title="Помощь учителям">
          <a className="link" href="https://t.me/chestnyeuchitelia_info">
            Инициативная группа для поддержки учителей
          </a>

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyuri.vedenin%2Fposts%2F4512740015410638&show_text=true&width=552&height=585&appId"
            width="552"
            height="200"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Card>
        <Card title="Помощь и обучение для рабочих заводов">
          <a
            className="link"
            href="https://www.notion.so/5a2279dc206b42ada8e9091922ccb633"
          >
            Переучим рабочих в айтишников
          </a>

          <a className="link" href="https://www.instagram.com/p/CD-wCa-nRi0">
            Материальная помощь, обучение программированию
          </a>
        </Card>
        <Card>
          <ul>
            <li>
              <a href="https://bychange.me/">
                Менторство и помощь в трудоустройстве
              </a>
            </li>

            <li>
              <a href="https://www.protectbelarus.org/">
                Помощь сотрудникам силовых структур
              </a>
            </li>

            <li>
              <a href="https://standwithbelarus.net/">
                Агрегатор предложений о взаимопомощи
              </a>
            </li>

            <li>
              <a href="https://probono.by">
                Агрегатор инициатив для помощи пострадавшим
              </a>
            </li>

            <li>
              <a href="https://forms.gle/48HyuzvGTPZkx3Yu7">
                Помощь от Фронта Национального Спасения
              </a>
            </li>

            <li>
              <a href="https://t.me/HelpBelarus2020">
                Инициативная группа "Добрые Люди"
              </a>
            </li>

            <li>
              Школьные вещи для детей бастующих родителей
              <br />
              <a href="https://www.instagram.com/p/CEB9e9cnKyS">
                https://www.instagram.com/p/CEB9e9cnKyS
              </a>
            </li>

            <li>
              <a href="http://dapamazhy.by/">
                Материальная помощь членам избирательных комиссий
              </a>
            </li>

            <li>
              <a href="https://ezhik.by/">
                Помощь провизией бастующим, нуждающимся и пострадавшим
              </a>
            </li>
          </ul>
        </Card>
      </div>
      <style jsx>{`
        .social-posts {
          display: flex;
          flex-direction: column;
        }

        .wrapper {
          width: 700px;
          margin: 0 auto;
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
        }
      `}</style>
    </>
  );
};

export default Initiatives;
