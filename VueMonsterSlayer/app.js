function attackValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (this.monsterHealth <= 0 && value <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (this.playerHealth <= 0 && value <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLog = [];
    },
    attackMonster() {
      this.currentRound++;
      const value = attackValue(12, 5);
      this.monsterHealth -= value;
      this.addLogMessage("player", "attack", value);
      this.attackPlayer();
    },
    attackPlayer() {
      const value = attackValue(15, 7);
      this.playerHealth -= value;
      this.addLogMessage("monster", "attack", value);
    },
    specialAttack() {
      this.currentRound++;
      const value = attackValue(20, 13);
      this.monsterHealth -= value;
      this.addLogMessage("player", "special-attack", value);
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = attackValue(20, 10);
      this.currentRound++;
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.addLogMessage("player", "surrender");
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.battleLog.push({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#main");
