// 这2个expire 你觉得哪一个命名得更好点 
interface Subscription1 {
    expire: boolean
}

const subscription1: Subscription1 = {
    expire: true
}


// e.g.: "2021-06-03 10:11:11"
type DateString = string

interface Subscription2 = {
    expire: DateString
}

const subscription2: Subscription2 = {
    expire: "2021-06-03 10:11:11"
}



