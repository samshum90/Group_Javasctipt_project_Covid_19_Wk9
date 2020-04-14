use covid_19
db.dropDatabase();

db.needs.insertMany([
  {
    name: "John",
    
    content: "Bread, Eggs, Milk, Yogurt",
    needDescription: "Gluten free yogurt",
    needStatus: true,
    category: "shopping",

    contactDetails: {
      contactNumber: "07711666577",
      email: "johnboy@hotmail.com",
      address: "4/7 Corstorphine High Street",
      postCode: "EH12 7ST",
      time: "17:00",
      date: "06/6/2020",
      lat: "55.94084843785257",
      lon: "-3.2828476938395688"
    }
  },

  {
    name: "Amy",
    content: "Almond Milk, Potatos, Toilet Papper, Bacon",
    needDescription: "Lots of toilet papper",
    needStatus: false,
    category: "shopping",

    contactDetails: {
      contactNumber: "07778346565",
      email: "Amyaims@hotmail.com",
      address: "1 Grange Rd Edinburgh",
      postCode: "EH9 1UH",
      time: "06:00",
      date: "12/5/2020",
      lat: "55.9368168",
      lon: "-3.1806435"
    }
  },

  {
    name: "Rosie",
    content: "anti-inflammatory, Pain Killers, , Yogurt",
    needDescription: "NSAIDs",
    needStatus: true,
    category: "medicine",

    contactDetails: {
      contactNumber: "07711666577",
      email: "johnboy@hotmail.com",
      address: "10 Earl Grey Street Edinburgh",
      postCode: "EH3 9BN",
      time: "10:00",
      date: "27/5/2020",
      lat: "55.9439431",
      lon: "-3.2041938"
    }
  },
]);