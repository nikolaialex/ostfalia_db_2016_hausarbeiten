### 3.2 Data Flow

The following paragraph will give an overview over how data 
is passed through the MapReduce algorithm:

First, the user writes her program using the map and reduce functions.

When running the program, the data is split into *M* pieces 
of 16 to 64MB per piece, so the data can be processed by multiple 
workers.

After the data is split, many copies of the program are started on 
a cluster of several machines.

Each machine has multiple *Map* workers where each worker 
gets one chunk of input data.

One copy of the program is flagged as the master,
which is assigning the tasks to the other machines

So the master has to manage multiple *M* map tasks and *R* reduce 
tasks.

When the *Map* workers start processing their data chunks, 
they buffer their intermediate key/value pairs in memory.
They also periodically buffer these intermediate key/value
pairs to the hard disk which are partitioned into *R* regions.

The master knows about the location of the buffered partitioned
intermediate results and is notifying a *Reduce* worker of 
the location of this intermediate map output data.

After being notified by the master, the *Reduce* worker is reading 
the intermediate output data of the *Map* worker by using 
remote procedure calls.

The *Reduce* worker is then passing the values to the users reduce 
function and the output of the reduce function is appended 
to a final output file.

If all workers have completed, the master wakes up the user program
which now returns back to the user code and the results 
are now available in *R* output files.