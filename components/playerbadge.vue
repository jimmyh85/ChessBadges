<template>
  <div class="badge">
    <div class="top">
      <div class="nat">
        <img :src="natImage" />
        <span>{{player.nationality}}</span>
      </div>
      <div class="logo">
        <img :src="logo_url" />
      </div>
    </div>
    <div class="main">
      <div class="name">{{player.title}} {{player.name}}</div>
      <div class="rating">
        <span class="elo">ELO {{player.elo}}</span>
        <span class="dwz">DWZ {{player.dwz}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      default: null
    },
    logo_url: {
      type: String,
      default: ""
    }
  },
  computed: {
    natImage() {
      if (!this.player.nationality) {
        return;
      }

      const fileName = this.player.nationality.toUpperCase();

      return require(`../assets/flags/${fileName}.svg`);
    }
  }
};
</script>

<style scoped>
.badge {
  font-family: "Calibri", "Trebuchet MS", sans-serif;
  width: 600px;
  height: 230px;
  background-color: white;
  border: 1px solid lightgray;
}
.top {
  height: 40%;
  padding: 10px;
}
.nat {
  float: left;
  height: 100%;
}
.nat > span {
  font-weight: bold;
  margin-left: 5px;
  font-size: 28px;
}
.logo {
  float: right;
  margin-right: 2%;
  height: 100%;
}
img {
  height: 100%;
}
.main {
  height: 60%;
  padding: 10px;
}
.name {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 5px;
}
.rating {
  font-size: 36px;
}
.elo {
  float: left;
}
.dwz {
  float: right;
  margin-right: 2%;
}
</style>
