/*

In this coding interview, you'll be given a self-contained problem which you can solve in any language you prefer. Our goal is to write a class that allows us to keep a versioned map or key-value store. In pseudo-code, our class should have this interface:

class VersionedStore<V>:

  // set a value for the current map key
  - set(key: string, value: V): void


  // get the value for key in the current map
  - get(key: string): V

  // get the snapshot for the current state of the map, which can be used later
  // in `getAtSnapshotId` to retrieve values from the map at the time the id
  // was taken.
  // It's up to you to determine the type of this value.
  - getSnapshotId(): any

  // get the value for a key from the map when this snapshotId was retrieved.
  - getAtSnapshotId(snapshotId: any, key: string): V



A simple example for how this class may be used is the following pseudo-code:

  store = VersionedStore()
  snap0 = store.getSnapshotId()
  // snap0 = 1, 'jskdfjasdfmlkj'
  
  store.set('a', 1)
  assert store.get('a') == 1

  snap1 = store.getSnapshotId()
  store.set('a', 100)
  store.set('b', 2)
  snap2 = store.getSnapshotId()
  assert store.get('a') == 100
  assert store.get('b') == 2

  assert store.getAtSnapshotId(snap1, 'a') == 1
  assert store.getAtSnapshotId(snap2, 'a') == 100

*/

class VersionedStore {
  constructor(){
    this.storageIds = {};
    this.snapshots = {};
    this.snapshotIncrementer = 0;
  }
  
  storeSnapshot(snapshot) {
    this.snapshotIncrementer++
    this.snapshots[this.snapshotIncrementer] = snapshot;
    return this.snapshotIncrementer;
  };
  
  getSnapshotId() {
    return this.storeSnapshot(snapshotId);
  }
  
  getAtSnapshotId(snapshotId = false, snapshotKey = false) {
    let storage = this.storageIds;
    if(snapshotId){ storage = this.snapshots[snapshotId] };
    if(!snapshotKey){ return storage };
    return storage[snapshotKey];
  }
  
  get(key){
    return this.storageIds[key];
  }
  
  set(key, value) {
    this.storageIds[key] = value;
  }
}

let store = new VersionedStore();
store.set('a', 100)
store.set('b', 2)
console.log(
  store.get('a')
)


var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('testing versionedStore', function() {
  it('should set a value and get same value', function() {
    let store = new VersionedStore();
    store.set('a', 100);
    assert(store.get('a'), 100);
  })
  
  it('should set a value and snapshot should return object values', function() {
    let store = new VersionedStore();
    store.set('a', 100);
    let snap1 = store.getAtSnapshotId();
    assert(snap1, {'a': 100});
  })
  
  it('should set a value and snapshot should return object values', function() {
    let store = new VersionedStore();
    store.set('a', 100);
    let snap1 = store.getAtSnapshotId();
    assert(store.getAtSnapshotId(snap1, 'a'), 100);
  })
})

mocha.run()

