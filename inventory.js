class Inventory{
    constructor(){
        this._array = [];
        this._aux;
        this._deleted;
    }

    /*insert(code, position){
        for(let i=0; i<this._array.length; i++){
            if(this._array[i]._code == code){
                this._aux = this._array[position];
                this._array[position] = this._array[i];
                this._array[i] = this._aux;
            }
        }
    }*/

    add(product){
        if(this._array.length>=0){ //Si el array existe (o sea siempre)
            this._array.push(product); //Añade el producto una vez cumplida la condición
            for(let i = this._array.length-2; i>=0; i--){
                if(product._code <= this._array[i]._code){
                    this._aux = this._array[i];
                    this._array[i] = product;
                    this._array[i+1] = this._aux;
                }
            }
            return true;
        } else{
            this._array.push(product);
            return true;
        }
    }

    presentList(i){
        return this._array[i];
    }

    // showInvertedList(){
    //     for(let a=0, b=this._array.length-1; a<this._array.length/2; a++, b--){
    //         this._aux = this._array[a];
    //         this._array[a] = this._array[b];
    //         this._array[b] = this._aux;
    //     }
    // }

    BinarySearch(code, _array){
        let first = 0;
        let last = this._array.length;
        let position = 0;
        let found = false;
        let middle;

        while(found === false && first < last){
            middle = Math.floor((first+last)/2);
            if(this._array[middle] == code){
                found = true;
                position = middle;
            } else if(this._array[middle] > code){
                last = middle-1;
            } else if(this._array[middle] < code){
                first = middle+1;
            }
            return position;
        }
        // for(let i=0; i<this._array.length; i++){
        //     if(this._array[i]._code == code){
        //     return this._array[i];
        //     }
        // }
        // return null;
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