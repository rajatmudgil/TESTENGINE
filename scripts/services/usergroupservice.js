app.factory("usergroupservice",()=>{
    const object = {
getgroup(){
    var userGroupReference = firebase.database().ref("/group");
    },
    getTest() {
       return $firebaseArray(userGroupRefernce);
    },
    getTest(){
        return $firebaseArray(questionsRefernce);
    }
}
    return object;
})