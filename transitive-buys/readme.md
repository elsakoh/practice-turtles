# Transitive buys

## Context

Originally Attempted 18 October 2022 on Hackerearth Platform

### Remark

I could not complete it in time. Even so, my initial idea of keeping a hashmap was not great.
Keeping a hashmap of buyers and their sellers, would take at least O(n^2) time

## Question

Given a list of buys, how many unlearned indirect buys are there in the list. (transitivity)

### Example

Buys: (A,B), (B,C) \
Since A=>B=>C, \
A indirectly buys from C

Therefore we learnt 1 indirect buy. \
Function should return 1

Buys: (A,A) \
Function should return 0

## Idea 1

Construct a directed graph and find out the transitive clousure of each pair.
