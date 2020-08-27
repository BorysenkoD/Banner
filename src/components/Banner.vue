<template>
    <div class="banner">
        <div class="bet-logo">
            <img class="img-bet-logo" :src="imageBet">
        </div>

        <div class="field-live">

            <div class="live">
                <span>Live</span>
            </div>

            <div class="type-bet"> {{ typeBet }}</div>

            <q-btn
                    class="button-team"
                    @click="choiceOne( rateOne )"
                    :class="{ 'choice-team' : isChoiceTeam }">

                <img class="team-logo" :src="imageTeamOne">
                <div class="team-name"> {{ teamNameOne }}</div>
                <div class="rate"> {{ rateOne }}</div>
            </q-btn>

            <q-btn class="button-team"
                   @click="choiceTwo ( rateTwo )"
                   :class="{'choice-team' : !isChoiceTeam}">

                <img class="team-logo" :src="imageTeamTwo">
                <div class="team-name"> {{ teamNameTwo }}</div>
                <div class="rate"> {{ rateTwo }}</div>
            </q-btn>

        </div>
        <div class="bet-field">
            <div class="bet-size-choice">

                <q-btn class="style-button"
                       @click="rate1000"
                       :class="{ 'choice-size' : size === 1000 }"> 1000 &#36;
                </q-btn>

                <q-btn class="style-button"
                       @click="rate5000"
                       :class="{ 'choice-size' : size === 5000  }"> 5000 &#36;
                </q-btn>

                <q-btn class="style-button"
                       @click="rate10000"
                       :class="{ 'choice-size' : size === 10000  }"> 10000 &#36;
                </q-btn>

            </div>
            <div class="size-bet">
                <span>Сумма ставки </span>
                <q-input color=white bg-color=#ff6fff
                         filled v-model="size">
                    <template v-slot:append>
                        <q-icon name="attach_money" color="white"/>
                    </template>
                </q-input>

            </div>
            <div class="bet-winning">
                <span> Выигрыш {{ calculationAmountWin }}</span>
            </div>
            <q-btn class="style-button" href="www.egb.com" label="Сделать ставку"></q-btn>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teamNameOne: 'Cyberium',
                teamNameTwo: 'MS Chonburi',
                imageTeamOne: '../src/image/69.png',
                imageTeamTwo: '../src/image/170.png',
                imageBet: '../src/image/egb.png',
                rateOne: 2.15,
                rateTwo: 1.34,
                bet: 0,
                size: 0,
                typeBet: 'Победитель карты',
                isChoiceTeam: null
            }
        },
        computed: {
            calculationAmountWin() {
                return Math.round(this.bet * this.size);
            }
        },
        methods: {

            choiceOne(cof) {
                this.bet = cof;
                this.isChoiceTeam = true;
            },

            choiceTwo(cof) {
                this.bet = cof;
                this.isChoiceTeam = false;
            },

            rate1000() {
                this.size = 1000;
                console.log('1000');
            },

            rate5000() {
                this.size = 5000;
                console.log('5000');
            },

            rate10000() {
                this.size = 10000;
                console.log('10000');
            }
        }
    }
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    .banner {
        display: grid;
        grid-template-areas: "logo betfield" "livefield betfield";
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 60% 40%;
        background: #6d6d6d;
    }

    @media all and (max-width: 730px) {
        .banner {
            grid-template-areas: "logo" "livefield" "betfield";
            grid-template-rows: 85px 1fr 1fr;
            grid-template-columns: 100%;
        }
    }

    .bet-logo {
        grid-area: logo;
        margin: auto;
    }

    .img-bet-logo {
        max-width: 100%;
        min-width: 350px;
    }

    .field-live {
        grid-area: livefield;
        display: grid;
        width: 350px;
        height: auto;
        border: 2px solid #ff2b2b;
    }

    .team-name {
        color: white;
        font-size: 13pt;
        margin: auto;
    }

    .team-logo {
        float: left;
        max-width: 65px;
        max-height: 40px;
        margin: auto;
    }

    .rate {
        float: right;
        color: white;
        font-size: 20pt;
        margin: auto;
    }

    .live {
        display: grid;
        width: 60px;
        height: 30px;
        background: #f57449;
        color: #ffffff;
        margin-left: auto;
        margin-right: auto;
    }

    .type-bet {
        align-items: center;
        color: white;
        margin-left: auto;
        margin-right: auto;

    }

    .button-team {
        display: grid;
        flex-wrap: wrap;
        width: 100%;
        height: 45px;
        background: #efba4c;
        border: 1px #ff6633;
    }

    .choice-team {
        background: #c96736;
    }

    .bet-field {
        display: grid;
        grid-area: betfield;
        padding: 25px;
    }

    .style-button {
        background: #47b153;
        color: white;
    }

    .choice-size {
        background: #238700;
    }

    .size-bet {
        margin: auto;
        color: white;
    }

    .bet-size-choice {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }

    .bet-winning {
        color: #ffffff;
        font-size: 24pt;
    }

</style>