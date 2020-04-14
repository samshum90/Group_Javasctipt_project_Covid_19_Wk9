<template>

<div class="info-container"><br>
  <h1 class="h1">Information</h1><br><br>
    <div class="column">
     <h2>GOV.UK</h2>
      <p>gov.uk is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.Stay at homeOnly go outside for food, health reasons or work (but only if you cannot work from home)If you go out, stay 2 metres (6ft) away from other people at all times Wash your hands as soon as you get home
      Do not meet others, even friends or family. You can spread the virus even if you don’t have symptoms.</p>
      <a href="https://www.gov.uk/coronavirus">www.gov.uk</a>
   </div>
  
  <div class="column">
    <h2>NHS</h2>
    <p>The NHS was set up in 1948 to provide everyone in the UK with healthcare based on their needs, and not on their ability to pay. The NHS is respected throughout the world for the standard of care it gives to patients. Although most people think about the NHS as being their local hospital, when you visit your dentist, your GP or even your local pharmacist you could be speaking to someone employed by the NHS.</p>
    <a href="https://www.nhs.uk">www.nhs.uk/news/</a>
  </div>

  <div class="column">
    <h2>World Health Organization</h2>
    <p>The world is facing an unprecedented challenge with communities and economies everywhere affected by the growing COVID-19 pandemic. The world is coming together to combat the COVID-19 pandemic bringing governments, organizations from across industries and sectors and individuals together to help respond to 
       this global outbreak. The outpouring of global solidarity and support sparked
        by this shared challenge has been phenomenal.</p>
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">coronavirus-2019/donate</a><br><br><br><br><br>
  </div>

  <div class="column">
    <h2>Victims of Domestic Abuse</h2>
    <p>For anyone who feels they are at risk of abuse, it is important to remember 
      that there is help and support available to you, including police response, 
      online support, helplines, refuges and other services. You are not alone.
      The household isolation instruction as a result of COVID-19 does not apply if you 
      need to leave your home to escape domestic abuse.</p>
    <a href="https://www.gov.uk/government/publications/coronavirus-covid-19-and-domestic-abuse/coronavirus-covid-19-support-for-victims-of-domestic-abuse">www.gov.uk/domestic-abuse</a>
  </div>

  <div class="column">
    <h2>Ready Scotland</h2>
    <p>Whether it's practical or emotional support, there are lots of ways you 
      can volunteer to help.
      For some that may be right now in helping to manage the crisis, for others there 
      will be roles in the weeks and months to come.
      But for many of us, the most helpful thing we can do to support our NHS and our 
      communities is to stay at home to save lives. 
      You can only volunteer to carry out tasks which involve leaving your home, if 
      you are not required to be isolating and are not in any risk categories.</p>
    <a href=https://www.readyscotland.org/coronavirus/volunteering/>www.readyscotland.org</a>
  </div>

  <div class="column">
    <h2>Rethink Mental Illness</h2>
    <p>Covid-19, also known as coronavirus or CV19, is a new illness that can affect your lungs and airways. On March 11 2020, the World Health Organisation declared the new virus a pandemic. In order to assist our supporters and staff, we have set up this online hub to provide practical support and information that is useful for people living with, or supporting people with mental illness. We will update this page as more information becomes available.</p>
    <a href=https://www.rethink.org/advice-and-information/covid-19-support//>www.rethink.org</a>
  </div>
</div>

</template>

<script>
export default {
    name:"info"
}
</script>

<style>

.info-container{
  padding: 20px;
  text-align: center;
}
  
.column {
  float: left;
  width: 33.33%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.form-container{
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  justify-content: center;
}

.column {
    width: 620px;
    display: inline-table;
   
}


</style>
