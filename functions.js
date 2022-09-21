function showList(){
    for(i=0; i<inventory._array.length; i++){
        showSection.innerHTML += JSON.stringify(inventory.presentList(i)) + '<br>';
    }
}

function timedSuccessMessage(){
    return setTimeout(deleteTimedMessage, 2500);
}
function deleteTimedMessage(){
    showSection.innerHTML = '';
}