<template>
    <div class="application">
        <div class="application__list">
            <div class="application__item" v-for="item in 3">
                <div class="application__header">
                    <div class="application__logo"></div>
                    <div class="header__info">
                        <div class="application__title">
                            Тинькофф – Онлайн банк. Банк № 1 в России
                        </div>
                        <div class="application__subtitle">
                            <div class="subtitle__info subtitle__platform">
                                <img src="../assets/svg/apple.svg" alt="apple">
                                <span class="free">free</span>
                            </div>
                            <div class="subtitle__info subtitle__rating">
                                <img src="../assets/svg/star.svg" alt="apple">
                                <span>4,8</span>
                            </div>
                            <div class="subtitle__info subtitle__location">
                                <img src="../assets/svg/mark.svg" alt="mark">
                                <span>RU</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="application__footer">
                    <div class="footer__item">
                        <div class="footer__text">ASO index</div>
                        <div class="footer__title">7,8</div>
                    </div>
                    <div class="footer__item footer__item-middle">
                        <div class="footer__text">Установок за месяц</div>
                        <div class="footer__title">135k.</div>
                    </div>
                    <div class="footer__item">
                        <div class="footer__text">В категории</div>
                        <div class="footer__title">3</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApplicationList"
    }
</script>

<style scoped lang="scss">
    .application {
        width: 100%;

        &__list {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -7px;
        }

        &__item {
            display: block;
            width: calc(100% / 2 - 15px);
            margin: 7px;
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            box-sizing: border-box;
        }

        &__header {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 25px;
            color: #1D353D;
            font-family: MuseoSansCyrl-500, sans-serif;
        }

        &__logo {
            width: 81px;
            height: 81px;
            background-color: #F8BF25;
            border-radius: 10px;
            margin-right: 15px;
        }

        &__title {
            font-size: 18px;
            margin-bottom: 20px;
        }

        &__subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            line-height: 0.5;

            .subtitle__info {
                display: flex;
                align-items: center;

                img {
                    margin-right: 5px;
                }

                span {
                    font-size: 15px;
                }
            }

            .subtitle__platform {
                img {
                    width: 12px;
                }
            }

            .subtitle__rating {
                img {
                    width: 20px;
                }
            }

            .subtitle__location {
                img {
                    width: 9px;
                }
            }
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
    }

    .header {
        &__info {
            padding-top: 5px;
            width: 67%;
        }
    }

    .footer {
        &__item {
            padding: 0 20px;
            box-sizing: border-box;

            &-middle {
                border-left: 1px solid #f1f1f5;
                border-right: 1px solid #f1f1f5;
            }
        }

        &__text {
            font-family: MuseoSansCyrl-500, sans-serif;
            font-size: 12px;
            color: #979898;
            margin-bottom: 15px;
        }

        &__title {
            font-family: MuseoSansCyrl-900, sans-serif;
            font-size: 26px;
            color: #1D353D;
        }
    }

    .free {
        padding: 5px;
        border: 1px solid #979898;
        border-radius: 6px;
        font-size: 13px !important;
        color: #979898;
    }
</style>