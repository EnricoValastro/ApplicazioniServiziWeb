class Httpdispatcher{
    constructor() {
        this.listeners = {get: [], post: []};
        this.errorListener = ()=>{}
    }

    on(method,url,callback) {
        this.listeners[method].push({
            callback,
            url
        })

    };

    onGet(url,callback){
        this.on('get',url,callback);
    }

    onPost(url,callback){
        this.on('post',url,callback);
    }
    onError(callback){
        this.errorListener = callback;
    }
    dispatcher(req,res){
        const parsedUrl = require('url').parse(req.url,true);
        const method = req.method.toLowerCase();
        let error = true;
        this.listeners[method].forEach((item,index)=>{
            if(item.url===parsedUrl.pathname){
                error = false;
                item.callback(req,res);
            }
        });
        if(error===true) this.errorListener(req,res);
    }

}

module.exports = new Httpdispatcher();
