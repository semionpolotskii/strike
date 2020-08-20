import React from "react";
import PageTemplate from "../components/PageTemplate";
import Chronologic from "../components/Chronologic";
import ChronologicCard from "../components/ChronologicCard";
import CompanyLinksList from "../components/CompaniesRoster";
import StrikesTable from "../components/StrikesTable";

const Home = () => (
  <>
    <PageTemplate>
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
    </PageTemplate>

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
