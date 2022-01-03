class MyRequest {
    url;
    method;
    apiToken;
    constructor(url, method, apiToken) {
      this.url = url;
      this.method = method;
      this.apiToken = apiToken;
    }
    //setters, getters
  }
  
  class ApiService {
    countries = ["Poland", "Japan", "Madagascar", "Mali", "Nepal"];
    continents = ["European", "Asia", "Australia", "Africa", "Asia"];
  
    key = "token";
  
      validateKey(requestApiKey){
         return this.key === requestApiKey;
      }
  
    getAPIToken(request){
        return  request.apiToken
    }
    getContinents(request) {
        if(!this.validateKey(this.getAPIToken(request))){
          return []
        }
          return this.countries;
    }
    getCountries(request) {
        if (!this.validateKey(this.getAPIToken(request))) {
          return [];
        }
      return this.continents;
    }
  }
  
  
  class Sender{
      static sendReq(request,destination){
        console.log(request.constructor.name === "MyRequest");
        if (request.constructor.name === "MyRequest") {
        const api = new ApiService();
        api.getCountries(request);
        api.getContinents(request);
        } else {
         throw new Error("request is not a instance of class request");
        }
      }
  }
  
  //GET, POST, PUT, DELETE, PATCH
  
  const req = new MyRequest("url", "GET", "token");
  Sender.sendReq(req,"")