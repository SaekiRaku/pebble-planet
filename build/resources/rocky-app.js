/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var rocky = __webpack_require__(2);

	var init = false,
	    stageWidth,
	    stageHeight,
	    centerx,
	    centery,
	    ctx
	    // 上下文缓存

	var timecolor = "mediumspringgreen";
	var linecolor = "white";
	var backgroundcolor = "black";

	function Polar2Point(length, deg) {
	    // 极坐标转换
	    deg = Math.PI / 180 * deg;
	    return {
	        x: length * Math.cos(deg),
	        y: length * Math.sin(deg)
	    }
	}

	function Angle2Radian(angle) {
	    return Math.PI / 180 * angle;
	}

	function fixtime(num) {
	    if (num < 10) {
	        return "0" + num;
	    } else {
	        return num;
	    }
	}

	function cssColor(color) {
	    if (typeof color === 'number') {
	        color = color.toString(16);
	    } else if (!color) {
	        return 'transparent';
	    }

	    color = padColorString(color);

	    return '#' + color;
	}

	function padColorString(color) {
	    color = color.toLowerCase();

	    while (color.length < 6) {
	        color = '0' + color;
	    }

	    return color;
	}

	rocky.on('draw', function(event) {
	    if (!init) {
	        ctx = event.context;
	        // 缓存Canvas上下文
	        stageWidth = ctx.canvas.clientWidth;
	        stageHeight = ctx.canvas.clientHeight;
	        centerx = stageWidth / 2;
	        centery = stageHeight / 2;
	        // 缓存舞台信息
	        init = true;
	        // 初始化完成
	    }

	    ctx.clearRect(0, 0, stageWidth, stageHeight);
	    // 重绘舞台
	    ctx.fillStyle = backgroundcolor;
	    ctx.fillRect(0, 0, stageWidth, stageHeight);

	    var d = new Date();

	    var hour = d.getHours();
	    var minute = d.getMinutes();

	    ctx.fillStyle = timecolor;
	    ctx.textAlign = "center";
	    ctx.font = "36px bold numbers Leco-numbers";

	    var length = stageWidth / 2 - 60;
	    var angle = hour * 30 - 90;
	    var height = ctx.measureText(hour).height;
	    var p = Polar2Point(length, angle);
	    ctx.fillText(hour, centerx + p.x, centery + p.y - height / 2 - 5);
	    ctx.strokeStyle = linecolor;
	    ctx.beginPath();
	    ctx.arc(centerx, centery, length, Angle2Radian(angle + 40), Angle2Radian(angle - 40));
	    ctx.stroke();

	    ctx.font = "20px bold Leco-numbers";

	    length = stageWidth / 2 - 20;
	    angle = minute * 6 - 90;
	    height = ctx.measureText(minute).height
	    p = Polar2Point(length, angle);
	    ctx.fillText(minute, centerx + p.x, centery + p.y - height / 2 - 5);
	    ctx.beginPath();
	    ctx.arc(centerx, centery, length, Angle2Radian(angle + 15), Angle2Radian(angle - 15));
	    ctx.stroke();

	});

	rocky.on("minutechange", function() {
	    rocky.requestDraw();
	});

	rocky.on('message', function(event) {
	    var settings = event.data;
	    timecolor = cssColor(settings.timecolor);
	    linecolor = cssColor(settings.linecolor);
	    backgroundcolor = cssColor(settings.backgroundcolor);
	    rocky.requestDraw();
	});

	rocky.postMessage({ command: 'settings' });

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = _rocky;


/***/ })
/******/ ]);