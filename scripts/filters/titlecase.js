app2.filter("titlecase",()=>{
    // filter always written a function
    return(str)=>{
        return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
    }
})