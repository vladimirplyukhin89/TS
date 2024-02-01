declare function makeOrdinal(words: string):string;
declare function makeOrdinal(     words: string): string;
declare function isFinite(num: number):boolean;
declare function isSafeNumber(num: number):boolean;
declare function parseInt(string: string, radix?: number): number;

declare var TEN: number
declare var ONE_HUNDRED: number
declare var ONE_THOUSAND: number
declare var ONE_MILLION: number
declare var ONE_BILLION: number
declare var ONE_TRILLION: number
declare var ONE_QUADRILLION: number
declare var MAX: number

declare var LESS_THAN_TWENTY: string[];

declare var TENTHS_LESS_THAN_HUNDRED: string[];

declare function toWords(number: number|string, asOrdinal: boolean):string;

declare function generateWords(number: number, words?: string[] | undefined): string;