<template>
  <section>
    <h1>LeadHit</h1>
    <form class="md-layout" @submit.prevent="sendData">
      <md-field :class="messageClass">
        <label>ID сайта</label>
        <md-input type="text" size="30" v-model="leadhitSiteId" />
        <span class="md-error">{{ textError }}</span>
      </md-field>
      <md-card-actions>
        <md-button type="submit" class="md-primary md-raised">Войти</md-button>
      </md-card-actions>
    </form>
  </section>
</template>

<script>
import axios from "axios";

const ServerData = {
  URL: "https://track-api.leadhit.io/client/test_auth",
  API_KEY: "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
  CORRECT_ID_LENGHT: 24,
  CORRECT_SERVER_RESPONSE: { message: "ok" },
};

export default {
  data() {
    return {
      leadhitSiteId: "",
      textError: "",
    };
  },
  methods: {
    sendData: function () {
      console.log(1);
      this.textError = "";
      if (this.leadhitSiteId.length !== ServerData.CORRECT_ID_LENGHT) {
        this.textError = "Ошибка: id сайта должен содержать 24 символа";
        return;
      }

      axios
        .get(ServerData.URL, {
          headers: {
            "Api-Key": ServerData.API_KEY,
            "Leadhit-Site-Id": this.leadhitSiteId,
          },
        })
        .then((response) => {
          if (
            JSON.stringify(response.data) ===
            JSON.stringify(ServerData.CORRECT_SERVER_RESPONSE)
          ) {
            localStorage.setItem("leadhit-site-id", this.leadhitSiteId);
            this.$router.push("Analitycs");
          }
        })
        .catch((error) => (this.textError = `Ошибка: ${error}`));
    },
  },
  computed: {
    messageClass() {
      return {
        "md-invalid": this.textError,
      };
    },
  },
};
</script>

