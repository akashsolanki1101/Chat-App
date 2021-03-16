export const formatAMPM = (date: Date)=>{
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
    let messageTime,messageDay

    messageTime = formatAMPM(new Date(createdAt))

    const date = new Date(createdAt).toLocaleDateString()
    const todayDate = new Date().toLocaleDateString()
    const temp = new Date()
    temp.setDate(temp.getDate()-1)
    const yesterDayDate = temp.toLocaleDateString()

    
    const parts = date.split('/')
    const _lastMessageTime = parseInt(`${parts[2]}${parts[0]}${parts[1]}`)
    
    const parts1 = todayDate.split('/')
    const _todayDate = parseInt(`${parts1[2]}${parts1[0]}${parts1[1]}`)

    const parts2 = yesterDayDate.split('/')
    const _yesterDayDate = parseInt(`${parts2[2]}${parts2[0]}${parts2[1]}`)
    
    if(_todayDate === _lastMessageTime)
    {
        messageDay=''
    }else if(_yesterDayDate===_lastMessageTime){
        messageDay='Yesterday'
    }else{
        messageDay=`${parts[1]}/${parts[0]}/${parts[2]}`
    }

    return [messageDay,messageTime]
}
