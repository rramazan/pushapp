<template>
    <div class="tabs">
        <div class="tabs__link">
            <li @click.prevent="currentButton = item" :class="{'active': item === currentButton}"
                v-for="(item , index) in buttonList" :key="index">
                <a href="#">{{item}}</a>
            </li>
        </div>
        <div class="tabs__body">
            <div class="filters">
                <div class="filters__filter filter">
                    <div class="filter__title">Фильтр</div>
                    <div class="filter__buttonGroup">
                        <div class="filter__button">
                            <button>all</button>
                        </div>
                        <div class="filter__button filter__button-middle">
                            <button>apple</button>
                        </div>
                        <div class="filter__button">
                            <button>android</button>
                        </div>
                    </div>
                </div>
                <div class="filters__rating rating">
                    <div class="rating__title">Рейтинг</div>
                    <div class="ranting__select">
                        <v-select :options="['Canada', 'United States']"></v-select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ControlPanel",
        data() {
            return {
                buttonList: ['game', 'tinkoff', 'ffff'],
                currentButton: ''
            }
        },
        created() {
            this.currentButton = this.buttonList[1];
        }
    }
</script>

<style scoped lang="scss">

    .tabs {
        &__link {
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

        &__body {
            width: 100%;
            padding: 8px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
            background-color: #fff;
        }
    }

    .filters {
        display: flex;
    }

    .filter, .rating {
        margin: 8px;
    }

    .filter {
        &__title {
            margin-bottom: 20px;
            text-transform: capitalize;
        }

        &__buttonGroup {
            display: flex;
            margin: 0 -10px;
        }

        &__button {
            padding: 0 10px;
            box-sizing: border-box;

            &-middle {
                position: relative;

                :before {
                    width: 1px;
                    height: 20px;
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    border-left: 1px solid #f1f1f5;
                    transform: translateY(-50%);
                }
                :after {
                    width: 1px;
                    height: 20px;
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    border-right: 1px solid #f1f1f5;
                }

            }

            button {
                padding: 10px 15px;
                border: none;
                border-radius: 10px;
                text-transform: capitalize;
            }
        }
    }

</style>