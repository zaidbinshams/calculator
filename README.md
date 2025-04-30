# calculator

### stuff to fix:
- expressions in which the first argument is negative don't work properly.
- when a digit-key is pressed after an expression is evaluated, it appends the digit to the result instead of starting a new expression. (CHECK how multiple operators are handled)
- after the display is cleared using the C-key, pressing the first digit-key adds a 0 as the starting character of the new arguemnt. the digit-key appears as normal. (CHECK how empty display is handled)
- if the starting character is 0, the calculator first displays the next digit-key in front of the 0, but then removes it once another key is pressed. (CHECK how empty display is handled)