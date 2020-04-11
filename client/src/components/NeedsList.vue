<template lang="html">
    <div class="list-container">
        <h2>All the Needs Info</h2>
        <need-item v-for="(need, index) in needs" :need="need" :key="index"></need-item>
    </div>
</template>

<script>
import { eventBus } from '@main.js';
import NeedItem from './NeedItem.vue';

export default {
    name: 'needs-list',
    props: ['needs'],
    data(){
        return {
            selectNeed: null
        }
    },
    components: {

    },
    methods:{

    },
    mounted(){
        
    }
}
</script>

<style lang="css" scoped>
.list-container{background-color: darkgray;
    border: darkslategrey;
    border-radius: 12px;
    padding: 2%;
    margin: 4%;
    width: 100%;
    position: relative;
    top: 20%;
}

</style>