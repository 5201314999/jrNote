// 相比之前的，我个人觉得这个是更好点的
interface Subscription1 {
    isExpired: boolean
}

const subscription1: Subscription1 = {
    isExpired: true
}


// e.g.: "2021-06-03 10:11:11"
type DateString = string

interface Subscription2 = {
    expireDate: DateString
}

const subscription2: Subscription2 = {
    expireDate: "2021-06-03 10:11:11"
}
