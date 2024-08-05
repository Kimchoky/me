
export function match(value) {
    
    // 23bd3656-f4b8-42c1-a0f1-96766bf775df
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(value);

}