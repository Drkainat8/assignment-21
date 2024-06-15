//assignment 21
//think of object and make a program containing info
//type intetrface
interface countryname {
name:string
countrycode:number
currency:string
language:string

}
let countryname1: countryname ={
   name:'pakistan',
    countrycode:+92,
    currency:`PKR`,
    language:`URDU`
}
let countryname2 : countryname={
name:`india`,
countrycode:+91,
currency:`indian rupee`,
language:`hindi`,
}
let countryname3 : countryname={
name:`london`,
countrycode:+44,
currency:`pound sterling`,
language:`engllish`,
}
let countryname4: countryname={
    name:`turkey`,
    countrycode:+90,
    currency:`turkish lira`,
    language:`turkish`,

}
let countryname5: countryname={
    name:`saudiaarab`,
    countrycode:+966,
    currency:`riyal`,
    language:`arabic`,

}
console.log(countryname1.countrycode)
console.log(countryname2.currency)
console.log(countryname3.language)
console.log(countryname4.name)
console.log(countryname5.name)