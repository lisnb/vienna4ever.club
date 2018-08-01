<template>
  <div id="members">
    <f7-block-title>维也纳3群</f7-block-title>
    <f7-list>
      <f7-list-item link="#" title="院长" footer="100pts" after="查看详情" @click.prevent="memberDetail">
        <img slot="media" src="/static/avatars/yuanzhang.jpeg" width="60" />
      </f7-list-item>
      <f7-list-item link="#" title="希希" footer="100pts" after="查看详情"  @click.prevent="memberDetail">
        <img slot="media" src="/static/avatars/xixi.jpeg" width="60" />
      </f7-list-item>
      <f7-list-item link="#" title="小欧" footer="100pts" after="查看详情"  @click.prevent="memberDetail">
        <img slot="media" src="/static/avatars/xiaoou.jpeg" width="60" />
      </f7-list-item>
    </f7-list>
    <f7-block-title>待清退</f7-block-title>
    <f7-list>
      <f7-list-item link="#" title="凡哥" after="查看详情"  @click.prevent="memberDetail">
        <img slot="media" src="/static/avatars/wufan.jpeg" width="60" />
        <span style="color:red;" slot="footer">-1pts</span>
      </f7-list-item>
    </f7-list>
  </div>
</template>


<script>
export default {
  methods: {
    memberDetail() {
      // console.log('dasf')
      // console.log(this)
      let notification = this.$f7.notification.create({
        // icon: '<i class="icon icon-heart" style="color:red;"></i>',
        title: 'Vienna4ever',
        text: '尚无更多信息',
        closeButton: true,
      });
      notification.open()
    }
  }
}
</script>

