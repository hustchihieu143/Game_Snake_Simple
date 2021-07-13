class snake {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = [];
        this.maxCells = 1;
        this.food = new food(game);
    }

    update() {
        
        this.catchHandle();
        this.x += this.dx;
        this.y += this.dy;
        
        if(this.x > this.game.canvas.width) {
            this.x = 0;
        }
        if(this.x < 0) {
            this.x = 400;
        }
        if(this.y > this.game.canvas.height) {
            this.y = 0;
        }
        if(this.y < 0) {
            this.y = 400;
        }
        for(let i = 0; i < this.cell.length; i++) {
            if(this.x === this.cell[i].x && this.y === this.cell[i].y) {
                this.x = 0;
                this.y = 0;
            }
        }

        this.cell.unshift({x: this.x, y: this.y});
        if(this.cell.length > this.maxCells) {
            this.cell.pop();
        }

        console.log(this.x)


    }

    draw() {
        for(let i = 0; i < this.cell.length; i++) {
            this.game.context.fillStyle = 'white';
            this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
        }  
    }

    catchHandle() {
        //   38 
        //37 40 39
        document.addEventListener('keydown', (e) => {
            if(e.which == 37 && this.dx == 0) {
                this.dx = -this.grid;
                this.dy = 0;
            }
            else if(e.which == 38 && this.dy == 0) {
                this.dx = 0;
                this.dy = -this.grid;
            }
            else if(e.which == 39 && this.dx == 0) {
                this.dx = this.grid;
                this.dy = 0;
            }
            else if(e.which == 40 && this.dy == 0) {
                this.dx = 0;
                this.dy = this.grid;
            }
        })
    }
}