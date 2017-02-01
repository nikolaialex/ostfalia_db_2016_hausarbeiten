## 2 History and outlook - From Lucene to YARN

It is 1997, a sunny afternoon in california, when *Doug Cutting* 
started writing the first version of *Lucene*.

Lucene is a text search library used for fast searching of web 
pages. In 2000 it was open sourced and in 2001 it became *Apache Lucene*.

By this time, *Mike Cafarella*, a graduate from the University of 
Washington joined him to index the entire web.

Together they created a sub project called *Apache Nutch*, which 
was an algorithm used to crawl the web, also known as web crawler, 
robot, bot or spider. Nutch used Lucene to index the contents of 
the page, to make it searchable.

Deployed on a single machine they managed to index around 100 pages 
per second. Soon they realised that a single machine can not 
be enough to index the web. But as more machines were involved, 
they were presented extreme operational challenges and each 
additional machine resulted in an exponential rise of complexity.

So Cutting and Cafarella had to come up with a solution to the 
scalability problem. They needed a storage layer which 
was schemaless, durable, capable of handling component failure 
and which was able to rebalance itself automatically.

For months they spend time trying to solve all those problems, 
when suddenly in October 2003, Google published the 
*Google File System* paper which was exactly targeting the 
very same problems they where trying to solve.
They then took this google specification and started 
implementing their storage layer in Java. Finished in 2004,
they named it *Nutch Distributed File System*, *NDFS*.

So now they had taken care of the operational side of things, 
they started experimenting with various data processing models, 
to find one which would fit to the distributed nature of NDFS.
The new algorithm needed to be run on multiple nodes at the 
same time.

Again it was google who beat them by coming up with a 
brilliant paper "*MapReduce: Simplified Data Processing on 
Large Clusters*" in december 2004.

> “That’s it”, our heroes said, hitting themselves on the foreheads, “that’s brilliant, Map parts of a job to all nodes and then Reduce (aggregate) slices of work back to final result”.
> -- [me 1]

In Juli 2005, MapReduce was fully integrated into Nutch, as its underlying 
compute engine.

In 2006, Cutting created a new project named *Hadoop*, which 
consisted of Hadoop common, HDFS and MapReduce.

Yahoo by then also was facing the same problems when their C++ 
legacy backend system was inferiour to the *Google File System* 
with *MapReduce*.

> “But that’s written in Java”, engineers protested, “How can it be better than our robust C++ system?”
> -- [me 1]

In 2006 *Yahoo!* employed Doug Cutting to help make the 
transition to Hadoop.

Around 2007, Twitter, Facebook, LinkedIn and many others also 
started working with Hadoop.
Many of them contributing back tooling and frameworks to the 
Hadoop open source ecosystem.

By march 2009 *Amazon* had started its MapReduce hosting service, 
*Elastic MapReduce*. Cutting left Yahoo! and started working for Cloudera, 
the first professional system integrator dedicated to Hadoop.

> "Hadoop revolutionized data storage and made it possible to keep all the data, no matter how important it may be."
> -- [me 1]

### Map Reduce v2 - YARN

The problem with MapReduce was, that its core, MapReduce, 
had too many responsibilities like resource management, managing jobs, 
data processing and even the api. So higher level frameworks were 
forced to build on top of MapReduce.

> "Although MapReduce fulfilled its mission of crunching previously insurmountable volumes of data, it became obvious that a more general and more flexible platform atop HDFS was necessary."
> -- [me 1]

In August 2012 a project code named *YARN* (Yet Another 
Resource Negotiator) was created as Hadoop sub-project. 
YARN was meant to be the next generation data-processing framework, 
Map Reduce v2.

Yarn effectively decoupled cluster operations from the data pipeline.

![Yarn architecture](https://cdn-images-1.medium.com/max/800/1*PJelhMteuDuRqOj3DnP4SA.png)

MapReduce now runs on top of YARN as one of multiple frameworks.

![Products and frameworks built on top of YARN](https://cdn-images-1.medium.com/max/800/1*C8PlZ0xiy22gDJtKF-HqiQ.png)

Currently the community is working on frameworks which are able 
to utilize different types of memory for different purposes.
Especially to do things with main memory as what HDFS did to hard drives.