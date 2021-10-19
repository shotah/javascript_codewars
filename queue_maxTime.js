function queueTime(customersByTime, numberOfQueues) {
  let QueuesNeeded = Math.min(customersByTime.length, numberOfQueues)
  let sortedCustomers = customersByTime.sort();
  let maxTime = 0;
  console.log(sortedCustomers)
  Array.from({ length: QueuesNeeded }).map(
    (_, index) => {
      let queueMaxTime = 0;
      for (i = index; i < sortedCustomers.length; i=i+QueuesNeeded) {
        queueMaxTime += sortedCustomers[i];
      }
      console.log(`Queue: ${index} - ${queueMaxTime}` )
      if(queueMaxTime > maxTime) { maxTime = queueMaxTime };
    }
  )  
  return maxTime;
}