function CreateObject(arr) {
    // Write your code here
    const create={}
    for(var i = 0; i<arr.length;i+=2){
        create[arr[i]]=arr[i+1]
    }
    return create
}

module.exports = CreateObject;
