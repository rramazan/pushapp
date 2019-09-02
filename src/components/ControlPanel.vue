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
                        <div :class="['filter__button', {'filter__button-active': filterButtonActive === 0}]">
                            <button @click="filterButtonActive = 0">Все</button>
                        </div>
                        <div :class="['filter__button', {'filter__button-active': filterButtonActive === 1}]">
                            <button @click="filterButtonActive = 1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#979898" width="15.891" height="19.445"
                                     viewBox="0 0 15.891 19.445">
                                    <g id="apple">
                                        <path id="XMLID_229_"
                                              d="M28.7 74.857c-1.644 2.853-.6 7.182 1.219 9.807.907 1.312 1.826 2.49 3.084 2.49h.072a3.809 3.809 0 0 0 1.431-.382 3.92 3.92 0 0 1 1.7-.4 3.686 3.686 0 0 1 1.614.389 3.42 3.42 0 0 0 1.546.371c1.417-.026 2.288-1.3 3.055-2.419a10.721 10.721 0 0 0 1.339-2.742l.005-.017a.159.159 0 0 0-.085-.2h-.012A4.063 4.063 0 0 1 41.2 78.03a4.182 4.182 0 0 1 1.976-3.5l.016-.01a.159.159 0 0 0 .045-.224 4.6 4.6 0 0 0-3.617-1.964c-.1-.01-.209-.015-.316-.015a6.306 6.306 0 0 0-2.27.567 3.65 3.65 0 0 1-1.088.325 3.558 3.558 0 0 1-1.125-.329 5.451 5.451 0 0 0-1.983-.5h-.05a4.862 4.862 0 0 0-4.088 2.477z"
                                              class="cls-1" transform="translate(-27.875 -67.709)"/>
                                        <path id="XMLID_230_"
                                              d="M153.22 0a4.44 4.44 0 0 0-2.931 1.5 4.16 4.16 0 0 0-1.053 3.084.159.159 0 0 0 .146.138c.068.005.137.008.206.008a3.755 3.755 0 0 0 2.767-1.419 4.385 4.385 0 0 0 1.029-3.169.16.16 0 0 0-.164-.142z"
                                              class="cls-1" transform="translate(-141.475)"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div :class="['filter__button', {'filter__button-active': filterButtonActive === -1}]">
                            <button @click="filterButtonActive = -1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#979898" width="17.861" height="21.108"
                                     viewBox="0 0 17.861 21.108">
                                    <g id="android">
                                        <g id="Group_34" data-name="Group 34">
                                            <path id="Path_50"
                                                  d="M37.846 153.884a1.26 1.26 0 0 0-.926.381 1.246 1.246 0 0 0-.38.913v5.455a1.3 1.3 0 0 0 1.306 1.306 1.239 1.239 0 0 0 .92-.38 1.271 1.271 0 0 0 .374-.926v-5.455a1.3 1.3 0 0 0-1.294-1.294z"
                                                  class="cls-1" data-name="Path 50"
                                                  transform="translate(-36.539 -147.047)"/>
                                            <path id="Path_51"
                                                  d="M106.494 167.756a1.386 1.386 0 0 0 1.4 1.4h.939l.013 2.879a1.261 1.261 0 0 0 .381.926 1.245 1.245 0 0 0 .913.381 1.3 1.3 0 0 0 1.307-1.307v-2.879h1.75v2.879a1.306 1.306 0 1 0 2.613 0v-2.879h.952a1.331 1.331 0 0 0 .977-.406 1.347 1.347 0 0 0 .406-.989v-8.448h-11.651z"
                                                  class="cls-1" data-name="Path 51"
                                                  transform="translate(-103.386 -152.23)"/>
                                            <path id="Path_52"
                                                  d="M114.1 1.94l.9-1.662a.167.167 0 0 0-.063-.254.176.176 0 0 0-.254.076l-.913 1.674a6.367 6.367 0 0 0-5.1 0L107.757.1a.176.176 0 0 0-.257-.075.167.167 0 0 0-.063.254l.9 1.662a5.556 5.556 0 0 0-2.182 1.947 4.918 4.918 0 0 0-.812 2.734h11.734a4.917 4.917 0 0 0-.812-2.734A5.578 5.578 0 0 0 114.1 1.94zm-5.207 2.416a.475.475 0 0 1-.349.146.455.455 0 0 1-.343-.146.506.506 0 0 1 0-.7.455.455 0 0 1 .343-.146.493.493 0 0 1 .349.844zm5.347 0a.456.456 0 0 1-.343.146.495.495 0 0 1 0-.989.456.456 0 0 1 .343.146.506.506 0 0 1 0 .7z"
                                                  class="cls-1" data-name="Path 52"
                                                  transform="translate(-102.29 .001)"/>
                                            <path id="Path_53"
                                                  d="M382.224 154.258a1.271 1.271 0 0 0-.926-.374 1.256 1.256 0 0 0-.913.374 1.24 1.24 0 0 0-.381.92v5.455a1.26 1.26 0 0 0 .381.926 1.245 1.245 0 0 0 .913.38 1.3 1.3 0 0 0 1.307-1.306v-5.455a1.239 1.239 0 0 0-.381-.92z"
                                                  class="cls-1" data-name="Path 53"
                                                  transform="translate(-364.744 -147.047)"/>
                                        </g>
                                    </g>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                <div class="filters__rating rating">
                    <div class="rating__title">Рейтинг</div>
                    <v-select
                            :searchable="false"
                            class="style-chooser"
                            placeholder="Выбрать"
                            :options="['от 4,0', 'от 3,0', 'от 2,0']"
                    >
                        <template slot="option" slot-scope="option">
                            <span style="margin-right: 10px">{{option.label}}</span>
                            <img width="15px" height="16" src="../assets/svg/star.svg" alt="apple">
                        </template>
                    </v-select>
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
                buttonList: ['игры', 'тинькофф'],
                currentButton: '',
                filterButtonActive: 0,
                selected: ''
            }
        },
        created() {
            this.currentButton = this.buttonList[1];
        }
    }
</script>

<style lang="scss">

    .tabs {
        font-family: MuseoSansCyrl-500, sans-serif;
        margin-bottom: 15px;

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
            box-sizing: border-box;
        }
    }

    .filters {
        display: flex;
    }

    .filter, .rating {
        margin: 8px;
        font-family: MuseoSansCyrl-500, sans-serif;

        &__title {
            margin-bottom: 20px;
            text-transform: capitalize;
        }
    }

    .filter {

        &__buttonGroup {
            display: flex;
            margin: 0 -10px;

            button {
                font-size: 15px;
                background-color: #f1f1f5;
                color: #979898;
                font-family: MuseoSansCyrl-500, sans-serif;
            }
        }

        &__button {
            padding: 0 10px;
            box-sizing: border-box;

            &-active {
                button {
                    background-color: #3469F2;
                    color: #ffffff;
                    svg {
                        fill: #ffffff;
                    }
                }
            }

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
                padding: 0 20px;
                border: none;
                border-radius: 10px;
                text-transform: capitalize;
                box-sizing: border-box;
                height: 34px;
                cursor: pointer;

                &:focus {
                    outline: 0;
                }
            }
        }
    }

    .rating {
        width: 200px;

        .vs__search::placeholder,
        .vs__dropdown-toggle,
        .vs__dropdown-menu {
            background: #f1f1f5;
            border: none;
            color: #979898;
            font-family: MuseoSansCyrl-500, sans-serif;
        }

        .vs__dropdown-menu {
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            box-shadow: 0px 3px 15px #00000029, 0 -30px 15px #00000029;
            z-index: 1;
        }

        .vs__dropdown-toggle {
            border-radius: 10px;
            z-index: 12;
            position: relative;
        }

        .vs__dropdown-option {
            color: #979898;
            display: flex;
            align-items: center;
        }

        .vs__dropdown-option--highlight {
            color: #ffffff;

        }

        .vs__clear,
        .vs__open-indicator {
            fill: #979898;
        }
    }
</style>