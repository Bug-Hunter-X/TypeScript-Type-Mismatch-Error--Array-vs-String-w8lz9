# TypeScript Type Mismatch Error: Array vs String

This example demonstrates a common TypeScript error that arises from a type mismatch when passing an array to a function expecting a string. The error message can be cryptic, making it difficult to identify the root cause.

## Problem

The `greeter` function expects a string as input but receives an array.  TypeScript correctly flags this as an error, but the error message may not immediately reveal the nature of the problem, especially for beginners.

## Solution

The solution involves ensuring the correct type is passed to the function.  This can be achieved by either:

1.  Modifying the `greeter` function to accept an array of strings.
2.  Modifying the way `user` is defined or accessed to provide a single string.

The example shows both solutions.