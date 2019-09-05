<template>
    <div>
        <control-panel></control-panel>
        <application-list></application-list>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from "vuex";
    import ControlPanel from "../components/ControlPanel";
    import ApplicationList from "../components/ApplicationList";

    export default {
        name: "Application",
        methods: {
            ...mapActions(['init', 'changeCurrentAppsList', 'changeCurrentFilter']),
            ...mapMutations(['changeFilterPlatform', 'changeFilterList']),
        },
        computed: {
            ...mapGetters(['getButtonList', 'getMapApps', 'getApplicationFilterList'])
        },
        created() {
            this.init();
            if(!!this.getMapApps[this.$route.params.id]) {
                this.changeCurrentAppsList(this.$route.params.id);
                this.changeCurrentFilter(this.getApplicationFilterList[this.getMapApps[this.$route.params.id]]);
            }
            this.$root.$on('changeAppFilter', (id) => {
                this.changeFilterPlatform({name: this.getMapApps[this.$route.params.id], platform: id})
            })
            this.$root.$on('changeAppRating', (id) => {
                this.changeFilterList({name: this.getMapApps[this.$route.params.id], rating: id})
            })
        },
        components: {
            ControlPanel,
            ApplicationList
        },
        watch: {
            $route (toR, fromR) {
                this.changeCurrentAppsList(toR.params.id);
                this.changeCurrentFilter(this.getApplicationFilterList[this.getMapApps[this.$route.params.id]]);
            }
        }
    }
</script>

<style scoped>

</style>