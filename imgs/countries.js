const countries = [
  {
    name: "Andorra",
    emoji: "🇦🇩",
    continent: {
      name: "Europe",
    },
    capital: "Andorra la Vella",
    languages: [
      {
        name: "Catalan",
      },
    ],
  },
  {
    name: "United Arab Emirates",
    emoji: "🇦🇪",
    continent: {
      name: "Asia",
    },
    capital: "Abu Dhabi",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Afghanistan",
    emoji: "🇦🇫",
    continent: {
      name: "Asia",
    },
    capital: "Kabul",
    languages: [
      {
        name: "Pashto",
      },
      {
        name: "Uzbek",
      },
      {
        name: "Turkmen",
      },
    ],
  },
  {
    name: "Antigua and Barbuda",
    emoji: "🇦🇬",
    continent: {
      name: "North America",
    },
    capital: "Saint John's",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Anguilla",
    emoji: "🇦🇮",
    continent: {
      name: "North America",
    },
    capital: "The Valley",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Albania",
    emoji: "🇦🇱",
    continent: {
      name: "Europe",
    },
    capital: "Tirana",
    languages: [
      {
        name: "Albanian",
      },
    ],
  },
  {
    name: "Armenia",
    emoji: "🇦🇲",
    continent: {
      name: "Asia",
    },
    capital: "Yerevan",
    languages: [
      {
        name: "Armenian",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Angola",
    emoji: "🇦🇴",
    continent: {
      name: "Africa",
    },
    capital: "Luanda",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Antarctica",
    emoji: "🇦🇶",
    continent: {
      name: "Antarctica",
    },
    capital: null,
    languages: [],
  },
  {
    name: "Argentina",
    emoji: "🇦🇷",
    continent: {
      name: "South America",
    },
    capital: "Buenos Aires",
    languages: [
      {
        name: "Spanish",
      },
      {
        name: "Guarani",
      },
    ],
  },
  {
    name: "American Samoa",
    emoji: "🇦🇸",
    continent: {
      name: "Oceania",
    },
    capital: "Pago Pago",
    languages: [
      {
        name: "English",
      },
      {
        name: "Samoan",
      },
    ],
  },
  {
    name: "Austria",
    emoji: "🇦🇹",
    continent: {
      name: "Europe",
    },
    capital: "Vienna",
    languages: [
      {
        name: "German",
      },
    ],
  },
  {
    name: "Australia",
    emoji: "🇦🇺",
    continent: {
      name: "Oceania",
    },
    capital: "Canberra",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Aruba",
    emoji: "🇦🇼",
    continent: {
      name: "North America",
    },
    capital: "Oranjestad",
    languages: [
      {
        name: "Dutch",
      },
      {
        name: "Panjabi / Punjabi",
      },
    ],
  },
  {
    name: "Åland",
    emoji: "🇦🇽",
    continent: {
      name: "Europe",
    },
    capital: "Mariehamn",
    languages: [
      {
        name: "Swedish",
      },
    ],
  },
  {
    name: "Azerbaijan",
    emoji: "🇦🇿",
    continent: {
      name: "Asia",
    },
    capital: "Baku",
    languages: [
      {
        name: "Azerbaijani",
      },
    ],
  },
  {
    name: "Bosnia and Herzegovina",
    emoji: "🇧🇦",
    continent: {
      name: "Europe",
    },
    capital: "Sarajevo",
    languages: [
      {
        name: "Bosnian",
      },
      {
        name: "Croatian",
      },
      {
        name: "Serbian",
      },
    ],
  },
  {
    name: "Barbados",
    emoji: "🇧🇧",
    continent: {
      name: "North America",
    },
    capital: "Bridgetown",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Bangladesh",
    emoji: "🇧🇩",
    continent: {
      name: "Asia",
    },
    capital: "Dhaka",
    languages: [
      {
        name: "Bengali",
      },
    ],
  },
  {
    name: "Belgium",
    emoji: "🇧🇪",
    continent: {
      name: "Europe",
    },
    capital: "Brussels",
    languages: [
      {
        name: "Dutch",
      },
      {
        name: "French",
      },
      {
        name: "German",
      },
    ],
  },
  {
    name: "Burkina Faso",
    emoji: "🇧🇫",
    continent: {
      name: "Africa",
    },
    capital: "Ouagadougou",
    languages: [
      {
        name: "French",
      },
      {
        name: "Peul",
      },
    ],
  },
  {
    name: "Bulgaria",
    emoji: "🇧🇬",
    continent: {
      name: "Europe",
    },
    capital: "Sofia",
    languages: [
      {
        name: "Bulgarian",
      },
    ],
  },
  {
    name: "Bahrain",
    emoji: "🇧🇭",
    continent: {
      name: "Asia",
    },
    capital: "Manama",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Burundi",
    emoji: "🇧🇮",
    continent: {
      name: "Africa",
    },
    capital: "Bujumbura",
    languages: [
      {
        name: "French",
      },
      {
        name: "Kirundi",
      },
    ],
  },
  {
    name: "Benin",
    emoji: "🇧🇯",
    continent: {
      name: "Africa",
    },
    capital: "Porto-Novo",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Saint Barthélemy",
    emoji: "🇧🇱",
    continent: {
      name: "North America",
    },
    capital: "Gustavia",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Bermuda",
    emoji: "🇧🇲",
    continent: {
      name: "North America",
    },
    capital: "Hamilton",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Brunei",
    emoji: "🇧🇳",
    continent: {
      name: "Asia",
    },
    capital: "Bandar Seri Begawan",
    languages: [
      {
        name: "Malay",
      },
    ],
  },
  {
    name: "Bolivia",
    emoji: "🇧🇴",
    continent: {
      name: "South America",
    },
    capital: "Sucre",
    languages: [
      {
        name: "Spanish",
      },
      {
        name: "Aymara",
      },
      {
        name: "Quechua",
      },
    ],
  },
  {
    name: "Bonaire",
    emoji: "🇧🇶",
    continent: {
      name: "North America",
    },
    capital: "Kralendijk",
    languages: [
      {
        name: "Dutch",
      },
    ],
  },
  {
    name: "Brazil",
    emoji: "🇧🇷",
    continent: {
      name: "South America",
    },
    capital: "Brasília",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Bahamas",
    emoji: "🇧🇸",
    continent: {
      name: "North America",
    },
    capital: "Nassau",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Bhutan",
    emoji: "🇧🇹",
    continent: {
      name: "Asia",
    },
    capital: "Thimphu",
    languages: [
      {
        name: "Dzongkha",
      },
    ],
  },
  {
    name: "Bouvet Island",
    emoji: "🇧🇻",
    continent: {
      name: "Antarctica",
    },
    capital: null,
    languages: [
      {
        name: "Norwegian",
      },
      {
        name: "Norwegian Bokmål",
      },
      {
        name: "Norwegian Nynorsk",
      },
    ],
  },
  {
    name: "Botswana",
    emoji: "🇧🇼",
    continent: {
      name: "Africa",
    },
    capital: "Gaborone",
    languages: [
      {
        name: "English",
      },
      {
        name: "Tswana",
      },
    ],
  },
  {
    name: "Belarus",
    emoji: "🇧🇾",
    continent: {
      name: "Europe",
    },
    capital: "Minsk",
    languages: [
      {
        name: "Belarusian",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Belize",
    emoji: "🇧🇿",
    continent: {
      name: "North America",
    },
    capital: "Belmopan",
    languages: [
      {
        name: "English",
      },
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Canada",
    emoji: "🇨🇦",
    continent: {
      name: "North America",
    },
    capital: "Ottawa",
    languages: [
      {
        name: "English",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Cocos [Keeling] Islands",
    emoji: "🇨🇨",
    continent: {
      name: "Asia",
    },
    capital: "West Island",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Democratic Republic of the Congo",
    emoji: "🇨🇩",
    continent: {
      name: "Africa",
    },
    capital: "Kinshasa",
    languages: [
      {
        name: "French",
      },
      {
        name: "Lingala",
      },
      {
        name: "Kongo",
      },
      {
        name: "Swahili",
      },
      {
        name: "Luba-Katanga",
      },
    ],
  },
  {
    name: "Central African Republic",
    emoji: "🇨🇫",
    continent: {
      name: "Africa",
    },
    capital: "Bangui",
    languages: [
      {
        name: "French",
      },
      {
        name: "Sango",
      },
    ],
  },
  {
    name: "Republic of the Congo",
    emoji: "🇨🇬",
    continent: {
      name: "Africa",
    },
    capital: "Brazzaville",
    languages: [
      {
        name: "French",
      },
      {
        name: "Lingala",
      },
    ],
  },
  {
    name: "Switzerland",
    emoji: "🇨🇭",
    continent: {
      name: "Europe",
    },
    capital: "Bern",
    languages: [
      {
        name: "German",
      },
      {
        name: "French",
      },
      {
        name: "Italian",
      },
    ],
  },
  {
    name: "Ivory Coast",
    emoji: "🇨🇮",
    continent: {
      name: "Africa",
    },
    capital: "Yamoussoukro",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Cook Islands",
    emoji: "🇨🇰",
    continent: {
      name: "Oceania",
    },
    capital: "Avarua",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Chile",
    emoji: "🇨🇱",
    continent: {
      name: "South America",
    },
    capital: "Santiago",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Cameroon",
    emoji: "🇨🇲",
    continent: {
      name: "Africa",
    },
    capital: "Yaoundé",
    languages: [
      {
        name: "English",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "China",
    emoji: "🇨🇳",
    continent: {
      name: "Asia",
    },
    capital: "Beijing",
    languages: [
      {
        name: "Chinese",
      },
    ],
  },
  {
    name: "Colombia",
    emoji: "🇨🇴",
    continent: {
      name: "South America",
    },
    capital: "Bogotá",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Costa Rica",
    emoji: "🇨🇷",
    continent: {
      name: "North America",
    },
    capital: "San José",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Cuba",
    emoji: "🇨🇺",
    continent: {
      name: "North America",
    },
    capital: "Havana",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Cape Verde",
    emoji: "🇨🇻",
    continent: {
      name: "Africa",
    },
    capital: "Praia",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Curacao",
    emoji: "🇨🇼",
    continent: {
      name: "North America",
    },
    capital: "Willemstad",
    languages: [
      {
        name: "Dutch",
      },
      {
        name: "Panjabi / Punjabi",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Christmas Island",
    emoji: "🇨🇽",
    continent: {
      name: "Asia",
    },
    capital: "Flying Fish Cove",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Cyprus",
    emoji: "🇨🇾",
    continent: {
      name: "Europe",
    },
    capital: "Nicosia",
    languages: [
      {
        name: "Greek",
      },
      {
        name: "Turkish",
      },
      {
        name: "Armenian",
      },
    ],
  },
  {
    name: "Czech Republic",
    emoji: "🇨🇿",
    continent: {
      name: "Europe",
    },
    capital: "Prague",
    languages: [
      {
        name: "Czech",
      },
      {
        name: "Slovak",
      },
    ],
  },
  {
    name: "Germany",
    emoji: "🇩🇪",
    continent: {
      name: "Europe",
    },
    capital: "Berlin",
    languages: [
      {
        name: "German",
      },
    ],
  },
  {
    name: "Djibouti",
    emoji: "🇩🇯",
    continent: {
      name: "Africa",
    },
    capital: "Djibouti",
    languages: [
      {
        name: "French",
      },
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Denmark",
    emoji: "🇩🇰",
    continent: {
      name: "Europe",
    },
    capital: "Copenhagen",
    languages: [
      {
        name: "Danish",
      },
    ],
  },
  {
    name: "Dominica",
    emoji: "🇩🇲",
    continent: {
      name: "North America",
    },
    capital: "Roseau",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Dominican Republic",
    emoji: "🇩🇴",
    continent: {
      name: "North America",
    },
    capital: "Santo Domingo",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Algeria",
    emoji: "🇩🇿",
    continent: {
      name: "Africa",
    },
    capital: "Algiers",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Ecuador",
    emoji: "🇪🇨",
    continent: {
      name: "South America",
    },
    capital: "Quito",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Estonia",
    emoji: "🇪🇪",
    continent: {
      name: "Europe",
    },
    capital: "Tallinn",
    languages: [
      {
        name: "Estonian",
      },
    ],
  },
  {
    name: "Egypt",
    emoji: "🇪🇬",
    continent: {
      name: "Africa",
    },
    capital: "Cairo",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Western Sahara",
    emoji: "🇪🇭",
    continent: {
      name: "Africa",
    },
    capital: "El Aaiún",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Eritrea",
    emoji: "🇪🇷",
    continent: {
      name: "Africa",
    },
    capital: "Asmara",
    languages: [
      {
        name: "Tigrinya",
      },
      {
        name: "Arabic",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Spain",
    emoji: "🇪🇸",
    continent: {
      name: "Europe",
    },
    capital: "Madrid",
    languages: [
      {
        name: "Spanish",
      },
      {
        name: "Basque",
      },
      {
        name: "Catalan",
      },
      {
        name: "Galician",
      },
      {
        name: "Occitan",
      },
    ],
  },
  {
    name: "Ethiopia",
    emoji: "🇪🇹",
    continent: {
      name: "Africa",
    },
    capital: "Addis Ababa",
    languages: [
      {
        name: "Amharic",
      },
    ],
  },
  {
    name: "Finland",
    emoji: "🇫🇮",
    continent: {
      name: "Europe",
    },
    capital: "Helsinki",
    languages: [
      {
        name: "Finnish",
      },
      {
        name: "Swedish",
      },
    ],
  },
  {
    name: "Fiji",
    emoji: "🇫🇯",
    continent: {
      name: "Oceania",
    },
    capital: "Suva",
    languages: [
      {
        name: "English",
      },
      {
        name: "Fijian",
      },
      {
        name: "Hindi",
      },
      {
        name: "Urdu",
      },
    ],
  },
  {
    name: "Falkland Islands",
    emoji: "🇫🇰",
    continent: {
      name: "South America",
    },
    capital: "Stanley",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Micronesia",
    emoji: "🇫🇲",
    continent: {
      name: "Oceania",
    },
    capital: "Palikir",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Faroe Islands",
    emoji: "🇫🇴",
    continent: {
      name: "Europe",
    },
    capital: "Tórshavn",
    languages: [
      {
        name: "Faroese",
      },
    ],
  },
  {
    name: "France",
    emoji: "🇫🇷",
    continent: {
      name: "Europe",
    },
    capital: "Paris",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Gabon",
    emoji: "🇬🇦",
    continent: {
      name: "Africa",
    },
    capital: "Libreville",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "United Kingdom",
    emoji: "🇬🇧",
    continent: {
      name: "Europe",
    },
    capital: "London",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Grenada",
    emoji: "🇬🇩",
    continent: {
      name: "North America",
    },
    capital: "St. George's",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Georgia",
    emoji: "🇬🇪",
    continent: {
      name: "Asia",
    },
    capital: "Tbilisi",
    languages: [
      {
        name: "Georgian",
      },
    ],
  },
  {
    name: "French Guiana",
    emoji: "🇬🇫",
    continent: {
      name: "South America",
    },
    capital: "Cayenne",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Guernsey",
    emoji: "🇬🇬",
    continent: {
      name: "Europe",
    },
    capital: "St. Peter Port",
    languages: [
      {
        name: "English",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Ghana",
    emoji: "🇬🇭",
    continent: {
      name: "Africa",
    },
    capital: "Accra",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Gibraltar",
    emoji: "🇬🇮",
    continent: {
      name: "Europe",
    },
    capital: "Gibraltar",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Greenland",
    emoji: "🇬🇱",
    continent: {
      name: "North America",
    },
    capital: "Nuuk",
    languages: [
      {
        name: "Greenlandic",
      },
    ],
  },
  {
    name: "Gambia",
    emoji: "🇬🇲",
    continent: {
      name: "Africa",
    },
    capital: "Banjul",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Guinea",
    emoji: "🇬🇳",
    continent: {
      name: "Africa",
    },
    capital: "Conakry",
    languages: [
      {
        name: "French",
      },
      {
        name: "Peul",
      },
    ],
  },
  {
    name: "Guadeloupe",
    emoji: "🇬🇵",
    continent: {
      name: "North America",
    },
    capital: "Basse-Terre",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Equatorial Guinea",
    emoji: "🇬🇶",
    continent: {
      name: "Africa",
    },
    capital: "Malabo",
    languages: [
      {
        name: "Spanish",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Greece",
    emoji: "🇬🇷",
    continent: {
      name: "Europe",
    },
    capital: "Athens",
    languages: [
      {
        name: "Greek",
      },
    ],
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    emoji: "🇬🇸",
    continent: {
      name: "Antarctica",
    },
    capital: "King Edward Point",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Guatemala",
    emoji: "🇬🇹",
    continent: {
      name: "North America",
    },
    capital: "Guatemala City",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Guam",
    emoji: "🇬🇺",
    continent: {
      name: "Oceania",
    },
    capital: "Hagåtña",
    languages: [
      {
        name: "English",
      },
      {
        name: "Chamorro",
      },
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Guinea-Bissau",
    emoji: "🇬🇼",
    continent: {
      name: "Africa",
    },
    capital: "Bissau",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Guyana",
    emoji: "🇬🇾",
    continent: {
      name: "South America",
    },
    capital: "Georgetown",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Hong Kong",
    emoji: "🇭🇰",
    continent: {
      name: "Asia",
    },
    capital: "City of Victoria",
    languages: [
      {
        name: "Chinese",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Heard Island and McDonald Islands",
    emoji: "🇭🇲",
    continent: {
      name: "Antarctica",
    },
    capital: null,
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Honduras",
    emoji: "🇭🇳",
    continent: {
      name: "North America",
    },
    capital: "Tegucigalpa",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Croatia",
    emoji: "🇭🇷",
    continent: {
      name: "Europe",
    },
    capital: "Zagreb",
    languages: [
      {
        name: "Croatian",
      },
    ],
  },
  {
    name: "Haiti",
    emoji: "🇭🇹",
    continent: {
      name: "North America",
    },
    capital: "Port-au-Prince",
    languages: [
      {
        name: "French",
      },
      {
        name: "Haitian",
      },
    ],
  },
  {
    name: "Hungary",
    emoji: "🇭🇺",
    continent: {
      name: "Europe",
    },
    capital: "Budapest",
    languages: [
      {
        name: "Hungarian",
      },
    ],
  },
  {
    name: "Indonesia",
    emoji: "🇮🇩",
    continent: {
      name: "Asia",
    },
    capital: "Jakarta",
    languages: [
      {
        name: "Indonesian",
      },
    ],
  },
  {
    name: "Ireland",
    emoji: "🇮🇪",
    continent: {
      name: "Europe",
    },
    capital: "Dublin",
    languages: [
      {
        name: "Irish",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Israel",
    emoji: "🇮🇱",
    continent: {
      name: "Asia",
    },
    capital: "Jerusalem",
    languages: [
      {
        name: "Hebrew",
      },
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Isle of Man",
    emoji: "🇮🇲",
    continent: {
      name: "Europe",
    },
    capital: "Douglas",
    languages: [
      {
        name: "English",
      },
      {
        name: "Manx",
      },
    ],
  },
  {
    name: "India",
    emoji: "🇮🇳",
    continent: {
      name: "Asia",
    },
    capital: "New Delhi",
    languages: [
      {
        name: "Hindi",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "British Indian Ocean Territory",
    emoji: "🇮🇴",
    continent: {
      name: "Asia",
    },
    capital: "Diego Garcia",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Iraq",
    emoji: "🇮🇶",
    continent: {
      name: "Asia",
    },
    capital: "Baghdad",
    languages: [
      {
        name: "Arabic",
      },
      {
        name: "Kurdish",
      },
    ],
  },
  {
    name: "Iran",
    emoji: "🇮🇷",
    continent: {
      name: "Asia",
    },
    capital: "Tehran",
    languages: [
      {
        name: "Persian",
      },
    ],
  },
  {
    name: "Iceland",
    emoji: "🇮🇸",
    continent: {
      name: "Europe",
    },
    capital: "Reykjavik",
    languages: [
      {
        name: "Icelandic",
      },
    ],
  },
  {
    name: "Italy",
    emoji: "🇮🇹",
    continent: {
      name: "Europe",
    },
    capital: "Rome",
    languages: [
      {
        name: "Italian",
      },
    ],
  },
  {
    name: "Jersey",
    emoji: "🇯🇪",
    continent: {
      name: "Europe",
    },
    capital: "Saint Helier",
    languages: [
      {
        name: "English",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Jamaica",
    emoji: "🇯🇲",
    continent: {
      name: "North America",
    },
    capital: "Kingston",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Jordan",
    emoji: "🇯🇴",
    continent: {
      name: "Asia",
    },
    capital: "Amman",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Japan",
    emoji: "🇯🇵",
    continent: {
      name: "Asia",
    },
    capital: "Tokyo",
    languages: [
      {
        name: "Japanese",
      },
    ],
  },
  {
    name: "Kenya",
    emoji: "🇰🇪",
    continent: {
      name: "Africa",
    },
    capital: "Nairobi",
    languages: [
      {
        name: "English",
      },
      {
        name: "Swahili",
      },
    ],
  },
  {
    name: "Kyrgyzstan",
    emoji: "🇰🇬",
    continent: {
      name: "Asia",
    },
    capital: "Bishkek",
    languages: [
      {
        name: "Kirghiz",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Cambodia",
    emoji: "🇰🇭",
    continent: {
      name: "Asia",
    },
    capital: "Phnom Penh",
    languages: [
      {
        name: "Cambodian",
      },
    ],
  },
  {
    name: "Kiribati",
    emoji: "🇰🇮",
    continent: {
      name: "Oceania",
    },
    capital: "South Tarawa",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Comoros",
    emoji: "🇰🇲",
    continent: {
      name: "Africa",
    },
    capital: "Moroni",
    languages: [
      {
        name: "Arabic",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Saint Kitts and Nevis",
    emoji: "🇰🇳",
    continent: {
      name: "North America",
    },
    capital: "Basseterre",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "North Korea",
    emoji: "🇰🇵",
    continent: {
      name: "Asia",
    },
    capital: "Pyongyang",
    languages: [
      {
        name: "Korean",
      },
    ],
  },
  {
    name: "South Korea",
    emoji: "🇰🇷",
    continent: {
      name: "Asia",
    },
    capital: "Seoul",
    languages: [
      {
        name: "Korean",
      },
    ],
  },
  {
    name: "Kuwait",
    emoji: "🇰🇼",
    continent: {
      name: "Asia",
    },
    capital: "Kuwait City",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Cayman Islands",
    emoji: "🇰🇾",
    continent: {
      name: "North America",
    },
    capital: "George Town",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Kazakhstan",
    emoji: "🇰🇿",
    continent: {
      name: "Asia",
    },
    capital: "Astana",
    languages: [
      {
        name: "Kazakh",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Laos",
    emoji: "🇱🇦",
    continent: {
      name: "Asia",
    },
    capital: "Vientiane",
    languages: [
      {
        name: "Laotian",
      },
    ],
  },
  {
    name: "Lebanon",
    emoji: "🇱🇧",
    continent: {
      name: "Asia",
    },
    capital: "Beirut",
    languages: [
      {
        name: "Arabic",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Saint Lucia",
    emoji: "🇱🇨",
    continent: {
      name: "North America",
    },
    capital: "Castries",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Liechtenstein",
    emoji: "🇱🇮",
    continent: {
      name: "Europe",
    },
    capital: "Vaduz",
    languages: [
      {
        name: "German",
      },
    ],
  },
  {
    name: "Sri Lanka",
    emoji: "🇱🇰",
    continent: {
      name: "Asia",
    },
    capital: "Colombo",
    languages: [
      {
        name: "Sinhalese",
      },
      {
        name: "Tamil",
      },
    ],
  },
  {
    name: "Liberia",
    emoji: "🇱🇷",
    continent: {
      name: "Africa",
    },
    capital: "Monrovia",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Lesotho",
    emoji: "🇱🇸",
    continent: {
      name: "Africa",
    },
    capital: "Maseru",
    languages: [
      {
        name: "English",
      },
      {
        name: "Southern Sotho",
      },
    ],
  },
  {
    name: "Lithuania",
    emoji: "🇱🇹",
    continent: {
      name: "Europe",
    },
    capital: "Vilnius",
    languages: [
      {
        name: "Lithuanian",
      },
    ],
  },
  {
    name: "Luxembourg",
    emoji: "🇱🇺",
    continent: {
      name: "Europe",
    },
    capital: "Luxembourg",
    languages: [
      {
        name: "French",
      },
      {
        name: "German",
      },
      {
        name: "Luxembourgish",
      },
    ],
  },
  {
    name: "Latvia",
    emoji: "🇱🇻",
    continent: {
      name: "Europe",
    },
    capital: "Riga",
    languages: [
      {
        name: "Latvian",
      },
    ],
  },
  {
    name: "Libya",
    emoji: "🇱🇾",
    continent: {
      name: "Africa",
    },
    capital: "Tripoli",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Morocco",
    emoji: "🇲🇦",
    continent: {
      name: "Africa",
    },
    capital: "Rabat",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Monaco",
    emoji: "🇲🇨",
    continent: {
      name: "Europe",
    },
    capital: "Monaco",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Moldova",
    emoji: "🇲🇩",
    continent: {
      name: "Europe",
    },
    capital: "Chișinău",
    languages: [
      {
        name: "Romanian",
      },
    ],
  },
  {
    name: "Montenegro",
    emoji: "🇲🇪",
    continent: {
      name: "Europe",
    },
    capital: "Podgorica",
    languages: [
      {
        name: "Serbian",
      },
      {
        name: "Bosnian",
      },
      {
        name: "Albanian",
      },
      {
        name: "Croatian",
      },
    ],
  },
  {
    name: "Saint Martin",
    emoji: "🇲🇫",
    continent: {
      name: "North America",
    },
    capital: "Marigot",
    languages: [
      {
        name: "English",
      },
      {
        name: "French",
      },
      {
        name: "Dutch",
      },
    ],
  },
  {
    name: "Madagascar",
    emoji: "🇲🇬",
    continent: {
      name: "Africa",
    },
    capital: "Antananarivo",
    languages: [
      {
        name: "French",
      },
      {
        name: "Malagasy",
      },
    ],
  },
  {
    name: "Marshall Islands",
    emoji: "🇲🇭",
    continent: {
      name: "Oceania",
    },
    capital: "Majuro",
    languages: [
      {
        name: "English",
      },
      {
        name: "Marshallese",
      },
    ],
  },
  {
    name: "North Macedonia",
    emoji: "🇲🇰",
    continent: {
      name: "Europe",
    },
    capital: "Skopje",
    languages: [
      {
        name: "Macedonian",
      },
    ],
  },
  {
    name: "Mali",
    emoji: "🇲🇱",
    continent: {
      name: "Africa",
    },
    capital: "Bamako",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Myanmar [Burma]",
    emoji: "🇲🇲",
    continent: {
      name: "Asia",
    },
    capital: "Naypyidaw",
    languages: [
      {
        name: "Burmese",
      },
    ],
  },
  {
    name: "Mongolia",
    emoji: "🇲🇳",
    continent: {
      name: "Asia",
    },
    capital: "Ulan Bator",
    languages: [
      {
        name: "Mongolian",
      },
    ],
  },
  {
    name: "Macao",
    emoji: "🇲🇴",
    continent: {
      name: "Asia",
    },
    capital: null,
    languages: [
      {
        name: "Chinese",
      },
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Northern Mariana Islands",
    emoji: "🇲🇵",
    continent: {
      name: "Oceania",
    },
    capital: "Saipan",
    languages: [
      {
        name: "English",
      },
      {
        name: "Chamorro",
      },
    ],
  },
  {
    name: "Martinique",
    emoji: "🇲🇶",
    continent: {
      name: "North America",
    },
    capital: "Fort-de-France",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Mauritania",
    emoji: "🇲🇷",
    continent: {
      name: "Africa",
    },
    capital: "Nouakchott",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Montserrat",
    emoji: "🇲🇸",
    continent: {
      name: "North America",
    },
    capital: "Plymouth",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Malta",
    emoji: "🇲🇹",
    continent: {
      name: "Europe",
    },
    capital: "Valletta",
    languages: [
      {
        name: "Maltese",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Mauritius",
    emoji: "🇲🇺",
    continent: {
      name: "Africa",
    },
    capital: "Port Louis",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Maldives",
    emoji: "🇲🇻",
    continent: {
      name: "Asia",
    },
    capital: "Malé",
    languages: [
      {
        name: "Divehi",
      },
    ],
  },
  {
    name: "Malawi",
    emoji: "🇲🇼",
    continent: {
      name: "Africa",
    },
    capital: "Lilongwe",
    languages: [
      {
        name: "English",
      },
      {
        name: "Chichewa",
      },
    ],
  },
  {
    name: "Mexico",
    emoji: "🇲🇽",
    continent: {
      name: "North America",
    },
    capital: "Mexico City",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Malaysia",
    emoji: "🇲🇾",
    continent: {
      name: "Asia",
    },
    capital: "Kuala Lumpur",
    languages: [
      {
        name: "Malay",
      },
    ],
  },
  {
    name: "Mozambique",
    emoji: "🇲🇿",
    continent: {
      name: "Africa",
    },
    capital: "Maputo",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Namibia",
    emoji: "🇳🇦",
    continent: {
      name: "Africa",
    },
    capital: "Windhoek",
    languages: [
      {
        name: "English",
      },
      {
        name: "Afrikaans",
      },
    ],
  },
  {
    name: "New Caledonia",
    emoji: "🇳🇨",
    continent: {
      name: "Oceania",
    },
    capital: "Nouméa",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Niger",
    emoji: "🇳🇪",
    continent: {
      name: "Africa",
    },
    capital: "Niamey",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Norfolk Island",
    emoji: "🇳🇫",
    continent: {
      name: "Oceania",
    },
    capital: "Kingston",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Nigeria",
    emoji: "🇳🇬",
    continent: {
      name: "Africa",
    },
    capital: "Abuja",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Nicaragua",
    emoji: "🇳🇮",
    continent: {
      name: "North America",
    },
    capital: "Managua",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Netherlands",
    emoji: "🇳🇱",
    continent: {
      name: "Europe",
    },
    capital: "Amsterdam",
    languages: [
      {
        name: "Dutch",
      },
    ],
  },
  {
    name: "Norway",
    emoji: "🇳🇴",
    continent: {
      name: "Europe",
    },
    capital: "Oslo",
    languages: [
      {
        name: "Norwegian",
      },
      {
        name: "Norwegian Bokmål",
      },
      {
        name: "Norwegian Nynorsk",
      },
    ],
  },
  {
    name: "Nepal",
    emoji: "🇳🇵",
    continent: {
      name: "Asia",
    },
    capital: "Kathmandu",
    languages: [
      {
        name: "Nepali",
      },
    ],
  },
  {
    name: "Nauru",
    emoji: "🇳🇷",
    continent: {
      name: "Oceania",
    },
    capital: "Yaren",
    languages: [
      {
        name: "English",
      },
      {
        name: "Nauruan",
      },
    ],
  },
  {
    name: "Niue",
    emoji: "🇳🇺",
    continent: {
      name: "Oceania",
    },
    capital: "Alofi",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "New Zealand",
    emoji: "🇳🇿",
    continent: {
      name: "Oceania",
    },
    capital: "Wellington",
    languages: [
      {
        name: "English",
      },
      {
        name: "Maori",
      },
    ],
  },
  {
    name: "Oman",
    emoji: "🇴🇲",
    continent: {
      name: "Asia",
    },
    capital: "Muscat",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Panama",
    emoji: "🇵🇦",
    continent: {
      name: "North America",
    },
    capital: "Panama City",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Peru",
    emoji: "🇵🇪",
    continent: {
      name: "South America",
    },
    capital: "Lima",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "French Polynesia",
    emoji: "🇵🇫",
    continent: {
      name: "Oceania",
    },
    capital: "Papeetē",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Papua New Guinea",
    emoji: "🇵🇬",
    continent: {
      name: "Oceania",
    },
    capital: "Port Moresby",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Philippines",
    emoji: "🇵🇭",
    continent: {
      name: "Asia",
    },
    capital: "Manila",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Pakistan",
    emoji: "🇵🇰",
    continent: {
      name: "Asia",
    },
    capital: "Islamabad",
    languages: [
      {
        name: "English",
      },
      {
        name: "Urdu",
      },
    ],
  },
  {
    name: "Poland",
    emoji: "🇵🇱",
    continent: {
      name: "Europe",
    },
    capital: "Warsaw",
    languages: [
      {
        name: "Polish",
      },
    ],
  },
  {
    name: "Saint Pierre and Miquelon",
    emoji: "🇵🇲",
    continent: {
      name: "North America",
    },
    capital: "Saint-Pierre",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Pitcairn Islands",
    emoji: "🇵🇳",
    continent: {
      name: "Oceania",
    },
    capital: "Adamstown",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Puerto Rico",
    emoji: "🇵🇷",
    continent: {
      name: "North America",
    },
    capital: "San Juan",
    languages: [
      {
        name: "Spanish",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Palestine",
    emoji: "🇵🇸",
    continent: {
      name: "Asia",
    },
    capital: "Ramallah",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Portugal",
    emoji: "🇵🇹",
    continent: {
      name: "Europe",
    },
    capital: "Lisbon",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Palau",
    emoji: "🇵🇼",
    continent: {
      name: "Oceania",
    },
    capital: "Ngerulmud",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Paraguay",
    emoji: "🇵🇾",
    continent: {
      name: "South America",
    },
    capital: "Asunción",
    languages: [
      {
        name: "Spanish",
      },
      {
        name: "Guarani",
      },
    ],
  },
  {
    name: "Qatar",
    emoji: "🇶🇦",
    continent: {
      name: "Asia",
    },
    capital: "Doha",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Réunion",
    emoji: "🇷🇪",
    continent: {
      name: "Africa",
    },
    capital: "Saint-Denis",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Romania",
    emoji: "🇷🇴",
    continent: {
      name: "Europe",
    },
    capital: "Bucharest",
    languages: [
      {
        name: "Romanian",
      },
    ],
  },
  {
    name: "Serbia",
    emoji: "🇷🇸",
    continent: {
      name: "Europe",
    },
    capital: "Belgrade",
    languages: [
      {
        name: "Serbian",
      },
    ],
  },
  {
    name: "Russia",
    emoji: "🇷🇺",
    continent: {
      name: "Europe",
    },
    capital: "Moscow",
    languages: [
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Rwanda",
    emoji: "🇷🇼",
    continent: {
      name: "Africa",
    },
    capital: "Kigali",
    languages: [
      {
        name: "Rwandi",
      },
      {
        name: "English",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Saudi Arabia",
    emoji: "🇸🇦",
    continent: {
      name: "Asia",
    },
    capital: "Riyadh",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Solomon Islands",
    emoji: "🇸🇧",
    continent: {
      name: "Oceania",
    },
    capital: "Honiara",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Seychelles",
    emoji: "🇸🇨",
    continent: {
      name: "Africa",
    },
    capital: "Victoria",
    languages: [
      {
        name: "French",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Sudan",
    emoji: "🇸🇩",
    continent: {
      name: "Africa",
    },
    capital: "Khartoum",
    languages: [
      {
        name: "Arabic",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Sweden",
    emoji: "🇸🇪",
    continent: {
      name: "Europe",
    },
    capital: "Stockholm",
    languages: [
      {
        name: "Swedish",
      },
    ],
  },
  {
    name: "Singapore",
    emoji: "🇸🇬",
    continent: {
      name: "Asia",
    },
    capital: "Singapore",
    languages: [
      {
        name: "English",
      },
      {
        name: "Malay",
      },
      {
        name: "Tamil",
      },
      {
        name: "Chinese",
      },
    ],
  },
  {
    name: "Saint Helena",
    emoji: "🇸🇭",
    continent: {
      name: "Africa",
    },
    capital: "Jamestown",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Slovenia",
    emoji: "🇸🇮",
    continent: {
      name: "Europe",
    },
    capital: "Ljubljana",
    languages: [
      {
        name: "Slovenian",
      },
    ],
  },
  {
    name: "Svalbard and Jan Mayen",
    emoji: "🇸🇯",
    continent: {
      name: "Europe",
    },
    capital: "Longyearbyen",
    languages: [
      {
        name: "Norwegian",
      },
    ],
  },
  {
    name: "Slovakia",
    emoji: "🇸🇰",
    continent: {
      name: "Europe",
    },
    capital: "Bratislava",
    languages: [
      {
        name: "Slovak",
      },
    ],
  },
  {
    name: "Sierra Leone",
    emoji: "🇸🇱",
    continent: {
      name: "Africa",
    },
    capital: "Freetown",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "San Marino",
    emoji: "🇸🇲",
    continent: {
      name: "Europe",
    },
    capital: "City of San Marino",
    languages: [
      {
        name: "Italian",
      },
    ],
  },
  {
    name: "Senegal",
    emoji: "🇸🇳",
    continent: {
      name: "Africa",
    },
    capital: "Dakar",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Somalia",
    emoji: "🇸🇴",
    continent: {
      name: "Africa",
    },
    capital: "Mogadishu",
    languages: [
      {
        name: "Somalia",
      },
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Suriname",
    emoji: "🇸🇷",
    continent: {
      name: "South America",
    },
    capital: "Paramaribo",
    languages: [
      {
        name: "Dutch",
      },
    ],
  },
  {
    name: "South Sudan",
    emoji: "🇸🇸",
    continent: {
      name: "Africa",
    },
    capital: "Juba",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "São Tomé and Príncipe",
    emoji: "🇸🇹",
    continent: {
      name: "Africa",
    },
    capital: "São Tomé",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "El Salvador",
    emoji: "🇸🇻",
    continent: {
      name: "North America",
    },
    capital: "San Salvador",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Sint Maarten",
    emoji: "🇸🇽",
    continent: {
      name: "North America",
    },
    capital: "Philipsburg",
    languages: [
      {
        name: "Dutch",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Syria",
    emoji: "🇸🇾",
    continent: {
      name: "Asia",
    },
    capital: "Damascus",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Swaziland",
    emoji: "🇸🇿",
    continent: {
      name: "Africa",
    },
    capital: "Lobamba",
    languages: [
      {
        name: "English",
      },
      {
        name: "Swati",
      },
    ],
  },
  {
    name: "Turks and Caicos Islands",
    emoji: "🇹🇨",
    continent: {
      name: "North America",
    },
    capital: "Cockburn Town",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Chad",
    emoji: "🇹🇩",
    continent: {
      name: "Africa",
    },
    capital: "N'Djamena",
    languages: [
      {
        name: "French",
      },
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "French Southern Territories",
    emoji: "🇹🇫",
    continent: {
      name: "Antarctica",
    },
    capital: "Port-aux-Français",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Togo",
    emoji: "🇹🇬",
    continent: {
      name: "Africa",
    },
    capital: "Lomé",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Thailand",
    emoji: "🇹🇭",
    continent: {
      name: "Asia",
    },
    capital: "Bangkok",
    languages: [
      {
        name: "Thai",
      },
    ],
  },
  {
    name: "Tajikistan",
    emoji: "🇹🇯",
    continent: {
      name: "Asia",
    },
    capital: "Dushanbe",
    languages: [
      {
        name: "Tajik",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Tokelau",
    emoji: "🇹🇰",
    continent: {
      name: "Oceania",
    },
    capital: "Fakaofo",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "East Timor",
    emoji: "🇹🇱",
    continent: {
      name: "Oceania",
    },
    capital: "Dili",
    languages: [
      {
        name: "Portuguese",
      },
    ],
  },
  {
    name: "Turkmenistan",
    emoji: "🇹🇲",
    continent: {
      name: "Asia",
    },
    capital: "Ashgabat",
    languages: [
      {
        name: "Turkmen",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Tunisia",
    emoji: "🇹🇳",
    continent: {
      name: "Africa",
    },
    capital: "Tunis",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Tonga",
    emoji: "🇹🇴",
    continent: {
      name: "Oceania",
    },
    capital: "Nuku'alofa",
    languages: [
      {
        name: "English",
      },
      {
        name: "Tonga",
      },
    ],
  },
  {
    name: "Turkey",
    emoji: "🇹🇷",
    continent: {
      name: "Asia",
    },
    capital: "Ankara",
    languages: [
      {
        name: "Turkish",
      },
    ],
  },
  {
    name: "Trinidad and Tobago",
    emoji: "🇹🇹",
    continent: {
      name: "North America",
    },
    capital: "Port of Spain",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Tuvalu",
    emoji: "🇹🇻",
    continent: {
      name: "Oceania",
    },
    capital: "Funafuti",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Taiwan",
    emoji: "🇹🇼",
    continent: {
      name: "Asia",
    },
    capital: "Taipei",
    languages: [
      {
        name: "Chinese",
      },
    ],
  },
  {
    name: "Tanzania",
    emoji: "🇹🇿",
    continent: {
      name: "Africa",
    },
    capital: "Dodoma",
    languages: [
      {
        name: "Swahili",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Ukraine",
    emoji: "🇺🇦",
    continent: {
      name: "Europe",
    },
    capital: "Kyiv",
    languages: [
      {
        name: "Ukrainian",
      },
    ],
  },
  {
    name: "Uganda",
    emoji: "🇺🇬",
    continent: {
      name: "Africa",
    },
    capital: "Kampala",
    languages: [
      {
        name: "English",
      },
      {
        name: "Swahili",
      },
    ],
  },
  {
    name: "U.S. Minor Outlying Islands",
    emoji: "🇺🇲",
    continent: {
      name: "Oceania",
    },
    capital: null,
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "United States",
    emoji: "🇺🇸",
    continent: {
      name: "North America",
    },
    capital: "Washington D.C.",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Uruguay",
    emoji: "🇺🇾",
    continent: {
      name: "South America",
    },
    capital: "Montevideo",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "Uzbekistan",
    emoji: "🇺🇿",
    continent: {
      name: "Asia",
    },
    capital: "Tashkent",
    languages: [
      {
        name: "Uzbek",
      },
      {
        name: "Russian",
      },
    ],
  },
  {
    name: "Vatican City",
    emoji: "🇻🇦",
    continent: {
      name: "Europe",
    },
    capital: "Vatican City",
    languages: [
      {
        name: "Italian",
      },
      {
        name: "Latin",
      },
    ],
  },
  {
    name: "Saint Vincent and the Grenadines",
    emoji: "🇻🇨",
    continent: {
      name: "North America",
    },
    capital: "Kingstown",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Venezuela",
    emoji: "🇻🇪",
    continent: {
      name: "South America",
    },
    capital: "Caracas",
    languages: [
      {
        name: "Spanish",
      },
    ],
  },
  {
    name: "British Virgin Islands",
    emoji: "🇻🇬",
    continent: {
      name: "North America",
    },
    capital: "Road Town",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "U.S. Virgin Islands",
    emoji: "🇻🇮",
    continent: {
      name: "North America",
    },
    capital: "Charlotte Amalie",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Vietnam",
    emoji: "🇻🇳",
    continent: {
      name: "Asia",
    },
    capital: "Hanoi",
    languages: [
      {
        name: "Vietnamese",
      },
    ],
  },
  {
    name: "Vanuatu",
    emoji: "🇻🇺",
    continent: {
      name: "Oceania",
    },
    capital: "Port Vila",
    languages: [
      {
        name: "Bislama",
      },
      {
        name: "English",
      },
      {
        name: "French",
      },
    ],
  },
  {
    name: "Wallis and Futuna",
    emoji: "🇼🇫",
    continent: {
      name: "Oceania",
    },
    capital: "Mata-Utu",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "Samoa",
    emoji: "🇼🇸",
    continent: {
      name: "Oceania",
    },
    capital: "Apia",
    languages: [
      {
        name: "Samoan",
      },
      {
        name: "English",
      },
    ],
  },
  {
    name: "Kosovo",
    emoji: "🇽🇰",
    continent: {
      name: "Europe",
    },
    capital: "Pristina",
    languages: [
      {
        name: "Albanian",
      },
      {
        name: "Serbian",
      },
    ],
  },
  {
    name: "Yemen",
    emoji: "🇾🇪",
    continent: {
      name: "Asia",
    },
    capital: "Sana'a",
    languages: [
      {
        name: "Arabic",
      },
    ],
  },
  {
    name: "Mayotte",
    emoji: "🇾🇹",
    continent: {
      name: "Africa",
    },
    capital: "Mamoudzou",
    languages: [
      {
        name: "French",
      },
    ],
  },
  {
    name: "South Africa",
    emoji: "🇿🇦",
    continent: {
      name: "Africa",
    },
    capital: "Pretoria",
    languages: [
      {
        name: "Afrikaans",
      },
      {
        name: "English",
      },
      {
        name: "South Ndebele",
      },
      {
        name: "Southern Sotho",
      },
      {
        name: "Swati",
      },
      {
        name: "Tswana",
      },
      {
        name: "Tsonga",
      },
      {
        name: "Venda",
      },
      {
        name: "Xhosa",
      },
      {
        name: "Zulu",
      },
    ],
  },
  {
    name: "Zambia",
    emoji: "🇿🇲",
    continent: {
      name: "Africa",
    },
    capital: "Lusaka",
    languages: [
      {
        name: "English",
      },
    ],
  },
  {
    name: "Zimbabwe",
    emoji: "🇿🇼",
    continent: {
      name: "Africa",
    },
    capital: "Harare",
    languages: [
      {
        name: "English",
      },
      {
        name: "Shona",
      },
      {
        name: "North Ndebele",
      },
    ],
  },
].filter(({ name }) => name.slice(0, "Chi".length) === "Chi");

// const africa = countries.filter(({ continent }) => continent.name === "Africa");
// const antarctica = countries.filter(
//   ({ continent }) => continent.name === "Antarctica"
// );
// const asia = countries.filter(({ continent }) => continent.name === "Asia");
// const europe = countries.filter(({ continent }) => continent.name === "Europe");
// const northAmerica = countries.filter(
//   ({ continent }) => continent.name === "North America"
// );
// const oceania = countries.filter(
//   ({ continent }) => continent.name === "Oceania"
// );
// const southAmerica = countries.filter(
//   ({ continent }) => continent.name === "South America"
// );

console.log(countries);
