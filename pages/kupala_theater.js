import React from "react";
import Head from "next/head";
import Typography from "../components/Typography";
import TelegramWidget from "../components/TelegramWidget";
import YouTubeWidget from "../components/YouTubeWidget";
import Img from "../components/Img";
import ContentCard from "../components/ContentCard";
import SourceLink from "../components/SourceLink";
import Text from "../components/Text";
import CompanyHeader from "../components/CompanyHeader";
import PageTemplate from "../components/PageTemplate";

const statuses = ["need_help", "active", "stopped"];
const title = "БелАЗ";

const Home = () => {
  return (
    <>
      <PageTemplate>
        <div className="wrapper">
          <CompanyHeader
            links={[
              { title: "Сайт", address: "https://kupalauski.by/" },
              { title: "Википедия", address: "https://bit.ly/2FH0FFj" },
            ]}
          >
            Тэатр Янкi Купалы
          </CompanyHeader>

          {/* <ContentCard date="">
            <Text></Text>
          </ContentCard> */}

          <ContentCard date="14 августа, пятница">
            <Text time="14:37">
              <TelegramWidget
                tgLink="https://t.me/vybory_smotri/3010"
                height={430}
              />
            </Text>
            <Text time="15:10">
              <strong>The Village Беларусь</strong>: Вызвали в министерство
              культуры Павла Латушко, который сейчас руководит Купаловским, а
              раньше был министром культуры и послом. Они должны встретиться
              сегодня в 15:00.
            </Text>
            <Text time="15:30">
              <strong>Выборы видишь? | TUT.BY Политика</strong>: У Минкульта
              сейчас работники Купаловского, Нового, Свободного театров, Театра
              кукол и других. Актеры стоят с плакатами «Як казаць, калі няма
              голаса», «Купалаўцы супраць гвалту», и другими. Актеры пришли,
              чтобы поддержать директора Купаловского театра Павла Латушко,
              которого вызвали сегодня к министру культуры после записи
              обращения купаловцев. В 15.00 Павел Латушка вошел в здание
              минкульта. Актеры театров ему кричат «Пал Палыч, мы с вами!»
            </Text>
            <Text time="15:43">
              <TelegramWidget
                tgLink="https://t.me/tutby_official/10742"
                height={430}
              />
            </Text>
          
            <Text time="20:21">
              <strong>TUT.BY новости</strong>: На площадь Независимости пришел
              руководитель Купаловского театра Павел Латушко вместе с
              купаловцами. Он заявил, что глава МВД, его зам и другие лица,
              ответственные за жесткое обращение с задержанными, должны уйти в
              отставку.
            </Text>
          </ContentCard>

          <ContentCard date="13 августа, четверг">
            <Text>
              Коллектив Купаловского театра потребовал остановить насилие к
              мирным гражданам и выступил за пересчет голосов с участием
              независимых наблюдателей. Об этом говорится в тексте обращения,
              которое есть в распоряжении TUT.BY. Обращение поддержали около 200
              сотрудников театра.
              <SourceLink href="https://news.tut.by/culture/696556.html?tg" />
            </Text>
          </ContentCard>

          <ContentCard date="12 августа, среда">
            <Text>
              Актеры и сотрудники Национального театра имени Янки Купалы
              записали видеообращение и потребовали прекратить применение силы
              против протестующих. “Кожны вечар жывем, як на фронце”.
              <SourceLink href="https://news.tut.by/culture/696427.html?tg" />
              <YouTubeWidget src="https://www.youtube.com/embed/SCip0bZm1UE" />
            </Text>
          </ContentCard>
        </div>
      </PageTemplate>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Home;
