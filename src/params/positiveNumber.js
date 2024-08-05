
export function match(value) {
    
    try {
        return Number(value) > 0;
    } catch (e) {
        return false;
    }
    
}