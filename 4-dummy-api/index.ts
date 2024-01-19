
function generateError(msg: string):never {
    throw new Error(msg);
}

enum GENDERS {
    MALE = 'male',
    FEMALE = 'female'
}

enum BLOOD_GROUPS {
    'A_POSITIVE' = 'A+',
    'A_NEGATIVE' = 'A-',
    'B_POSITIVE' = 'B+',
    'B_NEGATIVE' = 'B-',
    'O_POSITIVE' = 'O+',
    'O_NEGATIVE' = 'O-',
    'AB_POSITIVE' = 'AB+',
    'AB_NEGATIVE' = 'AB-'
}

enum EYE_COLOR {
    Green,
    Brown,
    Gray,
    Blue
}
enum HAIR_COLOR {
    Black,
    Brown,
    White
}

enum HAIR_TYPE {
    Strands,
    Curly
}

enum CARD_TYPE {
    MAESTRO = 'maestro',
    MASTERCARD = 'mastercard',
    VISA = 'visa'
}

enum CURRENCY {
    PESO = 'Peso',
    DOLLAR = 'Dollar',
    EURO = 'Euro'
}

enum CRYPTO_COIN {
    BITCOIN = 'Bitcoin',
}

interface IBank {
    cardExpire: string,
    cardNumber: string,
    cardType: CARD_TYPE.MAESTRO,
    currency: CURRENCY.PESO,
    iban: string
}

interface iUserHair {
    color: HAIR_COLOR.Black
    type: HAIR_TYPE.Strands
}

interface ICoordinates {
    lat: number
    lng: number
}

interface IAddress {
    address: string
    city: string
    coordinates: ICoordinates
    postalCode: string
    state: string
}

interface ICompany {
    address: IAddress
    department: string
    name: string
    title: string
}

interface ICrypto {
    coin: CRYPTO_COIN.BITCOIN
    wallet: string
    network: string
}

interface IUser {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: GENDERS.MALE
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: BLOOD_GROUPS.A_POSITIVE
    height: number
    weight: number
    eyeColor: EYE_COLOR.Green
    hair: iUserHair
    domain: string
    ip: string
    address: IAddress
    macAddress: string
    university: string
    bank: IBank
    company: ICompany
    ein: string
    ssn: string
    userAgent: string
    crypto: ICrypto
}

interface IResponse {
    users: IUser[]
    total: number
    skip: number
    limit: number
}