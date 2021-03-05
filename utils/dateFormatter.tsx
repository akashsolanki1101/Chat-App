const formatAMPM = (date: Date)=>{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var _minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    var strTime = hours + ':' + _minutes + ' ' + ampm;
    return strTime;
}

export const dateFormatter = (createdAt:string)=>{
    let messageTime

    const date = new Date(createdAt).toLocaleDateString()
    const todayDate = new Date().toLocaleDateString()
    
    const parts = date.split('/')
    const _lastMessageTime = parseInt(`${parts[2]}${parts[0]}${parts[1]}`)
    
    const parts1 = todayDate.split('/')
    const _todayDate = parseInt(`${parts1[2]}${parts1[0]}${parts1[1]}`)
    
    if((_todayDate - _lastMessageTime)===0)
    {
        messageTime= `Today, ${formatAMPM(new Date(createdAt))}`
    }else{
        messageTime=`${parts[1]}/${parts[0]}/${parts[2]}, ${formatAMPM(new Date(createdAt))}`
    }

    return messageTime

}
