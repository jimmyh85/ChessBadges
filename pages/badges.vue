<template>
    <div>
        <div class="controls">
            <input v-model="team_url"> 
            <input v-model="logo_url">
            <button @click="getPlayers">Create badges!</button>
            <div v-if="loading">Loading...</div>
        </div>
        <playerbadges :players="players" :logo_url="logo_url"></playerbadges>
    </div>
</template>

<script>
import playerbadges from '~/components/playerbadges.vue';

export default {
    components: {
        playerbadges
    },
    methods: {
        getPlayers() {
            this.loading = true;
            this.$axios.post(`api/get-players`,{ team_url: this.team_url }).then(res => {
                this.loading = false;
                this.players = res.data
            })
        }
    },
    data() {
        return {
            players: [],
            loading: false,
            team_url: 'https://www.schachbund.de/SchachBL/bedm.php?liga=olob&nummer=6',
            logo_url: 'http://www.schachfreunde-neuberg.de/SFR-Logo.png'
        }
    }
        
}
</script>
<style>
@media print {
    section { 
        page-break-before:always; 
    }

    .controls {
        display: none;
    }
} 
</style>