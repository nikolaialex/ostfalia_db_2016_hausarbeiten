# 2. Apache Spark
![alt text](http://spark.apache.org/images/spark-logo-trademark.png "Apache Spark")
Apache® Spark™ is a powerful open source processing engine built around speed, ease of use, and sophisticated analytics. Spark gives us a comprehensive, unified framework to manage big data processing requirements with a variety of data sets that are diverse in nature as well as the source of data.

+ **Speed**
Engineered from the bottom-up for performance, Spark can be 100 times faster than Hadoop for large scale data processing by exploiting in memory computing and other optimizations. Spark is also fast when data is stored on disk, and currently holds the world record for large-scale on-disk sorting.

+ **Ease of use**
Spark has easy-to-use APIs for operating on large datasets. This includes a collection of more than 100 operators for transforming data and familiar data frame APIs for manipulating semi-structured data.

+ **A Unified Engine**
Spark comes packaged with higher-level libraries. These standard libraries increase developer productivity and can be seamlessly combined to create complex workflows. Those will be discussed in the chapter [2.2 Ecosystem](#2.2-ecosystem).

Spark is the largest open source project in data processing. Since it's release, Spark has seen rapid adoption by enterprises across a wide range of industries. Internet powerhouses such as Netflix, Yahoo, and eBay have deployed Spark at massive scale, collectively processing multiple petabytes of data on clusters of over 8000 nodes. It has quickly become the largest open source community in big data, with over 1000 contributors from 250+ organizations.

## 2.1 History
Spark was initially started by [Matei Zaharia](https://en.wikipedia.org/wiki/Matei_Zaharia) (Romanian-Canadian computer scientist) at UC Berkeley's AMPLab in 2009 and open sourced in 2010 under a *Berkeley Software Distribution license* (BSD).
In 2013, the project was donated to the **Apache Software Foundation** and switched it's license to *Apache 2.0*. In February 2014, Spark became a Top-Level Apache Project. In November 2014, Spark founder M. Zaharia's company Databricks set a new world record in large scale sorting using Spark. Spark had in excess of 1000 contributors in 2015, making it one of the most active projects in the Apache Software Foundation and one of the most active open source big data projects.
The first version of Spark (0.5) has been reliased in June 2012, the most recent version (2.0.2) has been reliased in mid November 2016.

## 2.2 Ecosystem
The Apache Spark ecosystem consists of **Spark Core API** and four different modules called **Spark SQL**, **Spark Streaming**, **MLlib** and **GraphX**.

### 2.2.1 Spark Core API
Core API is the main underlying execution engine for the Spark platform that all other functionality is built on top of. It provides in-memory computing capabilities to deliver speed, a generalized execution model to support a wide variety of applications and Java, Scala, and Python API's for ease of development.

Spark Core is centered on a data structure called the *Resilient Distributed Dataset* (RDD). The API mirrors a functional/higher-order model of programming: a "driver" program invokes parallel operations such as map, filter or reduce on an RDD by passing a function to Spark, which then schedules the function's execution in parallel on the cluster. These operations, and additional ones such as joins, take RDDs as input and produce new RDDs. RDDs are immutable and their operations are lazy; fault-tolerance is achieved by keeping track of the "lineage" of each RDD so that it can be reconstructed in the case of data loss. RDDs can contain any type of Python, Java, or Scala objects.

### 2.2.2 Spark SQL
Spark SQL is a Spark module for structured data processing. It provides a programming abstraction called DataFrames and can also act as distributed SQL query engine. It enables unmodified *Hadoop Hive* queries to run up to 100x faster on existing deployments and data. It also provides powerful integration with the rest of the Spark ecosystem like integrating SQL query processing with machine learning. It is used by many data scientists for exploring data.

### 2.2.3 Spark Streaming
Nowadays there is often a need for the apps to process and analyze not only batch data, but also streams of new data in real-time. Spark Streaming enables powerful interactive and analytical applications across both streaming and historical data, while inheriting Spark’s ease of use and fault tolerance characteristics. It readily integrates with a wide variety of popular data sources e.g. HDFS, Flume, Kafka. However, this convenience comes with the penalty of latency equal to the mini-batch duration.

### 2.2.4 MLlib (Machine Learning)
Machine learning has quickly emerged as a critical piece in mining Big Data for actionable insights. MLlib is a scalable machine learning library that delivers both high-quality algorithms like multiple iterations to increase accuracy and blazing speed which is up to 100 times faster than MapReduce (Hadoop). The more detailed comparasion to Hadoop will be presented in chapter [2.3 Spark and Hadoop](#2.3-spark-and-hadoop). Same as the Core the library is usable in Java, Scala, and Python. It could be included in complete workflows as part of a Spark application.

### 2.2.5 GraphX
GraphX is a graph computation engine that enables users to interactively build, transform and reason about graph structured data at scale. It comes complete with a library of common algorithms. GraphX can be viewed as being the Spark in-memory version of Apache Giraph, which utilized Hadoop disk-based MapReduce. Like Apache Spark, GraphX was initially started as a research project at UC Berkeley's AMPLab and Databricks and was later donated to the Apache Software Foundation and the Spark project.



