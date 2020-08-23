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
              { title: "Телеграм-чат", address: "https://t.me/MTZ_chat" },
            ]}
          >
            МТЗ
          </CompanyHeader>
          <ContentCard date="21 августа, пятница">
            <Text time="08:44">
              <strong>Радыё Свабода — Беларусь</strong>: Кіраўнік страйкаму МТЗ
              лічыць, што будзе другая хваля забастовак. Сёньня яго выклікалі ў
              Сьледчы камітэт. “Думкай большасьці, каб не згасаў гэты рух, было
              вырашана дзейнічаць у рамках закону, у рамках заканадаўства. Мы
              цяпер афармляем юрыдычны бок, рыхтуем пакет дакумэнтаў, каб
              забастоўка была абсалютна легальнай з гледжаньня сучаснага закону.
              І як толькі мы гэта аформім, я думаю, пойдзе другая хваля
              забастовак. Першая хваля была больш яе рэпэтыцыя, а другая хваля
              ўжо будзе сапраўдная”.
            </Text>
            <Text time="10:31">
              <strong>TUT.BY новости</strong>: Лидер стачкома МТЗ прибыл в
              Следственный комитет. Говорит, что "был готов к этому".
              <TelegramWidget
                tgLink="https://t.me/tutby_official/11735"
                height={395}
              />
            </Text>
            <Text time="13:31">
              <strong>NEXTA Live</strong>: На МТЗ, как сообщают наши подписчики,
              производство фактически встало — случилась неожиданная поломка в
              компрессорной. В некоторых цехах ещё и электричество пропало.
              Начальство бегает по цехам и кричит про саботаж.
            </Text>
            <Text time="15:06">
              <strong>TUT.BY Новости</strong>: Из здания Следственного комитета вышел глава
              стачкома МТЗ Сергей Дылевский. По его словам, его опрашивали в
              качестве свидетеля. Как и в случае с Максимом Знаком, с него взяли
              подписку о неразглашении. Дылевский рассказал, что уголовное дело
              было возбуждено по части 3 статьи 361 Уголовного кодекса (призывы
              к действиям, направленным на причинение вреда национальной
              безопасности Республики Беларусь, совершенные с использованием
              средств массовой информации или глобальной компьютерной сети
              Интернет). Согласно УК, за это грозит лишение свободы на срок от
              двух до пяти лет.
            </Text>
          </ContentCard>

          <ContentCard date="20 августа, четверг">
            <Text time="12:03">
              <strong>TUT.BY новости</strong>: На МТЗ заставляют подписывать
              бумагу на имя директора, в которой написано, что работники вне
              политики, что они за стабильную работу завода. Кроме того, личные
              карточки сотрудников, которые написали заявления на отпуска за
              свой счет, чтобы продолжить митинговать, и активистов передали во
              внутреннюю службу безопасности и режима. По словам работников,
              сейчас возле проходной завода дежурят сотрудники в штатском. Утром
              там был замечен автозак.
              <TelegramWidget
                tgLink="https://t.me/tutby_official/11644"
                height={645}
              />
            </Text>
            <Text time="13:46">
              <strong>
                Фонд солидарности BYSOL/Belarus solidarity foundation
              </strong>
              : Сергей Дылевский, глава стачкома Минского тракторного завода, о
              том, что происходит на заводе. Призывает не бояться и переходить
              на сторону народа. Беларусы поддержат каждого! Фонд уже перечислил
              часть средств бастующим и финансовая помощь в ближайшее время
              будет оказана. Продолжаем бастовать пока наши требования не будут
              выполнены. Вместе мы сила!
              <YouTubeWidget src="https://www.youtube.com/embed/jxIHA4KSr3w" />
            </Text>
            <Text time="21:50">
              <strong>TUT.BY новости</strong>: Лидера стачечного комитета МТЗ
              Сергея Дылевского вызвали в Следственный комитет. Дылевский должен
              явиться в СК в 11.00 21 августа, сообщил изданию источник с
              тракторного завода. «Дылевский надеется, что „выпадет“ из движения
              бастующих только на сутки, а затем надеется координировать
              протесты вновь», — рассказал источник.
              <SourceLink href="https://news.tut.by/society/697489.html" />
            </Text>
          </ContentCard>

          <ContentCard date="19 августа, среда">
            <Text time="07:15">
              <strong>The Village Беларусь</strong>: Беларусов, которые
              поддерживают МТЗ уже несколько тысяч. Они рассредоточились по
              скверу возле завода. ОМОН оттеснил людей от проходной, но больше
              не вмешивается.
            </Text>
            <Text time="08:22">
              <strong>Белсат</strong>: Пропуска людей, которые написали
              заявление за свой счёт и указали, что пойдут сегодня на забастовку
              мтз, уже заблокированы. Т.е. они скорее всего будут уволены.
              Супрацоўнік МТЗ распавёў, што зараз на заводзе заблакавалі дзверы
              і не выпускаюць яго калег. Па яго словах, завадчан запужваюць
              звальненнямі, кіраўніцтва загадала ўсім, хто хоча ўдзельнічаць у
              мітынгах, напісаць заяўленне за свой кошт.
            </Text>
            <Text time="09:02">
              <strong>Белсат</strong>: Наш кор: Пад МТЗ групы падтрымкі больш
              няма.
            </Text>
            <Text time="09:11">
              <strong>TUT.BY новости</strong>: У проходной Минского тракторного
              завода в среду утром ОМОН разгонял собравшихся людей. Здесь были
              работники завода, которые накануне написали заявления на отпуска
              за свой счет, а сегодня не смогли попасть на территорию
              предприятия из-за заблокированных пропусков. У МТЗ также были
              работники Минского моторного завода, которые пришли поддержать
              коллег, и другие неравнодушные люди. Сейчас у проходной находится
              ОМОН. В МВД позднее сообщили, что «милиционеры оттеснили толпу и
              задержали двоих самых активных участников мероприятия».
              Ориентировочно к 10.40 люди снова вернулись к МТЗ, они с
              бело-красно-белыми флагами, скандируют «Молодцы!».
              <SourceLink href="https://finance.tut.by/news697224.html" />
            </Text>
            <Text time="10:53">
              <strong>Кулуары KYKY</strong>: МВД прокомментировало утренний
              инцидент у МТЗ. Министерство утверждает, что у проходной МТЗ
              митингующие мешали рабочим пройти на работу. Это расценили как
              несанкционированную акцию (что интересно — еще вчера она таковой
              не являлась, раз никакой ОМОН не приезжал), арестовали двоих
              наиболее активных людей. Против них заведены административные
              дела.
            </Text>
            <Text time="12:48">
              <strong>Белсат</strong>: Лукашэнка пра пратэстуючых ля заводаў:
              «Их перед и после рабочего дня пропускают на проходной через
              коридор агрессивной толпы. Как гестапо». Паглядзіце, як сёння
              сустракалі працоўных ля МТЗ.
              <TelegramWidget tgLink="https://t.me/belsat/13840" height={600} />
            </Text>
            <Text time="13:11">
              <strong>Радыё Свабода — Беларусь</strong>: На МТЗ не пусьцілі
              некаторых рабочых. Працаўнік МТЗ Эдуард Сьвянцецкі расказаў, што
              раніцай тых, хто падпісаў заявы на адміністрацыйны адпачынак цягам
              тыдня, не пусьцілі на прадпрыемства, заблякавалі пропускі. «Можа
              мы ўжо і звольненыя», — не выключае Эдуард. Паводле яго, праз
              гадзіну, недзе а 9-й ранку, прыехаў АМАП і пачалася зачыстка
              плошчы. «Нічога не казалі, адразу пачалі адціскаць людзей. Ведаю,
              што затрымалі прынамсі двух рабочых, яны былі ў працоўных робах»,
              — сказаў Эдуард. Па ягоных зьвестках, напісалі заявы аб страйку
              каля 500 чалавек. Усяго на МТЗ працуюць каля 16 тысяч чалавек.
            </Text>
            <Text time="13:27">
              <strong>Наша Нiва</strong>: Лідар стачкама МТЗ Сяргей Дылеўскі
              паведаміў, што ўчора каля 300 рабочых, якія далучыліся да
              забастоўкі, напісалі заявы на адпачынак за свой кошт. Сёння
              дырэкцыя анулявала іх прапускі, на тэрыторыю завода яны трапіць не
              могуць.
            </Text>
            <Text time="15:02">
              <strong>Наша Нiва</strong>: Работнікі Філармоніі ды іншых музычных
              калектываў прыехалі да МТЗ, каб падтрымаць бастуючых рабочых.
              "Купалінка" ды іншыя любімыя песні. Нягледзячы на дождж.
              <TelegramWidget
                tgLink="https://t.me/nashaniva/11176"
                height={420}
              />
            </Text>
            <Text time="15:45">
              <strong>Наша Нiва</strong>: Прадстаўнікі музычных калектываў
              Мінска спяваюць "Пагоню" пад дажджом для рабочых МТЗ.
              <TelegramWidget
                tgLink="https://t.me/nashaniva/11183"
                height={400}
              />
            </Text>
          </ContentCard>

          <ContentCard date="18 августа, вторник">
            <Text time="10:40">
              <strong>Беларусь головного мозга</strong>: Нам пишут, что МТЗ
              начинает колебаться насчет идеи общенациональной забастовки.
              Мерзкие идеологи начали рассылать угрозы об увольнении работникам.
              Заявляют, что бастующих меньшинство, и что в случае продолжения
              забастовки, от МТЗ отвернутся международные партнеры. Очевидно,
              что руководство в панике, они не знают как загнать рабочих обратно
              в заводы. Мы просим передать всем работникам МТЗ, что с ними ВСЯ
              СТРАНА. Им необходимо выбрать представителя и направить его в
              национальный стачком. ЕС и США готовят большой пакет помощи
              белорусским предприятиям. Многие годы они боялись работать с
              Беларусью из-за диктатуры, при которой инвестиции можно потерять в
              один момент. Тем не менее, сейчас они видят в этом шанс и
              перспективы. Всем миром за несколько дней уже собрано более 750
              000 долларов на поддержку бастующих, также есть большое количество
              бизнесменов, готовых помогать напрямую.
            </Text>
            <Text time="11:26">
              <strong>Радыё Свабода — Беларусь</strong>: На тэрыторыі МТЗ
              адбываецца сход супрацоўнікаў. Зь імі размаўляе намесьнік
              дырэктара па ідэалёгіі. Каля прахадной сабралася група актывістаў,
              якія падтрымліваюць рабочых. Некаторыя рабочыя, якія выходзяць з
              прахадной, кажуць, што завод працуе.
            </Text>
            <Text time="11:39">
              <strong>Белсат</strong>: На МТЗ кіраўніцтва кажа рабочым, што
              страйк незаконны, бо аб ім трэба было папярэджваць за 2 тыдні і ў
              сувязі з гэтым рабочым будуць ставяцца прагулы. Заклікаюць а 12
              гадзіне падтрымаць рабочых пад сценамі заводу.
            </Text>
            <Text time="12:16">
              <strong>Onliner</strong>: Из здания МТЗ люди выходят постепенно.
              Ссылаются на гендиректора, который сказал: за вчерашнее и прошлое
              беру ответственность на себя. Если сегодня 3 часа не будет вас на
              работе — прогул. Журналисты попросили честно сказать: завод скорее
              бастует или работает? Рабочие отвечают: работает. Рабочим страшно.
              То, что будут увольнять — не сомневаются. Про деньги, которые им
              где-то собирают, знают, «но мы на них не можем рассчитывать».
            </Text>
            <Text time="12:41">
              <strong>Чай з малинавым варэннем</strong>: На МТЗ договорились об
              отпусках за свой счёт, сообщает Onliner. Говорят, «за» подняли
              руки примерно 1000 человек. Они продолжат забастовку. Их
              поддерживают люди на улице рядом с заводом
            </Text>
            <Text time="13:05">
              <strong>Радыё Свабода — Беларусь</strong>: Частка працаўнікоў МТЗ
              вырашыла працягваць страйк. Прынамсі тыдзень будзе страйк, цяпер
              людзі змогуць падпісаць паперу на страйк сваім кошт на тыдзень, —
              паведаміла жонка інжынэра з МТЗ Мешчаненкі. Ужо дзьве гадзіны на
              заводзе ідзе сход, вырашаюць, у якой форме будзе працягвацца
              страйк. Сябра страйкаму Сяргей Далеўскі (фота 3 і 4) назваў
              сытуацыю са страйкам складанай, перадае карэспандэнт Свабоды.
              Паводле Сяргея Дылеўскага, падтрымаць страйк нават пад пагрозай
              звальненьня гатовыя толькі 200-250 працаўнікоў, іншыя вагаюцца.
              «Заводзкія юрысты пераконваюць, што мы незаконна страйкуем, маем
              права на страйк толькі праз два тыдні пасьля падачы заявы. Таму на
              сходзе з удзелам генэральнага дырэктара прынялі кампраміснае
              рашэньне: хто хоча далей страйкаваць, выходзяць на тыдзень у
              адміністрацыйны адпачынак за свой кошт. Цяпер людзі пішуць такія
              заявы. Мы выйдзем з прахадной пасьля 15.20 і тады будзе зразумела,
              колькі нас», — сказаў Дылеўскі. А генэральны дырэктар МТЗ Віталь
              Воўк сказаў Свабодзе, што «нікога з страйкоўцаў ня звольнілі».
              Людзям, якія сабраліся на вуліцы перад галоўнай прахадной,
              дырэктар сказаў «сыходзіць і не замінаць працаваць заводу». На
              пляцоўцы каля МТЗ цяпер некалькі сотняў чалавек. Яны гукаюць
              «Адзін за ўсіх, усе за аднаго», «МТЗ», «Не здавайцеся» і вітаюць
              тых, хто выходзіць з заводу, авацыямі.
            </Text>
            <Text time="15:19">
              <strong>Чай з малинавым варэннем</strong>: На проходной МТЗ
              рабочим пытаются раздавать такие листовки. Что примечательно, речь
              в них идет о какой-то Белоруссии.
              <TelegramWidget
                tgLink="https://t.me/belteanews/11830"
                height={500}
              />
            </Text>
            <Text time="15:41">
              <strong>Белсат</strong>: МТЗ зараз
              <TelegramWidget tgLink="https://t.me/belsat/13648" height={330} />
            </Text>
            <Text time="16:47">
              <strong>NEXTA Live</strong>: Просто посмотрите, как встречают
              работников МТЗ!
              <TelegramWidget
                tgLink="https://t.me/nexta_live/8787"
                height={730}
              />
            </Text>
            <Text time="19:30">
              <strong>Кулуары KYKY</strong>: Представители МТЗ: «Забастовка
              поделилась на два лагеря. Они действуют как наши чиновники:
              приходят, включают станки, но план, который можно сделать за час,
              делают два дня. Ещё часть – активисты, которые выходят в город и
              бастуют. Мы призываем к забастовке другие предприятия». «Люди пока
              боятся. По факту, если мы скоординируем наши действия правильно,
              готовы будут процентов до 80. Сегодня активно принимают участие
              процентов 20. Боятся реакции руководства, боятся потерять работу».
              «Моральная поддержка очень важна. На волне репрессий от
              работодателей... Предпринимается движение гасить нашу забастовку.
              Должно больше людей выходит на забастовку, но происходит немного
              наоборот, потому что люди не чувствуют поддержки ни со стороны
              руководства, не со стороны профсоюзов». «Руководители не то, что
              препятствуют, но никоим образом не оказывают помощь в развитии
              забастовочного движения. Важно и то, чтобы человек видел в
              новостях, что другие выходят и не боятся».
            </Text>
            <Text time="19:44">
              <strong>NEXTA Live</strong>: Национальный забастовочный комитет
              выделяет по 100.000$ МТЗ, МЗКТ и Гродно Азоту. Главам других
              организованных заводских стачкомов срочно связаться в Телеграме по
              номеру +375445100511 для получения солидарной помощи от народа
              Беларуси. Забастовка и наша солидарность — то чего больше всего
              боится власть. Продолжаем бастовать до тех пор, пока наши
              требования не будут выполнены! Подробнее{" "}
              <a
                href="https://www.facebook.com/story.php?story_fbid=3455932817792265&id=100001267434629"
                target="_blank"
              >
                здесь
              </a>
            </Text>
            <Text time="20:27">
              <strong>Наша Нiва</strong>: Работнік МТЗ дзякуе ўсім і кажа:
              "Ідзём да канца!"
              <TelegramWidget
                tgLink="https://t.me/nashaniva/11099"
                height={390}
              />
            </Text>
            <Text time="20:34">
              <strong>NEXTA Live</strong>: Тысячи огоньков в центре Минска. Люди
              скандируют: «МТЗ».
              <TelegramWidget
                tgLink="https://t.me/nexta_live/8812"
                height={750}
              />
            </Text>
          </ContentCard>

          <ContentCard date="16 августа, воскресенье">
            <Text time="09:11">
              <strong>Наша Нiва</strong>: РАБОЧЫЯ МТЗ, МЭТЗ выйшлі на вуліцу,
              збіраюцца ісці на падтрымку работнікаў Мінскага завода колавых
              цягачоў, куды мае намер прыехаць Аляксандр Лукашэнка, паведамляюць
              тэлеграм-каналы.
            </Text>
            <Text time="09:39">
              <strong>Onliner</strong>: МТЗ объявил забастовку, люди покидают
              территорию завода. Забастовка пока суточная, но если не выполнят
              требования, перерастет в бессрочную
            </Text>
            <Text time="10:00">
              <strong>Белсат</strong>: "Тысячи людей, выдвинулись с территории
              МТЗ в сторону крупных промпредприятий. Через проходную работники
              завода выходили, не отмечая пропуска. Мы спросили у руководства
              предприятия, насколько сильно забастовка ударит по экономике МТЗ:
              «Очень сильно, вы даже не представляете. Я пытался объяснить это
              людям, но они не понимают. Конкуренты только аплодируют, а
              конкурентов много. Я к забастовке не присоединюсь, буду заниматься
              завод», — сказал руководитель предприятия Виталий Вовк".
            </Text>
            <Text time="10:01">
              <strong>TUT.BY новости</strong>: Работники МТЗ и МЭТЗ идут к МЗКТ.
              <TelegramWidget
                tgLink="https://t.me/tutby_official/11229"
                height={375}
              />
            </Text>
            <Text time="10:44">
              <strong>Наша Нiва</strong>: "Этот товарищ живет в сказке, — так
              ліцейшчык МТЗ, які ідзе ў калоне на МЗКЦ, пракаментаваў пагрозы
              Лукашэнкі звальняць усіх бастуючых. — Уволят нас, кто работать
              будет? У нас недобор, да и генеральный нас поддержит", — сказаў
              рабочы. 10-тысячная калона бастуючых ідзе па Партызанскім
              праспекце, хоча сустрэцца з Лукашэнкам на МЗКЦ.
            </Text>
            <Text time="11:16">
              <strong>Наша Нiва</strong>: Да МЗКЦ прыехала Марыя Калеснікава.
              Яна выступіла перад прысутнымі і прапанавала абраць кіраўніка
              стачкама МТЗ Сяргея Дылеўскага ў Каардынацыйную раду — якая можа
              стаць пераходным урадам. Бастуючыя аднадушна падтрымалі. "Сярога,
              давай!" — крычалі яны @nashaniva. Калеснікавай яны скандавалі
              "Молодец!" А пасля яе выступу скандавалі "Долбить! Долбить!
              Долбить!"
            </Text>
            <Text time="12:14">
              <strong>Выборы видишь? | TUT.BY Политика</strong>: Гендиректор МТЗ
              провел встречу с активистами завода, сообщает "Спутник". Виталий
              Вовк заявил, что не будет чинить препятствий работникам,
              выражающим свою гражданскую позицию в форме отказа от работы. И
              призвал собравшихся дать спокойно выйти на свои рабочие места тем,
              кто принял такое решение. В настоящее время на МТЗ работает корпус
              сборки тракторов, идет отгрузка готовой продукции.
            </Text>
            <Text time="13:14">
              <strong>Выборы видишь? | TUT.BY Политика</strong>: Колонна
              митингующих работников заводов следует к зданию
              Белтелерадиокомпании. — Мы прошли уже 23 километра! — радуются
              работники МТЗ В Минске заводчане и те, кто их поддерживают, идут в
              колонне уже несколько часов. По всему пути останавливаются машины,
              откуда разгружается бутылки с водой. По пути также стоят люди —
              предлагают зефир, печенье и даже солнцезащитный крем. «Нам бы
              платочки», переговариваются между собой участники митинга.
            </Text>
          </ContentCard>

          <ContentCard date="14 августа, пятница">
            <Text time="10:22">
              <strong>Беларусь головного мозга</strong>: С каждой минутой все
              больше бастующих. В центре толпы стоит директор и объясняется.
              <TelegramWidget
                tgLink="https://t.me/belamova/8979"
                height={480}
              />
            </Text>
            <Text time="10:28">
              <TelegramWidget
                tgLink="https://t.me/belamova/8982"
                height={730}
              />
            </Text>
            <Text time="10:41">
              <TelegramWidget
                tgLink="https://t.me/nexta_live/7777"
                height={730}
              />
            </Text>
            <Text time="10:58">
              <strong>NEXTA Live</strong>: МТЗ выдвинул свои требования: <br />
              - непризнание выборов <br />
              - провести новые честные выборы <br />
              - реформировать ОМОН <br />
              - освободить задержанных на мирных акциях протеста
              <TelegramWidget
                tgLink="https://t.me/nexta_live/7783"
                height={390}
              />
            </Text>
            <Text time="11:31">
              <strong>Радыё Свабода — Беларусь</strong>: Устный опрос, кто
              голосовал за Лукашенко и Тихановскую. Все за Тихановскую.
              <TelegramWidget
                tgLink="https://t.me/radiosvaboda/5862"
                height={730}
              />
            </Text>
            <Text time="12:20">
              <strong>Наша Нiва</strong>: Лукашэнка: "Как мне доложили, на МАЗе
              или МТЗ был пример один: там 20 человек решили высказать свое
              мнение, бросили работу и пошли. Завпроизводством говорит: хорошо,
              идите ребята, у меня людей хватает, вся эта зарплата вот этих
              людей. Завернулись, обратно пошли на работу". "На улице можно
              походить. Вон их, тысячами ходят. Можно присоединиться, походить.
              Но там денег если и дадут, то на два дня. Там некоторым
              приплачивают. Мы их знаем, мы показывали их. Ну на два дня дадут.
              А потом что?".
            </Text>
            <Text time="13:38">
              <strong>Беларусь головного мозга</strong>: МТЗ требует чтобы
              Лукашенко УШЕЛ!
              <TelegramWidget
                tgLink="https://t.me/belamova/9027"
                height={730}
              />
            </Text>
            <Text time="13:58">
              <strong>Наша Нiва</strong>: МТЗ СПЫНІЎ ПРАЦУ. Сход работнікаў МТЗ
              адбываўся за прахадной, журналістаў туды не прапусцілі. Але з
              вуліцы былі чуваць шмагалосыя скандаванні "Свету!" і "Жыве
              Беларусь!". Пасля сходу рабочыя і дырэктар МТЗ выйшлі за прахадную
              да журналістаў. Дырэктар прызнаў, што першая змена МТЗ працу
              спыніла. Ён не ведае, ці распачне працу другая змена. Рабочыя
              звярнулі ўвагу журналістаў, што дырэкцыя завода хацела б, каб былі
              вылучаныя толькі эканамічныя патрабаванні. Між тым, сказалі яны,
              наша першае патрабаванне, каб было неадкладна праведзена
              рэфармаванне сілавых структур, каб былі звольненыя вінаватыя ў
              збіцці людзей. Другое патрабаванне - змена ўлада ў краіны. З месца
              падзеі перадае карэспандэнт. P.S. Рабочыя МТЗ сфарміравалі стачкам
              з 23 чалавек. Яны дадалі да спісу сваіх патрабаванняў
              расфарміраванне ЦВК Ярмошынай і не проста вызваленне, а поўную
              рэабілітацыю палітвязняў. Па сабраных стачкамах звестках, пад
              рэпрэсіі папала не менш 20 работнікаў МТЗ
            </Text>
            <Text time="14:23">
              <strong>Выборы видишь? | TUT.BY Политика</strong>: Работники МТЗ —
              о причинах выхода на акцию протеста.
              <TelegramWidget
                tgLink="https://t.me/vybory_smotri/3006"
                height={395}
              />
            </Text>
            <Text time="15:00">
              <TelegramWidget
                tgLink="https://t.me/tutby_official/10730"
                height={395}
              />
            </Text>
            <Text time="15:58">
              <strong>Радыё Свабода — Беларусь</strong>: А вось што было на МТЗ.
              А 15.30 на завод прыехаў прэм’ер-міністар Раман Галоўчанка,
              перадае карэспандэнт Свабоды. Пасьля таго, як адміністрацыя
              адмовілася пускаць на тэрыторыю заводу незалежную прэсу, рабочыя
              абсьвісталі кіраўніка ўраду і пад воклічы «Сыходзь» адмовіліся зь
              ім размаўляць. Першая зьмена, якая выйшла на пляцоўку перад
              прахадной, патрабуе, каб Галоўчанка выйшаў да іх. Крычаць «Жыве
              Беларусь!» і «Сьвета! Сьвета!» — такім чынам выказваюць падтрымку
              кандыдатцы ў прэзыдэнты Сьвятлане Ціханоўскай. Работнікі кажуць,
              што патрабуюць новыя выбары, адстаўку ўраду, свабоду СМІ. Цяпер
              калёна рабочых рушыла на плошчу Незалежнасьці.
            </Text>
            <Text time="16:13">
              <strong>Радыё Свабода — Беларусь</strong>: Калёна рабочых МТЗ ідзе
              ў бок плочшы Незалежнасьці ў Менску.
              <TelegramWidget
                tgLink="https://t.me/radiosvaboda/6021"
                height={750}
              />
            </Text>
            <Text time="16:31">
              <strong>Белсат: Прямой эфир</strong>
              <YouTubeWidget src="https://www.youtube.com/embed/gLJMjlpybCQ" />
            </Text>
            <Text time="16:45">
              <strong>Кулуары KYKY</strong>: Две колонны — работники МТЗ и
              женщины в белом с цветами, которые протестуют против насилия, —
              прямо сейчас идут к Дому правительства. Там находится ЦИК.
            </Text>
            <Text time="16:57">
              <strong>Радыё Свабода — Беларусь</strong>: Перад праспэктам
              Незалежнасьці да калёны рабочых МТЗ далучыліся сотні менчукоў,
              якія стаялі ўздоўж дарогі з кветкамі і балёнікамі. Цяпер усе разам
              пайшлі па праезнай частцы ў бок плошчы Перамогі і далей да Дому
              ўраду.
              <TelegramWidget
                tgLink="https://t.me/radiosvaboda/6044"
                height={630}
              />
            </Text>
            <Text time="15:56">
              <strong>Выборы видишь? | TUT.BY Политика</strong>: На перекрестке
              возле цирка перед колонной людей появилась Мария Колесникова. Она
              показала людям сердечко и исчезла из вида.
            </Text>
            <Text time="20:25">
              <strong>TUT.BY новости</strong>: Рабочие МТЗ ушли с площади
              Независимости после того, как получили информацию о готовящихся
              провокациях. Об этом БелаПАН сообщил один из активных участников
              протеста. При этом с понедельника рабочие МТЗ планируют бастовать.
            </Text>
          </ContentCard>

          <ContentCard date="13 августа, четверг">
            <Text time="16:01">
              <TelegramWidget tgLink="https://t.me/belsat/12001" height={395} />
            </Text>
            <Text time="16:05">
              <TelegramWidget
                tgLink="https://t.me/minskimarat/1403"
                height={315}
              />
            </Text>
            <Text time="16:25">
              <strong>Выборы видишь? | TUT.BY Политика</strong>: Один из
              работников МТЗ сообщил, что работники предприятия требуют
              отпустить всех задержанных на мирных акциях, убрать с улиц ОМОН,
              провести честные перевыборы с присутствием международных
              наблюдателей и отпустить всех политических заключенных.
            </Text>
            <Text time="16:32">
              <TelegramWidget
                tgLink="https://t.me/vybory_smotri/2694"
                height={725}
              />
            </Text>
            <Text time="18:41">
              <TelegramWidget
                tgLink="https://t.me/nexta_live/7604"
                height={520}
              />
            </Text>
          </ContentCard>

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