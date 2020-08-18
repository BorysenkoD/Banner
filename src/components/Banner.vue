<template>
    <!--:class="{'choice-team':choiceTeamOne}"-->
    <div class="center">
    <div class="banner">
        <div class="container-left">
            <div>
                <img class="bet-logo" v-bind:src ="imageBet">
            </div>
            <div class="field-live">
                <div class="center">
                    <div class="live">Live</div>
                </div>
                <div class="type-bet">{{typeBet}}</div>
                <q-btn class="button-team" @click="choiceOne(rateOne)"
                       :class="{'choice-team':choiceTeamOne}">
                    <img class="team-logo" v-bind:src="imageTeamOne">
                    <div class="team-name"> {{teamNameOne}}</div>
                    <div class="rate"> {{rateOne}}</div>
                </q-btn>
                <q-btn class="button-team" @click="choiceTwo(rateTwo)"
                       :class="{'choice-team':choiceTeamTwo}">
                    <img class="team-logo" v-bind:src="imageTeamTwo">
                    <div class="team-name"> {{teamNameTwo}}</div>
                    <div class="rate"> {{rateTwo}}</div>
                </q-btn>

            </div>
        </div>
        <div class="container-right">
            <div class = "bet-field">
                <div class="bet-size-choice">

                    <q-btn class = "style-button"  @click="rate1000"
                           :class="{'choice-size':choiceSizeOne}"> 1000 &#36;</q-btn>
                    <q-btn class = "style-button"  @click="rate5000"
                           :class="{'choice-size':choiceSizeFive}"> 5000 &#36;</q-btn>
                    <q-btn class = "style-button"  @click="rate10000"
                           :class="{'choice-size':choiceSizeTen}"> 10000 &#36;</q-btn>
                </div>
                <div class="size-bet">
                    <q-input color=white bg-color=#ff6fff
                             filled v-model="size"
                             label="Сумма ставки:">
                        <template v-slot:append>
                            <q-icon name="attach_money" color="white"/>
                        </template>
                    </q-input>
                </div>
                <div class="bet-winning">
                    <span> Выигрыш {{calculationAmountWin}}</span>
                </div>
                <q-btn class = "style-button"  href="www.egb.com" label="Сделать ставку"></q-btn>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teamNameOne: 'Cyberium',
                teamNameTwo: 'MS Chonburi',
                imageTeamOne:'../src/image/69.png',
                imageTeamTwo:'../src/image/170.png',
                imageBet:'../src/image/egb.png',
                sizeWin: 0,
                rateOne: 2.15,
                rateTwo: 1.34,
                bet: 0,
                size: 0,
                typeBet:'Победитель карты',
                choiceTeamOne: null,
                choiceTeamTwo: null,
                choiceSizeOne: null,
                choiceSizeFive: null,
                choiceSizeTen: null,
            }
        },
        computed: {
            calculationAmountWin() {
                return Math.round ( this.bet * this.size);
            }
        },
        methods: {

            choiceOne(cof) {
                this.bet = cof;
                this.choiceTeamOne = true;
                this.choiceTeamTwo = false;
            },
            choiceTwo(cof) {
                this.bet = cof;
                this.choiceTeamOne = false;
                this.choiceTeamTwo = true;
            },

            rate1000() {
                this.size = 1000,
                this.choiceSizeOne = true,
                this.choiceSizeFive = false,
                this.choiceSizeTen = false,
                    console.log('1000')
            },
            rate5000() {
                this.size = 5000,
                this.choiceSizeOne = false,
                this.choiceSizeFive = true,
                this.choiceSizeTen = false,
                    console.log('5000' + this.choiceSizeOne + this.choiceSizeFive + this.choiceSizeTen  )
            },
            rate10000() {
                this.size = 10000,
                    this.choiceSizeOne = false,
                    this.choiceSizeFive = false,
                    this.choiceSizeTen = true,
                    console.log('10000')
            }
        }
    }
</script>

<style scoped>
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
    .banner {
        width: 649px;
        height: auto;
        background: linear-gradient(to top, #ff9900, #ffffff);
        border: 1px rgba(204, 204, 204, 0.06);

    }
    .container-left {
        width: auto;
        height: auto;
        display: inline-block;
        margin: 5px 5px 5px 5px;
        text-align: center;
    }
    .container-right {
        width: 300px;
        height: auto;
        display: inline-block;
        margin: 5px 5px 5px 5px;
        text-align: center;
    }
    .bet-logo {
       width: 300px;
       height: auto;
        margin: 10px;
    }
    .team-logo{
        float: left;
        max-width: 65px;
        max-height: 40px;
        margin: auto;
    }
    .team-name {
        float: bottom;
        color: white;
        font-size: 13pt;
        margin: auto;
    }
    .rate {
        float: right;
        color: white;
        font-size: 20pt;
        margin: auto;

    }
    .field-live {
        width: 300px;
        height: auto;
        border: 2px solid #ff2b2b;
        position: relative;
        z-index: 1;

    }
    .live{
        width: 60px;
        height: 30px;
        background: #ff6633;
        color: #ffffff;
        position: absolute;
        z-index: 50;
    }
    .center{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 15pt;
        position: relative;
        z-index: 5;
        margin-bottom: 10px;
    }
    .type-bet {
        align-items: center;
        color: white;

    }
    .bet-field {
        display: inline-block;
        list-style: none;
        width: auto;
        height: auto;
    }
    .button-team {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 45px;
        background:linear-gradient(to top, #f6a327, #f1d8cb);
        border: 1px #ff6633;
        margin: 5px auto;
    }
    .choice-team {
        background: linear-gradient(to bottom, #904916, #f6864b);
    }


    .style-button {
        background: linear-gradient(to top, #17a025, #afe095);
        color: white;
    }
    .choice-size {
        background: linear-gradient(to bottom, #033909, #3b920e);
    }

    .size-bet {
        display: inline-block;

        margin: auto;
        color: white;
    }
    .bet-size-choice {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }
    .bet-winning {
        color: #ffffff;
        font-size: 24pt;
    }
</style>