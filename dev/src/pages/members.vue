<template>
  <div id="members">
    <div v-for="group in groups" :key="group.label">
      <f7-block-title>{{group.label}}</f7-block-title>
      <f7-list>
        <f7-list-item
          link="#"
          after="查看详情" 
          :title="member.nickname"
          @click.prevent="memberDetail"
          v-for="member in group.members"
          :key="member.name">
          <img slot="media" :src="'/static/avatars/' + member.name + '.jpeg'" width="60" />
          <span :style="{color: member.pts > 0 ? 'green' : 'red'}" slot="footer">{{member.pts}} pts</span>
        </f7-list-item>
      </f7-list>
    </div>
    <!-- <f7-block-title>维也纳3群</f7-block-title>
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
    </f7-list> -->
  </div>
</template>


<script>

import axios from 'axios'

export default {
  mounted() {
    const that = this
    axios.get("/static/db/members.json")
      .then(function(response) {
        const resp = response.data
        that.groups = resp.groups
      })
  },
  methods: {
    memberDetail() {
      let notification = this.$f7.notification.create({
        title: 'Vienna4ever',
        text: '尚无更多信息',
        closeButton: true,
      });
      notification.open()
    }
  },
  data() {
    return {
      groups: []
    }
  }
}
</script>

