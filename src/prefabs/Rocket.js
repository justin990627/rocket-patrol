//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene,x, y, texture, frame);
        scene.add.existing(this); //add object to existing scene

        this.isFiring = false; //track rocket's firing status
        this.moveSpeed = 4; //pixels per frame

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx

    }

    update(){
        if(this.isFiring){
            this.y -=this.moveSpeed;
            if(this.y < borderUISize*3){
                this.reset();
            }
        }else{
            if(keyLEFT.isDown){
                this.x -= this.moveSpeed;
            }
            if (keyRIGHT.isDown){
                this.x += this.moveSpeed;
            }
            if(Phaser.Input.Keyboard.JustDown(keyF)){ //fire button
                this.isFiring = true;
                this.sfxRocket.play(); //play sfx
            }
            this.x = Phaser.Math.Clamp(this.x, borderUISize+borderPadding, game.config.width-borderUISize-borderPadding)
        }
    }
    reset(){
        this.y = game.config.height-borderUISize-borderPadding;
        this.isFiring = false;
    }
}