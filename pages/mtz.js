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

const Home = () => {
  return (
    <>
      <PageTemplate>
        <div className="wrapper">
          <CompanyHeader
            links={[
              { title: "Сайт", address: "http://www.belarus-tractor.com/" },
              { title: "Википедия", address: "https://bit.ly/2EuU3t2" },
            ]}
          >
            МТЗ
          </CompanyHeader>
          {/* 
          <ContentCard date="">
            <Text time=""> </Text>
            <Text time=""> </Text>
            <Text>
              <SourceLink href="" />
              <TelegramWidget
                tgLink=""
                height={450}
              />
              <YouTubeWidget src="" />
              <Img src="" />
            </Text>
          </ContentCard> */}

          <ContentCard date="11 августа, вторник">
            <Text time="12:52">
              <strong>Белсат</strong>: Актывіст Алесь Таўстыка: Каля галоўнай
              прахадной МТЗ, сабралася каля 70 працаўнікоў, патрабуюць ад
              кіраўніцтва, каб растлумачылі сітуацыю, якая адбываецца ў краіне.
              Людзі падцягваюцца. Намеснік дырэктара папярэдзіў, што пакуль абед
              працоўным нічога не будзе, як толькі яны выйдуць за прахадную, то
              іх чакаюць непрыемнасці.
            </Text>
            <Text time="15:34">
              <strong>MINSKI | КАНАЛ ЗДРАВОГО СМЫСЛА</strong>: "Забастовка еще
              не началась. Сегодня работники во время обеда собрались около
              проходной завода. Скооперировались, обменялись телефонами и
              прочее. Никаких официальных требований не выдвигали, обращений не
              оформляли. Говорят, планируют ориентироваться на обстановку в
              стране и завтра при необходимости принимать меры".
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
