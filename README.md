### Pad Zeros

Add zero symbols at the beginning of number

## Installation

> `npm install pad-zero`

# Usage

Example:

```
import { padZero } from "pad-zero";

console.log(padZero(2, 9)); // 09
console.log(padZero(4, 47)); // 0047
console.log(padZero(4)(47)); // 0047 (works with curring)
```
