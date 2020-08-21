import React from "react";
import PageTemplate from "../components/PageTemplate";
import HomePageBanner from "../components/HomePageBanner";
import Chronologic from "../components/Chronologic";
import ChronologicCard from "../components/ChronologicCard";
import CompanyLinksList from "../components/CompaniesRoster";
import StrikesTable from "../components/StrikesTable";
import StrikesInfoCards from "../components/StrikesInfoCards";

const Home = () => (
  <>
    <PageTemplate>
      <div className="wrapper">
        <div className="cover-img" />
        {/* <div>Ссылки для помощи</div>
    <div>Список всех инициатив</div> */}
        <HomePageBanner />
      </div>
      <StrikesInfoCards />
      <Chronologic>
        <ChronologicCard title="БелАЗ" href="/belaz" imgHref="https://dh.img.tyt.by/720x720s/n/finansy/06/8/belaz2.jpg"/>
        <ChronologicCard title="Тэатр Янкi Купалы" href="/kupala_theater" imgHref="https://tutby.gcdn.co/720x720s/n/buryakina/09/f/kupalauski_20200818_bur_009_photo_2020-08-18_11-40-40.jpg" />
      </Chronologic>
      {/* <CompanyLinksList /> */}
      <StrikesTable />
    </PageTemplate>

    <style jsx>{`
      .wrapper {
        position: relative;
        height: 500px;
      }

      .cover-img {
        position: absolute;
        width: 100%;
        height: 500px;
        background: url("https://ic.pics.livejournal.com/maxim_nm/51556845/2918070/2918070_original.jpg")
          no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        // filter: blur(1px);
        // -webkit-filter: blur(1px);
      }
      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }



      @supports (-webkit-touch-callout: none) {
        .cover-img {
          background-attachment: scroll; 
        }
      }
    `}</style>
  </>
);

export default Home;
