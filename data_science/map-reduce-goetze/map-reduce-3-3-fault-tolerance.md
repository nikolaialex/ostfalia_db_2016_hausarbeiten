### 3.3 Fault tolerance

Because machine failures are a common problem when using distributed
software, the map reduce implementation has to tolerate them gracefully.

The google implementation handles them the following way.
The master periodically pings every worker in a certain
amount of time to make sure it is still available and working
as expected. If a worker doesn't respond in time, it is marked
as failed. The map task of a failed worker is reset to idle 
which makes it eligible for rescheduling.

All *map* tasks on a failed machine have to be reexecuted,
even if they have been completed. This is because *reduce* workers
are not able to access the complete intermediate data on the failed
map worker.

On the other hand, completed tasks on a failed *reduce* worker
do not have to be reexecuted, because completed reduce tasks are
stored in a global file system.

This concept allows the MapReduce operation to complete even in
case of large-scale worker failures.

The only exception would be if the master fails, then the MapReduce
operation is aborted (google spec, 2004).