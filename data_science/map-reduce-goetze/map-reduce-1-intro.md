## 1 Introduction
*Map Reduce* is a programming model and concept which utilizes multiple 
functions to find specific data in huge data sets. In past times
such tasks have been very challenging due to the fact that searching
for relevant data is ovely time and resource consuming. As datasets
are ever growing, conventionally applied methods have become 
insufficient in achieving such data science tasks.
The Map Reduce model is able to fetch the relevant data fast 
by applying multiple functions which can be run asynchronously
on distributed clusters. A typical MapReduce computation processes many terabytes
of data on thousands of machines.

There are also specific implementations of this programming model, like the map reduce library by google.
They designed an abstraction which hides the details of parallelization, fault-tolerance, data distribution and load balancing.

The following chapters will deep dive into the concept of map reduce using the example of the google implementation 
which is then round up by some real world examples map reduce
has proven to be a good choice for.

But at first, we will take a look at the history of *MapReduce* and 
what events led to its creation.