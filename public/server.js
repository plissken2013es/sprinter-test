"use strict";

/**
 * User sessions
 * @param {Array} users
 */
const users = [];

/**
 * Find opponent for a user
 * @param {User} user
 */
function findOpponent(user) {
	for (let i = 0; i < users.length; i++) {
		if (user !== users[i] && users[i].opponent === null) {
			new Game(user, users[i]).match();
		}
	}
}

/**
 * Remove user session
 * @param {User} user
 */
function removeUser(user) {
	users.splice(users.indexOf(user), 1);
}

/**
 * Game class
 */
class Game {

	/**
	 * @param {User} user1 
	 * @param {User} user2 
	 */
	constructor(user1, user2) {
		this.user1 = user1;
		this.user2 = user2;
	}

	/**
	 * New game ready to be launched
	 */
	match() {
		this.user1.match(this, this.user2);
		this.user2.match(this, this.user1);
	}
    
    // Launch countdown
    count() {
		this.user1.count(this, this.user2);
		this.user2.count(this, this.user1);
    }

	/**
	 * Is game ended
	 * @return {boolean}
	 */
	ended() {
		return this.user1.guess !== GUESS_NO && this.user2.guess !== GUESS_NO;
	}

	/**
	 * Final score
	 */
	score() {
		if (
			this.user1.guess === GUESS_ROCK && this.user2.guess === GUESS_SCISSORS ||
			this.user1.guess === GUESS_PAPER && this.user2.guess === GUESS_ROCK ||
			this.user1.guess === GUESS_SCISSORS && this.user2.guess === GUESS_PAPER
		) {
			this.user1.win();
			this.user2.lose();
		} else if (
			this.user2.guess === GUESS_ROCK && this.user1.guess === GUESS_SCISSORS ||
			this.user2.guess === GUESS_PAPER && this.user1.guess === GUESS_ROCK ||
			this.user2.guess === GUESS_SCISSORS && this.user1.guess === GUESS_PAPER
		) {
			this.user2.win();
			this.user1.lose();
		} else {
			this.user1.draw();
			this.user2.draw();
		}
	}

}

/**
 * User session class
 */
class User {

	/**
	 * @param {Socket} socket
	 */
	constructor(socket) {
		this.socket = socket;
		this.game = null;
		this.opponent = null;
        this.ready = false;
	}

	/**
	 * Set guess value
	 * @param {number} guess
	 */
	setGuess(guess) {
		return true;
	}

	/**
	 * Start new game
	 * @param {Game} game
	 * @param {User} opponent
	 */
	match(game, opponent) {
		this.game = game;
		this.opponent = opponent;
        this.ready = false;
		this.socket.emit("match");
	}
    
    // Launch a countdown
    count(game, opponent) {
        this.socket.emit("count");
    }

	/**
	 * Terminate game
	 */
	end() {
		this.game = null;
		this.opponent = null;
		this.socket.emit("end");
	}

	/**
	 * Trigger win event
	 */
	win() {
		this.socket.emit("win", this.opponent.guess);
	}

	/**
	 * Trigger lose event
	 */
	lose() {
		this.socket.emit("lose", this.opponent.guess);
	}

	/**
	 * Trigger draw event
	 */
	draw() {
		this.socket.emit("draw", this.opponent.guess);
	}

}

/**
 * Socket.IO on connect event
 * @param {Socket} socket
 */
module.exports = {

	io: (socket) => {
		const user = new User(socket);
		users.push(user);
        findOpponent(user); 
        
        socket.on("ready", ()=> {
            console.log("user", socket.id, "ready");
            user.ready = true;
            if (user.opponent.ready) user.game.count();
        });
        
        socket.on("hit", ()=> {
            console.log("user", socket.id, "HIT!");
            if (user.opponent) user.opponent.socket.emit("opp_hit");
        });

		socket.on("disconnect", () => {
			console.log("Disconnected: " + socket.id);
			removeUser(user);
			if (user.opponent) {
				user.opponent.end();
				findOpponent(user.opponent);
			}
		});

		socket.on("guess", (guess) => {
			console.log("Guess: " + socket.id);
			if (user.setGuess(guess) && user.game.ended()) {
				user.game.score();
				user.game.start();
				storage.get('games', 0).then(games => {
					storage.set('games', games + 1);
				});
			}
		});

		console.log("Connected: " + socket.id);
	}

};