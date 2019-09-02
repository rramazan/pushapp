<template>
    <div class="hello">
        <v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body {
        font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        text-rendering: optimizelegibility;
        -moz-osx-font-smoothing: grayscale;
        -moz-text-size-adjust: none;
    }

    h1,.muted {
        color: #2c3e5099;
    }

    h1 {
        font-size: 26px;
        font-weight: 600;
    }

    #app {
        max-width: 30em;
        margin: 1em auto;
    }
</style>
