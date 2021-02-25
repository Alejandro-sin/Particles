
const  particles =[]

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    
    // How many particles? Base on the width of the windows
    const particlesLength = Math.floor(window.innerWidth/10);
    
    //Inicializo con un loop para que vaya atraves de todas las particulas
/* Esto me crea nuevas particulas a partir del la clase. */
    for(let i = 0; i <particlesLength; i++){
        particles.push(new Particle())
    }
}

function draw(){
    /*  Para quitar el rastro hay que ponerle un background */
    background(10,8,8)
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    })
    
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
        fill('rgba(208, 10, 10,0.5)');
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

    // Connect particles
    checkParticles(particles){
        particles.forEach(particle =>{
            const d =dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
/* if (d >120)

Crea muchas connexiones tipo graph

*/
            if (d < 260){
                stroke('rgba(208, 10, 10,0.1)')
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        })
    }
}