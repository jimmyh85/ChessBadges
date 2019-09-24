<template>
  <div>
    <div v-for="(player, index) in players" :key="player.pos">
      <div v-if="(index % 4) === 0">
        <section>---</section>
      </div>
      <playerbadge :player="player" :logo_url="logo_url"></playerbadge>
    </div>
  </div>
</template>

<script>
import playerbadge from '~/components/playerbadge.vue';


export default {
    components: {
        playerbadge
    },
    props: {
        players: {
            type: Array,
            default: () => []
        },
        logo_url: {
            type: String,
            default: ''
        }   
    }    
}
</script>
