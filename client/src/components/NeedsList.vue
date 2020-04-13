<template>
  <div class="list-container">
      <h2>All the Needs Info</h2>
      <ul>
          <need-item v-for="(need, index) in needs" :need="need" :key="index"></need-item>
      </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import NeedItem from './NeedItem.vue';
import NeedService from '@/services/NeedService.js';

export default {
    name: "needs-list",
    props: ['needs'],
    components: {
      "need-item": NeedItem
    },
    mounted(){
      eventBus.$on('delete-a-need', (id) => {
        let index = this.needs.findIndex(need => need._id === id);
        this.needs.splice(index,1);
      })
      eventBus.$on('update-a-need', needToUpdate => {
        const updateNeed = {...needToUpdate};
        NeedService.updateNeed(updateNeed);
        const index = this.needs.findIndex(need => need._id === needToUpdate._id);
        this.needs.splice(index, 1, updateNeed);
      })
    eventBus.$on('submit-need', (need) => {
      NeedService.addNeed(need)
      .then(needWithId => this.need(needWithId))
    })
    }
}

</script>

@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

:root {
	/* Base font size */
	font-size: 10px;

	/* Heading height variable*/
	--heading-height: 30em;
}

body {
	font-family: "Roboto", Arial, sans-serif;
	min-height: 100vh;
	background-color: #101010;
}

header {
	position: fixed;
	width: 100%;
	height: var(--heading-height);
}

/* Create angled background with 'before' pseudo-element */
header::before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	bottom: 6em;
	width: 100%;
	height: calc(var(--heading-height) + 10em);
	z-index: -1;
	transform: skewY(-3.5deg);
	background: 
		linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)),
		url(https://images.unsplash.com/photo-1495464101292-552d0b52fe41?auto=format&fit=crop&w=1350&q=80) no-repeat center,
		linear-gradient(#4e4376, #2b5876);
	background-size: cover;
	border-bottom: .2em solid #fff;
}

h1 {
	font-size: calc(2.8em + 2.6vw);
	font-weight: 700;
	letter-spacing: .01em;
	padding: 10rem 0 0 4.5rem;
	text-shadow: .022em .022em .022em #111;
	color: #fff;
}

main {
	padding: calc(var(--heading-height) + 1.5vw) 4em 0;
}

p {
	font-size: calc(2em + .25vw);
	font-weight: 400;
	line-height: 2;
	margin-bottom: 1.5em;
	color: #fcfcfc;
}

</style>

