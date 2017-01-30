## 4.2 Facebook, Hadoop and Corona

Every company which is aggregating and analyzing huge data sets is
at least using some sort of map and reduce operation under the hood.

At *Facebook* every team is dependend on their custom-built data
infrastructure for warehousing and analytics. Every day, almost
one petabyte of data arrives at their warehouses. Around the clock
this raw data is processed to generate more meaningful data aggregations.

Because facebooks data warehouse has grown by factor 2500 between 2008
and 2012, they soon reached the limitations of the *Hadoop MapReduce*
scheduling framework.

Initially they employed the MapReduce implementation from *Apache Hadoop*
as foundation of their infrastructure, which was working very well
for many years. But in 2011, facebook was reaching the limits of that
system.

As the cluster size and the number of jobs where increasing, the
limitations regarding scalability of this design became clear.
Because of the scheduling overhead at peak load, 
the Hadoop job tracker could not handle its tasks anymore.

Another limitation was the *pull based scheduling* where the task
tracker periodically sends a heartbeat to the job tracker. This 
predefined delay was limiting the performance when executing small,
fast finishing jobs.

Also, the Hadoop MapReduce was waisting hardware resources. Hadoop has
a static slot-based resource management model which divides the cluster
into a fixed number of map and reduce slots based on a static configuration.

Another disadvantage of Apache Hadoop was the fact, that it required
hard downtime during a software upgrade. All running jobs had to be killed.

In 2011 facebook was specifying new requirements for a new and better
scheduling framework [fb 1]:

- Better scalability and cluster utilization
- Lower latency for small jobs
- Ability to upgrade without disruption
- Scheduling based on actual task resource requirements rather than a count of map and reduce tasks

### Corona

These new requirements in mind, facebook went ahead and developed a new 
scheduling framework named *Corona*.

In its development blog, facebooks informs: 

> "One major difference from our previous Hadoop MapReduce implementation is that Corona uses push-based, rather than pull-based, scheduling. After the cluster manager receives resource requests from the job tracker, it pushes the resource grants back to the job tracker. Also, once the job tracker 
gets resource grants, it creates tasks and then pushes these tasks to the task trackers for running. There is no periodic heartbeat involved in this scheduling, so the scheduling latency is minimized."
> -- [fb 1]

Other advantages are better average time to refill slot, cluster utilization, 
scheduling fairness and job latency.

By 2012 Corona was deployed to all production systems at facebook
and is used up until now.

The developers at facebook summarize it in the following way:

> "In summary, Corona has become an integral part of Facebook’s data infrastructure and helps power big data analytics for many teams across the company. We are continuing to improve it and are very excited about launching the upcoming features that will enable it to meet the ever-growing needs of our teams for years to come. We have also open-sourced the version we currently have running in production; please check it out on the Facebook hadoop-20 repository on GitHub and let us know what you think!" 
> -- <cite>[fb 1]</cite>
