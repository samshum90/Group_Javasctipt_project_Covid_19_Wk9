<template>
  <div class="list-container">
      <h2>All the Needs Info</h2>
      <ul>
          <need-item v-for="(need, index) in needs" :need="need" :key="index"></need-item>
      </ul>
  </div>
</template>

<script>
import NeedItem from './NeedItem.vue'

export default {
    name: "needs-list",
    props: ['needs'],
    components: {
      "need-item": NeedItem
    },
    mounted(){
        this.needs = [
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
          }
        ]
    }
}

</script>

<style lang="css" scoped>
.list-container{background-color: darkgray;
    border: darkslategrey;
    border-radius: 12px;
    padding: 2%;
    margin: 4%;
    width: 80%;
    position: relative;
    top: 20%;
}
</style>