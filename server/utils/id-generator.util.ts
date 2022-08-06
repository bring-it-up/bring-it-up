export function generateSecondaryId(serviceName: string): string {
    return serviceName.toLowerCase().replace(/[^a-zA-Z\d\s]/g, '').replace(/\s+/g, '-');
}