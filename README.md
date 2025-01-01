# Smart Locale Formatter

A lightweight and powerful utility for locale-aware formatting of dates, numbers, and currencies.

## Features

- Automatically detect the user's locale.
- Format dates, numbers, and currencies for specific locales.
- Support for fallback locale in case of unsupported formatting.

## Installation

```bash
npm install smart-locale-formatter
```

## Usage

### Detect Locale
```javascript
import { detectLocale } from 'smart-locale-formatter';

const locale = detectLocale();
console.log(locale); // Output: en-US or system-detected locale
```

### Format Date

```javascript
import { formatDate } from 'smart-locale-formatter';

const formattedDate = formatDate(new Date('2023-01-02'), 'en-US');
console.log(formattedDate); // Output: 1/2/2023
```

### Format Number
```javascript
import { formatNumber } from 'smart-locale-formatter';

const formattedNumber = formatNumber(1234567.89, 'de-DE');
console.log(formattedNumber); // Output: 1.234.567,89
```

### Format Currency
```javascript
import { formatCurrency } from 'smart-locale-formatter';

const formattedCurrency = formatCurrency(1000.5, 'USD', 'en-US');
console.log(formattedCurrency); // Output: $1,000.50
```

## Git Workflow

### Clone the Repository
```bash
git clone https://github.com/rathoraashish/smart-locale-formatter.git
```
### Create a Feature Branch
```bash
git checkout -b feature/your-feature
```
### Commit Changes
```bash
git add .
git commit -m "Add a meaningful commit message"
```
### Push to Remote
```bash
git push origin feature/your-feature
```

## License

This project is licensed under the MIT License.
