class BlueTableLine{
    constructor(){
        //create an obj
        this.line = [];
    }
    
    enqueue(element){
        return this.line.push(element);
    }
    
    dequeue(){
        //check is it empty
        if(this.line.length == 0){
            return null;
        }
        
        return this.line.shift();
    
    }
    
    front(){
        if(this.line.length == 0){
            return "Nothing to return";
        }
        return this.line[0];
    }
    
    printLine(){
        let str = "";
        for(let i=0; i<this.line.length; i++){
            str += "\n" + this.line[i];
        }
        return str;
    }
    
}

const newLine = new BlueTableLine();
newLine.enqueue(30);
newLine.dequeue();
newLine.enqueue(30);
newLine.enqueue(30);
var temp = newLine.printLine();
console.log(temp);