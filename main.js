function job(){
    var promise = new Promise(function(resolve,reject){
        var job = "hello  world";  
        setTimeout(()=> resolve(job),2000);
    });
    return promise;
    }
    job().then(v=>{
    console.log(v);//*
    })
  