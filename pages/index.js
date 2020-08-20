import React from "react";
import Header from "../components/Header";
import Chronologic from "../components/Chronologic";
import ChronologicCard from "../components/ChronologicCard";
import CompanyLinksList from "../components/CompaniesRoster";
import StrikesTable from '../components/StrikesTable'

const Home = () => (
  <>
    <Header />
    {/* <div>Ссылки для помощи</div>
    <div>Список всех инициатив</div> */}
    
    <Chronologic>
      <ChronologicCard title="БелАЗ" href="/belaz" />
      <ChronologicCard title="БелАЗ" href="/belaz" />
      <ChronologicCard title="БелАЗ" href="/belaz" />
      <ChronologicCard title="БелАЗ" href="/belaz" />
    </Chronologic>
    {/* <CompanyLinksList /> */}
    <StrikesTable />

    <style jsx>{`
      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </>
);

export default Home;
