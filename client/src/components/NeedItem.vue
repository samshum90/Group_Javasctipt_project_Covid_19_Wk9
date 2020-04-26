<template>
  <div v-on:click="selectANeed" class="needitem">
    <h3>{{ $t('message.needItem.title',{name: need.name}) }}</h3>
    <p>{{ $t('message.needItem.content') }}: {{ need.content }}</p>
    <p>{{ $t('message.needItem.category') }}: {{ need.category }}</p>
    <p>{{ $t('message.needItem.postCode') }}: {{ need.contactDetails.postCode }}</p>
    <p>{{ $t('message.needItem.requestDate') }}: {{ need.contactDetails.date}}</p>
    <p v-if="need.needStatus" class="help">{{ $t('message.needItem.statusOpen') }}</p>
    <p v-if="!need.needStatus" class="helped">{{ $t('message.needItem.statusFinished') }}</p>
    <P>{{ $t('message.needItem.detail') }}</P>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
    name: "need-item",
    props: ['need'],
    methods: {
        selectANeed() {
            eventBus.$emit('select-a-need',this.need);    
        }
    }
}
</script>

<style>
.needitem p{
    margin: 7px 0px;
    } 
.needitem{
    border: 1px solid;
    border-radius: 5px;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    box-shadow: 2.5px 5px 10px #888888;
} 
.help{
    padding: 10px;
    background-color: #FFEB3B;
    border-radius: 5px;
}
.helped{
    padding: 10px;
    background-color: #4CAF50;
    border-radius: 5px;
}
.needitem h3{
    background-color:#b3daff;
    padding: 2%;
    text-align: center; 
}

</style>