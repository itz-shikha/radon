const c = function date(){
    let date = new Date()
    
    console.log(date)
}

 const d = function month(){
    const date = new Date('June 02, 2022 23:15:30');

    console.log(date.getMonth()); 



 }

const g = function getBatchInfo(){
    console.log ('Roadon, W3D1, the topic for today is Nodejs module system')
}



module.exports.date=c

module.exports.month=d

module.exports.info=g