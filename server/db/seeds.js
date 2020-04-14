use covid_19
db.dropDatabase();

db.needs.insertMany([
  {
    name: "John",
    content: "Bread, Eggs, Milk, Yogurt",
    needDescription: "Gluten free yogurt",
    needStatus: true,
    category: "Shopping",
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
    category: "Shopping",
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
    category: "Medicine",
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
  {
    name: "Alex",
    content: "Please help me unblock the sewer",
    needDescription: "thank you",
    needStatus: true,
    category: "Others",
    contactDetails: {
      contactNumber: "07711666577",
      email: "Alex@hotmail.com",
      address: "24 Ross Gardens Edinburgh",
      postCode: "EH9 3BR",
      time: "10:00",
      date: "27/5/2020",
      lat: "55.9278609",
      lon: "-3.1773145"
    }
  },
  {
    name: "Jessie",
    content: "Aspirin",
    needDescription: "Please pickup my medicine from Boots Pharmacy",
    needStatus: true,
    category: "Medicine",
    contactDetails: {
      contactNumber: "07711666588",
      email: "Jessie@hotmail.com",
      address: "3 Craigour Ave Edinburgh",
      postCode: "EH17 7NL",
      time: "9:00",
      date: "12/4/2020",
      lat: "55.9139576",
      lon: "-3.1376433"
    }
  },
  {
    name: "jack",
    content: "GP consultant",
    needDescription: "I had a cough for 7 days, am I infected by coronavirus?",
    needStatus: true,
    category: "GPConsultation",
    contactDetails: {
      contactNumber: "07711666577",
      email: "johnboy@hotmail.com",
      address: "13 Comiston View Edinburgh",
      postCode: "EH10 6LP",
      time: "10:00",
      date: "27/5/2020",
      lat: "55.9091208",
      lon: "-3.2109225"
    }
  },
  {
    name: "Boris",
    content: "eggs, orange, milk, asparagus",
    needDescription: "please pickup from asda",
    needStatus: true,
    category: "Shopping",
    contactDetails: {
      contactNumber: "07711666577",
      email: "johnboy@hotmail.com",
      address: "2 Spylaw Ave Edinburgh",
      postCode: "EH13 0LR",
      time: "10:00",
      date: "27/5/2020",
      lat: "55.9087723",
      lon: "-3.2684554"
    }
  },
  {
    name: "May",
    content: "eggs, orange, milk, asparagus",
    needDescription: "please pickup from asda",
    needStatus: true,
    category: "Shopping",
    contactDetails: {
      contactNumber: "07711666578",
      email: "May@hotmail.com",
      address: "236 Leith Walk, Edinburgh",
      postCode: "EH6 5EL",
      time: "10:00",
      date: "27/5/2020",
      lat: "55.9666474",
      lon: "-3.175503"
    }
  },
]);