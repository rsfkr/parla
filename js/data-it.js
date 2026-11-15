/* Parla — Italian A1–A2 conversation deck */
window.LANGUAGES = window.LANGUAGES || {};

window.LANGUAGES.it = {
  id: "it",
  name: "Italiano",
  englishName: "Italian",
  flag: "🇮🇹",
  locale: "it-IT",
  level: "A1–A2 · Everyday fluency",
  tagline: "From your first caffè to real conversations.",
  gradient: ["#0B6B45", "#1D9A5B", "#63C98A"],
  accent: "#1D8A52",
  units: [
    {
      id: "it-greet",
      title: "Greetings & introductions",
      local: "Ciao e presentazioni",
      level: "A1",
      icon: "👋",
      tint: "#E7F5EC",
      blurb: "Meet someone, say who you are, and keep the chat going.",
      phrases: [
        { target: "Ciao!", en: "Hi! / Bye!", say: "CHOW", note: "Hello and goodbye in one word. Friendly and informal — use it with friends and people your age." },
        { target: "Buongiorno.", en: "Good morning.", say: "bwon-JOR-noh", note: "Used until about 1pm. Add signore or signora to be extra polite." },
        { target: "Buonasera.", en: "Good evening.", say: "bwoh-nah-SEH-rah", note: "From late afternoon onward. It is also a polite way to greet a shopkeeper." },
        { target: "Come stai?", en: "How are you? (informal)", say: "KOH-meh STY", note: "Formal version: Come sta? Use stai with friends, sta with strangers." },
        { target: "Sto bene, grazie.", en: "I'm well, thanks.", say: "stoh BEH-neh GRAH-tsee-eh" },
        { target: "Mi chiamo …", en: "My name is …", say: "mee KYAH-moh", note: "Literally 'I call myself'. Add your name after it." },
        { target: "Piacere!", en: "Nice to meet you!", say: "pyah-CHEH-reh" },
        { target: "Di dove sei?", en: "Where are you from? (informal)", say: "dee DOH-veh SAY", note: "Formal version: Di dov'è? The answer starts with Sono di… or Vengo da…" },
        { target: "Sono americano/a.", en: "I'm American.", say: "SOH-noh ah-meh-ree-KAH-noh / -nah", note: "End in -o if you're male, -a if you're female. The same pattern works for many nationalities." },
        { target: "Parlo un po' di italiano.", en: "I speak a little Italian.", say: "PAR-loh oon poh dee ee-tah-LYAH-noh", note: "Perfect line to use in your first real conversation. It buys patience." },
        { target: "Non capisco.", en: "I don't understand.", say: "non kah-PEES-koh" },
        { target: "Puoi ripetere, per favore?", en: "Can you repeat, please? (informal)", say: "pwoy ree-PEH-teh-reh pehr fah-VOH-reh", note: "Formal: Può ripetere… Puoi is 'you can' for someone you know." },
        { target: "A domani!", en: "See you tomorrow!", say: "ah doh-MAH-nee" }
      ]
    },
    {
      id: "it-cafe",
      title: "Cafés & restaurants",
      local: "Al bar e al ristorante",
      level: "A1",
      icon: "☕",
      tint: "#FBF0E4",
      blurb: "Order what you actually want, ask for the bill, and pay.",
      phrases: [
        { target: "Un caffè, per favore.", en: "A coffee, please.", say: "oon kahf-FEH pehr fah-VOH-reh", note: "In Italy un caffè means espresso. For drip coffee, ask for un caffè americano." },
        { target: "Vorrei un cappuccino.", en: "I'd like a cappuccino.", say: "vor-RAY oon kahp-poo-CHEE-noh", note: "Vorrei ('I would like') is the polite way to order anything." },
        { target: "Un tavolo per due.", en: "A table for two.", say: "oon TAH-voh-loh pehr DOO-eh" },
        { target: "Cosa mi consiglia?", en: "What do you recommend?", say: "KOH-zah mee kon-SEE-lyah", note: "Formal, for a waiter you don't know. Informal: Cosa mi consigli?" },
        { target: "Sono vegetariano/a.", en: "I'm vegetarian.", say: "SOH-noh veh-jeh-tah-RYAH-noh / -nah" },
        { target: "Senza glutine, per favore.", en: "Gluten-free, please.", say: "SEN-tsah GLOO-tee-neh" },
        { target: "Acqua naturale o frizzante?", en: "Still or sparkling water?", say: "AH-kwah nah-too-RAH-leh oh freet-TSAN-teh", note: "You'll hear this a lot. Naturale = still, frizzante = sparkling." },
        { target: "Il conto, per favore.", en: "The bill, please.", say: "eel KON-toh pehr fah-VOH-reh", note: "Some restaurants add a small coperto (cover charge) per person." },
        { target: "Posso pagare con la carta?", en: "Can I pay by card?", say: "POS-soh pah-GAH-reh kon lah KAR-tah" },
        { target: "È delizioso!", en: "It's delicious!", say: "eh deh-lee-TSYOH-zoh" },
        { target: "Un cornetto, grazie.", en: "A croissant, thanks.", say: "oon kor-NET-toh GRAH-tsee-eh", note: "An Italian breakfast is usually just coffee and a cornetto, standing at the bar." },
        { target: "Buon appetito!", en: "Enjoy your meal!", say: "bwon ahp-peh-TEE-toh", note: "Say it to everyone at the table before eating. It's friendly, not just for waiters." }
      ]
    },
    {
      id: "it-around",
      title: "Getting around",
      local: "In giro",
      level: "A1",
      icon: "🚉",
      tint: "#E9F1FB",
      blurb: "Ask for directions, buy tickets, and survive the train station.",
      phrases: [
        { target: "Scusi, dov'è la stazione?", en: "Excuse me, where's the station?", say: "SKOO-zee doh-VEH lah stah-TSYOH-neh", note: "Scusi is formal; scusa is for friends. It's the polite way to stop a stranger." },
        { target: "Come arrivo al centro?", en: "How do I get to the center?", say: "KOH-meh ar-REE-voh al CHEN-troh" },
        { target: "È lontano?", en: "Is it far?", say: "eh lon-TAH-noh" },
        { target: "Sempre dritto.", en: "Straight ahead.", say: "SEM-preh DRIT-toh" },
        { target: "A destra / a sinistra.", en: "To the right / to the left.", say: "ah DES-trah / ah see-NEES-trah", alt: ["A destra", "A sinistra"] },
        { target: "Un biglietto per Roma.", en: "A ticket to Rome.", say: "oon beel-YET-toh pehr ROH-mah" },
        { target: "A che ora parte il treno?", en: "What time does the train leave?", say: "ah keh OH-rah PAR-teh eel TREH-noh" },
        { target: "Devo cambiare?", en: "Do I need to change trains?", say: "DEH-voh kahm-BYAH-reh" },
        { target: "Mi sono perso/a.", en: "I'm lost.", say: "mee SOH-noh PER-soh / -sah", note: "Perso if you're male, persa if you're female." },
        { target: "Può chiamarmi un taxi?", en: "Can you call me a taxi?", say: "pwoh kyoh-MAR-mee oon TAHK-see" },
        { target: "Quanto tempo ci vuole?", en: "How long does it take?", say: "KWAHN-toh TEM-poh chee VWOH-leh" },
        { target: "Il prossimo treno è alle nove.", en: "The next train is at nine.", say: "eel PROS-see-moh TREH-noh eh AL-leh NOH-veh" }
      ]
    },
    {
      id: "it-shop",
      title: "Shopping & money",
      local: "Fare shopping",
      level: "A1",
      icon: "🛍️",
      tint: "#FDECEF",
      blurb: "Ask prices, find your size, and pay without panic.",
      phrases: [
        { target: "Quanto costa questo?", en: "How much is this?", say: "KWAHN-toh KOS-tah KWES-toh" },
        { target: "Posso provarlo?", en: "Can I try it on?", say: "POS-soh proh-VAR-loh", note: "Match the ending to the noun: provarla for la camicia or la giacca, provarlo for il maglione." },
        { target: "Avete una taglia più grande?", en: "Do you have a bigger size?", say: "ah-VEH-teh OO-nah TAH-lyah pyoo GRAHN-deh" },
        { target: "Costa troppo.", en: "It's too expensive.", say: "KOS-tah TROP-poh", note: "Softer: È un po' caro — it's a bit pricey." },
        { target: "C'è uno sconto?", en: "Is there a discount?", say: "cheh OO-noh SKON-toh" },
        { target: "Vorrei pagare in contanti.", en: "I'd like to pay cash.", say: "vor-RAY pah-GAH-reh een kon-TAN-tee" },
        { target: "Posso avere lo scontrino?", en: "Can I have the receipt?", say: "POS-soh ah-VEH-reh loh skon-TREE-noh" },
        { target: "A che ora chiudete?", en: "What time do you close?", say: "ah keh OH-rah KYOO-deh-teh" },
        { target: "Cerco un regalo.", en: "I'm looking for a gift.", say: "CHER-koh oon reh-GAH-loh" },
        { target: "Va bene, lo prendo.", en: "Okay, I'll take it.", say: "vah BEH-neh loh PREN-doh" }
      ]
    },
    {
      id: "it-small",
      title: "Small talk & daily life",
      local: "Due chiacchiere",
      level: "A1",
      icon: "💬",
      tint: "#F1EDFD",
      blurb: "Keep a conversation alive beyond the first hello.",
      phrases: [
        { target: "Come va?", en: "How's it going?", say: "KOH-meh vah" },
        { target: "Non c'è male.", en: "Not bad.", say: "non cheh MAH-leh" },
        { target: "Che bella giornata!", en: "What a nice day!", say: "keh BEL-lah jor-NAH-tah" },
        { target: "Cosa fai nel tempo libero?", en: "What do you do in your free time?", say: "KOH-zah fy nel TEM-poh LEE-beh-roh" },
        { target: "Mi piace leggere.", en: "I like reading.", say: "mee PYAH-cheh LED-jeh-reh", note: "Mi piace + one thing. Mi piacciono + plural things: Mi piacciono i libri." },
        { target: "Domani lavoro.", en: "Tomorrow I'm working.", say: "doh-MAH-nee lah-VOH-roh" },
        { target: "Ho fame.", en: "I'm hungry.", say: "oh FAH-meh", note: "Literally 'I have hunger'. Same pattern: Ho sete (I'm thirsty), Ho sonno (I'm sleepy)." },
        { target: "Ho sete.", en: "I'm thirsty.", say: "oh SEH-teh" },
        { target: "Dove abiti?", en: "Where do you live?", say: "DOH-veh AH-bee-tee" },
        { target: "Vivo a Milano.", en: "I live in Milan.", say: "VEE-voh ah mee-LAH-noh" },
        { target: "Parli inglese?", en: "Do you speak English?", say: "PAR-lee een-GLEH-zeh" },
        { target: "Più lentamente, per favore.", en: "More slowly, please.", say: "pyoo len-tah-MEN-teh" },
        { target: "Ci vediamo dopo!", en: "See you later!", say: "chee veh-DYAH-moh DOH-poh" }
      ]
    },
    {
      id: "it-help",
      title: "Help & emergencies",
      local: "Aiuto e emergenze",
      level: "A1",
      icon: "🆘",
      tint: "#FDECEA",
      blurb: "The handful of lines you hope never to need.",
      phrases: [
        { target: "Aiuto!", en: "Help!", say: "ah-YOO-toh" },
        { target: "Ho bisogno di aiuto.", en: "I need help.", say: "oh bee-ZOH-nyoh dee ah-YOO-toh" },
        { target: "Chiamate la polizia!", en: "Call the police!", say: "kyoh-MAH-teh lah poh-lee-TSEE-ah" },
        { target: "Non mi sento bene.", en: "I don't feel well.", say: "non mee SEN-toh BEH-neh" },
        { target: "Dov'è la farmacia?", en: "Where's the pharmacy?", say: "doh-VEH lah far-mah-CHEE-ah" },
        { target: "Ho perso il passaporto.", en: "I lost my passport.", say: "oh PER-soh eel pahs-sah-POR-toh" },
        { target: "È un'emergenza.", en: "It's an emergency.", say: "eh oon eh-mer-JEN-tsah" },
        { target: "Parla inglese?", en: "Do you speak English? (formal)", say: "PAR-lah een-GLEH-zeh" },
        { target: "Può aiutarmi?", en: "Can you help me?", say: "pwoh ah-yoo-TAR-mee" },
        { target: "Ho una prenotazione.", en: "I have a reservation.", say: "oh OO-nah preh-noh-tah-TSYOH-neh" }
      ]
    },
    {
      id: "it-hotel",
      title: "Hotels & travel",
      local: "In albergo",
      level: "A1",
      icon: "🏨",
      tint: "#EAF5F7",
      blurb: "Check in, ask for what you need, check out smoothly.",
      phrases: [
        { target: "Ho una prenotazione a nome Rossi.", en: "I have a reservation under Rossi.", say: "oh OO-nah preh-noh-tah-TSYOH-neh ah NOH-meh ROS-see" },
        { target: "Vorrei una camera doppia.", en: "I'd like a double room.", say: "vor-RAY OO-nah KAH-meh-rah DOP-pyah" },
        { target: "A che ora è la colazione?", en: "What time is breakfast?", say: "ah keh OH-rah eh lah koh-lah-TSYOH-neh" },
        { target: "Il wi-fi non funziona.", en: "The Wi-Fi isn't working.", say: "eel WY-fy non foon-TSYOH-nah" },
        { target: "Posso lasciare la valigia?", en: "Can I leave my suitcase?", say: "POS-soh lah-SHAH-reh lah vah-LEE-jah" },
        { target: "Vorrei fare il check-out.", en: "I'd like to check out.", say: "vor-RAY FAH-reh eel chek-OWT" },
        { target: "La camera è al secondo piano.", en: "The room is on the second floor.", say: "lah KAH-meh-rah eh al seh-KON-doh PYAH-noh", note: "Italian floors start above ground: primo piano is one floor up, secondo is two." },
        { target: "Mi può svegliare alle sette?", en: "Can you wake me at seven?", say: "mee pwoh zveh-LYAH-reh AL-leh SET-teh" }
      ]
    },
    {
      id: "it-plans",
      title: "Plans & work",
      local: "Programmi e lavoro",
      level: "A1",
      icon: "📅",
      tint: "#FFF2E2",
      blurb: "Make plans with someone and talk about what you do.",
      phrases: [
        { target: "Cosa fai di lavoro?", en: "What do you do for work?", say: "KOH-zah fy dee lah-VOH-roh" },
        { target: "Lavoro in un ufficio.", en: "I work in an office.", say: "lah-VOH-roh een oon oof-FEE-choh" },
        { target: "Studio italiano.", en: "I study Italian.", say: "STOO-dyoh ee-tah-LYAH-noh" },
        { target: "Ti va di prendere un caffè?", en: "Do you want to grab a coffee?", say: "tee vah dee PREN-deh-reh oon kahf-FEH", note: "Literally 'does it go for you to get a coffee?' Very natural and friendly." },
        { target: "Facciamo alle sei?", en: "Shall we meet at six?", say: "faht-CHAH-moh AL-leh SEH-ee" },
        { target: "Mi dispiace, non posso.", en: "Sorry, I can't.", say: "mee dee-SPYAH-cheh non POS-soh" },
        { target: "Con piacere!", en: "With pleasure!", say: "kon pyah-CHEH-reh" },
        { target: "Ti scrivo dopo.", en: "I'll text you later.", say: "tee SKREE-voh DOH-poh" },
        { target: "A più tardi!", en: "See you later!", say: "ah pyoo TAR-dee" },
        { target: "Buona giornata!", en: "Have a good day!", say: "BWOH-nah jor-NAH-tah" }
      ]
    },
    {
      id: "it-family",
      title: "Family & people",
      local: "Famiglia e persone",
      level: "A1",
      icon: "👨‍👩‍👧",
      tint: "#FDEFF4",
      blurb: "Talk about the people around you — and the ones you go home to.",
      phrases: [
        { target: "Hai fratelli o sorelle?", en: "Do you have brothers or sisters?", say: "eye frah-TEL-lee oh soh-REL-leh", note: "Informal. With an older stranger or a shopkeeper: Ha fratelli o sorelle?" },
        { target: "Ho un fratello e una sorella.", en: "I have a brother and a sister.", say: "oh oon frah-TEL-loh eh OO-nah soh-REL-lah" },
        { target: "Sei sposato/a?", en: "Are you married?", say: "say spoh-ZAH-toh / -tah", note: "Use -o if you're asking a man, -a for a woman. The same pattern works for many adjectives." },
        { target: "No, sono single.", en: "No, I'm single.", say: "noh SOH-noh SEEN-ghel", note: "Single is widely used. You can also say sono libero/a — I'm free." },
        { target: "Mio padre e mia madre vivono a Roma.", en: "My father and mother live in Rome.", say: "MEE-oh PAH-dreh eh MEE-ah MAH-dreh VEE-voh-noh ah ROH-mah", note: "Mio/mia agrees with the person, not with the speaker: mio padre, mia madre." },
        { target: "I miei nonni hanno ottant'anni.", en: "My grandparents are eighty.", say: "ee MYAY NON-nee AN-noh ot-tan-TAN-nee", note: "Age uses avere: ho trent'anni = I'm thirty (literally 'I have thirty years')." },
        { target: "Mio figlio ha tre anni.", en: "My son is three years old.", say: "MEE-oh FEE-lyoh ah treh AN-nee" },
        { target: "Come si chiama tua moglie?", en: "What's your wife's name?", say: "KOH-meh see KYAH-mah TOO-ah MOH-lyeh" },
        { target: "È molto simpatico.", en: "He's very nice.", say: "eh MOL-toh seem-PAH-tee-koh", note: "Simpatico means likeable or fun to be around — warmer than just polite." },
        { target: "Andiamo molto d'accordo.", en: "We get along very well.", say: "an-DYAH-moh MOL-toh dak-KOR-doh" },
        { target: "Ti presento mia sorella.", en: "Let me introduce my sister.", say: "tee preh-ZEN-toh MEE-ah soh-REL-lah", note: "Presentare is literally 'to present'. Ti presento… works for any introduction." },
        { target: "Siamo in quattro in famiglia.", en: "There are four of us in the family.", say: "SYAH-moh een KWAHT-troh een fah-MEE-lyah" }
      ]
    },
    {
      id: "it-home",
      title: "Home & neighborhood",
      local: "Casa e quartiere",
      level: "A1",
      icon: "🏠",
      tint: "#EFF6EC",
      blurb: "Describe where you live, fix what's broken, and find what you need nearby.",
      phrases: [
        { target: "Abito in un appartamento.", en: "I live in an apartment.", say: "AH-bee-toh een oon ah-par-tah-MEN-toh", note: "Abitare means to live or reside. Vivere works too, but abitare sounds more natural for a home." },
        { target: "Sono al terzo piano.", en: "I'm on the third floor.", say: "SOH-noh al TER-tsoh PYAH-noh", note: "Italian floors start above ground: piano terra is street level, so terzo is three flights up." },
        { target: "La mia camera è molto luminosa.", en: "My room is very bright.", say: "lah MEE-ah KAH-meh-rah eh MOL-toh loo-mee-NOH-zah", note: "Camera means room or bedroom. For a hotel room, camera is exactly right." },
        { target: "Il bagno è a destra.", en: "The bathroom is on the right.", say: "eel BAH-nyoh eh ah DES-trah" },
        { target: "C'è un supermercato qui vicino?", en: "Is there a supermarket nearby?", say: "cheh oon soo-pehr-mer-KAH-toh kwee vee-CHEE-noh" },
        { target: "Il mio quartiere è tranquillo.", en: "My neighborhood is quiet.", say: "eel MEE-oh kwar-TYEH-reh eh tran-KWEEL-loh" },
        { target: "Devo fare le pulizie.", en: "I have to clean.", say: "DEH-voh FAH-reh leh poo-LEE-tsyeh", note: "Fare le pulizie is the set phrase for doing the housework." },
        { target: "Metto i piatti in lavastoviglie.", en: "I put the dishes in the dishwasher.", say: "MET-toh ee PYAT-tee een lah-vah-stoh-VEE-lyeh" },
        { target: "La lavatrice è rotta.", en: "The washing machine is broken.", say: "lah lah-vah-TREE-cheh eh ROT-tah", note: "Rotto/rotta = broken. For something that isn't working, use non funziona." },
        { target: "Posso usare il tuo wi-fi?", en: "Can I use your Wi-Fi?", say: "POS-soh oo-ZAH-reh eel TOO-oh WY-fy" },
        { target: "Mi piace il balcone.", en: "I like the balcony.", say: "mee PYAH-cheh eel bal-KOH-neh" },
        { target: "Il riscaldamento non funziona.", en: "The heating isn't working.", say: "eel rees-kal-dah-MEN-toh non foon-TSYOH-nah" }
      ]
    },
    {
      id: "it-food",
      title: "Food & the market",
      local: "Cibo e mercato",
      level: "A1",
      icon: "🥕",
      tint: "#FBF3DF",
      blurb: "Buy fresh food by weight, cook at home, and say what you don't want.",
      phrases: [
        { target: "Vorrei un chilo di pomodori.", en: "I'd like a kilo of tomatoes.", say: "vor-RAY oon KEE-loh dee poh-moh-DOH-ree" },
        { target: "Quanto costano le mele?", en: "How much are the apples?", say: "KWAHN-toh KOS-tah-noh leh MEH-leh", note: "Costa for one item, costano for several. Quanto costa questo? / Quanto costano questi?" },
        { target: "È fresco?", en: "Is it fresh?", say: "eh FRES-koh" },
        { target: "Un etto di prosciutto, per favore.", en: "A hundred grams of ham, please.", say: "oon ET-toh dee proh-SHOOT-toh pehr fah-VOH-reh", note: "Un etto is 100 grams, un chilo is a kilo. Market quantities are usually in etti." },
        { target: "Prendo questo.", en: "I'll take this.", say: "PREN-doh KWES-toh" },
        { target: "Cucino la pasta stasera.", en: "I'm cooking pasta tonight.", say: "KOO-chee-noh lah PAH-stah stah-SEH-rah" },
        { target: "Mi piace cucinare.", en: "I like cooking.", say: "mee PYAH-cheh koo-chee-NAH-reh" },
        { target: "Ho bisogno di sale.", en: "I need salt.", say: "oh bee-ZOH-nyoh dee SAH-leh" },
        { target: "Senza cipolla, per favore.", en: "No onion, please.", say: "SEN-tsah CHEE-pol-lah", note: "Senza means without. Use it for allergies too: senza glutine, senza lattosio." },
        { target: "È troppo salato.", en: "It's too salty.", say: "eh TROP-poh sah-LAH-toh" },
        { target: "Posso avere un sacchetto?", en: "Can I have a bag?", say: "POS-soh ah-VEH-reh oon sak-KET-toh" },
        { target: "Il mercato è aperto la mattina.", en: "The market is open in the morning.", say: "eel mer-KAH-toh eh ah-PER-toh lah mat-TEE-nah" }
      ]
    },
    {
      id: "it-health",
      title: "Health & the doctor",
      local: "Salute e medico",
      level: "A2",
      icon: "🩺",
      tint: "#FCEDF0",
      blurb: "Describe a symptom clearly and get the right medicine.",
      phrases: [
        { target: "Mi fa male la testa.", en: "My head hurts.", say: "mee fah MAH-leh lah TES-tah", note: "Literally 'the head makes pain to me'. For plural body parts: mi fanno male gli occhi." },
        { target: "Ho mal di gola.", en: "I have a sore throat.", say: "oh mahl dee GOH-lah" },
        { target: "Ho la febbre.", en: "I have a fever.", say: "oh lah FEB-breh" },
        { target: "Mi sento stanco/a.", en: "I feel tired.", say: "mee SEN-toh STAHN-koh / -kah", note: "-o if you're male, -a if you're female. Sentirsi is the reflexive 'to feel'." },
        { target: "Vorrei un appuntamento dal medico.", en: "I'd like an appointment with the doctor.", say: "vor-RAY oon ap-poon-tah-MEN-toh dal MEH-dee-koh" },
        { target: "Ho bisogno di un farmaco.", en: "I need medicine.", say: "oh bee-ZOH-nyoh dee oon FAR-mah-koh", note: "Farmaco is medicine in general; la medicina is also common." },
        { target: "Sono allergico/a alla penicillina.", en: "I'm allergic to penicillin.", say: "SOH-noh al-LER-jee-koh / -kah AL-lah peh-nee-cheel-LEE-nah" },
        { target: "Ho preso una medicina.", en: "I took some medicine.", say: "oh PREH-zoh OO-nah meh-dee-CHEE-nah" },
        { target: "Devo riposare.", en: "I need to rest.", say: "DEH-voh ree-poh-ZAH-reh" },
        { target: "Chiami un'ambulanza!", en: "Call an ambulance!", say: "KYAH-mee oon am-boo-LAN-tsah" },
        { target: "Fa male qui.", en: "It hurts here.", say: "fah MAH-leh kwee" },
        { target: "Sto meglio, grazie.", en: "I'm better, thanks.", say: "stoh MEH-lyoh GRAH-tsee-eh" }
      ]
    },
    {
      id: "it-weather",
      title: "Weather & seasons",
      local: "Tempo e stagioni",
      level: "A1",
      icon: "🌤️",
      tint: "#E8F4FA",
      blurb: "The safest small talk in Italy — and how to plan around it.",
      phrases: [
        { target: "Che tempo fa?", en: "What's the weather like?", say: "keh TEM-poh fah", note: "Literally 'what weather does it make?' The answer starts with fa: fa caldo, fa freddo." },
        { target: "Fa caldo.", en: "It's hot.", say: "fah KAHL-doh" },
        { target: "Fa freddo.", en: "It's cold.", say: "fah FRED-doh" },
        { target: "Piove.", en: "It's raining.", say: "PYOH-veh", note: "From piovere. You don't need a subject: piove is a complete sentence." },
        { target: "C'è il sole.", en: "It's sunny.", say: "cheh eel SOH-leh" },
        { target: "C'è vento.", en: "It's windy.", say: "cheh VEN-toh" },
        { target: "Domani nevica.", en: "Tomorrow it will snow.", say: "doh-MAH-nee NEH-vee-kah" },
        { target: "Ci sono venti gradi.", en: "It's twenty degrees.", say: "chee SOH-noh VEN-tee GRAH-dee" },
        { target: "Mi piace la primavera.", en: "I like spring.", say: "mee PYAH-cheh lah pree-mah-VEH-rah" },
        { target: "In estate andiamo al mare.", en: "In summer we go to the sea.", say: "een eh-STAH-teh an-DYAH-moh al MAH-reh" },
        { target: "Ho dimenticato l'ombrello.", en: "I forgot my umbrella.", say: "oh dee-men-tee-KAH-toh lom-BREL-loh" },
        { target: "Speriamo che faccia bel tempo.", en: "Let's hope the weather is nice.", say: "speh-RYAH-moh keh FAHT-chah bel TEM-poh", note: "Sperare che takes the subjunctive: faccia, not fa." }
      ]
    },
    {
      id: "it-opinions",
      title: "Opinions & feelings",
      local: "Opinioni e sentimenti",
      level: "A2",
      icon: "💭",
      tint: "#EFEDFB",
      blurb: "Say what you think, agree, disagree — and stay friends.",
      phrases: [
        { target: "Secondo me, è una buona idea.", en: "In my opinion, it's a good idea.", say: "seh-KON-doh meh eh OO-nah BWOH-nah ee-DEH-ah", note: "Secondo me is the everyday 'in my opinion'. No preposition needed." },
        { target: "Sono d'accordo.", en: "I agree.", say: "SOH-noh dak-KOR-doh" },
        { target: "Non sono d'accordo.", en: "I disagree.", say: "non SOH-noh dak-KOR-doh", note: "Softer: non sono del tutto d'accordo — I don't entirely agree." },
        { target: "Penso che sia interessante.", en: "I think it's interesting.", say: "PEN-soh keh SEE-ah een-teh-res-SAN-teh", note: "Pensare che takes the subjunctive: sia, not è." },
        { target: "Mi sembra giusto.", en: "It seems right to me.", say: "mee SEM-brah JOO-stoh" },
        { target: "Preferisco il treno.", en: "I prefer the train.", say: "preh-feh-REES-koh eel TREH-noh" },
        { target: "Non mi piace per niente.", en: "I don't like it at all.", say: "non mee PYAH-cheh pehr NYEN-teh" },
        { target: "Sono contento/a.", en: "I'm happy.", say: "SOH-noh kon-TEN-toh / -tah" },
        { target: "Sono un po' nervoso/a.", en: "I'm a bit nervous.", say: "SOH-noh oon poh ner-VOH-zoh / -zah" },
        { target: "Mi arrabbio facilmente.", en: "I get angry easily.", say: "mee ar-RAB-byoh fah-cheel-MEN-teh" },
        { target: "Che ne pensi?", en: "What do you think?", say: "keh neh PEN-see" },
        { target: "Dipende.", en: "It depends.", say: "dee-PEN-deh" }
      ]
    },
    {
      id: "it-past",
      title: "Talking about the past",
      local: "Il passato",
      level: "A2",
      icon: "⏳",
      tint: "#F0EFEA",
      blurb: "Tell someone what you did yesterday — the heart of real conversation.",
      phrases: [
        { target: "Ieri sono andato/a al cinema.", en: "Yesterday I went to the cinema.", say: "YEH-ree SOH-noh an-DAH-toh / -tah al CHEE-neh-mah", note: "Movement verbs use essere: sono andato/a. The ending agrees with the speaker." },
        { target: "Ho mangiato una pizza.", en: "I ate a pizza.", say: "oh man-JAH-toh OO-nah PEET-sah" },
        { target: "Abbiamo visitato Roma.", en: "We visited Rome.", say: "ab-BYAH-moh vee-zee-TAH-toh ROH-mah" },
        { target: "Eri a casa?", en: "Were you at home?", say: "EH-ree ah KAH-zah" },
        { target: "Non ho dormito bene.", en: "I didn't sleep well.", say: "non oh dor-MEE-toh BEH-neh" },
        { target: "Sono arrivato/a tardi.", en: "I arrived late.", say: "SOH-noh ar-ree-VAH-toh / -tah TAR-dee" },
        { target: "Cosa hai fatto ieri?", en: "What did you do yesterday?", say: "KOH-zah eye FAHT-toh YEH-ree" },
        { target: "È stato bellissimo.", en: "It was wonderful.", say: "eh STAH-toh bel-LEES-see-moh" },
        { target: "Ho conosciuto mia moglie a Milano.", en: "I met my wife in Milan.", say: "oh koh-noh-SHOO-toh MEE-ah MOH-lyeh ah mee-LAH-noh", note: "Conoscere becomes conosciuto. Ho conosciuto means I met — not I knew." },
        { target: "Da quanto tempo studi italiano?", en: "How long have you been studying Italian?", say: "dah KWAHN-toh TEM-poh STOO-dee ee-tah-LYAH-noh" },
        { target: "Studio italiano da due anni.", en: "I've been studying Italian for two years.", say: "STOO-dyoh ee-tah-LYAH-noh dah DOO-eh AN-nee", note: "Italian uses the present + da for ongoing time: studio da due anni." },
        { target: "Non ci sono mai stato/a.", en: "I've never been there.", say: "non chee SOH-noh my STAH-toh / -tah" }
      ]
    },
    {
      id: "it-future",
      title: "Plans & the future",
      local: "Futuro e progetti",
      level: "A2",
      icon: "🌅",
      tint: "#EAF6F0",
      blurb: "Make plans, share hopes, and talk about what comes next.",
      phrases: [
        { target: "Quest'estate viaggerò in Italia.", en: "This summer I'll travel to Italy.", say: "kwest-ah-STAH-teh vee-aj-jeh-ROH een ee-TAH-lyah", note: "The future tense is common for real plans. For tomorrow, Italians often just use the present." },
        { target: "Domani vado a Firenze.", en: "Tomorrow I'm going to Florence.", say: "doh-MAH-nee VAH-doh ah fee-REN-tseh", note: "Present tense + a time word is the most natural near future: domani vado." },
        { target: "Ho intenzione di studiare di più.", en: "I intend to study more.", say: "oh een-ten-TSYOH-neh dee stoo-DYAH-reh dee pyoo" },
        { target: "Spero di trovare lavoro.", en: "I hope to find work.", say: "SPEH-roh dee troh-VAH-reh lah-VOH-roh" },
        { target: "Se posso, vengo anch'io.", en: "If I can, I'll come too.", say: "seh POS-soh VEN-goh an-KEE-oh" },
        { target: "Ci vediamo la settimana prossima.", en: "See you next week.", say: "chee veh-DYAH-moh lah set-tee-MAH-nah PROS-see-mah" },
        { target: "Cosa farai dopo?", en: "What will you do afterwards?", say: "KOH-zah fah-RY DOH-poh" },
        { target: "Penso di restare qui.", en: "I think I'll stay here.", say: "PEN-soh dee res-TAH-reh kwee" },
        { target: "Voglio imparare a cucinare.", en: "I want to learn to cook.", say: "VOH-lyoh eem-pah-RAH-reh ah koo-chee-NAH-reh" },
        { target: "Andrà tutto bene.", en: "Everything will be fine.", say: "an-DRAH TOOT-toh BEH-neh" },
        { target: "Prima o poi ci tornerò.", en: "Sooner or later I'll come back.", say: "PREE-mah oh poy chee tor-neh-ROH" },
        { target: "Ti scrivo quando arrivo.", en: "I'll text you when I arrive.", say: "tee SKREE-voh KWAHN-doh ar-REE-voh" }
      ]
    },
    {
      id: "it-tech",
      title: "Phone & technology",
      local: "Telefono e tecnologia",
      level: "A2",
      icon: "📱",
      tint: "#EDF2F9",
      blurb: "Answer a call, fix a connection, and survive a dead battery.",
      phrases: [
        { target: "Pronto?", en: "Hello? (on the phone)", say: "PRON-toh", note: "Use pronto only on the phone. In person, say buongiorno or ciao." },
        { target: "Come si scrive?", en: "How do you spell it?", say: "KOH-meh see SKREE-veh" },
        { target: "Mi mandi un messaggio?", en: "Can you send me a message?", say: "mee MAN-dee oon mes-SAH-joh", note: "Informal. Formal: Mi manda un messaggio?" },
        { target: "Il mio telefono non ha batteria.", en: "My phone has no battery.", say: "eel MEE-oh teh-LEH-foh-noh non ah bat-teh-REE-ah" },
        { target: "Non c'è campo.", en: "There's no signal.", say: "non cheh KAHM-poh" },
        { target: "Qual è la password del wi-fi?", en: "What's the Wi-Fi password?", say: "kwal eh lah PAS-word del WY-fy", note: "Qual è has no apostrophe — qual is already shortened from quale." },
        { target: "Ho perso la connessione.", en: "I lost the connection.", say: "oh PER-soh lah kon-nes-SYOH-neh" },
        { target: "Posso caricare il telefono?", en: "Can I charge my phone?", say: "POS-soh kah-ree-KAH-reh eel teh-LEH-foh-noh", note: "Caricare means to charge or to load. A charger is un caricabatterie." },
        { target: "Ti chiamo più tardi.", en: "I'll call you later.", say: "tee KYAH-moh pyoo TAR-dee" },
        { target: "Ho ricevuto il tuo messaggio.", en: "I got your message.", say: "oh ree-cheh-VOO-toh eel TOO-oh mes-SAH-joh" },
        { target: "Sto scaricando un'app.", en: "I'm downloading an app.", say: "stoh skah-ree-KAN-doh oon ap", note: "Stare + gerund: sto scaricando = I am downloading, right now." },
        { target: "Il sito non funziona.", en: "The website isn't working.", say: "eel SEE-toh non foon-TSYOH-nah" }
      ]
    },
    {
      id: "it-culture",
      title: "Culture & free time",
      local: "Cultura e tempo libero",
      level: "A2",
      icon: "🎭",
      tint: "#FBF0F2",
      blurb: "Invite someone out, talk about films and music, and book a seat.",
      phrases: [
        { target: "Ti va di andare al cinema?", en: "Do you feel like going to the cinema?", say: "tee vah dee an-DAH-reh al CHEE-neh-mah" },
        { target: "Che film consigli?", en: "What film do you recommend?", say: "keh feelm kon-SEE-lyee" },
        { target: "Mi piace la musica italiana.", en: "I like Italian music.", say: "mee PYAH-cheh lah MOO-zee-kah ee-tah-LYAH-nah" },
        { target: "Suono la chitarra.", en: "I play the guitar.", say: "SWOH-noh lah kee-TAR-rah", note: "Suonare is for playing an instrument; giocare is for playing a game or sport." },
        { target: "Ho letto un bel libro.", en: "I read a good book.", say: "oh LET-toh oon bel LEE-broh" },
        { target: "Andiamo in centro a fare un giro.", en: "Let's go downtown for a walk.", say: "an-DYAH-moh een CHEN-troh ah FAH-reh oon JEE-roh", note: "Fare un giro means to go for a stroll or a spin — very Italian." },
        { target: "C'è una mostra interessante.", en: "There's an interesting exhibition.", say: "cheh OO-nah MOS-trah een-teh-res-SAN-teh" },
        { target: "Il museo è chiuso il lunedì.", en: "The museum is closed on Mondays.", say: "eel moo-ZEH-oh eh KYOO-zoh eel loo-neh-DEE" },
        { target: "Quanto costa il biglietto?", en: "How much is the ticket?", say: "KWAHN-toh KOS-tah eel beel-YET-toh" },
        { target: "Possiamo prenotare due posti?", en: "Can we book two seats?", say: "pos-SYAH-moh preh-noh-TAH-reh DOO-eh POS-tee" },
        { target: "Mi sono divertito/a molto.", en: "I had a lot of fun.", say: "mee SOH-noh dee-ver-TEE-toh / -tah MOL-toh", note: "Divertirsi is reflexive: mi sono divertito/a. Literally 'I enjoyed myself'." },
        { target: "Ci vediamo dopo lo spettacolo.", en: "See you after the show.", say: "chee veh-DYAH-moh DOH-poh loh spet-TAH-koh-loh" }
      ]
    }
  ],
  vocab: [
    {
      id: "it-v-numbers",
      title: "Numbers",
      local: "I numeri",
      icon: "🔢",
      tint: "#EDF3FB",
      blurb: "Prices, times, quantities — the words you reach for all day.",
      words: [
        { term: "zero", en: "zero", say: "DZEH-roh" },
        { term: "uno", en: "one", say: "OO-noh" },
        { term: "due", en: "two", say: "DOO-eh" },
        { term: "tre", en: "three", say: "treh" },
        { term: "quattro", en: "four", say: "KWAHT-troh" },
        { term: "cinque", en: "five", say: "CHEEN-kweh" },
        { term: "sei", en: "six", say: "say" },
        { term: "sette", en: "seven", say: "SET-teh" },
        { term: "otto", en: "eight", say: "OT-toh" },
        { term: "nove", en: "nine", say: "NOH-veh" },
        { term: "dieci", en: "ten", say: "DYEH-chee" },
        { term: "venti", en: "twenty", say: "VEN-tee" }
      ]
    },
    {
      id: "it-v-time",
      title: "Days & months",
      local: "Giorni e mesi",
      icon: "📅",
      tint: "#FBF0E4",
      blurb: "Make an appointment, book a table, and read a timetable.",
      words: [
        { term: "lunedì", en: "Monday", say: "loo-neh-DEE", note: "Days are not capitalised in Italian." },
        { term: "martedì", en: "Tuesday", say: "mar-teh-DEE" },
        { term: "mercoledì", en: "Wednesday", say: "mer-koh-leh-DEE" },
        { term: "giovedì", en: "Thursday", say: "joh-veh-DEE" },
        { term: "venerdì", en: "Friday", say: "veh-ner-DEE" },
        { term: "sabato", en: "Saturday", say: "SAH-bah-toh" },
        { term: "domenica", en: "Sunday", say: "doh-MEH-nee-kah" },
        { term: "gennaio", en: "January", say: "jen-NAH-yoh" },
        { term: "giugno", en: "June", say: "JOO-nyoh" },
        { term: "dicembre", en: "December", say: "dee-CHEM-breh" }
      ]
    },
    {
      id: "it-v-colors",
      title: "Colors",
      local: "I colori",
      icon: "🎨",
      tint: "#FDEFF4",
      blurb: "Describe what you see — and what you'd like to buy.",
      words: [
        { term: "rosso", en: "red", say: "ROS-soh" },
        { term: "blu", en: "blue", say: "bloo" },
        { term: "verde", en: "green", say: "VER-deh" },
        { term: "giallo", en: "yellow", say: "JAHL-loh" },
        { term: "nero", en: "black", say: "NEH-roh" },
        { term: "bianco", en: "white", say: "BYAHN-koh" },
        { term: "arancione", en: "orange", say: "ah-ran-CHOH-neh" },
        { term: "rosa", en: "pink", say: "ROH-zah" },
        { term: "grigio", en: "grey", say: "GREE-joh" },
        { term: "marrone", en: "brown", say: "mar-ROH-neh" }
      ]
    },
    {
      id: "it-v-family",
      title: "Family",
      local: "La famiglia",
      icon: "👨‍👩‍👧",
      tint: "#F3EEFC",
      blurb: "The people you'll introduce in the first five minutes of any chat.",
      words: [
        { term: "la madre", en: "mother", say: "lah MAH-dreh" },
        { term: "il padre", en: "father", say: "eel PAH-dreh" },
        { term: "il fratello", en: "brother", say: "eel frah-TEL-loh" },
        { term: "la sorella", en: "sister", say: "lah soh-REL-lah" },
        { term: "il figlio", en: "son", say: "eel FEE-lyoh" },
        { term: "la figlia", en: "daughter", say: "lah FEE-lyah" },
        { term: "i nonni", en: "grandparents", say: "ee NON-nee" },
        { term: "la moglie", en: "wife", say: "lah MOH-lyeh" },
        { term: "il marito", en: "husband", say: "eel mah-REE-toh" },
        { term: "il cugino", en: "cousin (male)", say: "eel koo-JEE-noh", note: "A female cousin is la cugina." }
      ]
    },
    {
      id: "it-v-food",
      title: "Food & drink",
      local: "Cibo e bevande",
      icon: "🍽️",
      tint: "#FBF3DF",
      blurb: "Recognise a menu before you sit down.",
      words: [
        { term: "il pane", en: "bread", say: "eel PAH-neh" },
        { term: "l'acqua", en: "water", say: "LAH-kwah" },
        { term: "il vino", en: "wine", say: "eel VEE-noh" },
        { term: "la pasta", en: "pasta", say: "lah PAH-stah" },
        { term: "il riso", en: "rice", say: "eel REE-zoh" },
        { term: "la carne", en: "meat", say: "lah KAR-neh" },
        { term: "il pesce", en: "fish", say: "eel PEH-sheh" },
        { term: "la verdura", en: "vegetables", say: "lah ver-DOO-rah" },
        { term: "la frutta", en: "fruit", say: "lah FROOT-tah" },
        { term: "il formaggio", en: "cheese", say: "eel for-MAH-joh" }
      ]
    },
    {
      id: "it-v-body",
      title: "Body & health",
      local: "Corpo e salute",
      icon: "🩺",
      tint: "#FCEDF0",
      blurb: "Point to the problem at a pharmacy or a doctor's office.",
      words: [
        { term: "la testa", en: "head", say: "lah TES-tah" },
        { term: "gli occhi", en: "eyes", say: "ly OK-kee", note: "Singular: l'occhio." },
        { term: "la mano", en: "hand", say: "lah MAH-noh", note: "Irregular: la mano is feminine but ends in -o." },
        { term: "il piede", en: "foot", say: "eel PYEH-deh" },
        { term: "lo stomaco", en: "stomach", say: "loh STOH-mah-koh" },
        { term: "la schiena", en: "back", say: "lah SKYEH-nah" },
        { term: "il medico", en: "doctor", say: "eel MEH-dee-koh" },
        { term: "la farmacia", en: "pharmacy", say: "lah far-mah-CHEE-ah" },
        { term: "la medicina", en: "medicine", say: "lah meh-dee-CHEE-nah" },
        { term: "il raffreddore", en: "a cold", say: "eel raf-fred-DOH-reh" }
      ]
    },
    {
      id: "it-v-home",
      title: "Home & furniture",
      local: "Casa e mobili",
      icon: "🏠",
      tint: "#EFF6EC",
      blurb: "Name the rooms and the things in them.",
      words: [
        { term: "la casa", en: "house", say: "lah KAH-zah" },
        { term: "la cucina", en: "kitchen", say: "lah koo-CHEE-nah" },
        { term: "il bagno", en: "bathroom", say: "eel BAH-nyoh" },
        { term: "la camera", en: "bedroom", say: "lah KAH-meh-rah" },
        { term: "il tavolo", en: "table", say: "eel TAH-voh-loh" },
        { term: "la sedia", en: "chair", say: "lah SEH-dyah" },
        { term: "il letto", en: "bed", say: "eel LET-toh" },
        { term: "la finestra", en: "window", say: "lah fee-NES-trah" },
        { term: "la porta", en: "door", say: "lah POR-tah" },
        { term: "il balcone", en: "balcony", say: "eel bal-KOH-neh" }
      ]
    },
    {
      id: "it-v-clothes",
      title: "Clothes",
      local: "I vestiti",
      icon: "👕",
      tint: "#F7F0E8",
      blurb: "Ask for a size, a color, and a changing room.",
      words: [
        { term: "la camicia", en: "shirt", say: "lah kah-MEE-chah" },
        { term: "la maglietta", en: "T-shirt", say: "lah mah-LYET-tah" },
        { term: "i pantaloni", en: "trousers", say: "ee pan-tah-LOH-nee", note: "Always plural, like English 'trousers'." },
        { term: "le scarpe", en: "shoes", say: "leh SKAR-peh" },
        { term: "la giacca", en: "jacket", say: "lah JAK-kah" },
        { term: "il cappotto", en: "coat", say: "eel kap-POT-toh" },
        { term: "la gonna", en: "skirt", say: "lah GON-nah" },
        { term: "il cappello", en: "hat", say: "eel kap-PEL-loh" },
        { term: "i calzini", en: "socks", say: "ee kal-TSEE-nee" },
        { term: "la borsa", en: "bag", say: "lah BOR-sah" }
      ]
    },
    {
      id: "it-v-travel",
      title: "Travel & transport",
      local: "Viaggi e trasporti",
      icon: "🚆",
      tint: "#EAF5F7",
      blurb: "Trains, tickets, platforms — the words on every sign.",
      words: [
        { term: "il treno", en: "train", say: "eel TREH-noh" },
        { term: "l'autobus", en: "bus", say: "LOW-toh-boos" },
        { term: "l'aereo", en: "plane", say: "lah-EH-reh-oh" },
        { term: "la stazione", en: "station", say: "lah stah-TSYOH-neh" },
        { term: "l'aeroporto", en: "airport", say: "lah-eh-roh-POR-toh" },
        { term: "il biglietto", en: "ticket", say: "eel beel-YET-toh" },
        { term: "la valigia", en: "suitcase", say: "lah vah-LEE-jah" },
        { term: "la mappa", en: "map", say: "lah MAP-pah" },
        { term: "la strada", en: "street", say: "lah STRAH-dah" },
        { term: "il taxi", en: "taxi", say: "eel TAHK-see" }
      ]
    },
    {
      id: "it-v-nature",
      title: "Weather & nature",
      local: "Tempo e natura",
      icon: "🌦️",
      tint: "#E8F4FA",
      blurb: "The landscape and the forecast, in ten words.",
      words: [
        { term: "il sole", en: "sun", say: "eel SOH-leh" },
        { term: "la pioggia", en: "rain", say: "lah PYOH-jah" },
        { term: "la neve", en: "snow", say: "lah NEH-veh" },
        { term: "il vento", en: "wind", say: "eel VEN-toh" },
        { term: "la nuvola", en: "cloud", say: "lah NOO-voh-lah" },
        { term: "il mare", en: "sea", say: "eel MAH-reh" },
        { term: "la montagna", en: "mountain", say: "lah mon-TAH-nyah" },
        { term: "l'albero", en: "tree", say: "LAL-beh-roh" },
        { term: "il fiore", en: "flower", say: "eel FYOH-reh" },
        { term: "il cielo", en: "sky", say: "eel CHEH-loh" }
      ]
    },
    {
      id: "it-v-work",
      title: "Work & study",
      local: "Lavoro e studio",
      icon: "💼",
      tint: "#F0EFEA",
      blurb: "Talk about your job, your course, and your week.",
      words: [
        { term: "il lavoro", en: "work", say: "eel lah-VOH-roh" },
        { term: "l'ufficio", en: "office", say: "loof-FEE-choh" },
        { term: "lo studente", en: "student (male)", say: "loh stoo-DEN-teh", note: "A female student is la studentessa." },
        { term: "la scuola", en: "school", say: "lah SKWOH-lah" },
        { term: "l'università", en: "university", say: "loo-nee-ver-see-TAH" },
        { term: "il libro", en: "book", say: "eel LEE-broh" },
        { term: "la lezione", en: "lesson", say: "lah leh-TSYOH-neh" },
        { term: "il computer", en: "computer", say: "eel kom-PYOO-ter" },
        { term: "il collega", en: "colleague", say: "eel kol-LEH-gah" },
        { term: "la riunione", en: "meeting", say: "lah ryoo-NYOH-neh" }
      ]
    },
    {
      id: "it-v-verbs",
      title: "Useful verbs",
      local: "Verbi utili",
      icon: "⚡",
      tint: "#F1EDFD",
      blurb: "Ten verbs that unlock hundreds of sentences.",
      words: [
        { term: "essere", en: "to be", say: "ES-seh-reh", note: "Present: sono, sei, è, siamo, siete, sono." },
        { term: "avere", en: "to have", say: "ah-VEH-reh", note: "Present: ho, hai, ha, abbiamo, avete, hanno." },
        { term: "fare", en: "to do / to make", say: "FAH-reh", note: "Present: faccio, fai, fa, facciamo, fate, fanno." },
        { term: "andare", en: "to go", say: "an-DAH-reh", note: "Present: vado, vai, va, andiamo, andate, vanno." },
        { term: "venire", en: "to come", say: "veh-NEE-reh", note: "Present: vengo, vieni, viene, veniamo, venite, vengono." },
        { term: "potere", en: "to be able to / can", say: "poh-TEH-reh", note: "Present: posso, puoi, può, possiamo, potete, possono." },
        { term: "volere", en: "to want", say: "voh-LEH-reh", note: "Present: voglio, vuoi, vuole, vogliamo, volete, vogliono." },
        { term: "sapere", en: "to know", say: "sah-PEH-reh", note: "Present: so, sai, sa, sappiamo, sapete, sanno." },
        { term: "vedere", en: "to see", say: "veh-DEH-reh", note: "Present: vedo, vedi, vede, vediamo, vedete, vedono." },
        { term: "mangiare", en: "to eat", say: "man-JAH-reh", note: "Present: mangio, mangi, mangia, mangiamo, mangiate, mangiano." }
      ]
    }
  ],
  dialogues: [
    {
      id: "it-d-cafe",
      unitId: "it-cafe",
      title: "At the café",
      local: "Al bar",
      icon: "☕",
      place: "A busy bar in Florence, 9am",
      lines: [
        { speaker: "Barista", text: "Buongiorno! Cosa desidera?", en: "Good morning! What would you like?" },
        {
          you: true,
          prompt: "Greet them and order a cappuccino.",
          options: [
            { text: "Un cappuccino, per favore.", en: "A cappuccino, please." },
            { text: "Il conto, per favore.", en: "The bill, please." },
            { text: "Dov'è la stazione?", en: "Where's the station?" }
          ],
          answer: 0
        },
        { speaker: "Barista", text: "Certo. Qualcosa da mangiare?", en: "Of course. Anything to eat?" },
        {
          you: true,
          prompt: "Add a croissant.",
          options: [
            { text: "Un cornetto, grazie.", en: "A croissant, thanks." },
            { text: "Sono vegetariano.", en: "I'm vegetarian." },
            { text: "A che ora chiudete?", en: "What time do you close?" }
          ],
          answer: 0
        },
        { speaker: "Barista", text: "Ecco a Lei. Sono tre euro e cinquanta.", en: "Here you are. That's three euros fifty." },
        {
          you: true,
          prompt: "Ask if you can pay by card.",
          options: [
            { text: "Posso pagare con la carta?", en: "Can I pay by card?" },
            { text: "Un tavolo per due, per favore.", en: "A table for two, please." },
            { text: "Non capisco.", en: "I don't understand." }
          ],
          answer: 0
        },
        { speaker: "Barista", text: "Certo. Grazie e buona giornata!", en: "Of course. Thanks and have a good day!" }
      ]
    },
    {
      id: "it-d-meet",
      unitId: "it-greet",
      title: "Nice to meet you",
      local: "Piacere!",
      icon: "👋",
      place: "A friend's rooftop party in Milan",
      lines: [
        { speaker: "Giulia", text: "Ciao! Come stai?", en: "Hi! How are you?" },
        {
          you: true,
          prompt: "Say you're well and ask her back.",
          options: [
            { text: "Sto bene, grazie. E tu?", en: "I'm well, thanks. And you?" },
            { text: "Sono perso.", en: "I'm lost." },
            { text: "Il conto, per favore.", en: "The bill, please." }
          ],
          answer: 0
        },
        { speaker: "Giulia", text: "Bene! Di dove sei?", en: "Good! Where are you from?" },
        {
          you: true,
          prompt: "Say where you're from and where you live.",
          options: [
            { text: "Sono americano, ma vivo a Milano.", en: "I'm American, but I live in Milan." },
            { text: "Sono al secondo piano.", en: "I'm on the second floor." },
            { text: "Sono le nove.", en: "It's nine o'clock." }
          ],
          answer: 0
        },
        { speaker: "Giulia", text: "Che bello! Parli italiano molto bene.", en: "How nice! You speak Italian very well." },
        {
          you: true,
          prompt: "Say thanks and stay modest.",
          options: [
            { text: "Grazie! Parlo un po' di italiano.", en: "Thanks! I speak a little Italian." },
            { text: "Non capisco niente.", en: "I don't understand anything." },
            { text: "Sì, un cappuccino.", en: "Yes, a cappuccino." }
          ],
          answer: 0
        },
        { speaker: "Giulia", text: "A domani!", en: "See you tomorrow!" }
      ]
    },
    {
      id: "it-d-around",
      unitId: "it-around",
      title: "Finding the station",
      local: "In giro",
      icon: "🚉",
      place: "A side street near Rome Termini",
      lines: [
        {
          you: true,
          prompt: "Stop a stranger and ask where the station is.",
          options: [
            { text: "Scusi, dov'è la stazione?", en: "Excuse me, where's the station?" },
            { text: "Un biglietto per Roma.", en: "A ticket to Rome." },
            { text: "Buon appetito!", en: "Enjoy your meal!" }
          ],
          answer: 0
        },
        { speaker: "Passante", text: "Sempre dritto, poi a sinistra.", en: "Straight ahead, then left." },
        {
          you: true,
          prompt: "Check whether it's far.",
          options: [
            { text: "È lontano?", en: "Is it far?" },
            { text: "Quanto costa?", en: "How much is it?" },
            { text: "Sono vegetariano.", en: "I'm vegetarian." }
          ],
          answer: 0
        },
        { speaker: "Passante", text: "No, cinque minuti a piedi.", en: "No, five minutes on foot." },
        {
          you: true,
          prompt: "Thank them warmly.",
          options: [
            { text: "Grazie mille!", en: "Thanks a lot!" },
            { text: "A domani!", en: "See you tomorrow!" },
            { text: "Il conto, per favore.", en: "The bill, please." }
          ],
          answer: 0
        },
        { speaker: "Passante", text: "Prego!", en: "You're welcome!" }
      ]
    },
    {
      id: "it-d-health",
      unitId: "it-health",
      title: "At the pharmacy",
      local: "In farmacia",
      icon: "🩺",
      place: "A pharmacy in Bologna, Monday morning",
      lines: [
        { speaker: "Farmacista", text: "Buongiorno, come posso aiutarla?", en: "Good morning, how can I help you?" },
        {
          you: true,
          prompt: "Say you have a sore throat and a fever.",
          options: [
            { text: "Ho mal di gola e la febbre.", en: "I have a sore throat and a fever." },
            { text: "Ho fame e sete.", en: "I'm hungry and thirsty." },
            { text: "Il conto, per favore.", en: "The bill, please." }
          ],
          answer: 0
        },
        { speaker: "Farmacista", text: "Da quando ha questi sintomi?", en: "Since when have you had these symptoms?" },
        {
          you: true,
          prompt: "Say since yesterday.",
          options: [
            { text: "Da ieri.", en: "Since yesterday." },
            { text: "A domani.", en: "See you tomorrow." },
            { text: "Sono americano.", en: "I'm American." }
          ],
          answer: 0
        },
        { speaker: "Farmacista", text: "Prenda queste pastiglie due volte al giorno.", en: "Take these tablets twice a day." },
        {
          you: true,
          prompt: "Ask whether you need a prescription.",
          options: [
            { text: "Serve una ricetta?", en: "Do I need a prescription?" },
            { text: "Posso pagare con la carta?", en: "Can I pay by card?" },
            { text: "Dov'è la stazione?", en: "Where's the station?" }
          ],
          answer: 0
        },
        { speaker: "Farmacista", text: "No, è un rimedio senza ricetta. Guarisca presto!", en: "No, it's an over-the-counter remedy. Get well soon!" }
      ]
    },
    {
      id: "it-d-market",
      unitId: "it-food",
      title: "At the market",
      local: "Al mercato",
      icon: "🥕",
      place: "A morning market in Rome",
      lines: [
        { speaker: "Fruttivendolo", text: "Buongiorno! Cosa le do?", en: "Good morning! What can I get you?" },
        {
          you: true,
          prompt: "Ask for a kilo of tomatoes.",
          options: [
            { text: "Un chilo di pomodori, per favore.", en: "A kilo of tomatoes, please." },
            { text: "Un caffè, per favore.", en: "A coffee, please." },
            { text: "Un biglietto per Roma.", en: "A ticket to Rome." }
          ],
          answer: 0
        },
        { speaker: "Fruttivendolo", text: "Ecco. Altro?", en: "Here you are. Anything else?" },
        {
          you: true,
          prompt: "Ask how much the apples cost.",
          options: [
            { text: "Quanto costano le mele?", en: "How much are the apples?" },
            { text: "Quanto costa il treno?", en: "How much is the train?" },
            { text: "Dove abiti?", en: "Where do you live?" }
          ],
          answer: 0
        },
        { speaker: "Fruttivendolo", text: "Due euro al chilo.", en: "Two euros a kilo." },
        {
          you: true,
          prompt: "Take a kilo of apples too.",
          options: [
            { text: "Allora un chilo di mele, grazie.", en: "Then a kilo of apples, thanks." },
            { text: "Allora un etto di prosciutto.", en: "Then a hundred grams of ham." },
            { text: "Allora un cappuccino.", en: "Then a cappuccino." }
          ],
          answer: 0
        },
        { speaker: "Fruttivendolo", text: "Ecco. Sono cinque euro in tutto.", en: "Here you are. That's five euros in total." },
        {
          you: true,
          prompt: "Ask if you can pay by card.",
          options: [
            { text: "Posso pagare con la carta?", en: "Can I pay by card?" },
            { text: "Posso provarlo?", en: "Can I try it on?" },
            { text: "Posso dormire qui?", en: "Can I sleep here?" }
          ],
          answer: 0
        },
        { speaker: "Fruttivendolo", text: "Certo. Grazie e buona giornata!", en: "Of course. Thanks and have a good day!" }
      ]
    },
    {
      id: "it-d-home",
      unitId: "it-home",
      title: "Something's broken",
      local: "Qualcosa non funziona",
      icon: "🏠",
      place: "A phone call to your landlord",
      lines: [
        { speaker: "Padrone di casa", text: "Pronto?", en: "Hello?" },
        {
          you: true,
          prompt: "Say who you are and that the washing machine is broken.",
          options: [
            { text: "Buongiorno, sono Anna. La lavatrice è rotta.", en: "Good morning, it's Anna. The washing machine is broken." },
            { text: "Buongiorno, sono Anna. Il conto è rotto.", en: "Good morning, it's Anna. The bill is broken." },
            { text: "Buongiorno, sono Anna. La stazione è rotta.", en: "Good morning, it's Anna. The station is broken." }
          ],
          answer: 0
        },
        { speaker: "Padrone di casa", text: "Di nuovo? Mi dispiace.", en: "Again? I'm sorry." },
        {
          you: true,
          prompt: "Ask if he can send someone today.",
          options: [
            { text: "Può mandare qualcuno oggi?", en: "Can you send someone today?" },
            { text: "Può cucinare qualcosa oggi?", en: "Can you cook something today?" },
            { text: "Può pagare il conto oggi?", en: "Can you pay the bill today?" }
          ],
          answer: 0
        },
        { speaker: "Padrone di casa", text: "Mando il tecnico domani mattina.", en: "I'll send the technician tomorrow morning." },
        {
          you: true,
          prompt: "Ask what time.",
          options: [
            { text: "A che ora?", en: "At what time?" },
            { text: "Quanto costa?", en: "How much is it?" },
            { text: "Di dove sei?", en: "Where are you from?" }
          ],
          answer: 0
        },
        { speaker: "Padrone di casa", text: "Alle nove.", en: "At nine." },
        {
          you: true,
          prompt: "Thank him and confirm.",
          options: [
            { text: "Perfetto, grazie mille.", en: "Perfect, thanks a lot." },
            { text: "Non capisco niente.", en: "I don't understand anything." },
            { text: "Buon appetito!", en: "Enjoy your meal!" }
          ],
          answer: 0
        }
      ]
    },
    {
      id: "it-d-plans",
      unitId: "it-future",
      title: "Weekend plans",
      local: "Programmi per il weekend",
      icon: "🌅",
      place: "A coffee bar in Turin, Friday afternoon",
      lines: [
        { speaker: "Marco", text: "Cosa fai questo fine settimana?", en: "What are you doing this weekend?" },
        {
          you: true,
          prompt: "Say you don't know yet and ask if he has an idea.",
          options: [
            { text: "Non lo so ancora. Hai un'idea?", en: "I don't know yet. Do you have an idea?" },
            { text: "Non lo so ancora. Hai un biglietto?", en: "I don't know yet. Do you have a ticket?" },
            { text: "Non lo so ancora. Hai fame?", en: "I don't know yet. Are you hungry?" }
          ],
          answer: 0
        },
        { speaker: "Marco", text: "C'è una mostra interessante al museo.", en: "There's an interesting exhibition at the museum." },
        {
          you: true,
          prompt: "Say you'd like that and ask what time.",
          options: [
            { text: "Mi piacerebbe. A che ora?", en: "I'd like that. At what time?" },
            { text: "Mi dispiace. A che ora?", en: "I'm sorry. At what time?" },
            { text: "Sono stanco. A che ora?", en: "I'm tired. At what time?" }
          ],
          answer: 0
        },
        { speaker: "Marco", text: "Sabato alle quattro.", en: "Saturday at four." },
        {
          you: true,
          prompt: "Agree and suggest a coffee afterwards.",
          options: [
            { text: "Perfetto. Prendiamo un caffè dopo?", en: "Perfect. Shall we get a coffee afterwards?" },
            { text: "Perfetto. Prendiamo un treno dopo?", en: "Perfect. Shall we take a train afterwards?" },
            { text: "Perfetto. Prendiamo una medicina dopo?", en: "Perfect. Shall we take some medicine afterwards?" }
          ],
          answer: 0
        },
        { speaker: "Marco", text: "Con piacere!", en: "With pleasure!" }
      ]
    }
  ]
};
