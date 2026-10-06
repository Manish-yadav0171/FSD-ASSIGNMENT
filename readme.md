# Synchronous vs Asynchronous File Reading in Node.js

## Aim

To demonstrate the difference between synchronous (blocking) and asynchronous (non-blocking) file reading in Node.js.

## Files Used

```text
FileReading/
│
├── data.txt
├── sync.js
├── async.js
└── README.md
```

---

## 1. Synchronous File Reading

### Code

```javascript
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);

console.log("End");
```

### Output

```text
Start
Hello, this is file data.
End
```

### Explanation

`fs.readFileSync()` reads the file synchronously. It blocks the call stack until the complete file is read.

Therefore:

```text
Start → File Data → End
```

`End` cannot execute until the file-reading operation is completed.

---

## 2. Asynchronous File Reading

### Code

```javascript
const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

console.log("End");
```

### Output

```text
Start
End
Hello, this is file data.
```

### Explanation

`fs.readFile()` reads the file asynchronously. It does not block the call stack.

The program continues executing `console.log("End")` while the file is being read. Once the file reading is completed, the callback function executes and prints the file data.

Therefore:

```text
Start → End → File Data
```

---

## Difference

| Synchronous               | Asynchronous                |
| ------------------------- | --------------------------- |
| `readFileSync()`          | `readFile()`                |
| Blocking                  | Non-blocking                |
| Call stack waits          | Call stack continues        |
| Data is read before `End` | Data is printed after `End` |
| Start → Data → End        | Start → End → Data          |

## Conclusion

Synchronous file reading blocks the call stack until the file operation is completed. Asynchronous file readin
