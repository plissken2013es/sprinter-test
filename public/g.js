class Game{
    constructor(){
        this.url =  window.URL || window.webkitURL;
        this.init();
    }

    init() {
        kontra.init();
        let imgs = ["b", "t", "c1", "c2", "r", "k", "c", "o"];
        imgs.forEach(im => {
            kontra.assets.images[im] = document.getElementById(im); 
        });
        this.main();
    }

    main() {
        function drawFontCenter(ctx,text,y,scale){
            var scale = scale || 1;
            var text = text.toLowerCase();
            var x = kontra.canvas.width/2 - text.length/2 * 6 * scale;
            drawFont(ctx,text,x,y,scale);
        }
        function drawFont(ctx,text,x,y,scale){
            var scale = scale || 1;
            var text = text.toLowerCase();
            for (var c=0,t=text.length;c<t;c++){
                drawLetter(ctx,text[c],x+(c*6*scale),y,scale);
            }
        }
        function drawLetter(ctx,character,xPos,yPos,scale){
            var c = font[character];
            if (!c) throw new Error("Character " + character + " is not in font");
            for (var y=0; y<7; y++){		
                for (var x=0; x<5; x++){
                    if (c[y][x]) ctx.fillRect((x*scale) + xPos, (y*scale) + yPos, scale, scale);
                }
            }
        }
        var registerFont = (function(){
            var X = true;
            window.font = {
                ////////// LETTERS ////////////////
                "a": [[ , ,X, , ],
                      [ ,X, ,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X,X],
                      [X, , , ,X],
                      [X, , , ,X]],

                "b": [[X,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X, ]],

                "c": [[ ,X,X,X, ],
                      [X, , , ,X],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "d": [[X,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X, ]],

                "e": [[X,X,X,X,X],
                      [X, , , , ],
                      [X, , , , ],
                      [X,X,X,X, ],
                      [X, , , , ],
                      [X, , , , ],
                      [X,X,X,X,X]],

                "f": [[X,X,X,X,X],
                      [X, , , , ],
                      [X, , , , ],
                      [X,X,X,X, ],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , , ]],

                "g": [[ ,X,X,X, ],
                      [X, , , ,X],
                      [X, , , , ],
                      [X, , , , ],
                      [X, ,X,X,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "h": [[X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X]],

                "i": [[ ,X,X,X, ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ ,X,X,X, ]],

                "j": [[ ,X,X,X,X],
                      [ , , ,X, ],
                      [ , , ,X, ],
                      [ , , ,X, ],
                      [ , , ,X, ],
                      [X, , ,X, ],
                      [ ,X,X, , ]],

                "k": [[X, , , ,X],
                      [X, , ,X, ],
                      [X, ,X, , ],
                      [X,X, , , ],
                      [X, ,X, , ],
                      [X, , ,X, ],
                      [X, , , ,X]],

                "l": [[X, , , , ],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , , ],
                      [X,X,X,X,X]],

                "m": [[X, , , ,X],
                      [X,X, ,X,X],
                      [X, ,X, ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X]],

                "n": [[X, , , ,X],
                      [X, , , ,X],
                      [X,X, , ,X],
                      [X, ,X, ,X],
                      [X, , ,X,X],
                      [X, , , ,X],
                      [X, , , ,X]],

                "o": [[ ,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "p": [[X,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X, ],
                      [X, , , , ],
                      [X, , , , ],
                      [X, , , , ]],

                "q": [[ ,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, ,X, ,X],
                      [X, , ,X,X],
                      [ ,X,X,X,X]],

                "r": [[X,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X, ],
                      [X, ,X, , ],
                      [X, , ,X, ],
                      [X, , , ,X]],

                "s": [[ ,X,X,X, ],
                      [X, , , ,X],
                      [X, , , , ],
                      [ ,X,X,X, ],
                      [ , , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "t": [[X,X,X,X,X],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ]],

                "u": [[X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "v": [[X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X, ,X, ],
                      [ ,X, ,X, ],
                      [ , ,X, , ]],

                "w": [[X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, ,X, ,X],
                      [X,X, ,X,X],
                      [X, , , ,X]],

                "x": [[X, , , ,X],
                      [X, , , ,X],
                      [ ,X, ,X, ],
                      [ , ,X, , ],
                      [ ,X, ,X, ],
                      [X, , , ,X],
                      [X, , , ,X]],

                "y": [[X, , , ,X],
                      [X, , , ,X],
                      [ ,X, ,X, ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ]],

                "z": [[X,X,X,X,X],
                      [ , , , ,X],
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ ,X, , , ],
                      [X, , , , ],
                      [X,X,X,X,X]],

                /////////// NUMBERS //////////////

                "0": [[ ,X,X,X, ], 
                      [X, , , ,X],
                      [X, , ,X,X],
                      [X, ,X, ,X],
                      [X,X, , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "1": [[ ,X,X, , ], 
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ ,X,X,X, ]],

                "2": [[ ,X,X,X, ], 
                      [X, , , ,X],
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ ,X, , , ],
                      [X, , , , ],
                      [X,X,X,X,X]],

                "3": [[ ,X,X,X, ], 
                      [X, , , ,X],
                      [ , , , ,X],
                      [ , ,X,X, ],
                      [ , , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "4": [[ , , ,X, ], 
                      [ , ,X,X, ],
                      [ ,X, ,X, ],
                      [X, , ,X, ],
                      [X,X,X,X,X],
                      [ , , ,X, ],
                      [ , , ,X, ]],

                "5": [[X,X,X,X,X], 
                      [X, , , , ],
                      [X, , , , ],
                      [X,X,X,X, ],
                      [ , , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "6": [[ ,X,X,X, ], 
                      [X, , , ,X],
                      [X, , , , ],
                      [X,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "7": [[X,X,X,X,X], 
                      [ , , , ,X],
                      [ , , ,X, ],
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ]],

                "8": [[ ,X,X,X, ], 
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ],
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                "9": [[ ,X,X,X, ], 
                      [X, , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X,X],
                      [ , , , ,X],
                      [X, , , ,X],
                      [ ,X,X,X, ]],

                ///////// SYMBOLS //////////////////

                " ": [[ , , , , ], 	// space
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ]],

                ",": [[ , , , , ],  // comma
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , ,X, , ],
                      [ ,X, , , ]],

                ".": [[ , , , , ],  // full stop
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ ,X, , , ]],

                "!": [[ , ,X, , ],  // exclamation mark
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , , , , ],
                      [ , ,X, , ]],

                "?": [[ ,X,X,X, ],  // question mark
                      [X, , , ,X],
                      [ , , , ,X],
                      [ , ,X,X, ],
                      [ , ,X, , ],
                      [ , , , , ],
                      [ , ,X, , ]],

                "@": [[ ,X,X,X, ],  // at sign
                      [X, , ,X,X],
                      [X, ,X, ,X],
                      [X, ,X, ,X],
                      [X, ,X,X, ],
                      [X, , , , ],
                      [ ,X,X,X, ]],

                "'": [[ ,X, , , ],  // apostrophe
                      [ , ,X, , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ],
                      [ , , , , ]],

                "₂": [[ , , , , ],  // subscript two
                      [ , , , , ],
                      [ , , , , ],
                      [ ,X,X, , ],
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ ,X,X,X, ]],

                "→": [[ , , , , ],  // right arrow
                      [ , ,X, , ],
                      [ , , ,X, ],
                      [X,X,X,X,X],
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ , , , , ]],

                "←": [[ , , , , ],  // left arrow
                      [ , ,X, , ],
                      [ ,X, , , ],
                      [X,X,X,X,X],
                      [ ,X, , , ],
                      [ , ,X, , ],
                      [ , , , , ]],

                "(": [[ , , ,X, ],  // left paren
                      [ , ,X, , ],
                      [ ,X, , , ],
                      [ ,X, , , ],
                      [ ,X, , , ],
                      [ , ,X, , ],
                      [ , , ,X, ]],

                ")": [[ ,X, , , ],  // right paren
                      [ , ,X, , ],
                      [ , , ,X, ],
                      [ , , ,X, ],
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ ,X, , , ]],

                "↶": [[ , ,X,X, ],  // anticlockwise
                      [ ,X, , ,X],
                      [ ,X, , , ],
                      [X,X,X, , ],
                      [ ,X, , , ],
                      [ , , , , ], 
                      [ , , , , ]],

                "↷": [[ ,X,X, , ],  // clockwise
                      [X, , ,X, ],
                      [ , , ,X, ],
                      [ , ,X,X,X],
                      [ , , ,X, ],
                      [ , , , , ],
                      [ , , , , ]],

                "/": [[ , , ,X, ],  // slash
                      [ , , ,X, ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ , ,X, , ],
                      [ ,X, , , ],
                      [ ,X, , , ]],

                "☐": [[X,X,X,X,X],  // box
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X, , , ,X],
                      [X,X,X,X,X]],

                "☑": [[X,X,X,X,X],  // checked box
                      [X, , , ,X],
                      [X,X, ,X,X], 
                      [X, ,X, ,X],
                      [X,X, ,X,X],
                      [X, , , ,X],
                      [X,X,X,X,X]],

            }
        })();
        
        function bindSocket() {
            socket.on("match", () => {
                if (gameState != STATE_WAIT) return;
                console.log("server found an opponent for me!");
                infoTexts = [{y: 119, t: "Press space when ready"}];
                gameState = STATE_LAUNCH;
            });
            
            socket.on("count", () => {
                if (gameState != STATE_WAIT_CONFIRM) return;
                console.log("start countdown, man!");
                countdownDT = 0;
                countdownPos = 0;
                infoTexts = [{y: 50, t: countdownMsg[countdownPos]}];
                gameState = STATE_COUNT;
            });

            socket.on("opp_hit", () => {
                if (gameState != STATE_PLAY) return;
                console.log("opponent HIT!");
                isEnemyRunning = true;
                setTimeout(function() {
                    isEnemyRunning = false;
                }.bind(this), 500);
                enemy.dx = 2.2;
            });

            socket.on("opp_off", () => {
                if (gameState != STATE_PLAY) return;
                console.log("opponent OFFLINE!");
                enemy.isOffline = true;
                setTimeout(function() {
                    enemy.isOffline = false;
                }.bind(this), 1500);
            });

            socket.on("opp_win", () => {
                if (gameState != STATE_PLAY) return;
                console.log("received opponent VICTORY!");
                gameState = STATE_FINISH;
                chosenKeySpr = null;
                keysTexts = [];
                infoTexts = [
                    {y: 50, t: "Your opponent won!"},
                    {y: 119, t: "Press space to play again"}
                ];
            });

            socket.on("end", () => {
                console.log("Your opponent has left!");
                infoTexts = [
                    {y: 50, t: "Your opponent has left!"}
                ];
                userHasLeft = true;
            });

            socket.on("disconnect", () => {
                infoTexts = [
                    {y: 50, t: "Connection lost!"}
                ];
            });

            socket.on("error", () => {
                infoTexts = [
                    {y: 50, t: "Connection error!"}
                ];
            });
        }
        
        function characterUpdate(dt) {
            if (gameState == STATE_PLAY) {
                this.ddx = -0.12;
                if (this.dx <= 0.02) {
                    this.ddx = 0;
                    this.dx = 0.1;
                }
            }
            if (gameState == STATE_FINISH || this.isOffline) {
                this.ddx = 0;
                this.dx = 0;
                this.x = this.x | 0;
            }
            this.advance();
            let distance = this.name == "hero" ? this.x - HERO_INIT_POS : this.x - ENEMY_INIT_POS;
            if (distance >= 140 && gameState == STATE_PLAY) {
                gameState = STATE_FINISH;
                chosenKeySpr = null;
                keysTexts = [];
                infoTexts = [
                    {y: 50, t: this.name == "hero" ? "You win!" : "Your opponent won!"},
                    {y: 119, t: "Press space to play again"}
                ];
                if (this.name == "hero") socket.emit("win");
            }
        }
        
        function generateNextKey() {
            if (gameState == STATE_FINISH) {
                chosenKeySpr = null;
                keysTexts = [];
                return;
            }
            
            chosenKey = keysToBind[(RND()*keysToBind.length)|0];
            let x = ((CW-30) * RND())|0 + 15;
            chosenKeySpr = kontra.sprite({
                x: x,
                y: 30,
                animations: keybSheet.animations
            });
            chosenKeySpr.playAnimation("up");
            keysTexts = [{
                x: x+6,
                y: 34,
                t: chosenKey,
                s: 1.4
            }];
        }
        
        function initialPosForRunners() {
            console.log(charSelect);
            hero = kontra.sprite({
                x: HERO_INIT_POS,
                y: 75,
                dx: 0,
                name: "hero",
                animations: runnerSheets[charSelect].animations,
                update: characterUpdate
            });
            hero.playAnimation("run_slow");
            enemy = kontra.sprite({
                x: ENEMY_INIT_POS,
                y: 67,
                name: "enemy",
                animations: runnerSheets[(RND()*3)|0].animations,
                update: characterUpdate
            });
            enemy.playAnimation("run_slow");
        }
        
        function onKeyPressed(k) {
            k.preventDefault();
            if (hero && hero.isOffline) return;
            if (gameState == STATE_INTRO) {
                charSelect = ["a", "s", "d"].indexOf(k.key);
                if (charSelect >= 0) {
                    gameState = STATE_WAIT;
                    initialPosForRunners();
                    infoTexts = [{y: 119, t: "Waiting for opponent..."}];
                    keysTexts = [];
                    
                    socket = io({ upgrade: false, transports: ["websocket"] });
                    bindSocket();
                }
            }
            
            if (gameState == STATE_LAUNCH && k.key == " ") {
                gameState = STATE_WAIT_CONFIRM;
                infoTexts = [{y: 119, t: "Watch out..."}];
                socket.emit("ready");
            }
            
            if (gameState == STATE_PLAY && !isHeroRunning) {
                if (k.key == chosenKey) {
                    isHeroRunning = true;
                    chosenKeySpr.playAnimation("down");
                    setTimeout(function() {
                        generateNextKey();
                        isHeroRunning = false;
                    }.bind(this), 500);
                    hero.dx = 2.2;
                    socket.emit("hit");
                } else {
                    hero.isOffline = true;
                    chosenKey = null;
                    chosenKeySpr = null;
                    keysTexts = [];
                    setTimeout(function() {
                        hero.isOffline = false;
                        generateNextKey();
                    }.bind(this), 1500);
                    socket.emit("offline");
                }
            }
            if (gameState == STATE_FINISH && k.key == " ") {
                if (userHasLeft) {
                    gameState = STATE_WAIT;
                    userHasLeft = false;
                    infoTexts = [{y: 119, t: "Waiting for opponent..."}];
                    socket.emit("find");
                } else {
                    gameState = STATE_WAIT_CONFIRM;
                    infoTexts = [{y: 119, t: "Watch out..."}];
                    socket.emit("ready");
                }
                initialPosForRunners();
            }
        }
        
        let STATE_INTRO = 1, STATE_WAIT = 2, STATE_LAUNCH = 3, STATE_WAIT_CONFIRM = 4, STATE_COUNT = 5, STATE_PLAY = 6, STATE_FINISH = 7;
        let HERO_INIT_POS = 20, ENEMY_INIT_POS = 28;
        let M = Math, RND = M.random, CW = 192, CH = 128, ctx = kontra.context, socket, userHasLeft = false;
        let gameState = STATE_INTRO, charSelect = 0, hero, enemy, blinkDT = 0, blink = true, chosenKey, chosenKeySpr, lastKeyPress, isHeroRunning = false, isEnemyRunning = false, countdownDT = 0, countdownPos = 0, countdownMsg = ["On your marks", "Get set","Go!"];
        
        let keysToBind = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (var q=0; q<keysToBind.length; q++) {
            kontra.keys.bind(keysToBind[q], onKeyPressed);
        }
        kontra.keys.bind("space", onKeyPressed);
        
        let background = kontra.sprite({
            x: 0,
            y: 0,
            image: kontra.assets.images.b
        });
                
        let offline = kontra.sprite({
            x: 0,
            y: 0,
            image: kontra.assets.images.o
        });
        
        let title = kontra.sprite({
            x: 30,
            y: 4,
            image: kontra.assets.images.t,
            dt: 0,
            update: function(dt) {
                this.dt += dt;
                this.y = 8 + 4*Math.sin(this.dt*3);
            }
        });
        
        let keybSheet = kontra.spriteSheet({
            image: kontra.assets.images.k,
            frameWidth: 19,
            frameHeight: 20,
            animations: {
                down: {
                    frames: [1, 0],
                    frameRate: 5,
                    loop: false
                },
                up: {
                    frames: "0",
                    frameRate: 0
                }
            }
        });
        
        let runnerSheets = [], runnersSpr = [], keysSpr = [], keysTexts = [], infoTexts = [{y: 66, t: "Select your runner"}];
        let frForSheet = [[0,1,2,3,4,5,6,7], [8,9,10,11,12,13,14,15], [16,17,18,19,20,21,22,23]];
        for (q=0; q<3; q++) {
            frForSheet[q] = (frForSheet[q].splice((RND() * 8)|0, 8)).concat(frForSheet[q]);
            runnerSheets.push(kontra.spriteSheet({
                image: kontra.assets.images.c,
                frameWidth: 16,
                frameHeight: 20,
                animations: {
                    run: {
                        frames: frForSheet[q],
                        frameRate: 20
                    },
                    run_slow: {
                        frames: frForSheet[q],
                        frameRate: 6
                    }
                }
            }));
            let x = ((CW-60)/3*(q+1));
            runnersSpr.push(kontra.sprite({
                x: x,
                y: 106,
                animations: runnerSheets[q].animations
            }));
            
            keysSpr.push(kontra.sprite({
                x: x,
                y: 80,
                animations: keybSheet.animations
            }));
            keysTexts.push({
                x: x+6,
                y: 84,
                t: ["A", "S", "D"][q],
                s: 1.4
            });
        }
        let clouds = [];
        for (q=1; q<3; q++) {
            clouds.push(kontra.sprite({
                x: CW * (1 + RND()),
                y: 6 + CH * (RND() * 0.25),
                image: kontra.assets.images["c"+q],
                dx: -RND(),
                update: function() {
                    if (this.x < -40) {
                        this.x = CW * (1 + RND());
                        this.y = 6 + CH * (RND() * 0.25);
                        this.dx = -RND();
                    }
                    this.advance();
                }
            }));
        }
        
        let rabbitSheet = kontra.spriteSheet({
            image: kontra.assets.images.r,
            frameWidth: 20,
            frameHeight: 20,
            animations: {
                walkL: {
                    frames: "0..5",
                    frameRate: 12
                },
                walkR: {
                    frames: "6..11",
                    frameRate: 12
                },
                idleL: {
                    frames: [2],
                    frameRate: 0
                },
                idleR: {
                    frames: [8],
                    frameRate: 0
                }
            }
        });
        let rabbit = kontra.sprite({
            x: (CW*RND())|0,
            y: 100 + (RND()*10)|0,
            animations: rabbitSheet.animations,
            dt: 0,
            timer: 1 + RND()*1,
            walk: false,
            update: function(dt) {
                this.dt += dt;
                if (this.dt > this.timer) {
                    this.dt = 0;
                    this.timer = 1 + RND()*1;
                    if (!this.walk && RND()<.8) {
                        let x = CW*RND();
                        let y = CH - (20*RND()) - 10;
                        this.dx = x - this.x > 0 ? .5 : -.5;
                        this.dy = y - this.y > 0 ? .1 : -.1;
                        this.playAnimation(this.dx > 0 ? "walkR" : "walkL");
                    } else {
                        this.playAnimation(this.dx > 0 ? "idleR" : "idleL");
                        this.dx = 0;
                        this.dy = 0;
                    }
                    this.x = this.x | 0;
                    this.y = this.y | 0;
                    this.walk = this.walk ? false : true;
                }
                this.advance();
            }
        });
        rabbit.playAnimation("idleL");
        
        kontra.gameLoop({
            update: function(dt) {
                blinkDT += dt;
                if (blinkDT > .4) {
                    blinkDT = 0;
                    blink = !blink;
                }
                
                runnersSpr.map(s=>{
                    s.update();
                });
                keysSpr.map(s=>{
                    s.update();
                });
                if (gameState <= STATE_LAUNCH) {
                    title.update(dt);
                }
                
                if (gameState > STATE_INTRO) {
                    clouds.map(c=>{
                        c.update();
                    });   
                    hero.update();
                    enemy.update();
                    rabbit.update(dt);
                    if (chosenKeySpr) chosenKeySpr.update();
                }
                
                if (gameState == STATE_PLAY && hero.isOffline) {
                    offline.x = hero.x;
                    offline.y = hero.y - 25;
                }
                
                if (gameState == STATE_COUNT) {
                    countdownDT += dt;
                    if (countdownDT >= 1) {
                        if (++countdownPos >= countdownMsg.length) {
                            gameState = STATE_PLAY;
                            generateNextKey();
                            hero.dx = 0.1;
                            enemy.dx = 0.1;
                            infoTexts = [];
                            return;
                        }
                        infoTexts = [{y: 50, t: countdownMsg[countdownPos]}];
                        countdownDT = 0;
                    }
                }
            },
            
            render: function() {
                if (gameState == STATE_INTRO) {
                    runnersSpr.map(s=>{
                        s.render();
                    });
                    keysSpr.map(s=>{
                        s.render();
                    });
                }
                if (gameState > STATE_INTRO) {
                    background.render();
                    clouds.map(c=>{
                        c.render();
                    });
                    enemy.render();
                    hero.render();
                    rabbit.render();
                    if (chosenKeySpr) chosenKeySpr.render();
                }
                
                if (gameState == STATE_PLAY && hero.isOffline) {
                    offline.render();
                }
                
                if (gameState <= STATE_LAUNCH) {
                    title.render();
                }
                if (blink) {
                    ctx.fillStyle = "#fff";
                    infoTexts.map(t=>{
                        drawFontCenter(ctx, t.t, t.y);
                    });
                }
                ctx.fillStyle = "#000";
                keysTexts.map(t=>{
                    drawFont(ctx, t.t, t.x, t.y, t.s);
                });
            }
        }).start();
    }
}

window.addEventListener("load", function() {
    let g = new Game();
}, false);