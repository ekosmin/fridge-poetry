///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Level extends Phaser.State {

        public words: Phaser.Group;
        private static poetryWords: string[] = ['there', 'was', 'one', 'URL', 'parameter', 'so', 'this', 'default',
            'list', 'was', 'used', 'instead'];

        create() {
            this.game.stage.backgroundColor = '#777777';

            var style: {} = {font: "32px Arial", fill: "#FFFFFF", align: "left",
                wordWrap: true, wordWrapWidth: this.game.width};
            var currentX: number = 0;
            var currentY: number = 0;
            var words: string[] = this.getUrlVariables();
            if (words.length == 1) {
                // for testing
                words = Level.poetryWords;
            }

            for (var i: number = 0; i < words.length; i++) {
                var word: string = words[i];
                var text: Phaser.Text = this.game.add.text(0, 0, word, style, this.words);
                this.placeText(text, currentX, currentY);
                currentX = text.x + text.width;
                currentY = text.y;
                text.inputEnabled = true;
                text.input.enableDrag();
            }
        }

        private getUrlVariables(): string[] {
            var searchString: string = window.location.search.substring(1);
            return searchString.split(',');
        }

        private placeText(text: Phaser.Text, currentX: number, currentY: number): void {
            if (currentX + text.width > this.game.width - 10) {
                text.x = 10;
                text.y = currentY + text.height + 10;
            } else {
                text.x = currentX + 10;
                text.y = currentY;
            }
        }

    }

}