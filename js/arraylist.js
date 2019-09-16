
class ArrayList{

    constructor(){
        this.data = [];
    }

    append(element) {
        this.data.push(element);
    }

    insert(position, element) {
        if(this.positionIsvalid(position) || position == this.size()){
            this.data.splice(position, 0 , element);
        }
    }
    positionIsvalid(position){
       return (position>=0 && position < this.size()); 
    }
    remove(element){
        let index = this.search(element);
        if(index>=0) return splice(index,1);
    }

    removeAt(position){
        if(this.positionIsvalid(position)){
            //retorna o removido
            this.data.splice(position, 1);
        }
    }

    size(){
        this.data.length;
    }

    show(separator='-'){

    }

    isEmpty(){
        return this.data.length === 0;
    }

    getElement(position){
        if(this.positionIsvalid(position)){
            return this.data[position];
        }
        return null;
    }

    search(element){
        for(let i = 0; i<this.data.length; i++){
            if(this.data[i]===element) return i
        }
        return -1;
    }
}