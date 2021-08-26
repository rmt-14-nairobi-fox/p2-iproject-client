<template>
  <div class="container discuse">
    <div class="header">
      <h1>Forum DISCUS</h1>
    </div>
    <div class="row mt-5 blok-chat">
      <div class="body col-md-10">
        <div class="" v-for="(msg, i) in messages" :key="i + 'msg'">
          <div class="message text-start">
            <p>{{ msg.message }}</p>
            <small class="form-text" style="color: #313131">by : {{ msg.email }}</small>
          </div>
        </div>
      </div>
    </div>
    <!-- misahin -->
    <div class="footer container mt-3">
      <form @submit.prevent="sendMessage">
        <input type="text" name="" v-model="inputMessage" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "discuse",

  data() {
    return {
      inputMessage: "",
    };
  },
  sockets: {
    broadcastMessage(data) {
      this.$store.commit("PUSH_MASSAGE", data);
    },
  },
  methods: {
    sendMessage() {
      const data = {
        email: localStorage.getItem("email"),
        message: this.inputMessage,
      };

      this.$store.commit("PUSH_MASSAGE", data);
      this.$socket.emit("sendMessage", data);
      this.inputMessage = "";
    },
  },
  computed: {
    listofUser() {
      return this.$store.state.listUser;
    },
    messages() {
      return this.$store.state.messages;
    },
  },
};
</script>

<style>
.blok-chat {
  overflow-y: auto;
  height: 600px;
}
.footer {
  bottom: 0;
}
.contact {
  flex-direction: column;
  background: #464646;
}
.contact .user {
  color: azure;
  margin-left: 0px !important;
  background-color: #313131;
}
.discuse {
  min-height: 500px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
.discuse h1 {
  color: white;
}
.body {
  color: white;
}

.message {
  margin-bottom: 15px;
  background-color: #8a8a8a;
  padding: 10px 20px 10px 20px;
  width: fit-content;
}
.user_message {
  margin-bottom: 15px;
  margin-left: auto;
  background-color: white;
  color: #313131;
}
.footer form {
  display: flex;
}
form input {
  flex: 1;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 5px;
  font-size: 16px;
}
form button {
  width: 100px;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: tomato;
  color: white;
}
</style>
