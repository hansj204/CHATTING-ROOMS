<template>
  <div style="width: 100%; height: 100%; display: flex">
    <SideBar @joinRoom="joinRoom" />
    <Chat ref="chat" />
  </div>
</template>

<script>
import SideBar from "@/views/SideBar";
import Chat from "@/views/Chat";

export default {
  name: "Layout",
  components: {
    SideBar,
    Chat,
  },
  methods: {
    joinRoom() {
      this.$refs.chat.noticeList.push("입장하였습니다.");
    },
  },
};
</script>

<style>
</style>