import { detectLocale, formatDate, formatCurrency, formatNumber } from '../src';

describe('Smart Locale Formatter', () => {
    test('detectLocale should return the default locale', () => {
        const locale = detectLocale();
        expect(typeof locale).toBe('string');
    });

    test('formatDate should format dates correctly', () => {
        const date = new Date('2023-01-02');
        expect(formatDate(date, 'en-US')).toBe('1/2/2023');
        expect(formatDate(date, 'en-GB')).toBe('02/01/2023');
    });

    test('formatCurrency should format currency correctly', () => {
        expect(formatCurrency(1000.5, 'USD', 'en-US')).toBe('$1,000.50');
        expect(formatCurrency(1000.5, 'EUR', 'de-DE')).toBe('1.000,50 €');
        expect(formatCurrency(1000.5, 'INR', 'en-IN')).toBe('₹1,000.50');
        expect(formatCurrency(1000.5, 'INR', 'ab-xyz', { fallback: 'en-IN' })).toBe('₹1,000.50');
    });

    test('formatNumber should format numbers correctly', () => {
        expect(formatNumber(1234567.89, 'en-US')).toBe('1,234,567.89');
        expect(formatNumber(1234567.89, 'de-DE')).toBe('1.234.567,89');
    });
});
