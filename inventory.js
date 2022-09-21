class Inventory{
    constructor(){
        this._array = [];
        this._aux;
        this._deleted;
    }

    insert(code, position){
        for(let i=0; i<this._array.length; i++){
            if(this._array[i]._code == code){
                this._aux = this._array[position];
                this._array[position] = this._array[i];
                this._array[i] = this._aux;
            }
        }
    }

    add(product){
        this._array.push(product);
    }

    presentList(i){
        return this._array[i];
    }

    showInvertedList(){
        for(let a=0, b=this._array.length-1; a<this._array.length/2; a++, b--){
            this._aux = this._array[a];
            this._array[a] = this._array[b];
            this._array[b] = this._aux;
        }
    }

    search(code){
        for(let i=0; i<this._array.length; i++){
            if(this._array[i]._code == code){
            return this._array[i];
            }
        }
        return null;
    }

    delete(code){
        for(let i=0; i<this._array.length; i++){
            if(this._array[i]._code == code){
                this._deleted = this._array[i];
                this._aux = this._array[this._array.length-1];
                this._array[i] = this._aux;
                this._array[this._array.length-1] = this._deleted;
                return this._array.pop();
            }
        }
        return null;
    }
}