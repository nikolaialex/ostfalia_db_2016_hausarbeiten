## 3 Map Reduce Programming Model

Basically the computation takes a set of *input key/value pairs* 
and produces a set of *output key/value pairs*.

So the computation has to be expressed as two functions.

**Map** and **Reduce**, both which have to be specified by the user.

The *Map* function takes an input pair and produces a set of *intermediate*
key/value pairs. All intermediate key/value pairs which share the same intermediate key *I*
are then grouped together.

```
Map input: (a, 1), (a, 1), (a, 2), (b, 1), (b, 2), (b, 3)

Map output: (a, [1, 2]), (b, [1, 2, 3])
```

Those *intermediate* key/value pairs are then passed as input 
to the *Reduce* function which merges together the values to form
a smaller set of values. Usually the intermediate key/value pairs
are passed iteratively to the reduce function, so it always fits
into memory.

```
Reduce input: (a, [1, 2]), (b, [1, 2, 3])

Reduce output: (a, 3), (b, 6)
```

This output is just a example of a very simple map reduce function
which calculates the total sum of values.

