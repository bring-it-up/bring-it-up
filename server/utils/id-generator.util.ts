export function generateSecondaryId(serviceName: string): string {
    return serviceName.toLowerCase().replace(/\s/g, '-');
}