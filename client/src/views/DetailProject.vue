<template>
  <div>
    <h3>{{ name }}</h3>
    <button>Chat</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import Talk from "talkjs";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters(["jobsById"]),
  },
  methods: {
    ...mapActions(["getProjectById"]),
  },
  props: ["id"],
  created() {
    //   console.log(this.id)
    this.getProjectById(this.id);
  },
  async mounted() {
    const API_URL = `http://localhost:3000/api/v1/project/`;
    const response = await axios.get(`${API_URL}/${this.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    if (response) {
      this.name = response.data.project.name;
    }

    const decodeToken = JSON.parse(
      atob(localStorage.getItem("token").split(".")[1])
    );
    console.log("decodeToken: ", decodeToken);

    let dataMe = { id: response.data.employee.id,
        name: response.data.employee.username,
        email: response.data.employee.email,};

    Talk.ready.then(async function () {
      var me = new Talk.User({
        ...dataMe,
        welcomeMessage: "Hey there! How are you? :-)",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tq8XUAZ7",
        me: me,
      });

      const conversation = session.getOrCreateConversation(`${response.data.employee.name}`);
      conversation.setParticipant(me);
    //   conversation.setParticipant(other);

      const popup = session.createPopup(conversation, {
        keepOpen: true,
      });
      await popup.mount({ show: true });
    });
  },
};
</script>