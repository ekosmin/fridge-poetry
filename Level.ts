///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Level extends Phaser.State {

        public words: Phaser.Group;

        private static words: string[] = ['boil', 'apparatus', 'away', 'and', 'above', 'frantic', 'enormous', 'cry',
                                          'but', 'is', 'if', 'I', 'honey', 'her', 'girl', 'on', 'not', 'mad', 'ly',
                                          'like', 'lie', 'the', 'still', 'some', 'she', 's', 's', 'rip', 'you',
                                          'woman', 'why', 'use', 'time', 'the', 'you'];

        create() {
            this.game.stage.backgroundColor = '#777777';

            var style: {} = {font: "32px Arial", fill: "#FFFFFF", align: "left",
                wordWrap: true, wordWrapWidth: this.game.width};
            var currentX: number = 0;
            var currentY: number = 0;

            for (var i: number = 0; i < Level.words.length; i++) {
                var word: string = Level.words[i];
                var text: Phaser.Text = this.game.add.text(0, 0, word, style, this.words);
                this.placeText(text, currentX, currentY);
                currentX = text.x + text.width;
                currentY = text.y;
                text.inputEnabled = true;
                text.input.enableDrag();
            }
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