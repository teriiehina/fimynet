var assert   = require("assert")
var networsk = require("../js/app/FMNNetwork")
var graphs   = require("../js/app/FMNDataStructures")
var network  = require("../js/app/FMNDataStructures").FMNNetwork;

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('PitaGraph', function(){
  describe('#init', function(){
    it('should return -1 when the value is not present', function(){
      
      myFMN = new network();
      myFMN.addStations('Métro parisien', paris.nodes);

      var networks = myFMN.getNetworks();
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
