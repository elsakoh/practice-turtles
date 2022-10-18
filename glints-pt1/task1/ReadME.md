# Glints Technical Exam Part 1

## How to run 
In this directory, to compile: 
```
javac Hdb.java
```
then run: 
```
java Hdb < test1 
```
*(expected output: 3)*
and: 
```
java Hdb < test2 
```
*(expected output: 2)*


### Time Complexity 
* O (row x column) 
* only visit one cell only once

### Solution Overview 
* Maintain a raw data matrix and visited matrix 
* the visited matrix will ensure that we dont visit the same cell twice 

* traverse through the individual entries 
* if we reach a +, then we will find all its + neighbours using DFS (Depth First Search), thus finding one cluster
* we will keep doing this until all the cells have been visited
* of course we return the cluster count :) 

### Time taken 
I took about 70 minutes to complete this, the big picture solution was quite easy to understand. The actual implementation took a bit more time. 


### Assumptions 
This solution assumes that the input matrix is correct and has consistent columns at each row. :) 
