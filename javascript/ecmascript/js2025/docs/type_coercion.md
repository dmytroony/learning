# JavaScript Type Coercion

Type coercion in JavaScript is the automatic or implicit conversion of a value from one data type to another. As a dynamically typed language, JavaScript automatically performs these conversions during operations and comparisons. While this can offer flexibility, it can also lead to unexpected behavior if not understood properly.

## How JavaScript Coercion Works: The Abstract Operations

JavaScript uses internal algorithms, called *abstract operations*, to perform type coercion. The most important are:

- **ToPrimitive**: Converts an object to a primitive value, using `valueOf()` and `toString()` methods.
- **ToString**: Converts a value to a string.
- **ToNumber**: Converts a value to a number.
- **ToBoolean**: Converts a value to a boolean.

These operations are defined in the ECMAScript specification and are used in various contexts (arithmetic, comparison, etc.).

## The Coercion Formula: Abstract Equality Comparison (`==`)

When using `==`, JavaScript follows a specific algorithm to compare values of different types. Here is a simplified version of the *Abstract Equality Comparison Algorithm*:

1. If types are the same, compare directly.
2. If one is `null` and the other is `undefined`, return `true`.
3. If one is a number and the other is a string, convert the string to a number and compare.
4. If one is boolean, convert it to a number and compare.
5. If one is object and the other is string, number, or symbol, convert the object to a primitive and compare again.
6. Otherwise, return `false`.

**Example Edge Cases:**
```javascript
0 == false;        // true (false → 0)
'\n' == 0;         // true ('\n' → 0)
[] == ''           // true ([] → '' → '')
[] == 0           // true ([] → '' → 0)
[1] == 1           // true ([1] → '1' → 1)
null == undefined  // true
null == 0          // false
```

## Explicit vs. Implicit Coercion

### Implicit Coercion

Also known as automatic type conversion, this happens when JavaScript automatically changes a value's type to match the requirements of an operation.

**Examples:**

*   **String + Number:** The number is converted to a string, and the result is a concatenated string.
    ```javascript
    const result = 5 + '5'; // The number 5 is coerced to the string '5'.
    // Result: '55'
    ```

*   **Logical Operators:** Operators like `||` (OR) and `&&` (AND) can return a non-boolean value based on the "truthiness" or "falsiness" of the operands.
    ```javascript
    const name = null || 'Default User'; // null is falsy, so 'Default User' is returned.
    // Result: 'Default User'
    ```

*   **Loose Equality (==):** The engine will perform type coercion to compare values of different types before checking for equality.
    ```javascript
    5 == '5'; // '5' is implicitly converted to the number 5.
    // Result: true
    ```

### Explicit Coercion

Also known as type casting, this is a deliberate conversion of a value to a different type using built-in functions or operators.

**Examples:**

*   `Number()`: Converts a value to a number.
    ```javascript
    const num = Number('100'); // 100
    ```

*   `String()`: Converts a value to a string.
    ```javascript
    const str = String(100); // '100'
    ```

*   `Boolean()`: Converts a value to its boolean equivalent.
    ```javascript
    const bool = Boolean(''); // false
    ```

*   `parseInt()` and `parseFloat()`: Parse a string and return an integer or floating-point number.
    ```javascript
    const int = parseInt('3.14'); // 3
    ```

## Coercion in Different Contexts

### Coercion to Number

This happens in mathematical operations (`-`, `*`, `/`) or when comparing different types with `==`.

*   `'10' * 2` results in `20`.
*   `null` becomes `0` in numeric contexts.
*   `undefined` becomes `NaN` (Not a Number).

### Coercion to String

The `+` operator has special behavior. If one of the operands is a string, the other operand is coerced into a string, and the operator performs concatenation.

*   `5 + 'apples'` results in `'5apples'`.
*   `'The answer is ' + 42` results in `'The answer is 42'`.

### Coercion to Boolean

This occurs in logical operations (`||`, `&&`, `!`) and conditional statements (`if`, `while`). Values are either "truthy" or "falsy" in a boolean context.

**Falsy Values:**

*   `false`
*   `0`, `-0`, `0n` (BigInt zero)
*   `""` (empty string)
*   `null`
*   `undefined`
*   `NaN`

**Truthy Values:**

All other values, including `'0'`, `'false'`, `[]` (empty array), and `{}` (empty object), are considered truthy.

### Special Cases: Symbol and BigInt

- `Symbol` values cannot be coerced to a number or string (except with `String(symbol)`), and attempting to do so throws an error.
- `BigInt` can only be compared with another `BigInt` or coerced explicitly.

## Common Coercion Table

| Value         | To Number | To String | To Boolean |
|---------------|-----------|-----------|------------|
| false         | 0         | 'false'   | false      |
| true          | 1         | 'true'    | true       |
| null          | 0         | 'null'    | false      |
| undefined     | NaN       | 'undefined'| false     |
| ''            | 0         | ''        | false      |
| '0'           | 0         | '0'       | true       |
| []            | 0         | ''        | true       |
| [1]           | 1         | '1'       | true       |
| {}            | NaN       | '[object Object]' | true |
| Symbol()      | Error     | 'Symbol()'| true       |

## Pitfalls and Best Practices

Implicit coercion is a common source of bugs. The loose equality operator (`==`) is a major cause of confusion because of its complex coercion rules.

**Best Practice:**

Prefer strict equality (`===`) over loose equality (`==`) to avoid unexpected type coercion during comparisons. The `===` operator compares both the value and the type of the operands, providing more predictable results.

```javascript
// Loose equality (coerces types)
5 == '5'; // true

// Strict equality (checks value AND type)
5 === '5'; // false (different types)
```

Use explicit coercion when you need to convert types, as it makes your code's intent clearer and more readable.

```javascript
// Less clear (relies on implicit coercion)
const num = +'100';

// More explicit and readable
const num = Number('100');
```

### Use Object.is for Edge Cases

`Object.is` provides a way to compare values that is even stricter than `===`, especially for `NaN`, `-0`, and `+0`:

```javascript
Object.is(NaN, NaN); // true
Object.is(-0, +0);   // false
```

## Symbol.toPrimitive and Custom Coercion

JavaScript allows objects to define their own coercion behavior by implementing the `Symbol.toPrimitive` method. This method is called by the `ToPrimitive` abstract operation when an object needs to be converted to a primitive value.

### Syntax
```javascript
obj[Symbol.toPrimitive] = function(hint) {
  // hint is either 'number', 'string', or 'default'
  // return a primitive value
};
```

### Example
```javascript
const customObj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'forty-two';
    return 'default';
  }
};

String(customObj); // 'forty-two'
Number(customObj); // 42
customObj + ''     // 'default'
```

### How It Works
- When JavaScript tries to convert an object to a primitive (e.g., during concatenation, arithmetic, or comparison), it checks for a `Symbol.toPrimitive` method.
- The `hint` argument tells the method what type of primitive is expected: `'string'`, `'number'`, or `'default'`.
- If `Symbol.toPrimitive` is not defined, JavaScript falls back to using `valueOf()` and `toString()` methods.

This feature allows for fine-grained control over how objects behave during type coercion.

## Implicit Coercion with Logical Operators: `&&`, `||`, and `!`

Logical operators in JavaScript perform implicit coercion to boolean to determine control flow, but the value they return is not always a boolean.

#### `&&` (Logical AND)
- Returns the first falsy operand, or the last operand if all are truthy.
- Each operand is coerced to boolean for the check, but the returned value is the original operand (not coerced).

**Examples:**
```javascript
false && 'hello';    // false (false is falsy)
0 && 42;             // 0 (0 is falsy)
'' && 'world';       // '' (empty string is falsy)
'foo' && 123;        // 123 ('foo' is truthy, returns 123)
[] && 'bar';         // 'bar' ([] is truthy)
```

#### `||` (Logical OR)
- Returns the first truthy operand, or the last operand if all are falsy.
- Each operand is coerced to boolean for the check, but the returned value is the original operand (not coerced).

**Examples:**
```javascript
false || 'hello';    // 'hello' (false is falsy)
0 || 42;             // 42 (0 is falsy)
'' || 'world';       // 'world' ('' is falsy)
'foo' || 123;        // 'foo' ('foo' is truthy)
null || undefined;   // undefined (null is falsy, undefined is falsy)
```

#### `!` (Logical NOT)
- Always returns a boolean: `true` if the operand is falsy, `false` if truthy.
- The operand is always coerced to boolean.

**Examples:**
```javascript
!false;      // true
!0;          // true
!'';         // true
!null;       // true
!undefined;  // true
!NaN;        // true
![];         // false ([] is truthy)
!{};         // false ({} is truthy)
!'foo';      // false
```

**Summary:**
- `&&` and `||` use implicit coercion to boolean for control flow, but return the original operand.
- `!` always returns a boolean, coercing its operand.
