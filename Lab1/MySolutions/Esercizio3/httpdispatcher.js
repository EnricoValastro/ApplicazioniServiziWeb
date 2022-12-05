class Httpdispatcher{
    constructor() {
        //TODO
        //Creare uno o più oggetti in modo da contenere tutte le
        //funzioni passate al dispatcher con onGet e onPost.
        //Deve essere possibile, data una request http, chiamare la giusta funzione.
        this.listeners = {get:[],post:[]};
    }

    on(method,url,callback) {
        this.listeners[method].push({
            callback,
            url
        })

    };

    onGet(url,callback){
        //TODO
        this.on('get',url,callback);
    }

    onPost(url,callback){
        //TODO
        this.on('post',url,callback);
    }
    onError(callback){
         //TODO
    }
    dispatcher(req,res){
        const parsedUrl = require('url').parse(req.url,true);
        const method    = req.method.toLowerCase();
        //TODO:
        //Cercare nell'oggetto e chiamare la funzione che corrisponde al
        //metodo della request (get o post) ed al path (/page1, /page2, ...).
        this.listeners[method].forEach((item, index) =>{
            if(item.url === parsedUrl.pathname){
                item.callback(req,res);
            }
        });

    }

}

module.exports = new Httpdispatcher();
