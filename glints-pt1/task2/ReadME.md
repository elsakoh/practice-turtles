# Glints Technical Exam Part 2

## How to run 
In this directory, to compile: 
```
javac Talent.java
```
then run: 
```
java Hdb < test1 
```

### Time Complexity 
* O (n^2)  - worst case: all jobs get their last candidate prefetence 

### Solution Overview 
* Maintain boolean list of jobs  
* Loop until no more jobs left 
* iterate through job preference first from top priority
* if candidate is unmatched, match them 
* if candidate is matched, check if currently matched job is higher in candidate preference
* if job is higher in candidate preference, unmatch previous job 

### Time taken 
This was much more difficult than the first question. I took almost 2 hours.

### Assumptions 
this solution assumes the question string format and does not check for correct data input 
