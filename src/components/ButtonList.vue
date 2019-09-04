<template>
    <div class="buttonList">
        <router-link
                :to="'/'+item"
                tag="li"
                v-for="(item , index) in getButtonList" :key="index"
                active-class="active"
        >
            <a href="#">{{item}}</a>
        </router-link>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ButtonList",
        computed: {
            ...mapGetters(['getButtonList', 'getCurrentButton']),
        },
    }
</script>

<style scoped lang="scss">
    .buttonList {
        font-family: MuseoSansCyrl-500, sans-serif;
        display: flex;
        list-style: none;
        width: 660px;

        & li {
            display: flex;
            position: relative;
            text-transform: capitalize;
        }

        & a {
            padding: 10px 25px;
            text-decoration: none;
            color: #979898;
            background: #E8E8E8;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }

        & .active {
            z-index: 3;
        }

        & .active a {
            background: #fff;
            color: #1D353D;
        }

        & li:before, & li:after,
        & li a:before, & li a:after {
            position: absolute;
            bottom: 0;
        }

        & li:last-child:after, & li:last-child a:after,
        & li:first-child:before, & li:first-child a:before,
        & .active:after, & .active:before,
        & .active a:after, & .active a:before {
            content: "";
        }

        & .active:before, & .active:after {
            background: #fff;
            color: #1D353D;
            z-index: 1;
        }

        & li:before, & li:after {
            background: #E8E8E8;
            width: 10px;
            height: 10px;
        }

        & li:before {
            left: -10px;
        }

        & li:after {
            right: -10px;
        }

        & li a:after, & li a:before {
            width: 20px;
            height: 20px;
            border-radius: 10px;
            background: #f1f1f5;
            z-index: 2;
        }

        & .active a:after, & .active a:before {
            background: #E8E8E8;
        }

        & li:first-child.active a:before,
        & li:last-child.active a:after {
            background: #f1f1f5;
        }

        & li a:before {
            left: -20px;
        }

        & li a:after {
            right: -20px;
        }

        & li:first-child:before {
            width: 0;
            height: 0;
        }
    }
</style>