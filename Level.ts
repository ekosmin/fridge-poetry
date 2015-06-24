///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Level extends Phaser.State {

        public console: Phaser.Text;

        create() {
            this.game.stage.backgroundColor = '#777777';

            var style: {} = {font: "32px Arial", fill: "#FFFFFF", align: "left",
                wordWrap: true, wordWrapWidth: this.game.width};
            this.console = this.game.add.text(0, this.game.height/2, "", style);
        }

    }

}