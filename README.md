# dont-care

Don't want to comment out code when debugging? Use dont-care!

## I.dontCare

```ts
I.dontCare(() => {
  console.log("This code won't be executed");
});
```

## I.dontMind

```ts
I.dontMind(() => {
  console.log(
    "This code will be executed, but runtime errors will never appear"
  );
});

I.dontMind(() => {
  console.log("Add true to log the suppressed errors");
}, true);
```

## I.dontGiveA\*\*\*\*

```ts
I.dontGiveAF_ck(() => {
  console.log(
    "If a teammate wants changes to your code, use this as the change"
  );
});
```
