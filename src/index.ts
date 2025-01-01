export const detectLocale = (): string => {
    // Auto-detect the locale from the environment or default to 'en-US'
    return Intl.DateTimeFormat().resolvedOptions().locale || 'en-US';
};

export const formatDate = (date: Date, locale: string): string => {
    return new Intl.DateTimeFormat(locale).format(date);
};

export const formatCurrency = (
    amount: number,
    currency: string,
    locale: string,
    options: { fallback?: string } = {}
): string => {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).format(amount);
    } catch {
        if (options.fallback) {
            return new Intl.NumberFormat(options.fallback, {
                style: 'currency',
                currency,
            }).format(amount);
        }
        throw new Error(`Unsupported locale: ${locale}`);
    }
};

export const formatNumber = (number: number, locale: string): string => {
    return new Intl.NumberFormat(locale).format(number);
};
