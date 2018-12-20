<template>
  <f7-page>
    <f7-navbar title="Messsages"></f7-navbar>

    <f7-messagebar ref="messagebar">
      <f7-link
        icon-ios="f7:arrow_up_fill"
        icon-md="material:send"
        slot="inner-end"
        @click="sendMessage"
      ></f7-link>
    </f7-messagebar>

    <f7-messages ref="messages">
      <f7-messages-title>
        <b>Sunday, Feb 9,</b> 12:58
      </f7-messages-title>
      <f7-message
        v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :name="message.name"
        :avatar="message.avatar"
        :first="isFirstMessage(message, index)"
        :last="isLastMessage(message, index)"
        :tail="isTailMessage(message, index)"
      >
        <span slot="text" v-if="message.text" v-html="message.text"></span>
      </f7-message>
    </f7-messages>
  </f7-page>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      messagesData: [
        {
          name: "Kate",
          type: "received",
          text: "Hi, I am good!",
          avatar: "http://lorempixel.com/100/100/people/9"
        }
      ],
      members: [],
      responseInProgress: false,
      session: {
        // member: null,
        message: null,
        wsconn: null
      }
    };
  },
  mounted() {
    const that = this;

    // get members
    axios.get("/static/db/members.json").then(function(response) {
      const resp = response.data;
      resp.groups.forEach(group => {
        if (group.members) {
          that.members.push(...group.members);
        }
      });
      // that.session.member = that.members[Math.floor(Math.random() * that.members.length)]
      const member = that.members[Math.floor(Math.random() * that.members.length)]
      that.session.message = {
        name: member.nickname,
        text: '',
        avatar: 'http://' + document.location.host + '/static/avatars/' + member.name + '.jpeg'
      }
    });
    
    this.$f7ready(() => {
      that.messagebar = that.$refs.messagebar.f7Messagebar;
      that.messages = that.$refs.messages.f7Messages;
    });
    
    // wsconn
    this.session.wsconn = new WebSocket("ws://" + document.location.host + "/ws");
    this.session.wsconn.onclose = function (evt) {
      console.log("connection closed")
    };
    this.session.wsconn.onmessage = function (evt) {
      console.log(evt)
      that.onMessageReceived(evt.data)
    };
  },
  methods: {
    isFirstMessage(message, index) {
      // const self = this;
      const previousMessage = this.messagesData[index - 1];
      if (message.isTitle) return false;
      if (
        !previousMessage ||
        previousMessage.type !== message.type ||
        previousMessage.name !== message.name
      )
        return true;
      return false;
    },
    isLastMessage(message, index) {
      // const self = this;
      const nextMessage = this.messagesData[index + 1];
      if (message.isTitle) return false;
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      )
        return true;
      return false;
    },
    isTailMessage(message, index) {
      // const self = this;
      const nextMessage = this.messagesData[index + 1];
      if (message.isTitle) return false;
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      )
        return true;
      return false;
    },
    onMessageReceived(data) {
      let message = JSON.parse(data)
      message.type = message.name === this.session.message.name ? 'sent' : 'received'
      this.messagesData.push(message)
    },
    sendMessage() {
      // const self = this;
      const text = this.messagebar.getValue()
      if (!text.trim().length) {
        return
      }
      this.messagebar.clear();
      // Focus area
      if (text.length) this.messagebar.focus();
      let message = this.session.message
      message.text = text
      const messageContent = JSON.stringify(message)
      this.session.wsconn.send(messageContent)
    }
  }
};
</script>