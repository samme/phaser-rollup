import Phaser from 'phaser';
import logo from './assets/phaser3-logo.png';

console.table({
  CANVAS_RENDERER: typeof CANVAS_RENDERER,
  WEBGL_RENDERER: typeof WEBGL_RENDERER,
  EXPERIMENTAL: typeof EXPERIMENTAL,
  PLUGIN_CAMERA3D: typeof PLUGIN_CAMERA3D,
  PLUGIN_FBINSTANT: typeof PLUGIN_FBINSTANT,
  FEATURE_SOUND: typeof FEATURE_SOUND
});

new Phaser.Game({
  scene: {
    init: function () {
      console.log('game.config', this.game.config);
      this.scene.manager.dump();
    },

    preload: function () {
      this.load.on('addfile', (key, type, load, file) => console.log(key, file.type, file.url));
      this.load.image('logo', logo);
    },
    
    create: function () {
      this.add.image(512, 384, 'logo');
      this.add.text(512, 480, `v${Phaser.VERSION}`, { font: '48px cursive' }).setOrigin(0.5);
    }
  }
});