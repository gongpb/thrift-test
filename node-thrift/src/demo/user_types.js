//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
if (typeof com === 'undefined') {
  com = {};
}
if (typeof com.funshion === 'undefined') {
  com.funshion = {};
}
if (typeof com.funshion.thrift === 'undefined') {
  com.funshion.thrift = {};
}
com.funshion.thrift.User = module.exports.User = function(args) {
  this.uid = null;
  this.name = null;
  this.age = null;
  this.desc = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.age !== undefined) {
      this.age = args.age;
    }
    if (args.desc !== undefined) {
      this.desc = args.desc;
    }
  }
};
com.funshion.thrift.User.prototype = {};
com.funshion.thrift.User.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.uid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I16) {
        this.age = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.desc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.User.prototype.write = function(output) {
  output.writeStructBegin('User');
  if (this.uid !== null && this.uid !== undefined) {
	 // console.log("uid="+this.uid);
    output.writeFieldBegin('uid', Thrift.Type.I32, 1);
    output.writeI32(this.uid);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
	//  console.log("name="+this.name);
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.age !== null && this.age !== undefined) {
	//  console.log("age="+this.age);
    output.writeFieldBegin('age', Thrift.Type.I16, 3);
    output.writeI16(this.age);
    output.writeFieldEnd();
  }
  if (this.desc !== null && this.desc !== undefined) {
	 // console.log("desc="+this.desc);
    output.writeFieldBegin('desc', Thrift.Type.STRING, 4);
    output.writeString(this.desc);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

