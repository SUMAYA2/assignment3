function tinyFriend(names){
    var tinyName=names[0];
    for(var i=0;i<names.length;i++){
        var currentname=names[i];
        if(currentname.length < tinyName.length){
            tinyName=currentname;
        }
    }
    return tinyName;
}
var shortname=tinyFriend([sumaya,tonmoy,tina,mim]);
console.log(shortname);