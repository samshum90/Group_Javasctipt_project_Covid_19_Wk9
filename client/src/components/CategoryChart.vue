<template>
    <div>
        <h1 class="h1">Chart</h1>
        <GChart
            v-if="chartData"
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
    name: "category-chart",
    props: ['needs'],
    data(){
        return {
            chartOptions: {
                width: 800,
                height: 240,
                title: 'Require by category',
                colors: ['#084887', '#f58a07', '#f9ab55', '#f7f5fb', '#909cc2', '#C1BB8F', '#A176BC']
            }
        }
    },
    components : {
        GChart
    },
    computed:{
        getCate(){
        
// Shopping","Medicine","Posting","Call","Supplies","GPConsultation","Others"

            let shoppingCount = 0;
            let medicineCount = 0;
            let postingCount = 0;
            let callCount = 0;
            let suppliesCount = 0;
            let gpCount = 0;
            let othersCount = 0;
            for(const need of this.needs){
                if("Shopping" === need.category){
                    shoppingCount ++;
                }else if("Medicine" === need.category){
                    medicineCount ++;
                }else if("Posting" === need.category){
                    postingCount ++;
                }else if("Call" === need.category){
                    callCount ++;
                }else if("Supplies" === need.category){
                    suppliesCount ++;
                }else if("GPConsultation" === need.category){
                    gpCount ++;
                }else if("Others" === need.category){
                    othersCount ++;
                }
            }
            const jsonStr = [
                {
                    "cate": "total",
                    "count": "0"
                },
                {
                    "cate": "Supplies",
                    "count": suppliesCount
                },
                {
                    "cate": "Shopping",
                    "count": shoppingCount
                },
                {
                    "cate": "Medicine",
                    "count": medicineCount
                },
                {
                    "cate": "Posting",
                    "count": postingCount
                },
                {
                    "cate": "Call",
                    "count": callCount
                },
                {
                    "cate": "GPConsultation",
                    "count": gpCount
                },
                {
                    "cate": "Others",
                    "count": othersCount
                }
            ]
            return jsonStr;
        },
        chartData: function(){
            console.log(this.getCate);
            if(this.getCate){
                const chartData = this.getCate.map(mix => Object.values(mix))
                chartData[0] = Object.keys(this.getCate[0])
                return chartData
            }
        }

    }
}
</script>

<style scoped>

</style>