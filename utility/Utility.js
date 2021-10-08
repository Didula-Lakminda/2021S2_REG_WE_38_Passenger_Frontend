// create observer design
export default function Subject()
{
  this.observers = [] // array of observer functions
}
 
Subject.prototype = {
  subscribe: function(fn)
  {
    this.observers.push(fn)
  },
  unsubscribe: function(fnToRemove)
  {
    this.observers = this.observers.filter( fn => {
      if(fn != fnToRemove)
        return fn
    })
  },
  fire: function()
  {
    this.observers.forEach( fn => {
      fn.call()
    })
  }
}
 

// subject.unsubscribe(Observer1)
// subject.fire()