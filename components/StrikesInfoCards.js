import React from "react";

const StrikesInfoCards = () => (
  <>
    <div className="wrapper">
      <div className="card">
        <div className="card-title">Мне говорят, что забастовки незаконны</div>
        <div className="card-body">
          Право на забастовку является неотъемлемым и прописано в
          конституции Беларуси – которая является высшим законом, выше всех
          декретов и указов. Увольнения за забастовку незаконны. Каждое увольнение должно лишь
          подпитывать забастовку. 
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          Но меня увольняют за забастовку. Как быть?
        </div>
        <div className="card-body">
          Учрежден Фонд Солидарности, который 
          <strong> материально поможет каждому уволенному за забастовку </strong>
          – суммами до 1500 евро. Это «касса взаимопомощи», она распределяется через
          стачкомы предприятий. Организуйтесь в стачкомы с единомышленниками,
          связывайтесь с Фондом Солидарности
        </div>
      </div>
      <div className="card">
        <div className="card-title">
          Почему забастовки так важны именно сейчас?
        </div>
        <div className="card-body">
          Забастовки наиболее эффективны при широком масштабе – тогда
          нелегитимная власть уйдет и законность вернется быстрее. Мы не имеем
          права не поддержать рабочих уже бастующих предприятий. Кроме того,
          своими забастовками мы не допустим силового реванша и репрессий
        </div>
      </div>

      <div className="card">
        <div className="card-title">Каким компаниям стоит бастовать?</div>
        <div className="card-body">
          Всем с государственной формой собственности, включая самые небольшие,
          а также коммунальные и транспортные. Частным и ИП стоит просто
          отложить уплату налогов (санкции за такое мизерные).
        </div>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: space-between;
        margin: 24px 0;
      }

      .card {
        display: flex;
        flex-direction: column;
        margin: 0 12px;
        width: 24%;
        border: 1px solid #f0f0f0;
      }
      .card-title {
        padding: 24px;
        text-align: center;
        font-weight: bold;
        background-color: #ff4d4f;
        color: #fff;
      }
      .card-body {
        text-align: justify;
        padding: 24px;
      }

      @media (max-width: 768px) {
        .wrapper {
          flex-direction: column;
        }
        .card {
          width: 100%;
          margin: 0;
        }
        .card-title {
          padding: 12px;
        }
      }
    `}</style>
  </>
);

export default StrikesInfoCards;
