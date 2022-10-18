# Transitive buys

## Context

Originally Attempted 18 October 2022 on Hackerearth Platform

### Remark

Completed but I was failing some hidden test cases, I think the approach was ok.

## Question - Labyrinth

Given a grid of rows and columns, find the shortest path from the top left corner to the bottom right corner. \
The path is walkable if it is marked as 0. \
\
The question is similar to [this](https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/)

### Example

s 0 0 0 \
1 0 0 0 \
0 0 1 e

shortest path from s to e

## Idea

Run BFS until we find the end and return the distance \

if not we can return -1 if

1. the start or end === 1
2. there is no path to the end
