<template>
    <div class="container">
        <button-list></button-list>
        <router-view></router-view>
    </div>
</template>
<script>
    import ButtonList from "./components/ButtonList";

    export default {
        data() {
            return {}
        },
        components: {
            ButtonList,
        },
    }
</script>

<style lang="scss">
    @import "vue-select/src/scss/vue-select.scss";

    @font-face {
        font-family: "MuseoSansCyrl-500";
        src: url("./assets/fonts/MuseoSansCyrl-500.ttf");
    }

    @font-face {
        font-family: "MuseoSansCyrl-900";
        src: url("./assets/fonts/MuseoSansCyrl-900.ttf");
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote {
        &:before, &:after {
            content: '';
            content: none;
        }
    }

    q {
        &:before, &:after {
            content: '';
            content: none;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        background-color: #f1f1f5;

    }

    .container {
        max-width: 856px;
        margin: 0 auto;
    }

</style>
