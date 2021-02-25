

```
   /*  Mouse position
    Se llama continuamente, muy util para diujar. */
   if(mouseIsPressed){
        console.log(mouseX,mouseY);
        fill(0)
    } else {
        fill(100);
    }
    
 
/* Al usar mouseX,mouseY en argumentos de circulo lo vuelvo dinamico */
    circle(mouseX,mouseY,80);
```



 A continuacuín creo una clase particula para instanciar las partiucals y crar puntos aleatorios dentro de todo el marco de mi pantalla

 ```

 let p;



function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    p = new Particle();
}

function draw(){
    p.draw()
}


class Particle {
    constructor(){
        //Position
        this.pos = createVector(random(width), random(height));
        // Size
        this.size =10;
    }

    draw(){
        noStroke();
        fill('rgba(255,255,255,0.5)');
        circle(this.pos.x, this.pos.y, this.size);
    }
}
 ```


 Para crear movimiento.

 

 ```


 let p;





function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    p = new Particle();
}

function draw(){
    /*  Para quitar el rastro hay que ponerle un background */
    background(55, 100, 144)
    p.update()
    p.draw()
    
}


class Particle {
    constructor(){
        //Position
        this.pos = createVector(random(width), random(height));
        // Size
        this.size =10;
        // craeate a velocity en un marco de frame, 
        this.vel = createVector(random(-2,2),random(-2,2))
    }


    // Update movement by adding velocity
    update(){
        this.pos.add(this.vel);
        this.edges()
    }

    //Draw single particle
    draw(){
        noStroke();
        fill('rgba(255,255,255,0.5)');
        circle(this.pos.x, this.pos.y, this.size);
    }

    //Detect edges
    edges(){
            if (this.pos.x <0 || this.pos.x > width){
                this.vel.x *= -1;
            }
            if (this.pos.y <0 || this.pos.y > height){
                this.vel.y *= -1;
            }
    }
}
 ```


 Para crear multiples particulas, debemos crear una rreglo 