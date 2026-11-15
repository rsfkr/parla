/* Parla — German A1–B1 conversation deck */
window.LANGUAGES = window.LANGUAGES || {};

window.LANGUAGES.de = {
  id: "de",
  name: "Deutsch",
  englishName: "German",
  flag: "🇩🇪",
  locale: "de-DE",
  level: "A1–B1 · Everyday fluency",
  tagline: "From Guten Tag to real conversations.",
  gradient: ["#3A2B1E", "#A66A16", "#E3A83B"],
  accent: "#A66A16",
  units: [
    {
      id: "de-greet",
      title: "Greetings & introductions",
      local: "Begrüßung und Vorstellung",
      level: "A1",
      icon: "👋",
      tint: "#FBF1E2",
      blurb: "Meet someone, say who you are, and use du or Sie correctly.",
      phrases: [
        { target: "Hallo!", en: "Hello!", say: "HAH-loh", note: "Works any time of day, but only with people you know. Between strangers, Guten Tag is safer." },
        { target: "Guten Morgen.", en: "Good morning.", say: "GOO-ten MOR-gen" },
        { target: "Guten Tag.", en: "Good day.", say: "GOO-ten TAHK", note: "The all-purpose polite greeting from morning until evening." },
        { target: "Guten Abend.", en: "Good evening.", say: "GOO-ten AH-bent" },
        { target: "Wie geht's?", en: "How's it going?", say: "vee GATES", note: "Informal. With strangers or older people: Wie geht es Ihnen?" },
        { target: "Mir geht es gut, danke.", en: "I'm well, thanks.", say: "meer geyt es goot DAHN-keh" },
        { target: "Ich heiße …", en: "My name is …", say: "ikh HY-seh", note: "Literally 'I am called'. Add your name next." },
        { target: "Freut mich!", en: "Nice to meet you!", say: "froyt mikh" },
        { target: "Woher kommst du?", en: "Where are you from? (informal)", say: "vo-HAIR komst doo", note: "Formal: Woher kommen Sie? Answer with Ich komme aus…" },
        { target: "Ich komme aus …", en: "I'm from …", say: "ikh KOM-meh ows" },
        { target: "Ich spreche ein bisschen Deutsch.", en: "I speak a little German.", say: "ikh SHPREH-kheh ine BISS-khen doych", note: "Say this early. Germans often switch to English — this line invites them to stay in German." },
        { target: "Ich verstehe nicht.", en: "I don't understand.", say: "ikh fair-SHTAY-eh nikht" },
        { target: "Können Sie das wiederholen?", en: "Can you repeat that?", say: "KÖN-nen zee dahs vee-der-HOH-len" },
        { target: "Bis morgen!", en: "See you tomorrow!", say: "biss MOR-gen" }
      ]
    },
    {
      id: "de-cafe",
      title: "Cafés & restaurants",
      local: "Im Café und Restaurant",
      level: "A1",
      icon: "☕",
      tint: "#FBF0E4",
      blurb: "Order politely, ask what's good, and get the bill.",
      phrases: [
        { target: "Einen Kaffee, bitte.", en: "A coffee, please.", say: "EYE-nen kaf-FAY BIT-teh", note: "Einen because Kaffee is masculine and the thing you're ordering (accusative)." },
        { target: "Ich hätte gern einen Cappuccino.", en: "I'd like a cappuccino.", say: "ikh HET-teh gairn EYE-nen kap-poo-CHEE-noh", note: "Ich hätte gern… is the polite ordering formula. Use it everywhere." },
        { target: "Einen Tisch für zwei, bitte.", en: "A table for two, please.", say: "EYE-nen tish fewr tsvy BIT-teh" },
        { target: "Was empfehlen Sie?", en: "What do you recommend?", say: "vahs em-PFAY-len zee" },
        { target: "Ich bin Vegetarier.", en: "I'm vegetarian. (male)", say: "ikh bin veh-geh-TAH-ree-er", note: "A woman says Vegetarierin. The -in ending marks female jobs and roles." },
        { target: "Ohne Gluten, bitte.", en: "Gluten-free, please.", say: "OH-neh GLOO-ten BIT-teh" },
        { target: "Stilles oder sprudelndes Wasser?", en: "Still or sparkling water?", say: "SHTIL-les OH-der SHPROO-delndes VAH-ser", note: "You'll be asked this constantly. Stilles = no bubbles." },
        { target: "Die Rechnung, bitte.", en: "The bill, please.", say: "dee REKH-noong BIT-teh", note: "In many places you ask for the bill at the table; card payment is common but cash is still king in small cafés." },
        { target: "Kann ich mit Karte zahlen?", en: "Can I pay by card?", say: "kahn ikh mit KAR-teh TSAH-len" },
        { target: "Das schmeckt sehr gut!", en: "That tastes very good!", say: "dahs shmekt zair goot" },
        { target: "Ein Croissant, bitte.", en: "A croissant, please.", say: "ine krwah-SAHNG" },
        { target: "Guten Appetit!", en: "Enjoy your meal!", say: "GOO-ten ah-peh-TEET" }
      ]
    },
    {
      id: "de-around",
      title: "Getting around",
      local: "Unterwegs",
      level: "A1",
      icon: "🚉",
      tint: "#E9F1FB",
      blurb: "Directions, tickets, platforms — the survival kit.",
      phrases: [
        { target: "Wo ist der Bahnhof?", en: "Where is the train station?", say: "voh ist dair BAHN-hohf" },
        { target: "Wie komme ich ins Zentrum?", en: "How do I get to the center?", say: "vee KOM-meh ikh ins TSEN-troom" },
        { target: "Ist es weit?", en: "Is it far?", say: "ist es vite" },
        { target: "Geradeaus.", en: "Straight ahead.", say: "geh-RAH-deh-ows" },
        { target: "Rechts / links.", en: "Right / left.", say: "rekhts / links", alt: ["Rechts", "Links"] },
        { target: "Eine Fahrkarte nach Berlin, bitte.", en: "A ticket to Berlin, please.", say: "EYE-neh FAHR-kar-teh nakh bair-LEEN BIT-teh" },
        { target: "Wann fährt der Zug ab?", en: "When does the train leave?", say: "vahn fairt dair tsook ap" },
        { target: "Muss ich umsteigen?", en: "Do I have to change trains?", say: "moos ikh OOM-shty-gen" },
        { target: "Ich habe mich verlaufen.", en: "I got lost.", say: "ikh HAH-beh mikh fair-LOW-fen" },
        { target: "Können Sie mir ein Taxi rufen?", en: "Can you call me a taxi?", say: "KÖN-nen zee meer ine TAK-see ROO-fen" },
        { target: "Wie lange dauert das?", en: "How long does it take?", say: "vee LAHNG-eh DOW-ert dahs" },
        { target: "Der nächste Zug fährt um neun.", en: "The next train leaves at nine.", say: "dair NAYK-steh tsook fairt oom noyn" }
      ]
    },
    {
      id: "de-shop",
      title: "Shopping & money",
      local: "Einkaufen",
      level: "A1",
      icon: "🛍️",
      tint: "#FDECEF",
      blurb: "Prices, sizes, and paying — with the right article.",
      phrases: [
        { target: "Wie viel kostet das?", en: "How much is that?", say: "vee feel KOS-tet dahs" },
        { target: "Kann ich das anprobieren?", en: "Can I try this on?", say: "kahn ikh dahs AHN-proh-bee-ren" },
        { target: "Haben Sie das in einer größeren Größe?", en: "Do you have this in a bigger size?", say: "HAH-ben zee dahs in EYE-ner GRUR-ser-en GRUR-seh", note: "Two different words for 'bigger' here: größer is the comparison, Größe is the size." },
        { target: "Das ist zu teuer.", en: "That's too expensive.", say: "dahs ist tsoo TOY-er" },
        { target: "Gibt es einen Rabatt?", en: "Is there a discount?", say: "geept es EYE-nen rah-BAT" },
        { target: "Ich möchte bar bezahlen.", en: "I'd like to pay cash.", say: "ikh MÖKH-teh bahr beh-TSAH-len" },
        { target: "Kann ich die Quittung haben?", en: "Can I have the receipt?", say: "kahn ikh dee KVIT-toong HAH-ben" },
        { target: "Wann schließen Sie?", en: "When do you close?", say: "vahn SHLEE-sen zee", note: "German shops are often closed on Sundays. Plan around it." },
        { target: "Ich suche ein Geschenk.", en: "I'm looking for a gift.", say: "ikh ZOO-kheh ine geh-SHENK" },
        { target: "Gut, ich nehme es.", en: "Fine, I'll take it.", say: "goot, ikh NAY-meh es" }
      ]
    },
    {
      id: "de-small",
      title: "Small talk & daily life",
      local: "Alltag und Smalltalk",
      level: "A1",
      icon: "💬",
      tint: "#F1EDFD",
      blurb: "Keep the conversation going after the first hello.",
      phrases: [
        { target: "Wie geht es dir?", en: "How are you? (informal)", say: "vee geyt es deer", note: "Informal. Formal: Wie geht es Ihnen?" },
        { target: "Nicht schlecht.", en: "Not bad.", say: "nikht shlekht" },
        { target: "Was für ein schöner Tag!", en: "What a nice day!", say: "vahs fewr ine SHÖ-ner tahk" },
        { target: "Was machst du in deiner Freizeit?", en: "What do you do in your free time?", say: "vahs makhst doo in DY-ner FRY-tsite" },
        { target: "Ich lese gern.", en: "I like reading.", say: "ikh LAY-zeh gairn", note: "gern after a verb means 'like doing it'. Ich koche gern = I like cooking." },
        { target: "Morgen arbeite ich.", en: "Tomorrow I'm working.", say: "MOR-gen AR-by-teh ikh", note: "Word order! The verb takes position two: Morgen (1) arbeite (2) ich." },
        { target: "Ich habe Hunger.", en: "I'm hungry.", say: "ikh HAH-beh HOONG-er" },
        { target: "Ich habe Durst.", en: "I'm thirsty.", say: "ikh HAH-beh doorst" },
        { target: "Wo wohnst du?", en: "Where do you live?", say: "voh vohnst doo" },
        { target: "Ich wohne in Berlin.", en: "I live in Berlin.", say: "ikh VOH-neh in bair-LEEN" },
        { target: "Sprichst du Englisch?", en: "Do you speak English?", say: "shprikhst doo ENG-lish" },
        { target: "Langsamer, bitte.", en: "Slower, please.", say: "LAHNG-zah-mer BIT-teh" },
        { target: "Bis später!", en: "See you later!", say: "biss SHPET-er" }
      ]
    },
    {
      id: "de-help",
      title: "Help & emergencies",
      local: "Hilfe und Notfälle",
      level: "A1",
      icon: "🆘",
      tint: "#FDECEA",
      blurb: "Say clearly that you need help — and understand the answer.",
      phrases: [
        { target: "Hilfe!", en: "Help!", say: "HIL-feh" },
        { target: "Ich brauche Hilfe.", en: "I need help.", say: "ikh BROW-kheh HIL-feh" },
        { target: "Rufen Sie die Polizei!", en: "Call the police!", say: "ROO-fen zee dee poh-lee-TSY" },
        { target: "Mir geht es nicht gut.", en: "I don't feel well.", say: "meer geyt es nikht goot" },
        { target: "Wo ist die Apotheke?", en: "Where's the pharmacy?", say: "voh ist dee ah-poh-TAY-keh" },
        { target: "Ich habe meinen Pass verloren.", en: "I lost my passport.", say: "ikh HAH-beh MY-nen pahs fair-LOH-ren" },
        { target: "Es ist ein Notfall.", en: "It's an emergency.", say: "es ist ine NOHT-fahl" },
        { target: "Sprechen Sie Englisch?", en: "Do you speak English?", say: "SHPREKH-en zee ENG-lish" },
        { target: "Können Sie mir helfen?", en: "Can you help me?", say: "KÖN-nen zee meer HEL-fen" },
        { target: "Ich habe eine Reservierung.", en: "I have a reservation.", say: "ikh HAH-beh EYE-neh reh-zer-VEE-roong" }
      ]
    },
    {
      id: "de-hotel",
      title: "Hotels & travel",
      local: "Im Hotel",
      level: "A1",
      icon: "🏨",
      tint: "#EAF5F7",
      blurb: "Check in, fix the Wi-Fi, and leave your bags.",
      phrases: [
        { target: "Ich habe eine Reservierung auf den Namen Rossi.", en: "I have a reservation under the name Rossi.", say: "ikh HAH-beh EYE-neh reh-zer-VEE-roong owf dayn NAH-men ROS-see" },
        { target: "Ich hätte gern ein Doppelzimmer.", en: "I'd like a double room.", say: "ikh HET-teh gairn ine DOP-pel-tsim-mer" },
        { target: "Wann gibt es Frühstück?", en: "When is breakfast?", say: "vahn geept es FREW-shtook" },
        { target: "Das WLAN funktioniert nicht.", en: "The Wi-Fi isn't working.", say: "dahs VAY-lahn foonk-tsy-oh-NEERT nikht" },
        { target: "Kann ich meinen Koffer hier lassen?", en: "Can I leave my suitcase here?", say: "kahn ikh MY-nen KOF-fer heer LAH-sen" },
        { target: "Ich möchte auschecken.", en: "I'd like to check out.", say: "ikh MÖKH-teh OWS-chek-en" },
        { target: "Das Zimmer ist im zweiten Stock.", en: "The room is on the second floor.", say: "dahs TSIM-mer ist im TSVY-ten shtok", note: "German floors: Erdgeschoss is ground level, erster Stock is one floor up." },
        { target: "Können Sie mich um sieben wecken?", en: "Can you wake me at seven?", say: "KÖN-nen zee mikh oom ZEE-ben VEK-en" }
      ]
    },
    {
      id: "de-plans",
      title: "Plans & work",
      local: "Pläne und Arbeit",
      level: "A1",
      icon: "📅",
      tint: "#FFF2E2",
      blurb: "Make a plan, accept, decline, and talk about your job.",
      phrases: [
        { target: "Was machst du beruflich?", en: "What do you do for work?", say: "vahs makhst doo beh-ROOF-likh" },
        { target: "Ich arbeite in einem Büro.", en: "I work in an office.", say: "ikh AR-by-teh in EYE-nem bu-ROH" },
        { target: "Ich lerne Deutsch.", en: "I'm learning German.", say: "ikh LAIR-neh doych" },
        { target: "Hast du Lust auf einen Kaffee?", en: "Want to grab a coffee?", say: "hahst doo loost owf EYE-nen kaf-FAY", note: "Lust auf… = in the mood for… Use it to invite people casually." },
        { target: "Treffen wir uns um sechs?", en: "Shall we meet at six?", say: "TREF-fen veer oons oom zeks" },
        { target: "Tut mir leid, ich kann nicht.", en: "Sorry, I can't.", say: "toot meer lite, ikh kahn nikht" },
        { target: "Gerne!", en: "Gladly! / Yes, please!", say: "GAIR-neh", note: "The all-purpose friendly yes. Also means 'you're welcome' when someone thanks you." },
        { target: "Ich schreibe dir später.", en: "I'll text you later.", say: "ikh SHRY-beh deer SHPET-er" },
        { target: "Bis bald!", en: "See you soon!", say: "biss bahlt" },
        { target: "Schönes Wochenende!", en: "Have a nice weekend!", say: "SHÖ-nes VOKH-en-en-deh" }
      ]
    },
    {
      id: "de-family",
      title: "Family & people",
      local: "Familie und Menschen",
      level: "A1",
      icon: "👨‍👩‍👧",
      tint: "#FDEFF4",
      blurb: "Talk about the people around you — and the ones you go home to.",
      phrases: [
        { target: "Hast du Geschwister?", en: "Do you have brothers or sisters?", say: "hahst doo geh-SHVIS-ter", note: "Informal. Formal: Haben Sie Geschwister?" },
        { target: "Ich habe einen Bruder und eine Schwester.", en: "I have a brother and a sister.", say: "ikh HAH-beh EYE-nen BROO-der oont EYE-neh SHVES-ter" },
        { target: "Bist du verheiratet?", en: "Are you married?", say: "bist doo fair-HY-rah-tet" },
        { target: "Nein, ich bin Single.", en: "No, I'm single.", say: "nine ikh bin SING-el" },
        { target: "Mein Vater und meine Mutter wohnen in Hamburg.", en: "My father and mother live in Hamburg.", say: "mine FAH-ter oont MY-neh MOOT-ter VOH-nen in HAHM-boork", note: "Possessives agree with the noun: mein Vater (masculine), meine Mutter (feminine)." },
        { target: "Meine Großeltern sind achtzig.", en: "My grandparents are eighty.", say: "MY-neh GROS-el-tern zint AKH-tsikh" },
        { target: "Mein Sohn ist drei Jahre alt.", en: "My son is three years old.", say: "mine zohn ist dry YAH-reh alt" },
        { target: "Wie heißt deine Frau?", en: "What's your wife's name?", say: "vee hyst DY-neh frow" },
        { target: "Er ist sehr nett.", en: "He's very nice.", say: "air ist zair net", note: "Nett means kind or pleasant — the everyday word for a good person." },
        { target: "Wir verstehen uns gut.", en: "We get along well.", say: "veer fair-SHTAY-en oons goot" },
        { target: "Das ist meine Schwester.", en: "This is my sister.", say: "dahs ist MY-neh SHVES-ter" },
        { target: "Wir sind vier Personen in der Familie.", en: "There are four of us in the family.", say: "veer zint feer pair-ZOH-nen in dair fah-MEE-lee-eh" }
      ]
    },
    {
      id: "de-home",
      title: "Home & neighborhood",
      local: "Wohnen und Nachbarschaft",
      level: "A1",
      icon: "🏠",
      tint: "#EFF6EC",
      blurb: "Describe where you live, fix what's broken, and find what you need nearby.",
      phrases: [
        { target: "Ich wohne in einer Wohnung.", en: "I live in an apartment.", say: "ikh VOH-neh in EYE-ner VOH-noong" },
        { target: "Ich wohne im dritten Stock.", en: "I live on the third floor.", say: "ikh VOH-neh im DRIT-ten shtok", note: "The ground floor is Erdgeschoss; erster Stock is one floor up." },
        { target: "Mein Zimmer ist sehr hell.", en: "My room is very bright.", say: "mine TSIM-mer ist zair hel" },
        { target: "Das Bad ist rechts.", en: "The bathroom is on the right.", say: "dahs baht ist rekhts" },
        { target: "Gibt es hier in der Nähe einen Supermarkt?", en: "Is there a supermarket nearby?", say: "geept es heer in dair NAY-eh EYE-nen ZOO-per-markt" },
        { target: "Meine Nachbarschaft ist ruhig.", en: "My neighborhood is quiet.", say: "MY-neh NAHKH-bar-shahft ist ROO-ikh" },
        { target: "Ich muss putzen.", en: "I have to clean.", say: "ikh moos POOT-sen" },
        { target: "Ich spüle das Geschirr.", en: "I'm washing the dishes.", say: "ikh SHPOO-leh dahs geh-SHEER" },
        { target: "Die Waschmaschine ist kaputt.", en: "The washing machine is broken.", say: "dee VAHSH-mah-shee-neh ist kah-POOT", note: "Kaputt is the everyday word for broken. For something not working: funktioniert nicht." },
        { target: "Kann ich dein WLAN benutzen?", en: "Can I use your Wi-Fi?", say: "kahn ikh dine VAY-lahn beh-NOOT-sen" },
        { target: "Ich mag meinen Balkon.", en: "I like my balcony.", say: "ikh mahk MY-nen bal-KOHN" },
        { target: "Die Heizung funktioniert nicht.", en: "The heating isn't working.", say: "dee HY-tsoong foonk-tsy-oh-NEERT nikht" }
      ]
    },
    {
      id: "de-food",
      title: "Food & the market",
      local: "Essen und Markt",
      level: "A1",
      icon: "🥕",
      tint: "#FBF3DF",
      blurb: "Buy fresh food by weight, cook at home, and say what you don't want.",
      phrases: [
        { target: "Ich hätte gern ein Kilo Tomaten.", en: "I'd like a kilo of tomatoes.", say: "ikh HET-teh gairn ine KEE-loh toh-MAH-ten" },
        { target: "Was kosten die Äpfel?", en: "How much are the apples?", say: "vahs KOS-ten dee EP-fel", note: "Kostet for one item, kosten for several: Was kostet das? / Was kosten die Äpfel?" },
        { target: "Ist das frisch?", en: "Is it fresh?", say: "ist dahs frish" },
        { target: "Hundert Gramm Schinken, bitte.", en: "A hundred grams of ham, please.", say: "HOON-dert grahm SHINK-en BIT-teh" },
        { target: "Ich nehme das.", en: "I'll take that.", say: "ikh NAY-meh dahs" },
        { target: "Ich koche heute Abend Nudeln.", en: "I'm cooking pasta tonight.", say: "ikh KOKH-eh HOY-teh AH-bent NOO-deln" },
        { target: "Ich koche gern.", en: "I like cooking.", say: "ikh KOKH-eh gairn", note: "gern after a verb means you like doing it." },
        { target: "Ich brauche Salz.", en: "I need salt.", say: "ikh BROW-kheh zahlts" },
        { target: "Ohne Zwiebel, bitte.", en: "No onion, please.", say: "OH-neh TSVEE-bel BIT-teh", note: "Ohne means without. Use it for allergies too: ohne Gluten, ohne Laktose." },
        { target: "Das ist zu salzig.", en: "It's too salty.", say: "dahs ist tsoo ZAHL-tsikh" },
        { target: "Kann ich eine Tüte haben?", en: "Can I have a bag?", say: "kahn ikh EYE-neh TOO-teh HAH-ben" },
        { target: "Der Markt ist morgens geöffnet.", en: "The market is open in the morning.", say: "dair markt ist MOR-gens geh-ÖF-net" }
      ]
    },
    {
      id: "de-health",
      title: "Health & the doctor",
      local: "Gesundheit und Arzt",
      level: "A2",
      icon: "🩺",
      tint: "#FCEDF0",
      blurb: "Describe a symptom clearly and get the right medicine.",
      phrases: [
        { target: "Ich habe Kopfschmerzen.", en: "I have a headache.", say: "ikh HAH-beh KOPF-shmair-tsen", note: "German often uses a compound noun: Kopf + Schmerzen. Halsschmerzen, Zahnschmerzen work the same way." },
        { target: "Ich habe Halsschmerzen.", en: "I have a sore throat.", say: "ikh HAH-beh HAHLTS-shmair-tsen" },
        { target: "Ich habe Fieber.", en: "I have a fever.", say: "ikh HAH-beh FEE-ber" },
        { target: "Ich fühle mich müde.", en: "I feel tired.", say: "ikh FOO-leh mikh MOO-deh" },
        { target: "Ich möchte einen Termin beim Arzt.", en: "I'd like an appointment with the doctor.", say: "ikh MÖKH-teh EYE-nen ter-MEEN bime artst" },
        { target: "Ich brauche ein Medikament.", en: "I need medicine.", say: "ikh BROW-kheh ine meh-dee-kah-MENT" },
        { target: "Ich bin allergisch gegen Penicillin.", en: "I'm allergic to penicillin.", say: "ikh bin ah-LER-gish GAY-gen peh-nee-tsee-LEEN" },
        { target: "Ich habe eine Tablette genommen.", en: "I took a tablet.", say: "ikh HAH-beh EYE-neh tah-BLET-teh geh-NOM-en" },
        { target: "Ich muss mich ausruhen.", en: "I need to rest.", say: "ikh moos mikh OWS-roo-en" },
        { target: "Rufen Sie einen Krankenwagen!", en: "Call an ambulance!", say: "ROO-fen zee EYE-nen KRAHN-ken-vah-gen" },
        { target: "Es tut hier weh.", en: "It hurts here.", say: "es toot heer vay" },
        { target: "Mir geht es besser, danke.", en: "I'm better, thanks.", say: "meer geyt es BES-ser DAHN-keh" }
      ]
    },
    {
      id: "de-weather",
      title: "Weather & seasons",
      local: "Wetter und Jahreszeiten",
      level: "A1",
      icon: "🌤️",
      tint: "#E8F4FA",
      blurb: "The safest small talk in Germany — and how to plan around it.",
      phrases: [
        { target: "Wie ist das Wetter?", en: "What's the weather like?", say: "vee ist dahs VET-ter" },
        { target: "Es ist heiß.", en: "It's hot.", say: "es ist hice" },
        { target: "Es ist kalt.", en: "It's cold.", say: "es ist kalt" },
        { target: "Es regnet.", en: "It's raining.", say: "es REK-net", note: "From regnen. Es is the dummy subject, just like English 'it'." },
        { target: "Die Sonne scheint.", en: "The sun is shining.", say: "dee ZON-neh shyint" },
        { target: "Es ist windig.", en: "It's windy.", say: "es ist VIN-dikh" },
        { target: "Morgen schneit es.", en: "Tomorrow it will snow.", say: "MOR-gen shnite es", note: "The verb takes position two, so es moves after schneit." },
        { target: "Es sind zwanzig Grad.", en: "It's twenty degrees.", say: "es zint TSVAHN-tsikh graht" },
        { target: "Ich mag den Frühling.", en: "I like spring.", say: "ikh mahk dane FREW-ling" },
        { target: "Im Sommer fahren wir ans Meer.", en: "In summer we go to the sea.", say: "im ZOM-mer FAH-ren veer ahns mair" },
        { target: "Ich habe meinen Regenschirm vergessen.", en: "I forgot my umbrella.", say: "ikh HAH-beh MY-nen RAY-gen-shirm fair-GES-sen" },
        { target: "Hoffentlich wird das Wetter schön.", en: "Hopefully the weather will be nice.", say: "HOF-ent-likh veert dahs VET-ter shön" }
      ]
    },
    {
      id: "de-opinions",
      title: "Opinions & feelings",
      local: "Meinungen und Gefühle",
      level: "A2",
      icon: "💭",
      tint: "#EFEDFB",
      blurb: "Say what you think, agree, disagree — and stay friends.",
      phrases: [
        { target: "Meiner Meinung nach ist das eine gute Idee.", en: "In my opinion, that's a good idea.", say: "MY-ner MY-noong nakh ist dahs EYE-neh GOO-teh ee-DAY", note: "Meiner Meinung nach is a fixed phrase. The verb still takes position two." },
        { target: "Ich bin einverstanden.", en: "I agree.", say: "ikh bin INE-fair-shtahn-den" },
        { target: "Ich bin nicht einverstanden.", en: "I disagree.", say: "ikh bin nikht INE-fair-shtahn-den", note: "Softer: Da bin ich anderer Meinung — I see it differently." },
        { target: "Ich finde das interessant.", en: "I find that interesting.", say: "ikh FIN-deh dahs in-teh-res-AHNT" },
        { target: "Das scheint mir richtig.", en: "That seems right to me.", say: "dahs shynt meer RIKH-tikh" },
        { target: "Ich bevorzuge den Zug.", en: "I prefer the train.", say: "ikh beh-FOR-tsoo-geh dane tsook" },
        { target: "Das gefällt mir überhaupt nicht.", en: "I don't like that at all.", say: "dahs geh-FELT meer OO-ber-howpt nikht" },
        { target: "Ich bin glücklich.", en: "I'm happy.", say: "ikh bin GLOOK-likh" },
        { target: "Ich bin ein bisschen nervös.", en: "I'm a bit nervous.", say: "ikh bin ine BISS-khen nair-VÖS" },
        { target: "Ich werde schnell wütend.", en: "I get angry quickly.", say: "ikh VAIR-deh shnel VOO-tent" },
        { target: "Was denkst du darüber?", en: "What do you think about it?", say: "vahs denkst doo dah-ROO-ber" },
        { target: "Das kommt darauf an.", en: "It depends.", say: "dahs komt dah-ROWF ahn" }
      ]
    },
    {
      id: "de-past",
      title: "Talking about the past",
      local: "Die Vergangenheit",
      level: "A2",
      icon: "⏳",
      tint: "#F0EFEA",
      blurb: "Tell someone what you did yesterday — the heart of real conversation.",
      phrases: [
        { target: "Gestern bin ich ins Kino gegangen.", en: "Yesterday I went to the cinema.", say: "GES-tern bin ikh ins KEE-noh geh-GAHNG-en", note: "The Perfekt uses bin for movement verbs: ich bin gegangen." },
        { target: "Ich habe eine Pizza gegessen.", en: "I ate a pizza.", say: "ikh HAH-beh EYE-neh PEET-sah geh-GES-sen" },
        { target: "Wir haben Rom besucht.", en: "We visited Rome.", say: "veer HAH-ben rohm beh-ZOOKHT" },
        { target: "Warst du zu Hause?", en: "Were you at home?", say: "varst doo tsoo HOW-zeh" },
        { target: "Ich habe nicht gut geschlafen.", en: "I didn't sleep well.", say: "ikh HAH-beh nikht goot geh-SHLAH-fen" },
        { target: "Ich bin spät angekommen.", en: "I arrived late.", say: "ikh bin shpayt AHN-geh-kom-men" },
        { target: "Was hast du gestern gemacht?", en: "What did you do yesterday?", say: "vahs hahst doo GES-tern geh-MAKHT" },
        { target: "Es war wunderschön.", en: "It was wonderful.", say: "es var VOON-der-shön" },
        { target: "Ich habe meine Frau in Berlin kennengelernt.", en: "I met my wife in Berlin.", say: "ikh HAH-beh MY-neh frow in bair-LEEN KEN-en-geh-lairnt", note: "Kennenlernen is separable: kennen + gelernt." },
        { target: "Wie lange lernst du schon Deutsch?", en: "How long have you been learning German?", say: "vee LAHNG-eh lairnst doo shohn doych" },
        { target: "Ich lerne seit zwei Jahren Deutsch.", en: "I've been learning German for two years.", say: "ikh LAIR-neh zite tsvy YAH-ren doych", note: "German uses the present + seit for ongoing time: ich lerne seit zwei Jahren." },
        { target: "Ich war noch nie dort.", en: "I've never been there.", say: "ikh var nokh nee dort" }
      ]
    },
    {
      id: "de-future",
      title: "Plans & the future",
      local: "Pläne und Zukunft",
      level: "A2",
      icon: "🌅",
      tint: "#EAF6F0",
      blurb: "Make plans, share hopes, and talk about what comes next.",
      phrases: [
        { target: "Diesen Sommer werde ich nach Italien reisen.", en: "This summer I'll travel to Italy.", say: "DEE-zen ZOM-mer VAIR-deh ikh nakh ee-TAH-lee-en RY-zen", note: "Werden + infinitive is the future. The verb stays at the end." },
        { target: "Morgen fahre ich nach München.", en: "Tomorrow I'm going to Munich.", say: "MOR-gen FAH-reh ikh nakh MOON-khen", note: "Present tense + a time word is the most natural near future." },
        { target: "Ich habe vor, mehr zu lernen.", en: "I intend to study more.", say: "ikh HAH-beh for mair tsoo LAIR-nen" },
        { target: "Ich hoffe, Arbeit zu finden.", en: "I hope to find work.", say: "ikh HOF-feh AR-bite tsoo FIN-den" },
        { target: "Wenn ich kann, komme ich auch.", en: "If I can, I'll come too.", say: "ven ikh kahn KOM-meh ikh owkh" },
        { target: "Wir sehen uns nächste Woche.", en: "See you next week.", say: "veer ZAY-en oons NAYK-steh VOKH-eh" },
        { target: "Was machst du danach?", en: "What will you do afterwards?", say: "vahs makhst doo dah-NAHKH" },
        { target: "Ich glaube, ich bleibe hier.", en: "I think I'll stay here.", say: "ikh GLOW-beh ikh BLY-beh heer" },
        { target: "Ich möchte kochen lernen.", en: "I want to learn to cook.", say: "ikh MÖKH-teh KOKH-en LAIR-nen" },
        { target: "Alles wird gut.", en: "Everything will be fine.", say: "AH-les veert goot" },
        { target: "Irgendwann komme ich zurück.", en: "Sooner or later I'll come back.", say: "IR-gent-vahn KOM-meh ikh tsoo-ROOK" },
        { target: "Ich schreibe dir, wenn ich ankomme.", en: "I'll text you when I arrive.", say: "ikh SHRY-beh deer ven ikh AHN-kom-meh" }
      ]
    },
    {
      id: "de-tech",
      title: "Phone & technology",
      local: "Telefon und Technik",
      level: "A2",
      icon: "📱",
      tint: "#EDF2F9",
      blurb: "Answer a call, fix a connection, and survive a dead battery.",
      phrases: [
        { target: "Ja, hallo?", en: "Hello? (on the phone)", say: "yah HAH-loh", note: "Germans often answer with their surname. Hallo alone is fine between friends." },
        { target: "Wie schreibt man das?", en: "How do you spell that?", say: "vee shript mahn dahs" },
        { target: "Schickst du mir eine Nachricht?", en: "Can you send me a message?", say: "shikst doo meer EYE-neh NAHKH-rikht" },
        { target: "Mein Handy hat keinen Akku.", en: "My phone has no battery.", say: "mine HAHN-dee haht KY-nen AH-koo", note: "Handy is the everyday word for a mobile phone; Akku is the battery." },
        { target: "Ich habe keinen Empfang.", en: "I have no signal.", say: "ikh HAH-beh KY-nen em-PFAHNG" },
        { target: "Wie lautet das WLAN-Passwort?", en: "What's the Wi-Fi password?", say: "vee LOW-tet dahs VAY-lahn PAHS-vort" },
        { target: "Ich habe die Verbindung verloren.", en: "I lost the connection.", say: "ikh HAH-beh dee fair-BIN-doong fair-LOH-ren" },
        { target: "Kann ich mein Handy aufladen?", en: "Can I charge my phone?", say: "kahn ikh mine HAHN-dee OWF-lah-den" },
        { target: "Ich rufe dich später an.", en: "I'll call you later.", say: "ikh ROO-feh dikh SHPET-er ahn", note: "Anrufen is separable: ich rufe ... an." },
        { target: "Ich habe deine Nachricht bekommen.", en: "I got your message.", say: "ikh HAH-beh DY-neh NAHKH-rikht beh-KOM-men" },
        { target: "Ich lade eine App herunter.", en: "I'm downloading an app.", say: "ikh LAH-deh EYE-neh ap heh-ROON-ter", note: "Herunterladen is separable too: ich lade ... herunter." },
        { target: "Die Website funktioniert nicht.", en: "The website isn't working.", say: "dee VEB-site foonk-tsy-oh-NEERT nikht" }
      ]
    },
    {
      id: "de-culture",
      title: "Culture & free time",
      local: "Kultur und Freizeit",
      level: "A2",
      icon: "🎭",
      tint: "#FBF0F2",
      blurb: "Invite someone out, talk about films and music, and book a seat.",
      phrases: [
        { target: "Hast du Lust, ins Kino zu gehen?", en: "Do you feel like going to the cinema?", say: "hahst doo loost ins KEE-noh tsoo GAY-en" },
        { target: "Welchen Film empfiehlst du?", en: "Which film do you recommend?", say: "VEL-khen film em-PFEELST doo" },
        { target: "Ich mag deutsche Musik.", en: "I like German music.", say: "ikh mahk DOY-cheh moo-ZEEK" },
        { target: "Ich spiele Gitarre.", en: "I play the guitar.", say: "ikh SHPEE-leh gee-TAR-reh", note: "Spielen is for instruments, games, and sports." },
        { target: "Ich habe ein gutes Buch gelesen.", en: "I read a good book.", say: "ikh HAH-beh ine GOO-tes book geh-LAY-zen" },
        { target: "Wir gehen in die Stadt spazieren.", en: "We're going for a walk in town.", say: "veer GAY-en in dee shtaht shpah-TSEE-ren" },
        { target: "Es gibt eine interessante Ausstellung.", en: "There's an interesting exhibition.", say: "es geept EYE-neh in-teh-res-AHN-teh OWS-shtel-oong" },
        { target: "Das Museum ist montags geschlossen.", en: "The museum is closed on Mondays.", say: "dahs moo-ZAY-oom ist MOHN-tahks geh-SHLOS-sen" },
        { target: "Was kostet die Eintrittskarte?", en: "How much is the ticket?", say: "vahs KOS-tet dee INE-trits-kar-teh" },
        { target: "Können wir zwei Plätze reservieren?", en: "Can we book two seats?", say: "KÖN-nen veer tsvy PLET-seh reh-zer-VEE-ren" },
        { target: "Es hat mir sehr gefallen.", en: "I enjoyed it very much.", say: "es haht meer zair geh-FAHL-en", note: "Gefallen works like 'to please': literally 'it has pleased me very much'." },
        { target: "Wir sehen uns nach der Vorstellung.", en: "See you after the show.", say: "veer ZAY-en oons nakh dair for-SHTEL-oong" }
      ]
    },
    {
      id: "de-work",
      title: "Work & career",
      local: "Arbeit und Karriere",
      level: "B1",
      icon: "💼",
      tint: "#EDF2F9",
      blurb: "Apply for a job, survive the interview, and talk about your working life.",
      phrases: [
        { target: "Ich suche eine Stelle im Tourismus.", en: "I'm looking for a job in tourism.", say: "ikh ZOO-kheh EYE-neh SHTEL-leh im too-REES-moos", note: "Die Stelle is a specific position; die Arbeit is work in general." },
        { target: "Ich habe meinen Lebenslauf letzte Woche geschickt.", en: "I sent my CV last week.", say: "ikh HAH-beh MY-nen LAY-bens-lowf LETS-teh VOKH-eh geh-SHIKT" },
        { target: "Ich möchte mich um die Stelle als Rezeptionist bewerben.", en: "I'd like to apply for the receptionist position.", say: "ikh MÖKH-teh mikh oom dee SHTEL-leh ahls reh-tsep-tsyoh-NIST beh-VAIR-ben", note: "Sich bewerben um + accusative = to apply for a position." },
        { target: "Welche Voraussetzungen gibt es?", en: "What are the requirements?", say: "VEL-kheh FOR-ows-zet-soong-en geept es" },
        { target: "Ich habe drei Jahre Berufserfahrung.", en: "I have three years' professional experience.", say: "ikh HAH-beh dry YAH-reh beh-ROOFS-air-FAH-roong" },
        { target: "Ich kann sofort anfangen.", en: "I can start immediately.", say: "ikh kahn zoh-FORT AHN-fahng-en" },
        { target: "Das Vorstellungsgespräch lief gut.", en: "The interview went well.", say: "dahs FOR-shtel-oongs-geh-shprekh leef goot", note: "lief is the simple past of laufen, used here for how something went." },
        { target: "Ich arbeite von neun bis sechs.", en: "I work from nine to six.", say: "ikh AR-by-teh fon noyn bis zeks" },
        { target: "Ich muss eine Frist einhalten.", en: "I have to meet a deadline.", say: "ikh moos EYE-neh frist INE-hahl-ten", note: "Eine Frist einhalten = to meet a deadline; eine Frist verlängern = to extend one." },
        { target: "Können wir ein Meeting ansetzen?", en: "Can we set up a meeting?", say: "KÖN-nen veer ine MEE-ting AHN-zet-sen" },
        { target: "Ich schicke dir die Details per E-Mail.", en: "I'll send you the details by email.", say: "ikh SHIK-keh deer dee deh-TILES pair ee-MAYL" },
        { target: "Ich denke darüber nach, den Job zu wechseln.", en: "I'm thinking about changing jobs.", say: "ikh DEN-keh dah-ROO-ber nakh dane job tsoo VEKS-eln", note: "nachdenken über + accusative, with zu + infinitive at the end." }
      ]
    },
    {
      id: "de-rent",
      title: "Renting & paperwork",
      local: "Wohnen und Amt",
      level: "B1",
      icon: "🔑",
      tint: "#FBF3DF",
      blurb: "Find a flat, understand the contract, and get through the registration office.",
      phrases: [
        { target: "Ich suche eine Wohnung zur Miete.", en: "I'm looking for an apartment to rent.", say: "ikh ZOO-kheh EYE-neh VOH-noong tsoor MEE-teh" },
        { target: "Wie hoch ist die Kaution?", en: "How much is the deposit?", say: "vee hohkh ist dee kow-TSYOHN" },
        { target: "Der Vertrag läuft ein Jahr.", en: "The contract runs for a year.", say: "dair fair-TRAHK loyft ine yahr" },
        { target: "Ich muss meinen Ausweis mitbringen.", en: "I have to bring my ID.", say: "ikh moos MY-nen OWS-vice MIT-bring-en" },
        { target: "Wo ist das Einwohnermeldeamt?", en: "Where is the registration office?", say: "voh ist dahs INE-voh-ner-mel-deh-ahmt", note: "Register your address within two weeks of moving in." },
        { target: "Ich brauche eine Meldebescheinigung.", en: "I need a registration certificate.", say: "ikh BROW-kheh EYE-neh MEL-deh-beh-shy-ni-goong" },
        { target: "Sind die Nebenkosten inklusive?", en: "Are utilities included?", say: "zint dee NAY-ben-kos-ten in-kloo-ZEE-veh", note: "Nebenkosten are service charges: heating, water, rubbish." },
        { target: "Der Vermieter antwortet nicht.", en: "The landlord isn't answering.", say: "dair fair-MEE-ter ANT-vor-tet nikht" },
        { target: "Ich muss den Vertrag heute unterschreiben.", en: "I have to sign the contract today.", say: "ikh moos dane fair-TRAHK HOY-teh OON-ter-shry-ben" },
        { target: "Kann ich eine Quittung bekommen?", en: "Can I get a receipt?", say: "kahn ikh EYE-neh KVIT-oong beh-KOM-men" },
        { target: "Der Aufzug ist außer Betrieb.", en: "The lift is out of order.", say: "dair OWF-tsook ist OW-ser beh-TREEP", note: "Außer Betrieb is the sign you will see on lifts and machines." },
        { target: "Dafür braucht man einen Termin.", en: "You need an appointment for that.", say: "dah-FEWR browkht mahn EYE-nen ter-MEEN", note: "Termin covers appointments and official slots." }
      ]
    },
    {
      id: "de-travel2",
      title: "Travel problems",
      local: "Unterwegs und Pannen",
      level: "B1",
      icon: "🧳",
      tint: "#FCEDF0",
      blurb: "Delays, cancellations, and lost luggage — staying calm and getting help.",
      phrases: [
        { target: "Der Zug hat zwanzig Minuten Verspätung.", en: "The train is twenty minutes late.", say: "dair tsook haht TSVAHN-tsikh mee-NOO-ten fair-SHPET-oong" },
        { target: "Der Flug wurde gestrichen.", en: "The flight was cancelled.", say: "dair flook VOOR-deh geh-SHTRIKH-en", note: "Passive with werden: wurde gestrichen." },
        { target: "Mein Koffer ist nicht angekommen.", en: "My suitcase hasn't arrived.", say: "mine KOF-fer ist nikht AHN-geh-kom-men" },
        { target: "Ich möchte eine Beschwerde einreichen.", en: "I'd like to file a complaint.", say: "ikh MÖKH-teh EYE-neh beh-SHVAIR-deh INE-ry-khen" },
        { target: "Bekomme ich eine Rückerstattung?", en: "Will I get a refund?", say: "beh-KOM-meh ikh EYE-neh ROOK-er-shtat-oong" },
        { target: "Ich habe den Anschluss verpasst.", en: "I missed the connection.", say: "ikh HAH-beh dane AHN-shloos fair-PAHST" },
        { target: "Von welchem Gleis fährt er ab?", en: "Which platform does it leave from?", say: "fon VEL-khem glice fairt air ap", note: "abfahren is separable: er fährt ab." },
        { target: "Gibt es später noch einen Zug?", en: "Is there another train later?", say: "geept es SHPET-er nokh EYE-nen tsook" },
        { target: "Mein Gepäck wurde beschädigt.", en: "My luggage was damaged.", say: "mine geh-PEK VOOR-deh beh-SHEH-dikht" },
        { target: "Wo kann ich den Verlust melden?", en: "Where can I report the loss?", say: "voh kahn ikh dane fair-LOOST MEL-den" },
        { target: "Wegen des Streiks steht alles still.", en: "Because of the strike everything is at a standstill.", say: "VAY-gen des stryks shtayt AH-les shtil", note: "wegen + genitive: wegen des Streiks." },
        { target: "Zum Glück habe ich eine Versicherung.", en: "Luckily I have insurance.", say: "tsoom glook HAH-beh ikh EYE-neh fair-ZEE-kheh-roong" }
      ]
    },
    {
      id: "de-news",
      title: "News & opinions",
      local: "Nachrichten und Meinungen",
      level: "B1",
      icon: "📰",
      tint: "#EFEDFB",
      blurb: "Discuss a headline, hedge your view, and disagree without falling out.",
      phrases: [
        { target: "Hast du die Nachrichten von heute gelesen?", en: "Have you read today's news?", say: "hahst doo dee NAHKH-rikh-ten fon HOY-teh geh-LAY-zen" },
        { target: "Laut der Zeitung steigen die Preise.", en: "According to the newspaper, prices are rising.", say: "lowt dair TSY-toong SHTY-gen dee PRY-zeh", note: "laut + dative; the verb still comes second: Laut der Zeitung steigen…" },
        { target: "Ich bin nicht überzeugt von dem, was er sagt.", en: "I'm not convinced by what he says.", say: "ikh bin nikht oo-ber-TSOYKT fon daym vahs air zahkt" },
        { target: "Einerseits stimmt das, andererseits nicht.", en: "On one hand that's true, on the other it isn't.", say: "INE-er-zites shtimt dahs AHN-der-er-zites nikht", note: "einerseits … andererseits is the standard balanced-opinion pair." },
        { target: "Ich stimme zu, aber mit Bedenken.", en: "I agree, but with reservations.", say: "ikh SHTIM-meh tsoo AH-ber mit beh-DEN-ken", note: "zustimmen is separable: ich stimme zu." },
        { target: "Das kommt darauf an, wie man es sieht.", en: "It depends how you look at it.", say: "dahs komt dah-ROWF ahn vee mahn es zeet" },
        { target: "Alle reden darüber in den sozialen Medien.", en: "Everyone's talking about it on social media.", say: "AH-leh RAY-den dah-ROO-ber in dane zoh-TSYAH-len MAY-dee-en" },
        { target: "Dieser Quelle traue ich nicht.", en: "I don't trust that source.", say: "DEE-zer KVEL-leh TROW-eh ikh nikht", note: "trauen takes the dative: dieser Quelle." },
        { target: "Das ist eine komplizierte Frage.", en: "It's a complicated question.", say: "dahs ist EYE-neh kom-plee-TSEER-teh FRAH-geh" },
        { target: "Vielleicht hat er recht.", en: "Maybe he's right.", say: "fee-LIKHT haht air rekht" },
        { target: "Außerdem gibt es andere Probleme.", en: "Moreover, there are other problems.", say: "OWS-air-dem geept es AHN-deh-reh proh-BLAY-meh" },
        { target: "Trotzdem verbessert sich die Lage.", en: "Nevertheless the situation is improving.", say: "TROTS-daym fair-BES-sert zikh dee LAH-geh", note: "trotzdem takes position one, so the verb follows immediately." }
      ]
    },
    {
      id: "de-env",
      title: "Environment & city life",
      local: "Umwelt und Stadt",
      level: "B1",
      icon: "🌱",
      tint: "#EAF6F0",
      blurb: "Recycling, transport, and the small choices that shape a city.",
      phrases: [
        { target: "Wir müssen den Müll trennen.", en: "We have to separate the rubbish.", say: "veer MOO-sen dane mool TREN-nen" },
        { target: "Wo kommt der Plastikmüll hin?", en: "Where does the plastic waste go?", say: "voh komt dair PLAHS-tik-mool hin", note: "hinkommen is separable: Wo kommt … hin?" },
        { target: "Die Innenstadt ist für Autos gesperrt.", en: "The city centre is closed to cars.", say: "dee IN-nen-shtaht ist fewr OW-tohs geh-SHPAIRT" },
        { target: "Ich fahre lieber mit dem Fahrrad.", en: "I prefer cycling.", say: "ikh FAH-reh LEE-ber mit daym FAH-raht" },
        { target: "Die öffentlichen Verkehrsmittel sind günstig.", en: "Public transport is cheap.", say: "dee ÖF-ent-li-khen fair-KEERS-mit-tel zint GOON-stikh" },
        { target: "Die Luft ist hier sehr belastet.", en: "The air is very polluted here.", say: "dee looft ist heer zair beh-LAHS-tet", note: "belastet = under strain; Luftverschmutzung is air pollution." },
        { target: "Wir können weniger Müll produzieren.", en: "We can produce less waste.", say: "veer KÖN-nen VAY-ni-ger mool proh-doo-TSEE-ren" },
        { target: "Sie haben neue Ladestationen gebaut.", en: "They built new charging stations.", say: "zee HAH-ben NOY-eh LAH-deh-shtah-tsyon-en geh-BOWT" },
        { target: "Der Park wurde renoviert.", en: "The park has been renovated.", say: "dair park VOOR-deh reh-noh-VEERT", note: "Passive with werden: wurde renoviert." },
        { target: "Man muss Energie sparen.", en: "One has to save energy.", say: "mahn moos en-air-GHEE SHPAR-en", note: "man is the impersonal 'one'; the verb is third person singular." },
        { target: "Es wäre besser, den Zug zu nehmen.", en: "It would be better to take the train.", say: "es VAY-reh BES-ser dane tsook tsoo NAY-men" },
        { target: "Ich hoffe, dass sich bald etwas ändert.", en: "I hope something changes soon.", say: "ikh HOF-feh dahs zikh bahlt ET-vahs EN-dert" }
      ]
    },
    {
      id: "de-money",
      title: "Money & banking",
      local: "Geld und Bank",
      level: "B1",
      icon: "💳",
      tint: "#F0EFEA",
      blurb: "Open an account, question a charge, and talk about budgets.",
      phrases: [
        { target: "Ich möchte ein Girokonto eröffnen.", en: "I'd like to open a current account.", say: "ikh MÖKH-teh ine ZHEE-roh-kon-toh air-ÖF-nen" },
        { target: "Wie hoch sind die monatlichen Gebühren?", en: "What are the monthly fees?", say: "vee hohkh zint dee MOH-naht-li-khen geh-BOO-ren" },
        { target: "Ich habe meine PIN vergessen.", en: "I forgot my PIN.", say: "ikh HAH-beh MY-neh pin fair-GES-sen" },
        { target: "Ich muss Bargeld abheben.", en: "I need to withdraw cash.", say: "ikh moos BAR-gelt AP-hay-ben", note: "abheben is separable: ich hebe Bargeld ab." },
        { target: "Ist die Überweisung angekommen?", en: "Has the transfer arrived?", say: "ist dee oo-ber-VY-zoong AHN-geh-kom-men" },
        { target: "Kann ich in Raten zahlen?", en: "Can I pay in instalments?", say: "kahn ikh in RAH-ten TSAH-len" },
        { target: "Mir wurde doppelt berechnet.", en: "I was charged twice.", say: "meer VOOR-deh DOP-elt beh-REKH-net", note: "Passive with a dative object: mir wurde … berechnet." },
        { target: "Mein Gehalt kommt am Ersten.", en: "My salary arrives on the first.", say: "mine geh-HALT komt ahm AIRS-ten" },
        { target: "Ich versuche, Geld zu sparen.", en: "I'm trying to save money.", say: "ikh fair-ZOO-kheh gelt tsoo SHPAR-en" },
        { target: "Diesen Monat habe ich zu viel ausgegeben.", en: "This month I spent too much.", say: "DEE-zen MOH-naht HAH-beh ikh tsoo feel OWS-geh-gay-ben" },
        { target: "Ich brauche einen Kostenvoranschlag.", en: "I need an estimate.", say: "ikh BROW-kheh EYE-nen KOS-ten-for-ahn-shlahk" },
        { target: "Wir sollten den Kontoauszug prüfen.", en: "We should check the bank statement.", say: "veer ZOL-ten dane KON-toh-ows-tsook PREW-fen" }
      ]
    }
  ],
  vocab: [
    {
      id: "de-v-numbers",
      title: "Numbers",
      local: "Die Zahlen",
      icon: "🔢",
      tint: "#EDF3FB",
      blurb: "Prices, times, quantities — the words you reach for all day.",
      words: [
        { term: "null", en: "zero", say: "nool" },
        { term: "eins", en: "one", say: "ines" },
        { term: "zwei", en: "two", say: "tsvy" },
        { term: "drei", en: "three", say: "dry" },
        { term: "vier", en: "four", say: "feer" },
        { term: "fünf", en: "five", say: "fünf" },
        { term: "sechs", en: "six", say: "zeks" },
        { term: "sieben", en: "seven", say: "ZEE-ben" },
        { term: "acht", en: "eight", say: "akht" },
        { term: "neun", en: "nine", say: "noyn" },
        { term: "zehn", en: "ten", say: "tsayn" },
        { term: "zwanzig", en: "twenty", say: "TSVAHN-tsikh" }
      ]
    },
    {
      id: "de-v-time",
      title: "Days & months",
      local: "Tage und Monate",
      icon: "📅",
      tint: "#FBF0E4",
      blurb: "Make an appointment, book a table, and read a timetable.",
      words: [
        { term: "Montag", en: "Monday", say: "MOHN-tahk" },
        { term: "Dienstag", en: "Tuesday", say: "DEENS-tahk" },
        { term: "Mittwoch", en: "Wednesday", say: "MIT-vokh" },
        { term: "Donnerstag", en: "Thursday", say: "DON-ners-tahk" },
        { term: "Freitag", en: "Friday", say: "FRY-tahk" },
        { term: "Samstag", en: "Saturday", say: "ZAHMS-tahk" },
        { term: "Sonntag", en: "Sunday", say: "ZON-tahk" },
        { term: "Januar", en: "January", say: "YAH-noo-ahr" },
        { term: "Juni", en: "June", say: "YOO-nee" },
        { term: "Dezember", en: "December", say: "deh-TSEM-ber" }
      ]
    },
    {
      id: "de-v-colors",
      title: "Colors",
      local: "Die Farben",
      icon: "🎨",
      tint: "#FDEFF4",
      blurb: "Describe what you see — and what you'd like to buy.",
      words: [
        { term: "rot", en: "red", say: "roht" },
        { term: "blau", en: "blue", say: "blow" },
        { term: "grün", en: "green", say: "groon" },
        { term: "gelb", en: "yellow", say: "gelp" },
        { term: "schwarz", en: "black", say: "shvarts" },
        { term: "weiß", en: "white", say: "vice" },
        { term: "orange", en: "orange", say: "oh-RAHNG-sheh" },
        { term: "rosa", en: "pink", say: "ROH-zah" },
        { term: "grau", en: "grey", say: "grow" },
        { term: "braun", en: "brown", say: "brown" }
      ]
    },
    {
      id: "de-v-family",
      title: "Family",
      local: "Die Familie",
      icon: "👨‍👩‍👧",
      tint: "#F3EEFC",
      blurb: "The people you'll introduce in the first five minutes of any chat.",
      words: [
        { term: "die Mutter", en: "mother", say: "dee MOOT-ter" },
        { term: "der Vater", en: "father", say: "dair FAH-ter" },
        { term: "der Bruder", en: "brother", say: "dair BROO-der" },
        { term: "die Schwester", en: "sister", say: "dee SHVES-ter" },
        { term: "der Sohn", en: "son", say: "dair zohn" },
        { term: "die Tochter", en: "daughter", say: "dee TOKH-ter" },
        { term: "die Großeltern", en: "grandparents", say: "dee GROS-el-tern" },
        { term: "die Frau", en: "wife / woman", say: "dee frow", note: "Context decides: meine Frau is my wife, eine Frau is a woman." },
        { term: "der Mann", en: "husband / man", say: "dair mahn" },
        { term: "der Cousin", en: "cousin (male)", say: "dair koo-ZANG", note: "A female cousin is die Cousine (koo-ZEE-neh)." }
      ]
    },
    {
      id: "de-v-food",
      title: "Food & drink",
      local: "Essen und Trinken",
      icon: "🍽️",
      tint: "#FBF3DF",
      blurb: "Recognise a menu before you sit down.",
      words: [
        { term: "das Brot", en: "bread", say: "dahs broht" },
        { term: "das Wasser", en: "water", say: "dahs VAH-ser" },
        { term: "der Wein", en: "wine", say: "dair vine" },
        { term: "die Nudeln", en: "pasta / noodles", say: "dee NOO-deln" },
        { term: "der Reis", en: "rice", say: "dair rice" },
        { term: "das Fleisch", en: "meat", say: "dahs flysh" },
        { term: "der Fisch", en: "fish", say: "dair fish" },
        { term: "das Gemüse", en: "vegetables", say: "dahs geh-MOO-zeh" },
        { term: "das Obst", en: "fruit", say: "dahs ohpst" },
        { term: "der Käse", en: "cheese", say: "dair KAY-zeh" }
      ]
    },
    {
      id: "de-v-body",
      title: "Body & health",
      local: "Körper und Gesundheit",
      icon: "🩺",
      tint: "#FCEDF0",
      blurb: "Point to the problem at a pharmacy or a doctor's office.",
      words: [
        { term: "der Kopf", en: "head", say: "dair kopf" },
        { term: "die Augen", en: "eyes", say: "dee OW-gen", note: "Singular: das Auge." },
        { term: "die Hand", en: "hand", say: "dee hahnt" },
        { term: "der Fuß", en: "foot", say: "dair foos" },
        { term: "der Magen", en: "stomach", say: "dair MAH-gen" },
        { term: "der Rücken", en: "back", say: "dair ROOK-en" },
        { term: "der Arzt", en: "doctor", say: "dair artst", note: "A female doctor is die Ärztin." },
        { term: "die Apotheke", en: "pharmacy", say: "dee ah-poh-TAY-keh" },
        { term: "das Medikament", en: "medicine", say: "dahs meh-dee-kah-MENT" },
        { term: "die Erkältung", en: "a cold", say: "dee air-KEL-toong" }
      ]
    },
    {
      id: "de-v-home",
      title: "Home & furniture",
      local: "Wohnen",
      icon: "🏠",
      tint: "#EFF6EC",
      blurb: "Name the rooms and the things in them.",
      words: [
        { term: "die Wohnung", en: "apartment", say: "dee VOH-noong" },
        { term: "die Küche", en: "kitchen", say: "dee KOO-kheh" },
        { term: "das Bad", en: "bathroom", say: "dahs baht" },
        { term: "das Schlafzimmer", en: "bedroom", say: "dahs SHLAHF-tsim-mer" },
        { term: "der Tisch", en: "table", say: "dair tish" },
        { term: "der Stuhl", en: "chair", say: "dair shtool" },
        { term: "das Bett", en: "bed", say: "dahs bet" },
        { term: "das Fenster", en: "window", say: "dahs FEN-ster" },
        { term: "die Tür", en: "door", say: "dee fewr" },
        { term: "der Balkon", en: "balcony", say: "dair bal-KOHN" }
      ]
    },
    {
      id: "de-v-clothes",
      title: "Clothes",
      local: "Die Kleidung",
      icon: "👕",
      tint: "#F7F0E8",
      blurb: "Ask for a size, a color, and a changing room.",
      words: [
        { term: "das Hemd", en: "shirt", say: "dahs hemt" },
        { term: "das T-Shirt", en: "T-shirt", say: "dahs TEE-shert" },
        { term: "die Hose", en: "trousers", say: "dee HOH-zeh" },
        { term: "die Schuhe", en: "shoes", say: "dee SHOO-eh" },
        { term: "die Jacke", en: "jacket", say: "dee YAH-keh" },
        { term: "der Mantel", en: "coat", say: "dair MAHN-tel" },
        { term: "der Rock", en: "skirt", say: "dair rok" },
        { term: "der Hut", en: "hat", say: "dair hoot" },
        { term: "die Socken", en: "socks", say: "dee ZOK-en" },
        { term: "die Tasche", en: "bag", say: "dee TAH-sheh" }
      ]
    },
    {
      id: "de-v-travel",
      title: "Travel & transport",
      local: "Reisen",
      icon: "🚆",
      tint: "#EAF5F7",
      blurb: "Trains, tickets, platforms — the words on every sign.",
      words: [
        { term: "der Zug", en: "train", say: "dair tsook" },
        { term: "der Bus", en: "bus", say: "dair boos" },
        { term: "das Flugzeug", en: "plane", say: "dahs FLOOK-tsoyk" },
        { term: "der Bahnhof", en: "train station", say: "dair BAHN-hohf" },
        { term: "der Flughafen", en: "airport", say: "dair FLOOK-hah-fen" },
        { term: "die Fahrkarte", en: "ticket", say: "dee FAHR-kar-teh" },
        { term: "der Koffer", en: "suitcase", say: "dair KOF-fer" },
        { term: "die Karte", en: "map / card", say: "dee KAR-teh", note: "die Karte is a map, a card, or a menu, depending on context." },
        { term: "die Straße", en: "street", say: "dee SHTRAH-seh" },
        { term: "das Taxi", en: "taxi", say: "dahs TAK-see" }
      ]
    },
    {
      id: "de-v-nature",
      title: "Weather & nature",
      local: "Wetter und Natur",
      icon: "🌦️",
      tint: "#E8F4FA",
      blurb: "The landscape and the forecast, in ten words.",
      words: [
        { term: "die Sonne", en: "sun", say: "dee ZON-neh" },
        { term: "der Regen", en: "rain", say: "dair RAY-gen" },
        { term: "der Schnee", en: "snow", say: "dair shnay" },
        { term: "der Wind", en: "wind", say: "dair vint" },
        { term: "die Wolke", en: "cloud", say: "dee VOL-keh" },
        { term: "das Meer", en: "sea", say: "dahs mair" },
        { term: "der Berg", en: "mountain", say: "dair bairk" },
        { term: "der Baum", en: "tree", say: "dair bowm" },
        { term: "die Blume", en: "flower", say: "dee BLOO-meh" },
        { term: "der Himmel", en: "sky", say: "dair HIM-mel" }
      ]
    },
    {
      id: "de-v-work",
      title: "Work & study",
      local: "Arbeit und Studium",
      icon: "💼",
      tint: "#F0EFEA",
      blurb: "Talk about your job, your course, and your week.",
      words: [
        { term: "die Arbeit", en: "work", say: "dee AR-bite" },
        { term: "das Büro", en: "office", say: "dahs bu-ROH" },
        { term: "der Student", en: "student (male)", say: "dair shtoo-DENT", note: "A female student is die Studentin." },
        { term: "die Schule", en: "school", say: "dee SHOO-leh" },
        { term: "die Universität", en: "university", say: "dee oo-nee-ver-zee-TAYT" },
        { term: "das Buch", en: "book", say: "dahs book" },
        { term: "der Unterricht", en: "lesson / class", say: "dair OON-ter-rikht" },
        { term: "der Computer", en: "computer", say: "dair kom-PYOO-ter" },
        { term: "der Kollege", en: "colleague", say: "dair kol-LAY-geh", note: "A female colleague is die Kollegin." },
        { term: "die Besprechung", en: "meeting", say: "dee beh-SHPREKH-oong" }
      ]
    },
    {
      id: "de-v-verbs",
      title: "Useful verbs",
      local: "Wichtige Verben",
      icon: "⚡",
      tint: "#F1EDFD",
      blurb: "Ten verbs that unlock hundreds of sentences.",
      words: [
        { term: "sein", en: "to be", say: "zine", note: "Present: bin, bist, ist, sind, seid, sind." },
        { term: "haben", en: "to have", say: "HAH-ben", note: "Present: habe, hast, hat, haben, habt, haben." },
        { term: "machen", en: "to do / to make", say: "MAH-khen", note: "Present: mache, machst, macht, machen, macht, machen." },
        { term: "gehen", en: "to go", say: "GAY-en", note: "Present: gehe, gehst, geht, gehen, geht, gehen." },
        { term: "kommen", en: "to come", say: "KOM-men", note: "Present: komme, kommst, kommt, kommen, kommt, kommen." },
        { term: "können", en: "to be able to / can", say: "KÖN-nen", note: "Present: kann, kannst, kann, können, könnt, können." },
        { term: "wollen", en: "to want", say: "VOL-len", note: "Present: will, willst, will, wollen, wollt, wollen." },
        { term: "wissen", en: "to know", say: "VIS-sen", note: "Present: weiß, weißt, weiß, wissen, wisst, wissen." },
        { term: "sehen", en: "to see", say: "ZAY-en", note: "Present: sehe, siehst, sieht, sehen, seht, sehen." },
        { term: "essen", en: "to eat", say: "ES-sen", note: "Present: esse, isst, isst, essen, esst, essen." }
      ]
    },
    {
      id: "de-v-career",
      title: "Work & career",
      local: "Arbeit und Karriere",
      icon: "💼",
      tint: "#EDF2F9",
      blurb: "The words on a job advert, in an interview, and in a contract.",
      words: [
        { term: "das Vorstellungsgespräch", en: "job interview", say: "dahs FOR-shtel-oongs-geh-shprekh" },
        { term: "der Lebenslauf", en: "CV / résumé", say: "dair LAY-bens-lowf" },
        { term: "das Gehalt", en: "salary", say: "dahs geh-HALT" },
        { term: "die Frist", en: "deadline", say: "dee frist", note: "Eine Frist einhalten = to meet a deadline." },
        { term: "die Besprechung", en: "meeting", say: "dee beh-SHPREKH-oong" },
        { term: "das Praktikum", en: "internship", say: "dahs PRAK-tee-koom" },
        { term: "die Einstellung", en: "hiring", say: "dee INE-shtel-oong", note: "Einstellen = to hire. Die Einstellung can also mean an attitude or a setting." },
        { term: "der Ansprechpartner", en: "contact person", say: "dair AHN-shprekh-par-ner", note: "A female contact is die Ansprechpartnerin." },
        { term: "die Stelle", en: "position / job", say: "dee SHTEL-leh", note: "Die Stelle is a specific post; die Arbeit is work in general." },
        { term: "der Vertrag", en: "contract", say: "dair fair-TRAHK" }
      ]
    },
    {
      id: "de-v-banking",
      title: "Money & banking",
      local: "Geld und Bank",
      icon: "💳",
      tint: "#F0EFEA",
      blurb: "Counters, cards, fees, and the words on a statement.",
      words: [
        { term: "das Girokonto", en: "current account", say: "dahs ZHEE-roh-kon-toh" },
        { term: "die Überweisung", en: "bank transfer", say: "dee oo-ber-VY-zoong" },
        { term: "das Bargeld", en: "cash", say: "dahs BAR-gelt" },
        { term: "die Gebühr", en: "fee", say: "dee geh-BOOR", note: "Usually plural: die Gebühren." },
        { term: "die Rate", en: "instalment", say: "dee RAH-teh", note: "In Raten zahlen = to pay in instalments." },
        { term: "der Kassenbon", en: "till receipt", say: "dair KAH-sen-bon", note: "The shop receipt; die Quittung is a formal receipt." },
        { term: "die Quittung", en: "receipt", say: "dee KVIT-oong" },
        { term: "die Ersparnis", en: "savings", say: "dee air-SHPAR-nis" },
        { term: "die Schulden", en: "debt", say: "dee SHOOL-den", note: "Always plural in this sense." },
        { term: "der Schalter", en: "counter", say: "dair SHAHL-ter", note: "Also the ticket window at a station." }
      ]
    },
    {
      id: "de-v-city",
      title: "Environment & city",
      local: "Umwelt und Stadt",
      icon: "🌱",
      tint: "#EAF6F0",
      blurb: "Bins, bikes, and the vocabulary of a liveable city.",
      words: [
        { term: "die Mülltrennung", en: "waste separation", say: "dee MOOL-tren-oong" },
        { term: "der Abfall", en: "waste / rubbish", say: "dair AHP-fal", note: "Plural: die Abfälle." },
        { term: "die Umweltverschmutzung", en: "environmental pollution", say: "dee OOM-velt-fair-shmoot-soong" },
        { term: "das Viertel", en: "neighborhood", say: "dahs FEER-tel" },
        { term: "der Bürgersteig", en: "pavement", say: "dair BOOR-ger-shtyke" },
        { term: "der Radweg", en: "cycle path", say: "dair RAHT-vayk" },
        { term: "die öffentlichen Verkehrsmittel", en: "public transport", say: "dee ÖF-ent-li-khen fair-KEERS-mit-tel", note: "Usually plural; das Verkehrsmittel is one mode of transport." },
        { term: "die Energie", en: "energy", say: "dee en-air-GHEE" },
        { term: "die Verschwendung", en: "waste (of resources)", say: "dee fair-SHVEN-doong", note: "Verschwenden = to waste. Lebensmittelverschwendung is food waste." },
        { term: "das Stadtgrün", en: "public green space", say: "dahs SHTAHT-groon" }
      ]
    }
  ],
  dialogues: [
    {
      id: "de-d-cafe",
      unitId: "de-cafe",
      title: "At the café",
      local: "Im Café",
      icon: "☕",
      place: "A café in Berlin-Mitte, 10am",
      lines: [
        { speaker: "Kellner", text: "Guten Tag! Was möchten Sie?", en: "Good day! What would you like?" },
        {
          you: true,
          prompt: "Greet them back and order a coffee.",
          options: [
            { text: "Ich hätte gern einen Kaffee, bitte.", en: "I'd like a coffee, please." },
            { text: "Die Rechnung, bitte.", en: "The bill, please." },
            { text: "Wo ist der Bahnhof?", en: "Where's the train station?" }
          ],
          answer: 0
        },
        { speaker: "Kellner", text: "Möchten Sie auch etwas essen?", en: "Would you like something to eat too?" },
        {
          you: true,
          prompt: "Yes — add a croissant.",
          options: [
            { text: "Ja, ein Croissant, bitte.", en: "Yes, a croissant, please." },
            { text: "Ich bin Vegetarier.", en: "I'm vegetarian." },
            { text: "Wann schließen Sie?", en: "When do you close?" }
          ],
          answer: 0
        },
        { speaker: "Kellner", text: "Zusammen fünf Euro fünfzig.", en: "Together, five euros fifty." },
        {
          you: true,
          prompt: "Ask if you can pay by card.",
          options: [
            { text: "Kann ich mit Karte zahlen?", en: "Can I pay by card?" },
            { text: "Einen Tisch für zwei, bitte.", en: "A table for two, please." },
            { text: "Ich verstehe nicht.", en: "I don't understand." }
          ],
          answer: 0
        },
        { speaker: "Kellner", text: "Natürlich. Bitte schön!", en: "Of course. Here you go!" }
      ]
    },
    {
      id: "de-d-meet",
      unitId: "de-greet",
      title: "Nice to meet you",
      local: "Kennenlernen",
      icon: "👋",
      place: "A housewarming party in Berlin",
      lines: [
        { speaker: "Julia", text: "Hallo! Wie geht's dir?", en: "Hi! How are you?" },
        {
          you: true,
          prompt: "Say you're good and ask her back.",
          options: [
            { text: "Gut, danke. Und dir?", en: "Good, thanks. And you?" },
            { text: "Ich habe Hunger.", en: "I'm hungry." },
            { text: "Die Rechnung, bitte.", en: "The bill, please." }
          ],
          answer: 0
        },
        { speaker: "Julia", text: "Auch gut! Woher kommst du?", en: "Good too! Where are you from?" },
        {
          you: true,
          prompt: "Say where you're from and where you live now.",
          options: [
            { text: "Ich komme aus den USA, aber ich wohne in Berlin.", en: "I'm from the US, but I live in Berlin." },
            { text: "Das Zimmer ist im zweiten Stock.", en: "The room is on the second floor." },
            { text: "Es ist neun Uhr.", en: "It's nine o'clock." }
          ],
          answer: 0
        },
        { speaker: "Julia", text: "Du sprichst gut Deutsch!", en: "You speak good German!" },
        {
          you: true,
          prompt: "Say thanks and stay modest.",
          options: [
            { text: "Danke! Ich spreche nur ein bisschen Deutsch.", en: "Thanks! I only speak a little German." },
            { text: "Ich verstehe nichts.", en: "I don't understand anything." },
            { text: "Ja, einen Kaffee, bitte.", en: "Yes, a coffee, please." }
          ],
          answer: 0
        },
        { speaker: "Julia", text: "Bis morgen!", en: "See you tomorrow!" }
      ]
    },
    {
      id: "de-d-around",
      unitId: "de-around",
      title: "Finding the station",
      local: "Unterwegs",
      icon: "🚉",
      place: "Near Alexanderplatz, Berlin",
      lines: [
        {
          you: true,
          prompt: "Stop someone and ask where the train station is.",
          options: [
            { text: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" },
            { text: "Eine Fahrkarte nach Berlin, bitte.", en: "A ticket to Berlin, please." },
            { text: "Guten Appetit!", en: "Enjoy your meal!" }
          ],
          answer: 0
        },
        { speaker: "Passant", text: "Immer geradeaus, dann links.", en: "Always straight ahead, then left." },
        {
          you: true,
          prompt: "Check whether it's far.",
          options: [
            { text: "Ist es weit?", en: "Is it far?" },
            { text: "Was kostet das?", en: "How much is that?" },
            { text: "Ich bin Vegetarier.", en: "I'm vegetarian." }
          ],
          answer: 0
        },
        { speaker: "Passant", text: "Nein, fünf Minuten zu Fuß.", en: "No, five minutes on foot." },
        {
          you: true,
          prompt: "Thank them warmly.",
          options: [
            { text: "Vielen Dank!", en: "Many thanks!" },
            { text: "Bis morgen!", en: "See you tomorrow!" },
            { text: "Die Rechnung, bitte.", en: "The bill, please." }
          ],
          answer: 0
        },
        { speaker: "Passant", text: "Gern!", en: "You're welcome!" }
      ]
    },
    {
      id: "de-d-health",
      unitId: "de-health",
      title: "At the pharmacy",
      local: "In der Apotheke",
      icon: "🩺",
      place: "A pharmacy in Munich, Monday morning",
      lines: [
        { speaker: "Apothekerin", text: "Guten Morgen, wie kann ich Ihnen helfen?", en: "Good morning, how can I help you?" },
        {
          you: true,
          prompt: "Say you have a sore throat and a fever.",
          options: [
            { text: "Ich habe Halsschmerzen und Fieber.", en: "I have a sore throat and a fever." },
            { text: "Ich habe Hunger und Durst.", en: "I'm hungry and thirsty." },
            { text: "Die Rechnung, bitte.", en: "The bill, please." }
          ],
          answer: 0
        },
        { speaker: "Apothekerin", text: "Seit wann haben Sie diese Beschwerden?", en: "Since when have you had these symptoms?" },
        {
          you: true,
          prompt: "Say since yesterday.",
          options: [
            { text: "Seit gestern.", en: "Since yesterday." },
            { text: "Bis morgen.", en: "Until tomorrow." },
            { text: "Aus den USA.", en: "From the US." }
          ],
          answer: 0
        },
        { speaker: "Apothekerin", text: "Nehmen Sie diese Tabletten zweimal täglich.", en: "Take these tablets twice a day." },
        {
          you: true,
          prompt: "Ask whether you need a prescription.",
          options: [
            { text: "Brauche ich ein Rezept?", en: "Do I need a prescription?" },
            { text: "Kann ich mit Karte zahlen?", en: "Can I pay by card?" },
            { text: "Wo ist der Bahnhof?", en: "Where is the train station?" }
          ],
          answer: 0
        },
        { speaker: "Apothekerin", text: "Nein, das ist rezeptfrei. Gute Besserung!", en: "No, it's over the counter. Get well soon!" }
      ]
    },
    {
      id: "de-d-market",
      unitId: "de-food",
      title: "At the market",
      local: "Auf dem Markt",
      icon: "🥕",
      place: "A morning market in Berlin",
      lines: [
        { speaker: "Marktfrau", text: "Guten Morgen! Was darf es sein?", en: "Good morning! What can I get you?" },
        {
          you: true,
          prompt: "Ask for a kilo of tomatoes.",
          options: [
            { text: "Ein Kilo Tomaten, bitte.", en: "A kilo of tomatoes, please." },
            { text: "Einen Kaffee, bitte.", en: "A coffee, please." },
            { text: "Eine Fahrkarte nach Berlin, bitte.", en: "A ticket to Berlin, please." }
          ],
          answer: 0
        },
        { speaker: "Marktfrau", text: "Hier bitte. Noch etwas?", en: "Here you are. Anything else?" },
        {
          you: true,
          prompt: "Ask how much the apples cost.",
          options: [
            { text: "Was kosten die Äpfel?", en: "How much are the apples?" },
            { text: "Was kostet der Zug?", en: "How much is the train?" },
            { text: "Wo wohnst du?", en: "Where do you live?" }
          ],
          answer: 0
        },
        { speaker: "Marktfrau", text: "Zwei Euro pro Kilo.", en: "Two euros a kilo." },
        {
          you: true,
          prompt: "Take a kilo of apples too.",
          options: [
            { text: "Dann ein Kilo Äpfel, bitte.", en: "Then a kilo of apples, please." },
            { text: "Dann hundert Gramm Schinken.", en: "Then a hundred grams of ham." },
            { text: "Dann einen Cappuccino.", en: "Then a cappuccino." }
          ],
          answer: 0
        },
        { speaker: "Marktfrau", text: "Zusammen fünf Euro.", en: "Five euros in total." },
        {
          you: true,
          prompt: "Ask if you can pay by card.",
          options: [
            { text: "Kann ich mit Karte zahlen?", en: "Can I pay by card?" },
            { text: "Kann ich das anprobieren?", en: "Can I try this on?" },
            { text: "Kann ich hier schlafen?", en: "Can I sleep here?" }
          ],
          answer: 0
        },
        { speaker: "Marktfrau", text: "Natürlich. Danke und einen schönen Tag!", en: "Of course. Thanks and have a nice day!" }
      ]
    },
    {
      id: "de-d-home",
      unitId: "de-home",
      title: "Something's broken",
      local: "Etwas ist kaputt",
      icon: "🏠",
      place: "A phone call to your landlord",
      lines: [
        { speaker: "Vermieter", text: "Hallo?", en: "Hello?" },
        {
          you: true,
          prompt: "Say who you are and that the washing machine is broken.",
          options: [
            { text: "Guten Tag, hier ist Anna. Die Waschmaschine ist kaputt.", en: "Good day, this is Anna. The washing machine is broken." },
            { text: "Guten Tag, hier ist Anna. Die Rechnung ist kaputt.", en: "Good day, this is Anna. The bill is broken." },
            { text: "Guten Tag, hier ist Anna. Der Bahnhof ist kaputt.", en: "Good day, this is Anna. The station is broken." }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Schon wieder? Das tut mir leid.", en: "Again? I'm sorry." },
        {
          you: true,
          prompt: "Ask if he can send someone today.",
          options: [
            { text: "Können Sie heute jemanden schicken?", en: "Can you send someone today?" },
            { text: "Können Sie heute etwas kochen?", en: "Can you cook something today?" },
            { text: "Können Sie heute die Rechnung zahlen?", en: "Can you pay the bill today?" }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Ich schicke morgen früh einen Techniker.", en: "I'll send a technician tomorrow morning." },
        {
          you: true,
          prompt: "Ask what time.",
          options: [
            { text: "Um wie viel Uhr?", en: "At what time?" },
            { text: "Wie viel kostet das?", en: "How much is that?" },
            { text: "Woher kommen Sie?", en: "Where are you from?" }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Um neun.", en: "At nine." },
        {
          you: true,
          prompt: "Thank him and confirm.",
          options: [
            { text: "Perfekt, vielen Dank.", en: "Perfect, many thanks." },
            { text: "Ich verstehe nichts.", en: "I don't understand anything." },
            { text: "Guten Appetit!", en: "Enjoy your meal!" }
          ],
          answer: 0
        }
      ]
    },
    {
      id: "de-d-plans",
      unitId: "de-future",
      title: "Weekend plans",
      local: "Pläne fürs Wochenende",
      icon: "🌅",
      place: "A café in Leipzig, Friday afternoon",
      lines: [
        { speaker: "Lena", text: "Was machst du dieses Wochenende?", en: "What are you doing this weekend?" },
        {
          you: true,
          prompt: "Say you don't know yet and ask if she has an idea.",
          options: [
            { text: "Ich weiß noch nicht. Hast du eine Idee?", en: "I don't know yet. Do you have an idea?" },
            { text: "Ich weiß noch nicht. Hast du eine Fahrkarte?", en: "I don't know yet. Do you have a ticket?" },
            { text: "Ich weiß noch nicht. Hast du Hunger?", en: "I don't know yet. Are you hungry?" }
          ],
          answer: 0
        },
        { speaker: "Lena", text: "Es gibt eine interessante Ausstellung im Museum.", en: "There's an interesting exhibition at the museum." },
        {
          you: true,
          prompt: "Say that sounds good and ask what time.",
          options: [
            { text: "Das klingt gut. Um wie viel Uhr?", en: "That sounds good. At what time?" },
            { text: "Das tut mir leid. Um wie viel Uhr?", en: "I'm sorry. At what time?" },
            { text: "Ich bin müde. Um wie viel Uhr?", en: "I'm tired. At what time?" }
          ],
          answer: 0
        },
        { speaker: "Lena", text: "Samstag um vier.", en: "Saturday at four." },
        {
          you: true,
          prompt: "Agree and suggest a coffee afterwards.",
          options: [
            { text: "Perfekt. Trinken wir danach einen Kaffee?", en: "Perfect. Shall we have a coffee afterwards?" },
            { text: "Perfekt. Nehmen wir danach einen Zug?", en: "Perfect. Shall we take a train afterwards?" },
            { text: "Perfekt. Nehmen wir danach eine Tablette?", en: "Perfect. Shall we take a tablet afterwards?" }
          ],
          answer: 0
        },
        { speaker: "Lena", text: "Gerne!", en: "Gladly!" }
      ]
    },
    {
      id: "de-d-job",
      unitId: "de-work",
      title: "A job interview",
      local: "Ein Vorstellungsgespräch",
      icon: "💼",
      place: "A hotel office in Hamburg, Tuesday morning",
      lines: [
        { speaker: "Chefin", text: "Guten Morgen, danke für Ihr Kommen. Erzählen Sie mir etwas über sich.", en: "Good morning, thanks for coming. Tell me a little about yourself." },
        {
          you: true,
          prompt: "Say you have three years' professional experience in tourism.",
          options: [
            { text: "Ich habe drei Jahre Berufserfahrung im Tourismus.", en: "I have three years' professional experience in tourism." },
            { text: "Ich habe drei Jahre Urlaub im Tourismus.", en: "I have three years' holiday in tourism." },
            { text: "Ich habe drei Jahre im Zug gearbeitet.", en: "I worked on the train for three years." }
          ],
          answer: 0
        },
        { speaker: "Chefin", text: "Gut. Warum möchten Sie bei uns arbeiten?", en: "Good. Why do you want to work with us?" },
        {
          you: true,
          prompt: "Say because you like working with people.",
          options: [
            { text: "Weil ich gern mit Menschen arbeite.", en: "Because I like working with people." },
            { text: "Weil der Zug Verspätung hat.", en: "Because the train is late." },
            { text: "Weil ich meine PIN vergessen habe.", en: "Because I forgot my PIN." }
          ],
          answer: 0
        },
        { speaker: "Chefin", text: "Wann könnten Sie anfangen?", en: "When could you start?" },
        {
          you: true,
          prompt: "Say you can start immediately.",
          options: [
            { text: "Ich kann sofort anfangen.", en: "I can start immediately." },
            { text: "Ich kann sofort bezahlen.", en: "I can pay immediately." },
            { text: "Ich kann sofort kochen.", en: "I can cook immediately." }
          ],
          answer: 0
        },
        { speaker: "Chefin", text: "Perfekt. Wir melden uns bis Freitag.", en: "Perfect. We'll be in touch by Friday." },
        {
          you: true,
          prompt: "Thank her and ask whether you should send any documents.",
          options: [
            { text: "Vielen Dank. Soll ich noch Unterlagen schicken?", en: "Many thanks. Should I send any documents?" },
            { text: "Vielen Dank. Soll ich die Rechnung zahlen?", en: "Many thanks. Should I pay the bill?" },
            { text: "Vielen Dank. Soll ich den Koffer tragen?", en: "Many thanks. Should I carry the suitcase?" }
          ],
          answer: 0
        },
        { speaker: "Chefin", text: "Nein, das passt so. Bis bald!", en: "No, that's fine. See you soon!" }
      ]
    },
    {
      id: "de-d-luggage",
      unitId: "de-travel2",
      title: "The suitcase didn't arrive",
      local: "Der Koffer ist nicht angekommen",
      icon: "🧳",
      place: "Lost luggage desk, Munich airport",
      lines: [
        { speaker: "Mitarbeiterin", text: "Guten Tag, wie kann ich Ihnen helfen?", en: "Good day, how can I help you?" },
        {
          you: true,
          prompt: "Say your suitcase hasn't arrived.",
          options: [
            { text: "Mein Koffer ist nicht angekommen.", en: "My suitcase hasn't arrived." },
            { text: "Mein Flug ist in München.", en: "My flight is in Munich." },
            { text: "Mein Zimmer ist im dritten Stock.", en: "My room is on the third floor." }
          ],
          answer: 0
        },
        { speaker: "Mitarbeiterin", text: "Haben Sie die Gepäcknummer?", en: "Do you have the baggage number?" },
        {
          you: true,
          prompt: "Say yes and hand over the receipt.",
          options: [
            { text: "Ja, hier ist die Quittung.", en: "Yes, here's the receipt." },
            { text: "Nein, hier ist mein Pass.", en: "No, here's my passport." },
            { text: "Ja, hier ist die Rechnung.", en: "Yes, here's the bill." }
          ],
          answer: 0
        },
        { speaker: "Mitarbeiterin", text: "Der Koffer ist in Rom geblieben. Er kommt morgen früh.", en: "The suitcase stayed in Rome. It will arrive tomorrow morning." },
        {
          you: true,
          prompt: "Ask where to report the loss and whether they can deliver it.",
          options: [
            { text: "Wo kann ich den Verlust melden? Können Sie ihn ins Hotel bringen?", en: "Where can I report the loss? Can you bring it to the hotel?" },
            { text: "Wo kann ich eine Fahrkarte kaufen? Kann ich bar zahlen?", en: "Where can I buy a ticket? Can I pay cash?" },
            { text: "Wo kann ich ein Zimmer buchen? Kann ich hier bleiben?", en: "Where can I book a room? Can I stay here?" }
          ],
          answer: 0
        },
        { speaker: "Mitarbeiterin", text: "Füllen Sie dieses Formular aus und geben Sie uns die Hotelnummer.", en: "Fill in this form and give us the hotel number." },
        {
          you: true,
          prompt: "Ask if you can get a refund for things you had to buy.",
          options: [
            { text: "Bekomme ich eine Rückerstattung für die Ausgaben?", en: "Will I get a refund for the expenses?" },
            { text: "Bekomme ich einen anderen Flug gratis?", en: "Will I get another flight for free?" },
            { text: "Bekomme ich eine Quittung für den Zug?", en: "Will I get a receipt for the train?" }
          ],
          answer: 0
        },
        { speaker: "Mitarbeiterin", text: "Ja, bewahren Sie alle Belege auf.", en: "Yes, keep all the receipts." }
      ]
    },
    {
      id: "de-d-flat",
      unitId: "de-rent",
      title: "A leak in the bathroom",
      local: "Ein Wasserschaden im Bad",
      icon: "🔑",
      place: "A phone call to the landlord",
      lines: [
        { speaker: "Vermieter", text: "Hallo?", en: "Hello?" },
        {
          you: true,
          prompt: "Say there's water damage in the bathroom.",
          options: [
            { text: "Guten Tag, im Bad gibt es einen Wasserschaden.", en: "Good day, there's water damage in the bathroom." },
            { text: "Guten Tag, im Bad gibt es eine Party.", en: "Good day, there's a party in the bathroom." },
            { text: "Guten Tag, im Bad gibt es einen Zug.", en: "Good day, there's a train in the bathroom." }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Seit wann?", en: "Since when?" },
        {
          you: true,
          prompt: "Say since yesterday evening.",
          options: [
            { text: "Seit gestern Abend.", en: "Since yesterday evening." },
            { text: "Ab morgen früh.", en: "From tomorrow morning." },
            { text: "Seit zwei Jahren.", en: "For two years." }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Verstehe. Ich rufe den Klempner an.", en: "I see. I'll call the plumber." },
        {
          you: true,
          prompt: "Ask if he can come today.",
          options: [
            { text: "Kann er heute kommen?", en: "Can he come today?" },
            { text: "Kann er heute zahlen?", en: "Can he pay today?" },
            { text: "Kann er heute kochen?", en: "Can he cook today?" }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Am Nachmittag, gegen vier.", en: "In the afternoon, around four." },
        {
          you: true,
          prompt: "Say you'll be home and ask him to confirm the time.",
          options: [
            { text: "Gut, ich bin zu Hause. Können Sie die Uhrzeit bestätigen?", en: "Good, I'll be home. Can you confirm the time?" },
            { text: "Gut, ich bin im Büro. Können Sie den Preis bestätigen?", en: "Good, I'll be at the office. Can you confirm the price?" },
            { text: "Gut, ich bin im Urlaub. Können Sie die Adresse bestätigen?", en: "Good, I'll be on holiday. Can you confirm the address?" }
          ],
          answer: 0
        },
        { speaker: "Vermieter", text: "Natürlich. Bis später.", en: "Of course. See you later." }
      ]
    }
  ]
};
