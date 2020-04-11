use covid_19
db.dropDatabase();

db.needs.insertMany([
  {
    name: "John",
    
    content: "Bread, Eggs, Milk, Yogurt",
    needDescription: "Gluten free yogurt",
    needStatus: true,
    category: "Groceries",

    contactDetails: {
      contactNumber: "07711666577",
      email: "johnboy@hotmail.com",
      address: "4/7 Corstorphine High Street",
      postCode: "E12 7TQ",
      time: "17:00",
      date: "06/6/2020"
    }
  },

  {
    name: "Amy",
    content: "Almond Milk, Potatos, Toilet Papper, Bacon",
    needDescription: "Lots of toilet papper",
    needStatus: false,
    category: "Groceries",

    contactDetails: {
      contactNumber: "07778346565",
      email: "Amyaims@hotmail.com",
      address: "1 Union Street",
      postCode: "E12 3HU",
      time: "06:00",
      date: "12/5/2020"
    }
  },

  {
    name: "Rosie",
    content: "anti-inflammatory, Pain Killers, , Yogurt",
    needDescription: "NSAIDs",
    needStatus: true,
    category: "Medical",

    contactDetails: {
      contactNumber: "07711666577",
      email: "johnboy@hotmail.com",
      address: "6 - 10 Earl Grey Street",
      postCode: "EH3 9BN",
      time: "10:00",
      date: "27/5/2020"
    }
  },
]);