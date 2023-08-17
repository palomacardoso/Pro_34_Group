class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;

        World.add(world, this.sling);

    }

    //metodo para excluir a restrição
    fly(){
        this.sling.bodyA = null;
    }

    //metodo para exibir a restrição
    display(){

        //se existir uma restrição no corpo A
        if(this.sling.bodyA){

        //criamos a conexão entre A e B
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        //atraves de uma linha
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}