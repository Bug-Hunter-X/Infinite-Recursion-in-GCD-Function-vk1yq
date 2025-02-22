# Infinite Recursion in GCD Function

This repository demonstrates a common error in recursive functions: infinite recursion due to improper base cases.  The `foo` function attempts to calculate the greatest common divisor (GCD) using Euclid's algorithm, but it fails to handle the case where one of the inputs is zero, leading to an infinite loop.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version that correctly handles the base case of zero.

This example highlights the importance of carefully considering all possible input values and defining appropriate base cases to prevent infinite recursion in recursive functions. 