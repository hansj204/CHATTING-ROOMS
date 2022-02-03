<template>
  <div style="width: 300px; border-right: 1.6px solid rgb(176, 190, 197)">
    <v-system-bar></v-system-bar>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src=""></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">{{ userId }}</v-list-item-title>
          <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list dense nav style="margin-right: 1px">
      <v-subheader>CHATTING</v-subheader>
      <v-list-item-group v-model="selectedRoom" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {},
  data: () => ({
    userId: null,
    email: null,
    selectedRoom: 1,
    items: [
      {
        icon: "mdi-account",
        title: "test_room",
        subtitle: `test room`,
      },
    ],
  }),
  created() {
    if (sessionStorage.getItem("selectedRoom")) {
      this.selectedRoom = parseInt(sessionStorage.getItem("selectedRoom"));
    }
    this.userId = sessionStorage.getItem("userName");
    this.email = sessionStorage.getItem("email");

    this.$socket.on("chat", (data) => {
      this.items[this.selectedRoom].subtitle = data.message;
    });
  },
  destroyed() {
    // sessionStorage.removeItem("userName");
    // sessionStorage.removeItem("email");
    // sessionStorage.removeItem("selectedRoom");
  },
  watch: {
    selectedRoom() {
      this.$socket.emit("joinRoom", this.items[this.selectedRoom].title);
      this.$socket.emit("notice");
      sessionStorage.setItem("selectedRoom", this.selectedRoom);
    },
  },
};
</script>

<style>
</style>