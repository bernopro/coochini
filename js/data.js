/* Coochini — menu & site text in 4 languages.
   Item format: I(price, "fa | en | hy | ru" names, "en | hy | ru | fa" descriptions)
   To change a price or dish, edit the line here — nothing else needs touching. */

const LANGS = ["hy", "en", "ru", "fa"];

function I(price, names, desc) {
  const n = names.split("|").map(s => s.trim());
  const d = (desc || "|||").split("|").map(s => s.trim());
  return {
    price,
    name: { fa: n[0], en: n[1], hy: n[2], ru: n[3] },
    desc: { en: d[0], hy: d[1], ru: d[2], fa: d[3] }
  };
}

const MENU = [
  {
    id: "kebabs",
    title: { en: "Kebabs & Grills", hy: "Քյաբաբներ և խորոված", ru: "Кебабы и гриль", fa: "کباب‌ها و گریل" },
    images: ["img/food/page-3.jpg", "img/food/page-4.jpg", "img/food/page-5.jpg"],
    items: [
      I(4500, "کباب کوبیده | Kebab Koobideh | Քյաբաբ Կուբիդե | Кебаб кубиде",
        "2 skewers, 240 g — minced beef and lamb | 2 շիշ, 240 գ — աղացած տավարի և գառան միս | 2 шампура, 240 г — рубленая говядина и баранина | ۲ سیخ، ۲۴۰ گرم — گوشت چرخ‌کرده گوساله و بره"),
      I(7500, "کباب سلطانی | Kebab Soltani | Քյաբաբ Սուլթանի | Кебаб султани",
        "1 skewer beef fillet 250 g + 1 skewer minced beef & lamb 120 g | 1 շիշ մսի ֆիլե 250 գ + 1 շիշ աղացած տավարի և գառան միս 120 գ | 1 шампур говяжьей вырезки 250 г + 1 шампур рубленого мяса 120 г | ۱ سیخ فیله ۲۵۰ گرم + ۱ سیخ کوبیده ۱۲۰ گرم"),
      I(6500, "کباب برگ | Kebab Barg | Մսի խորոված (Բարգ) | Кебаб барг",
        "1 skewer beef fillet, 250 g | 1 շիշ մսի ֆիլե, 250 գ | 1 шампур говяжьей вырезки, 250 г | ۱ سیخ فیله گوساله، ۲۵۰ گرم"),
      I(6000, "کباب چنجه | Beef Fillet Kebab (Chenjeh) | Մսի ֆիլեի քյաբաբ | Кебаб из вырезки (чендже)",
        "1 skewer of beef fillet chunks, 250 g | 1 շիշ մսի ֆիլե, 250 գ | 1 шампур кусочков говяжьей вырезки, 250 г | ۱ سیخ چنجه گوساله، ۲۵۰ گرم"),
      I(5200, "جوجه کباب زعفرانی | Joojeh Kebab — saffron | Հավի խորոված զաֆրանով | Джудже-кебаб с шафраном",
        "1 skewer chicken, 250 g (thigh & breast), saffron-marinated | 1 շիշ հավ, 250 գ (ազդր և կրծքամիս), զաֆրանով | 1 шампур курицы, 250 г (бедро и грудка), маринад с шафраном | ۱ سیخ مرغ، ۲۵۰ گرم (ران و سینه)، زعفرانی"),
      I(5200, "جوجه کباب ماستی | Joojeh Kebab — yogurt | Հավի խորոված մածունով | Джудже-кебаб в йогурте",
        "1 skewer chicken, 250 g (thigh & breast), yogurt-marinated | 1 շիշ հավ, 250 գ (ազդր և կրծքամիս), մածունով | 1 шампур курицы, 250 г (бедро и грудка), маринад в йогурте | ۱ سیخ مرغ، ۲۵۰ گرم (ران و سینه)، ماستی"),
      I(8000, "شیشلیک | Shishlik | Շիշլիկ | Шашлык из ягнёнка",
        "1 skewer bone-in lamb, 250 g | 1 շիշ ոսկորով գառան միս, 250 գ | 1 шампур баранины на кости, 250 г | ۱ سیخ گوشت بره با استخوان، ۲۵۰ گرم"),
      I(6000, "جوجه کباب با استخوان | Bone-in Joojeh Kebab | Հավի խորոված ոսկորով | Джудже-кебаб на кости",
        "1 skewer bone-in chicken, 400 g, saffron-marinated | 1 շիշ ոսկորով հավ, 400 գ, զաֆրանով | 1 шампур курицы на кости, 400 г, с шафраном | ۱ سیخ مرغ با استخوان، ۴۰۰ گرم، زعفرانی")
    ]
  },
  {
    id: "mix",
    title: { en: "Mixed Kebabs", hy: "Խառը քյաբաբներ", ru: "Ассорти кебабов", fa: "میکس کباب" },
    images: ["img/food/page-6.jpg"],
    items: [
      I(6500, "میکس کباب (یک نفره) | Mixed Kebab — for one | Խառը քյաբաբ (1 անձի) | Ассорти — на одного",
        "Saffron chicken 150 g, minced beef & lamb 120 g, yogurt-marinated beef fillet 100 g | Հավ զաֆրանով 150 գ, աղացած միս 120 գ, մածունով մսի ֆիլե 100 գ | Курица с шафраном 150 г, рубленое мясо 120 г, вырезка в йогурте 100 г | جوجه زعفرانی ۱۵۰ گرم، کوبیده ۱۲۰ گرم، فیله ماستی ۱۰۰ گرم"),
      I(26000, "میکس کباب ۴ نفره | Mixed Kebab — for four | Խառը քյաբաբ (4 անձի) | Ассорти — на четверых",
        "2 saffron chicken 300 g, 2 yogurt chicken 300 g, 4 minced beef & lamb 480 g, 4 beef fillet 400 g | 2 շիշ հավ զաֆրանով 300 գ, 2 շիշ հավ մածունով 300 գ, 4 շիշ աղացած միս 480 գ, 4 շիշ ֆիլե 400 գ | 2 шампура курицы с шафраном 300 г, 2 — в йогурте 300 г, 4 рубленого мяса 480 г, 4 вырезки 400 г | ۲ سیخ جوجه زعفرانی، ۲ سیخ جوجه ماستی، ۴ سیخ کوبیده، ۴ سیخ فیله"),
      I(6000, "کباب بختیاری | Kebab Bakhtiari | Քյաբաբ Բախտիարի | Кебаб бахтиари",
        "1 skewer of chicken and beef together, 250 g | 1 շիշ հավի և մսի խառը քյաբաբ, 250 գ | 1 шампур курицы и говядины вместе, 250 г | ۱ سیخ ترکیب مرغ و گوشت، ۲۵۰ گرم"),
      I(6000, "کباب وزیری | Kebab Vaziri | Քյաբաբ Վազիրի | Кебаб вазири",
        "Saffron chicken 250 g + minced beef & lamb 120 g | Հավ զաֆրանով 250 գ + աղացած միս 120 գ | Курица с шафраном 250 г + рубленое мясо 120 г | جوجه زعفرانی ۲۵۰ گرم + کوبیده ۱۲۰ گرم")
    ]
  },
  {
    id: "iranian",
    title: { en: "Iranian Classics", hy: "Իրանական ուտեստներ", ru: "Иранская кухня", fa: "غذاهای ایرانی" },
    images: ["img/food/page-7.jpg", "img/food/page-8.jpg"],
    items: [
      I(4500, "زرشک پلو با مرغ | Zereshk Polo with Chicken | Զերեշք փոլո հավով | Зерешк поло с курицей",
        "Bone-in chicken braised in tomato sauce, saffron rice with barberries | Ոսկորով հավ՝ շոգեխաշած լոլիկի սոուսով, բրինձ զաֆրանով և ծորենով | Курица на кости, тушённая в томатном соусе, рис с шафраном и барбарисом | مرغ با سس گوجه، پلو زعفرانی با زرشک"),
      I(6000, "باقالی پلو با ماهیچه | Baghali Polo with Lamb Shank | Բաղալի փլավ գառան սրունքով | Багали поло с бараньей голенью",
        "Dill & fava bean rice with slow-cooked lamb shank | Սամիթով և բակլայով փլավ՝ գառան սրունքով | Рис с укропом и бобами, томлёная баранья голень | باقالی پلو با ماهیچه بره"),
      I(6000, "باقالی پلو با گردن | Baghali Polo with Lamb Neck | Բաղալի փլավ գառան վզով | Багали поло с бараньей шеей",
        "Dill & fava bean rice with slow-cooked lamb neck | Սամիթով և բակլայով փլավ՝ գառան վզով | Рис с укропом и бобами, томлёная баранья шея | باقالی پلو با گردن بره"),
      I(4000, "چلو خورشت قیمه بادمجان | Gheymeh Bademjan | Ղեյմե բադրիջանով | Гейме с баклажанами",
        "Lamb & split-pea stew with dried lime and fried eggplant, served with rice | Գառան միսով և ոլոռով շոգեխաշ, չորացրած կիտրոն, տապակած բադրիջան, բրինձ | Рагу из баранины и гороха с сушёным лаймом и жареным баклажаном, с рисом | خورشت قیمه با بادمجان سرخ‌شده و چلو"),
      I(4000, "چلو خورشت قیمه سیب‌زمینی | Gheymeh with Fries | Ղեյմե կարտոֆիլով | Гейме с картофелем",
        "Lamb & split-pea stew with dried lime, topped with fries, served with rice | Գառան միսով և ոլոռով շոգեխաշ, չորացրած կիտրոն, ֆրի, բրինձ | Рагу из баранины и гороха с сушёным лаймом и картофелем фри, с рисом | خورشت قیمه با سیب‌زمینی سرخ‌کرده و چلو"),
      I(4500, "چلو خورشت قورمه سبزی | Ghormeh Sabzi | Ղորմե սաբզի | Горме сабзи",
        "Traditional herb stew with beans and meat, served with saffron rice | Ավանդական իրանական շոգեխաշ կանաչիներով, լոբով և մսով՝ զաֆրանով բրնձով | Традиционное рагу из зелени, фасоли и мяса, с шафрановым рисом | خورشت سبزی، لوبیا و گوشت با چلو زعفرانی"),
      I(4500, "چلو خورشت فسنجان | Fesenjan | Ֆեսենջան | Фесенджан",
        "Chicken in a rich walnut and pomegranate sauce, served with rice | Հավ՝ ընկույզի և նռան սոուսով, բրինձ | Курица в соусе из грецких орехов и граната, с рисом | مرغ در سس گردو و انار با چلو"),
      I(4000, "کوفته تبریزی | Koofteh Tabrizi | Քուֆթա թավրիզի | Кюфта по-тебризски",
        "Large stuffed meatballs in a special tomato sauce | Աղացած մսի գնդիկներ՝ հատուկ լոլիկի սոուսով | Большие мясные шарики в фирменном томатном соусе | کوفته با سس مخصوص گوجه")
    ]
  },
  {
    id: "appetizers",
    title: { en: "Starters, Salads & Sides", hy: "Նախուտեստներ և աղցաններ", ru: "Закуски и салаты", fa: "پیش‌غذا و سالاد" },
    images: ["img/food/page-9.jpg", "img/food/page-10.jpg", "img/food/page-11.jpg"],
    items: [
      I(1300, "سوپ روز | Soup of the Day | Օրվա ապուր | Суп дня",
        "Barley soup with vermicelli, carrot, parsley and tomato | Գարու ապուր վերմիշելով, գազարով, մաղադանոսով և լոլիկով | Ячменный суп с вермишелью, морковью, петрушкой и томатом | سوپ جو با رشته، هویج، جعفری و گوجه"),
      I(1800, "آش شیرازی | Ash Shirazi | Շիրազի աշ | Аш ширази",
        "Thick soup of beans, vegetables and beef, topped with fried onion | Լոբի, բանջարեղեն, տավարի միս, տապակած սոխ | Густой суп из бобовых, овощей и говядины с жареным луком | آش با حبوبات، سبزیجات، گوشت و پیاز داغ"),
      I(1500, "حمص | Hummus | Հումուս | Хумус",
        "Chickpeas, tahini, garlic, olive oil | Սիսեռ, թահինի, սխտոր, ձիթապտղի յուղ | Нут, тахини, чеснок, оливковое масло | نخود، ارده، سیر، روغن زیتون"),
      I(1500, "تبوله | Tabbouleh | Թաբուլե | Табуле",
        "Bulgur, parsley, lemon juice, tomato | Ձավար, մաղադանոս, կիտրոնի հյութ, լոլիկ | Булгур, петрушка, лимонный сок, томат | بلغور، جعفری، آبلیمو، گوجه"),
      I(2700, "سزار با مرغ | Caesar with Chicken | Սեզար հավով | Цезарь с курицей", "|||"),
      I(3000, "سزار با میگو | Caesar with Shrimp | Սեզար ծովախեցգետնով | Цезарь с креветками", "|||"),
      I(1500, "سالاد شیرازی | Salad Shirazi | Շիրազի աղցան | Салат ширази",
        "Cucumber, tomato, onion, mint, lemon juice, olive oil | Վարունգ, լոլիկ, սոխ, անանուխ, կիտրոնի հյութ, ձիթապտղի յուղ | Огурец, томат, лук, мята, лимонный сок, оливковое масло | خیار، گوجه، پیاز، نعناع، آبلیمو، روغن زیتون"),
      I(1500, "سالاد فصل | Seasonal Salad | Սեզոնային աղցան | Сезонный салат", "|||"),
      I(2000, "سالاد فتوش | Fattoush | Ֆաթուշ աղցան | Фаттуш",
        "Greens, cucumber, tomato, lemon juice, crispy bread | Կանաչի, վարունգ, լոլիկ, կիտրոնի հյութ, չորահաց | Зелень, огурец, томат, лимонный сок, хрустящий хлеб | سبزی، خیار، گوجه، آبلیمو، نان برشته"),
      I(700, "ماست و خیار | Yogurt with Cucumber | Մածուն վարունգով | Йогурт с огурцом",
        "Yogurt, cucumber, mint | Մածուն, վարունգ, անանուխ | Йогурт, огурец, мята | ماست، خیار، نعناع"),
      I(1500, "ماست موسیر | Yogurt with Persian Shallot | Մածուն մուսիրով | Йогурт с персидским луком",
        "Yogurt with special Iranian shallot (musir) | Մածուն՝ հատուկ իրանական մուսիրով | Йогурт с иранским горным луком (мусир) | ماست با موسیر"),
      I(1500, "بورانی اسفناج | Borani Spinach | Բորանի սպանախով | Борани со шпинатом",
        "Yogurt, spinach, garlic | Մածուն, սպանախ, սխտոր | Йогурт, шпинат, чеснок | ماست، اسفناج، سیر"),
      I(1500, "ماست چکیده | Strained Yogurt | Քամած մածուն | Процеженный йогурт", "|||"),
      I(2000, "زیتون پرورده | Zeytoon Parvardeh | Փարվարդե ձիթապտուղ | Оливки парварде",
        "Olives with walnuts and pomegranate sauce | Ձիթապտուղ ընկույզով և նռան սոուսով | Оливки с грецким орехом и гранатовым соусом | زیتون با گردو و رب انار"),
      I(2500, "کشک بادمجان | Kashk Bademjan | Քաշք բադրիջան | Кешк бадемджан",
        "Fried eggplant, kashk, onion, garlic, mint | Տապակած բադրիջան, քաշք, սոխ, սխտոր, անանուխ | Жареный баклажан, кешк, лук, чеснок, мята | بادمجان سرخ‌شده، کشک، پیاز، سیر، نعناع داغ"),
      I(2500, "میرزا قاسمی | Mirza Ghasemi | Միրզա Ղասեմի | Мирза гасеми",
        "Smoky grilled eggplant, tomato, garlic, egg | Խորոված բադրիջան, լոլիկ, սխտոր, ձու | Копчёный баклажан, томат, чеснок, яйцо | بادمجان کبابی، گوجه، سیر، تخم‌مرغ"),
      I(1500, "سیب‌زمینی سرخ‌کرده | French Fries | Ֆրի | Картофель фри", "|||")
    ]
  },
  {
    id: "seafood",
    title: { en: "Fish & Seafood", hy: "Ձուկ և ծովամթերք", ru: "Рыба и морепродукты", fa: "ماهی و دریایی" },
    images: ["img/food/page-12.jpg"],
    items: [
      I(7000, "ماهی استرلت | Sterlet | Ստեռլետ ձուկ | Стерлядь",
        "Boneless, grilled kebab-style | Առանց ոսկորի, քյաբաբ | Без костей, на гриле | بدون استخوان، کبابی"),
      I(5500, "ماهی ایشخان | Ishkhan Trout | Իշխան ձուկ | Форель ишхан",
        "Pan-fried Sevan trout | Տապակած իշխան | Жареная севанская форель | ماهی ایشخان سرخ‌شده"),
      I(7500, "میگو | Grilled Shrimp | Ծովախեցգետնի քյաբաբ | Креветки на гриле",
        "Shrimp kebab | Ծովախեցգետին՝ քյաբաբ | Креветки на шампуре | کباب میگو")
    ]
  },
  {
    id: "rice",
    title: { en: "Rice", hy: "Բրնձով ուտեստներ", ru: "Рис", fa: "پلو" },
    images: ["img/food/page-13.jpg"],
    items: [
      I(1500, "چلو زعفرانی | Saffron Chelo | Զաֆրանով բրինձ | Рис с шафраном",
        "Steamed white rice with saffron | Սպիտակ բրինձ զաֆրանով | Белый рис с шафраном | چلو سفید با زعفران"),
      I(2000, "باقالی پلو | Baghali Polo | Բաղալի փլավ | Багали поло",
        "Rice with dill and fava beans | Բրինձ սամիթով և բակլայով | Рис с укропом и бобами | پلو با شوید و باقالی"),
      I(2000, "زرشک پلو | Zereshk Polo | Զերեշք փոլո | Зерешк поло",
        "Saffron rice with barberries | Զաֆրանով բրինձ ծորենով | Рис с шафраном и барбарисом | پلو زعفرانی با زرشک")
    ]
  },
  {
    id: "pizza",
    title: { en: "Pizza", hy: "Պիցցա", ru: "Пицца", fa: "پیتزا" },
    images: ["img/food/page-14.jpg"],
    items: [
      I(3500, "میکس | Mix | Միքս | Микс",
        "Sausage, ham, cheese, mushrooms, corn, bell pepper, tomato, olives, oregano | Երշիկ, խոզապուխտ, պանիր, սունկ, եգիպտացորեն, բուլղարական պղպեղ, լոլիկ, ձիթապտուղ, ուրց | Колбаса, ветчина, сыр, грибы, кукуруза, болгарский перец, томат, оливки, орегано | سوسیس، ژامبون، پنیر، قارچ، ذرت، فلفل دلمه‌ای، گوجه، زیتون، پونه"),
      I(4000, "رست بیف | Roast Beef | Ռոստբիֆ | Ростбиф",
        "Roast beef, cheese, oregano, mushrooms, bell pepper, tomato | Տապակած տավարի միս, պանիր, ուրց, սունկ, բուլղարական պղպեղ, լոլիկ | Ростбиф, сыр, орегано, грибы, болгарский перец, томат | رست بیف، پنیر، پونه، قارچ، فلفل دلمه‌ای، گوجه"),
      I(3200, "پپرونی | Pepperoni | Պեպերոնի | Пепперони",
        "Pepperoni, cheese, mushrooms, oregano | Պեպերոնի, պանիր, սունկ, ուրց | Пепперони, сыр, грибы, орегано | پپرونی، پنیر، قارچ، پونه")
    ]
  },
  {
    id: "chicken",
    title: { en: "Fried Chicken", hy: "Տապակած հավ", ru: "Жареная курица", fa: "سوخاری" },
    images: ["img/food/page-15.jpg"],
    items: [
      I(2500, "فیله سوخاری | Crispy Chicken Fillet | Տապակած ֆիլե | Куриное филе в панировке", "|||"),
      I(2000, "بال و کتف ۸ عدد | Wings — 8 pcs | Թևիկներ — 8 հատ | Крылышки — 8 шт", "|||")
    ]
  }
];

const T = {
  hy: {
    nav: ["Մեր մասին", "Մենյու", "Կենդանի երաժշտություն", "Սրահ", "Կապ"],
    reserve: "Ամրագրել սեղան",
    call: "Զանգահարել",
    tagline: "Համ · Երաժշտություն · Հիշողություն",
    heroSub: "Իրանական իսկական խոհանոց Երևանի սրտում",
    viewMenu: "Դիտել մենյուն",
    storyKicker: "Քուչինիի պատմությունը",
    storyTitle: "Հին Թեհրանի նորովի պատմությունը",
    story: [
      "Քուչինին պարզապես ռեստորան չէ․ այն համի, երաժշտության և հիշողությունների մի պատմություն է։",
      "Ավելի քան 25 տարվա փորձով ռեստորանային ոլորտում և հյուրասիրության գործում՝ «Փարս» ռեստորաններից մինչև այսօր, Քուչինին նոր մոտեցմամբ սիրով հյուրընկալում է ձեզ։",
      "Այստեղ իրանական խոհանոցի իսկական համերը համադրվում են ջերմ ու հյուրընկալ միջավայրի հետ՝ ներշնչված հին Թեհրանից, Լալեզար փողոցից և անցյալի հիշարժան սրճարաններից։",
      "Քուչինիում յուրաքանչյուր հյուր մեր ընտանիքի մի մասն է։ Սննդի որակից մինչև երաժշտությունն ու սպասարկումը՝ ամեն ինչ ստեղծված է ձեզ համար հաճելի և անմոռանալի երեկո պարգևելու նպատակով։"
    ],
    years: "տարվա փորձ",
    menuKicker: "Մենյու",
    menuTitle: "Իրանական սեղան",
    currency: "֏",
    musicKicker: "Կենդանի երաժշտություն",
    musicTitle: "Երեկոներ երաժշտությամբ",
    musicText: "Մեր բեմում հնչում է կենդանի երաժշտություն՝ ջերմ մթնոլորտ ընտանեկան ընթրիքների, ընկերական հավաքույթների և տոնակատարությունների համար։ Մեծ սրահը հարմար է ծննդյան տոների և միջոցառումների համար։",
    musicCta: "Զանգահարեք՝ ամրագրելու համար",
    galleryKicker: "Մեր սրահը",
    galleryTitle: "Ջերմ լույս, քար և նարնջագույն սալիկներ",
    visitKicker: "Այցելեք մեզ",
    visitTitle: "Սպասում ենք ձեզ",
    address: "Հասցե",
    addressText: "Աբովյան 26, Երևան",
    phone: "Հեռախոս",
    bookNote: "Սեղանների ամրագրումը՝ միայն հեռախոսով",
    follow: "Հետևեք մեզ",
    footer: "Քուչինի ռեստորան · Համ, երաժշտություն, հիշողություն"
  },
  en: {
    nav: ["Our Story", "Menu", "Live Music", "Gallery", "Contact"],
    reserve: "Book a table",
    call: "Call",
    tagline: "Taste · Music · Memory",
    heroSub: "Authentic Iranian cuisine in the heart of Yerevan",
    viewMenu: "See the menu",
    storyKicker: "The Coochini Story",
    storyTitle: "Old Tehran, told anew",
    story: [
      "Coochini is not just a restaurant — it is a story of taste, music and memory.",
      "With more than 25 years of experience in hospitality, from the Pars restaurants to today, Coochini welcomes you with a fresh perspective.",
      "Here, authentic Iranian flavours meet a warm, intimate atmosphere inspired by old Tehran, Lalehzar Street and the nostalgic cafés of the past.",
      "At Coochini every guest is part of our family. Everything — from the quality of the food to the music and the service — is made to give you a joyful, unforgettable evening."
    ],
    years: "years of hospitality",
    menuKicker: "Menu",
    menuTitle: "The Persian Table",
    currency: "AMD",
    musicKicker: "Live Music",
    musicTitle: "Evenings with live music",
    musicText: "Our stage brings live music to the room — a warm setting for family dinners, nights out with friends and celebrations. The main hall is perfect for birthdays and private events.",
    musicCta: "Call to reserve",
    galleryKicker: "The Space",
    galleryTitle: "Warm light, stone and amber tile",
    visitKicker: "Visit Us",
    visitTitle: "We're waiting for you",
    address: "Address",
    addressText: "26 Abovyan St, Yerevan",
    phone: "Phone",
    bookNote: "Table reservations by phone",
    follow: "Follow us",
    footer: "Coochini Restaurant · Taste, Music, Memory"
  },
  ru: {
    nav: ["О нас", "Меню", "Живая музыка", "Интерьер", "Контакты"],
    reserve: "Забронировать стол",
    call: "Позвонить",
    tagline: "Вкус · Музыка · Воспоминания",
    heroSub: "Настоящая иранская кухня в центре Еревана",
    viewMenu: "Смотреть меню",
    storyKicker: "История Кучини",
    storyTitle: "Старый Тегеран — по-новому",
    story: [
      "Кучини — это не просто ресторан, это история вкуса, музыки и воспоминаний.",
      "Более 25 лет опыта в ресторанном деле и гостеприимстве — от ресторанов «Парс» до сегодняшнего дня. Кучини встречает вас со свежим взглядом.",
      "Здесь подлинные вкусы иранской кухни сочетаются с тёплой, уютной атмосферой, вдохновлённой старым Тегераном, улицей Лалезар и памятными кафе прошлого.",
      "В Кучини каждый гость — часть нашей семьи. Всё — от качества блюд до музыки и обслуживания — создано, чтобы подарить вам приятный и незабываемый вечер."
    ],
    years: "лет гостеприимства",
    menuKicker: "Меню",
    menuTitle: "Персидский стол",
    currency: "֏",
    musicKicker: "Живая музыка",
    musicTitle: "Вечера с живой музыкой",
    musicText: "На нашей сцене звучит живая музыка — тёплая атмосфера для семейных ужинов, встреч с друзьями и праздников. Большой зал идеально подходит для дней рождения и мероприятий.",
    musicCta: "Позвоните, чтобы забронировать",
    galleryKicker: "Интерьер",
    galleryTitle: "Тёплый свет, камень и янтарная плитка",
    visitKicker: "Приходите к нам",
    visitTitle: "Ждём вас",
    address: "Адрес",
    addressText: "ул. Абовяна 26, Ереван",
    phone: "Телефон",
    bookNote: "Бронирование столов — по телефону",
    follow: "Мы в Instagram",
    footer: "Ресторан Кучини · Вкус, музыка, воспоминания"
  },
  fa: {
    nav: ["داستان ما", "منو", "موسیقی زنده", "گالری", "تماس"],
    reserve: "رزرو میز",
    call: "تماس",
    tagline: "طعم · موسیقی · خاطره",
    heroSub: "طعم‌های اصیل ایرانی در قلب ایروان",
    viewMenu: "مشاهده منو",
    storyKicker: "داستان کوچینی",
    storyTitle: "روایتی تازه از تهران قدیم",
    story: [
      "کوچینی فقط یک رستوران نیست؛ روایتی از طعم، موسیقی و خاطره است.",
      "با بیش از ۲۵ سال تجربه در رستوران‌داری و مهمان‌نوازی، از رستوران‌های پارس تا امروز، کوچینی با نگاهی تازه میزبان شماست.",
      "اینجا طعم‌های اصیل ایرانی در کنار فضایی گرم و صمیمی، با الهام از تهران قدیم، لاله‌زار و کافه‌های خاطره‌انگیز گذشته، جان تازه‌ای گرفته‌اند.",
      "در کوچینی، هر مهمان عضوی از خانواده ماست. همه‌چیز، از کیفیت غذا تا موسیقی و شیوه پذیرایی، برای ساختن شبی خوش و خاطره‌انگیز فراهم شده است."
    ],
    years: "سال تجربه",
    menuKicker: "منو",
    menuTitle: "سفره ایرانی",
    currency: "درام",
    musicKicker: "موسیقی زنده",
    musicTitle: "شب‌هایی با موسیقی زنده",
    musicText: "روی صحنه کوچینی موسیقی زنده اجرا می‌شود؛ فضایی گرم برای شام خانوادگی، دورهمی با دوستان و جشن‌ها. سالن بزرگ ما برای تولد و مراسم خصوصی مناسب است.",
    musicCta: "برای رزرو تماس بگیرید",
    galleryKicker: "فضای ما",
    galleryTitle: "نور گرم، سنگ و کاشی کهربایی",
    visitKicker: "به ما سر بزنید",
    visitTitle: "منتظر شما هستیم",
    address: "آدرس",
    addressText: "ایروان، خیابان آبوویان، پلاک ۲۶",
    phone: "تلفن",
    bookNote: "رزرو میز فقط تلفنی",
    follow: "ما را دنبال کنید",
    footer: "رستوران کوچینی · طعم، موسیقی، خاطره"
  }
};

const LANG_LABELS = { hy: "Հայ", en: "EN", ru: "РУ", fa: "فا" };
