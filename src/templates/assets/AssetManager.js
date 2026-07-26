class AssetManager {


    constructor(){

        this.assets = {};

    }


    register(assets = {}){

        this.assets = {

            ...this.assets,

            ...assets

        };

    }


    get(name){

        return this.assets[name] ?? null;

    }


    clear(){

        this.assets = {};

    }


}


export default new AssetManager();