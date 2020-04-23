import update from './update.js';
import Phaser from 'phaser';

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

update();

new Phaser.Game({
  scene: {
    create: function () {
      this.add.text(0, 0, 'Hello', { font: '144px cursive' });
    }
  }
});