## 4.1 Large-scale indexing at google

The production indexing system of google has been completely
rewritten to make use of the MapReduce model. The crawler feeds
the indexing system with a large set of documents that have been
retrieved. The indexing operation consists of five to ten MapReduce
operations which have been proven to be superior compared to the
classical ad-hoc query approach without MapReduce operations.

#### Cleaner and simpler code
The code of the indexing system has become simpler, smaller, 
and easier to understand, because the code that deals with fault
tolerance, distribution and parallelization is hidden
within the google MapReduce library. The code size
of one phase computation has been reduced from
approximately 3800 lines of code to approximately
700 lines when expressed using MapReduce.

#### Better performance
The performance of the MapReduce library is good
enough that unrelated computations can be kept separate, 
instead of mixing them together
to avoid extra passes over the same data. This
makes it easy to change the indexing process. 
One change that took a few months to
make in googles old indexing system took only a few
days to implement in the new system.

#### Easier to handle and better fault tolerance
The indexing process has become much easier to
operate, because most of the problems caused by
machine failures, slow machines, and networking
problems are dealt with automatically by the MapReduce
library without operator intervention. Furthermore,
it is easy to improve the performance of the
indexing process by adding new machines to the indexing
cluster

**Note**: "By 2014 google was no longer using MapReduce as their
primary Big Data processing model..." [wiki 1] and moved on to
using less disk oriented models.