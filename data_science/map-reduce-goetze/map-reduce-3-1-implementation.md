### 3.1 Implementation

There are different implementations of the map reduce programming
model. This chapter is going to take a look at the implementation
used at google, which utilizes large clusters of commodity PCs and
has been specified by google in 2004.

A cluster consists of thousands of machines, which makes machine
failures a common threat.

Users are submitting jobs to a scheduling system which
takes care of mapping these jobs to a set of available machines
whithin the cluster.

There is not just one machine which gets the full set of 
input key/value pairs. The Map invocations are distributed 
across multiple machines by automatically partitioning the
input data into a set of *M splits*.

This allows the input data to be processed in parallel by
different machines. 

The output of the map function, the intermediate key space, 
is also partitioned into *R* pieces and then distributed
to another set of machines which take care of the reduce function
invocation.

An example of how the intermediate key space could be partitioned
into multiple pieces:

```hash(key) mod R```

The number of partitions (*R*) and the partitioning function
are specified by the user.