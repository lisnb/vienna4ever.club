<template>
  <div id="notifications">
    <!-- <f7-card 
      v-for="n in 34"
      :key=n
      title="扣除积分通知"
      content="凡哥不和我们一起吃晚饭，扣除维也纳积分3分">

    </f7-card> -->
    <div v-for="event in events" :key="JSON.stringify(event)">
      <f7-card v-for="n in event.repeat" :key="n"
        :title="event.title"
        :content="event.content + ', ' + event.bonus.toString() + ' pts'"
        :footer="event.datetime">
      </f7-card>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      events: []
    }
  },
  mounted() {
    const that = this
    axios.get('/static/db/events.json')
      .then(function(response) {
        const resp = response.data
        that.events = resp.events
      })
  }
}
</script>

