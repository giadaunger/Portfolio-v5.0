Examensarbete:

Val av teknik:
För mitt examensarbete har jag valt att bygga en portfolio med React samt Chakra UI. Varför jag valde att använda mig utav React är för det är ett enkelt sätt att bryta ut koden till separata komponenter, så att det inte blir för mycket kod på en och samma fil. Varför jag valde att använda mig av Chakra UI är för att det medföljer redan stylade komponenter som är enkla att customize utan överdrivet mycket kod samt extärna styling filer.

Övriga tekniker:
react-dom: detta är ett paket som erbjuder DOM-specifika metoder som kan användas på översta nivån i en webbapp för att möjliggöra ett effektivt sätt att hantera DOM-element på webbsidan.

react-router-dom: när det gäller routingen i min navbar har jag valt att använda mig utav react-router-dom. I vanliga fall skulle jag ha använt mig utan “Link” functionen från react-router-dom, men jag ville komma åt “IsActive”-styling klassen och den går bara att komma åt med “NavLink” funktionen i nyare versioner av react-router-dom.

react-icons: alla iconer som finns i min portfolio är importerade från react-icons/fa, vilket innebär att de är inporterade från ​​fontawesome icon bibliotek via react.

react-slideshow-image: jag ville implementera en slideshow i min portfolio. Detta gjorde jag genom att använda mig utav react-slideshow som är en enkel react-komponent som stöder slide-, fade- och zoomeffekter. Det är lätt att anpassa och du kan redigera vissa egenskaper för att passa din design.

emailjs-com: I min portfolio har jag ett formulär där folk kan kontakta mig samt ställa frågor. Detta formulär ville jag att det skulle skickas till min mail när det skickas iväg. detta gjorde jag genom att använda mig utav EmailJS som är ett JavaScript-bibliotek som hjälper till att skicka e-postmeddelanden endast med hjälp av tekniker på klientsidan. 
Det coola med EmailJS är att inga servrar krävs; allt du behöver göra är att ansluta den till en av de e-posttjänster som stöds, skapa en e-postmall och använda EmailJS för att utlösa ett e-postmeddelande.

window.open(): Detta är en funktion som jag använde mig utav till vissa utav mina knappar. Jag ville att knapparna skulle öppna en ny flik med den giva url:en. detta löste jag med window.open() functionen. Det denna funktion gör är att den läser in en specificerad resurs till en ny eller befintlig webbläsarkontext (det vill säga en flik, ett fönster eller en iframe) under ett angivet namn.


Syfte med produktion:
Syftet med denna produktion var att jag ville fördjupa mig mer i kursen “JavaScript-ramverk”, samt i kursen “UX, Design och Layout”. 

JavaScript-ramverk:
Valde att fördjupa mig i ramvräket React. Ville förbätta min kunskap om att kunna bedömma om vad som ska brytas ut till mindre komponenter för en mer läsbar samt organiserad kod. Ville även förbättra min förmåga att kunna strukturera olika mappar samt filer i projektet, men även strukturera bättre min kod. Sen valde jag även att att fördjupa min kunskap i Chakra UI som är ett styling ramverk. Oftast så jobbar inte företag med att skriva ren CSS, vilket är det jag har föredragit att göra ända fram tills nu. Valde även att fördjupa mig i ett styling ramverk för att inte lägga ner alldeles för mycket tid att styla min portfolio.

UX, Design och Layout:
När jag har tidigare byggt portfolios har jag inte fikuserat på att det ska vara användar vänligt, att färgerna jag har valt ska funka bra ihop osv. I denna portfolio har jag lagt en tanke bakom varenda färg samt lagt tanke bakom strukturen, dvs ordningen som komponenterna renderas ut.


Arbetsprocessen:
Eftersom Chakra UI var ett helt nytt koncept för mig, valde jag att först lägga ner tid på att lära mig styling ramverket. Började med att läsa all dokumentation de hade, kollade mycket på YouTube och försökte återskapa projekt som använder sig utav Chakra UI, samt testa på att bygga något på egen hand med de olika komponenter som Chakra UI erbjuder.

När jag kände att jag hade börjat få lite mer koll på hur det funkar, satte jag igång med självaste projektet. Började med framsidan som skulle vara det första som syntes när man kommer in på min portfolio. Började med att experimentera med layouten genom att importera olika Charkra UI komponenter, dvs text, bilder samt olika former. Framsidan valde jag att bryta ut i tre olika komponenter. En komponent för headern (dvs titeln, profilbilden samt knappen som länkar till mitt CV), en komponent för “About Me”-texten och sist men inte minst en koponent för mina “Skills”.

När jag kände mig relativt nöjd med det gick jag vidare med att implementera en navigations meny i projektet. La ner väldigt mycket tid på reaserch när det gällde hur man skulle bygga en navigations meny med Chakra UI. Jag förstod inte riktigt vilka Chakra UI komponenter jag skulle använda mig utav för menyn. Slutade med att jag la det åt sidan och byggde en naviagations meny med ren HTML samt funktionerna som tillkommer med react-router-dom, för att kunna bygga vidare resterande sidor som skulle synas i portfolion.

När jag hade en fungerande meny fortsatte jag att bygga contact och project sidan. Dessa två valde jag att enbart bryta ut i två separata componenter, med tanke på att dessa två sidor inte skulle innehålla särskilt mycket kod. Efter det gick jag vidare att bygga en separat komponent för en footer. I footern la jag enbart till en copyright text, min loga samt knappar som är länkade till min GitHub, LinkedIn samt Facebook.

När jag var klar med allt detta började jag fokusera mer på stylingen. Hittills det lilla stylingen som jag hade skrivit var “inlne-styling” direkt i Chakra UI komponenterna. Problemet med det var att jag märkte att många utav komponenterna hade samma styling, dvs mycket upprepande kod. Valde därför att testa att använda mig utav något som kallas för “ExtendTheme”. ExtendTheme går ut på att man ska skriva all styling i en sperat JS fil som man sen importerar. På detta sätt undviker man allt för mycket kod i komponenterna samt så undviker man upprepande kod. Jag kollade på så mycket youtube tutorials samt frågade om råd, men lyckades inte. Valde därmed att gå tillbaka till att skriva stylingen direkt i komponenterna trots upprepande kod.

Efter att ha testat mig fram om hur jag ville att layouten skulle se ut, samt vilka färger som skulle passa best la jag till en sista kopmonent på framsidan. Den sista komponenten var en bild slideshow som visade alla mina certifikat/diplom från kurser jag har tagit på CodeCademy.


Utvecklingspotential:
Det som skulle kunna utväcklas är att jag listar ut hur man använder sig utav ExtendTheme. Det skulle koden att se mycket renare ut samt få koden att bli mer läsbar. Då skulle jag även kunna implementera dark/light mode. Dark/light mode är en sån simpel sakt att implementera med Chakra UI, men som skulle göra en enorm skillnad.
