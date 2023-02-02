/* eslint-disable no-constant-condition */
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require('../node_modules/phaser/src/const');
var Extend = require('../node_modules/phaser/src/utils/object/Extend');

/**
 * @namespace Phaser
 * @version 3.55.2
 * @custom
 */

var Phaser = {

  Actions: require('../node_modules/phaser/src/actions'),
  Animations: require('../node_modules/phaser/src/animations'),
  BlendModes: require('../node_modules/phaser/src/renderer/BlendModes'),
  Cache: require('../node_modules/phaser/src/cache'),
  Cameras: require('../node_modules/phaser/src/cameras'),
  Core: require('../node_modules/phaser/src/core'),
  Class: require('../node_modules/phaser/src/utils/Class'),
  Create: require('../node_modules/phaser/src/create'),
  Curves: require('../node_modules/phaser/src/curves'),
  Data: require('../node_modules/phaser/src/data'),
  Display: require('../node_modules/phaser/src/display'),
  DOM: require('../node_modules/phaser/src/dom'),
  Events: require('../node_modules/phaser/src/events'),
  Game: require('../node_modules/phaser/src/core/Game'),
  GameObjects: require('../node_modules/phaser/src/gameobjects'),
  Geom: require('../node_modules/phaser/src/geom'),
  Input: require('../node_modules/phaser/src/input'),
  Loader: require('../node_modules/phaser/src/loader'),
  Math: require('../node_modules/phaser/src/math'),
  Physics: require('../node_modules/phaser/src/physics'),
  Plugins: require('../node_modules/phaser/src/plugins'),
  Renderer: require('../node_modules/phaser/src/renderer'),
  Scale: require('../node_modules/phaser/src/scale'),
  ScaleModes: require('../node_modules/phaser/src/renderer/ScaleModes'),
  Scene: require('../node_modules/phaser/src/scene/Scene'),
  Scenes: require('../node_modules/phaser/src/scene'),
  Structs: require('../node_modules/phaser/src/structs'),
  Textures: require('../node_modules/phaser/src/textures'),
  Tilemaps: require('../node_modules/phaser/src/tilemaps'),
  Time: require('../node_modules/phaser/src/time'),
  Tweens: require('../node_modules/phaser/src/tweens'),
  Utils: require('../node_modules/phaser/src/utils')

};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND) {
  Phaser.Sound = require('../node_modules/phaser/src/sound');
}

if (typeof PLUGIN_CAMERA3D) {
  Phaser.Cameras.Sprite3D = require('../plugins/camera3d/src');
  Phaser.GameObjects.Sprite3D = require('../plugins/camera3d/src/sprite3d/Sprite3D');
  Phaser.GameObjects.Factories.Sprite3D = require('../plugins/camera3d/src/sprite3d/Sprite3DFactory');
  Phaser.GameObjects.Creators.Sprite3D = require('../plugins/camera3d/src/sprite3d/Sprite3DCreator');
}

if (typeof PLUGIN_FBINSTANT) {
  Phaser.FacebookInstantGamesPlugin = require('../plugins/fbinstant/src/FacebookInstantGamesPlugin');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
