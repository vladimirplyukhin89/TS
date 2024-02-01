
function generateError(msg: string):never {
    throw new Error(msg);
}

const genders = {
    male:'male',
    female:'female'
} as const;

type GendersKeys = typeof genders[keyof typeof genders];
// type GendersKeys = typeof genders[keyof Object];

const bloodGroups = {
    'A_POSITIVE': 'A+',
    'A_NEGATIVE': 'A-',
    'B_POSITIVE': 'B+',
    'B_NEGATIVE': 'B-',
    'O_POSITIVE': 'O+',
    'O_NEGATIVE': 'O-',
    'AB_POSITIVE': 'AB+',
    'AB_NEGATIVE': 'AB-'
} as const;

type BloodGroupsKeys = typeof bloodGroups[keyof typeof bloodGroups];

const eyeColor = {
    Green: 'Green',
    Brown: 'Brown',
    Gray: 'Gray',
    Blue: 'Blue'
} as const;

type eyeColorKeys = typeof eyeColor[keyof typeof eyeColor];

const hairColor = {
    Black: 'Black',
    Brown: 'Brown',
    White: 'White'
} as const;

type hairColorKeys = typeof hairColor[keyof typeof hairColor];

const hairType = {
    Strands: 'Strands',
    Curly: 'Curly'
} as const;

type hairTypeKeys = typeof hairType[keyof typeof hairType];

const cardType = {
    maestro: 'maestro',
    mastercard: 'mastercard',
    visa: 'visa'
} as const;

type cardTypeKeys = typeof cardType[keyof typeof cardType];

const currency = {
    Peso: 'Peso',
    Dollar: 'Dollar',
    Euro: 'Euro'
} as const;

type currencyKeys = typeof currency[keyof typeof currency];

const cryptoCoin = {
    Bitcoin: 'Bitcoin',
} as const;

type cryptoCoinKeys = typeof cryptoCoin[keyof typeof cryptoCoin];

interface IBank {
    cardExpire: string,
    cardNumber: string,
    cardType: cardTypeKeys,
    currency: currencyKeys,
    iban: string
}

interface iUserHair {
    color: hairColorKeys
    type: hairTypeKeys
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
    coin: cryptoCoinKeys
    wallet: string
    network: string
}

interface IUser {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: GendersKeys
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: BloodGroupsKeys
    height: number
    weight: number
    eyeColor: eyeColorKeys
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

export interface IResponse {
    users: IUser[]
    total: number
    skip: number
    limit: number
}

