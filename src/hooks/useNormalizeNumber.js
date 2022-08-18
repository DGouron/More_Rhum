
export function useNormalizeNumber(numberToNormalize) {
    let currentNumberToNormalize = ""+numberToNormalize;
    
    return Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 }).format(currentNumberToNormalize);
}

export default useNormalizeNumber;