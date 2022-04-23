<template>
  <v-app>
    <v-form ref="form" v-model="valid" class="controls">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="team_url"
              :rules="[v => !!v || 'URL is required']"
              label="URL to chess team on https://schachbund.de"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="logo_url"
              :rules="[v => !!v || 'URL is required']"
              label="URL to logo of the choosen chess team"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="getPlayers">Create badges!</v-btn>
      </v-container>
    </v-form>

    <div v-if="loading">Loading...</div>
    <playerbadges :players="players" :logo_url="logo_url"></playerbadges>
  </v-app>
</template>

<script>
import playerbadges from "~/components/playerbadges.vue";

export default {
  components: {
    playerbadges
  },
  methods: {
    getPlayers() {
      this.loading = false;
      this.$axios
        .post(`api/get-players`, { team_url: this.team_url })
        .then(res => {
          this.loading = false;
          this.players = res.data;
        });
    },
    reset() {
      this.$refs.form.reset();
      this.players = [];
    }
  },
  data() {
    return {
      valid: true,
      players: [],
      loading: false,
      team_url:
        "https://ergebnisdienst.schachbund.de/bedm.php?liga=2blw&nummer=8",
      logo_url: "http://www.schachfreunde-neuberg.de/SFR-Logo.png"
    };
  }
};
</script>
<style>
@media print {
  section {
    page-break-before: always;
  }

  .controls {
    display: none;
  }
}
</style>
