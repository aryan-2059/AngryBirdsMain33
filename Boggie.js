class Boggie{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(myWorld, this.body);
        this.width = width;
        this.height = height;
      this.image = loadImage("images/coach.png");
      World.add(myWorld, this.body);
    }

    show()
    {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}