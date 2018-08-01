<template>
  <div id="notifications">
    <f7-card 
      v-for="n in 34"
      :key=n
      title="扣除积分通知"
      content="凡哥不和我们一起吃晚饭，扣除维也纳积分3分">

    </f7-card>
  </div>
  
</template>

<script>
export default {
}
</script>

