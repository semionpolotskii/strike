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
            <Text time=""></Text>
            <Text time=""></Text>
            <Text time=""></Text> 
          </ContentCard> */}

          <ContentCard date="21 августа, четверг">
            <Text>
              Так теперь выглядят афиши Купаловского театра.
              <TelegramWidget
                tgLink="https://t.me/the_village_me/14935"
                height={670}
              />
            </Text>
            <Text>
              <strong>TUT.BY новости</strong>: С сегодняшнего дня Купаловский
              театр ушел на простой. При этом позиция сотрудников театра
              остается прежней. <br />
              Купаловцы требуют освободить всех политзаключенных и людей,
              задержанных во время и после выборов. Расследовать все случаи
              насилия над участниками протестов и случайными людьми. Возбудить
              уголовные дела в отношении тех силовиков, которые злоупотребляли
              своими полномочиями. Допустить журналистов, адвокатов и медиков к
              тем, кто находится в изоляторах. Прекратить давление на
              работников, которые принимают участие в мирных акциях протеста и
              высказывают свою гражданскую позицию. Провести новые выборы
              президента с новым составом ЦИК с допуском международных и
              национальных наблюдателей.
              <SourceLink href="https://news.tut.by/culture/697615.html" />
            </Text>
          </ContentCard>

          <ContentCard date="20 августа, четверг">
            <Text>
              <strong>Выборы видишь? | TUT.BY Политика</strong>: Стивен Фрай
              высказался в поддержку мирного протеста в Беларуси и сотрудников
              Купаловского театра.
              <TelegramWidget
                tgLink="https://t.me/vybory_smotri/4193"
                height={500}
              />
            </Text>
            <Text>
              <strong>TUT.BY новости</strong>: Новый директор Купаловского:
              театр закрыли на два дня из-за коронавируса.
              <SourceLink href="https://news.tut.by/culture/697388.html" />
            </Text>
            <Text>
              Министерство культуры сделало официальное заявление о ситуации в
              Купаловском.
              <SourceLink href="https://www.kultura.by/by/news-by/view/pavedamlenne-dlja-presy-ab-situatsyi-u-natsyjanalnym-akademichnym-teatry-imja-janki-kupaly-4038-2020/" />
            </Text>
          </ContentCard>

          <ContentCard date="19 августа, среда">
            <Text>
              TUT.BY новости: Купаловский театр заблокирован, сотрудники и
              актеры не могут попасть в здание. Якобы санитарный день.
              <SourceLink href="https://news.tut.by/culture/697237.html?tg" />
            </Text>
            <Text time="10:30">
              <strong>Радыё Свабода — Беларусь</strong>: Павел Латушка
              пракамэнтаваў захоп Купалаўскага тэатру сілавікамі. У Купалаўскі
              тэатар увялі міліцыю, уваходы заблякаваныя, міліцыя не прапускае
              тых актораў і супрацоўнікаў, якія падалі заявы на звальненьне, –
              паведаміў Свабодзе звольнены Мінкультам дырэктар тэатру Павал
              Латушка. Частка работнікаў тэатра, якія павінныя забясьпечыць
              ягонае функцыянаваньне як установы не падавалі заяваў на
              звальненьне, іх пускаюць, кажа Латушка. «Гэта беспрэцэдэнтная
              сытуацыя, каб у ХХІ стагодзьдзі ва ўстанову культуры ўводзілі
              сілавікоў, аб якой свабодзе мастацтва і творчасьці можа быць
              гаворка ў такіх умовах”, – сказаў Латушка.
            </Text>
            <Text time="10:55">
              <strong>The Village Беларусь</strong>: Новый директор Купаловского
              отказывается подписывать заявления на увольнение сотрудников и
              настаивает, что с каждым надо поговорить лично. Сотрудники театра
              продолжат отстаивать свою позицию.
            </Text>
            <Text time="12:35">
              <TelegramWidget
                tgLink="https://t.me/vybory_smotri/4048"
                height={390}
              />
            </Text>
            <Text time="22:37">
              <TelegramWidget
                tgLink="https://t.me/belteanews/11981"
                height={425}
              />
            </Text>
          </ContentCard>

          <ContentCard date="18 августа, вторник">
            <Text time="00:23">
              <TelegramWidget
                tgLink="https://t.me/belteanews/11771"
                height={800}
              />
            </Text>
            <Text time="10:57">
              <strong>Кулуары KYKY</strong>: Маша Колесникова с цветами уже у
              Купаловского. Она поддерживает уволенного директора театра Павла
              Латушко. А рядом с Машей — десятки других людей.
            </Text>
            <Text time="11:19">
              Сотрудники Купаловского заявили, что следующий театральный сезон
              не случится. Труппа положила перед чиновником заявления об
              увольнении. Они дали министру еще одни сутки, чтобы он восстановил
              в должности уволенного директора театра Павла Латушко. А глава
              Минкульта ответил, что Латушко уволен законно. На его место
              назначат кого-нибудь от министерства, добавил Бондарь.
            </Text>
            <Text time="11:28">
              <TelegramWidget
                tgLink="https://t.me/belteanews/11791"
                height={435}
              />
            </Text>
            <Text time="11:32">
              <TelegramWidget
                tgLink="https://t.me/vybory_smotri/3842"
                height={435}
              />
            </Text>
            <Text time="11:34">
              <strong>Кулуары KYKY</strong>: Наш читатель из Купаловского
              написал нам, что, кроме труппы, увольняется еще и коллектив театра
              (то есть и другие службы). Остаются лишь техники, чтобы театр «не
              сломался». Министр культуры Бондарь сказал, что с каждым
              сотрудником Купаловского, подавшим заявление об уходе, проведет
              персональную беседу — и решение об увольнении примут в течение 30
              дней.
            </Text>
            <Text time="12:28">
              <strong>TUT.BY новости</strong>: Сотрудники Купаловского театра
              подняли перед министром свои заявления на увольнениеe
              <Img src="https://dh.img.tyt.by/720x720s/n/buryakina/09/f/kupalauski_20200818_bur_009_photo_2020-08-18_11-40-40.jpg" />
            </Text>
            <Text time="15:56">
              <strong>TUT.BY Политика</strong>: Артисты симфонического оркестра
              Большого театра Беларуси прислали слова поддержки коллегам из
              Купаловского театра.
            </Text>
          </ContentCard>

          <ContentCard date="17 августа, понедельник">
            <Text>
              TUT.BY новости: Уволили директора Купаловского театра,
              экс-министра культуры Павла Латушко. Он публично поддерживал
              протесты.
              <SourceLink href="https://news.tut.by/culture/697016.html" />
              Несколько каналов потому сообщили, что после новости об увольнении
              экс-министра культуры, директора Купаловского театра Павла
              Латушко, вся труппа Купаловского подписала заявления на
              увольнение. К ней едет нынешний министр культуры Юрий Бондарь.
            </Text>
            <Text>
              <TelegramWidget
                tgLink="https://t.me/onlinerby/14448"
                height={800}
              />
            </Text>
            <Text time="19:45">
              <strong>TUT.BY новости</strong>: Перед собравшимся возле
              Купаловского театра выступила актриса Люся Осмоловская. — Все что
              можно решить в этом здании, все уже решено. Можно будет что-то
              решить завтра, когда сюда приедет министр культуры, а он обещал
              прийти в 10 часа утра, — сказала Осмоловская. Она предложила всем
              творческим людям пройти на Паниковку и выработать общий план
              действий.
            </Text>
            <Text time="19:58">
              <TelegramWidget
                tgLink="https://t.me/belteanews/11751"
                height={400}
              />
            </Text>
            <Text time="20:01">
              <TelegramWidget
                tgLink="https://t.me/tutby_official/11339"
                height={400}
              />
            </Text>
          </ContentCard>

          <ContentCard date="16 августа, воскресенье">
            <Text>
              <strong>TUT.BY новости</strong>: Встретили на акции солидарности в
              Минске директора Купаловского театра, экс-министра культуры Павла
              Латушко. Он довольно резко высказался о ситуации в стране: «Власть
              открыла ящик Пандоры».
              <SourceLink href="https://news.tut.by/society/696899.html" />
            </Text>
          </ContentCard>

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
              <SourceLink href="https://news.tut.by/culture/696556.html" />
            </Text>
          </ContentCard>

          <ContentCard date="12 августа, среда">
            <Text>
              Актеры и сотрудники Национального театра имени Янки Купалы
              записали видеообращение и потребовали прекратить применение силы
              против протестующих. “Кожны вечар жывем, як на фронце”.
              <SourceLink href="https://news.tut.by/culture/696427.html" />
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
