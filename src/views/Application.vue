<template>
    <div>
        <control-panel></control-panel>
        <application-list></application-list>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import ControlPanel from "../components/ControlPanel";
    import ApplicationList from "../components/ApplicationList";

    export default {
        name: "Application",
        methods: {
            ...mapActions(['init', 'changeCurrentAppsList'])
        },
        computed: {
            ...mapGetters(['getButtonList', 'getMapApps'])
        },
        created() {
            this.init();
            if(!!this.getMapApps[this.$route.params.id]) {
                this.changeCurrentAppsList(this.$route.params.id);
            }

        },
        components: {
            ControlPanel,
            ApplicationList
        },
        watch: {
            $route (toR, fromR) {
                this.changeCurrentAppsList(toR.params.id)
            }
        }
    }
</script>

<style scoped>

</style>