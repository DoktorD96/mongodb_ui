import * as Realm from "realm-web";
var d = {};
d.DATABASE = null;
d.appLoadingData = async function (){
var handleDBloadVar = null;
var DatabaseHandler = null;
handleDBloadVar = new Realm.App({ id: "application-0-xozth" });
const credentials = Realm.Credentials.apiKey("EGXTPL2WcJr5mbGGJ8TxRhxzVdbjbyLzMIUCzlRjam2Ovl9tLiYyRlVvKHrRoSjP");
try{
await handleDBloadVar.logIn(credentials);
DatabaseHandler = handleDBloadVar.currentUser.mongoClient("mongodb-atlas");
d.DATABASE = DatabaseHandler.db("sample_airbnb").collection("listingsAndReviews");
//console.log(await DATABASE.find({},{limit:10}));
}catch(err){
//console.log(err);
}
}
module.exports = m;