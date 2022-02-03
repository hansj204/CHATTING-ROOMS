<template>
  <div style="flex: 1">
    <ul style="list-style: none; height: calc(100% - 94px)">
      <li v-for="talk in talkList" :key="talk.id">
        <span v-if="!talk.time">{{ talk.message }}</span>
        <div v-else>
          <div
            class="header"
            style="width: 400px; height: 30px; margin-top: 15px"
          >
            <v-icon>mdi-account</v-icon>
            <strong class="primary-font">
              {{ talk.userId }}
            </strong>
          </div>
          <div class="body">
            <v-row no-gutters>
              <v-col
                cols="8"
                style="
                  border-radius: 3px;
                  background: #ebedfa;
                  padding: 10px;
                  vertical-align: middle;
                "
              >
                {{ talk.message }}
              </v-col>
              <v-col cols="4" align-self="end">
                <small class="text-muted">
                  <span
                    class="glyphicon glyphicon-time"
                    style="padding-left: 5px"
                    >{{ talk.time.hour }} : {{ talk.time.minute }}</span
                  >
                </small>
              </v-col>
            </v-row>
          </div>
        </div>
      </li>
    </ul>
    <v-footer color="white lighten-1">
      <v-col cols="11">
        <v-textarea
          class="mx-2"
          rows="1"
          v-model="message"
          prepend-icon="mdi-comment"
        ></v-textarea>
      </v-col>
      <v-col cols="1" align-self="center">
        <v-btn icon @click="sendMessage">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Chat",
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    //sessionStorage.setItem("userId", this.getUUID());

    this.$socket.on("chat", (data) => {
      this.talkList.push({
        userId: data.userId,
        id: this.getUUID(),
        message: data.message,
        time: data.time,
      });
    });

    this.$socket.on("notice", (data) => {
      this.talkList.push({
        id: this.getUUID(),
        message: data,
      });
    });
  },
  data() {
    return {
      userId: null,
      noticeList: [],
      talkList: [],
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (0 === this.message.trim().length) return;

      const info = {
        userId: sessionStorage.getItem("userName"),
        message: `${this.message}\n`,
        time: { hour: new Date().getHours(), minute: new Date().getMinutes() },
      };

      //this.talkList.push({ ...{id : this.getUUID()}, ...info});
      this.$socket.emit("chat", info);

      this.message = "";
    },
    getUUID() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
  },
};
</script>

<style>
.md-app {
  height: 800px;
  border: 1px solid rgba(#000, 0.12);
}

.md-textarea {
  height: 300px;
}
</style>