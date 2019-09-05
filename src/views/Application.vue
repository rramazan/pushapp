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
            ...mapMutations(['changeApplicationFilterList']),
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
                this.changeApplicationFilterList({name: this.getMapApps[this.$route.params.id], data: {platform: id, rating: null}})
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