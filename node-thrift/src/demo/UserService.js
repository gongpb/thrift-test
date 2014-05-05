//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./user_types');
//HELPER FUNCTIONS AND STRUCTURES

com.funshion.thrift.UserService_add_args = function(args) {
  this.user = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
  }
};
com.funshion.thrift.UserService_add_args.prototype = {};
com.funshion.thrift.UserService_add_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.user = new ttypes.User();
        this.user.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_add_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_add_args');
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRUCT, 1);
    this.user.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_add_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
com.funshion.thrift.UserService_add_result.prototype = {};
com.funshion.thrift.UserService_add_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_add_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_add_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_addStr_args = function(args) {
  this.user = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
  }
};
com.funshion.thrift.UserService_addStr_args.prototype = {};
com.funshion.thrift.UserService_addStr_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.user = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_addStr_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_addStr_args');
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRING, 1);
    output.writeString(this.user);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_addStr_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
com.funshion.thrift.UserService_addStr_result.prototype = {};
com.funshion.thrift.UserService_addStr_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_addStr_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_addStr_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_get_args = function(args) {
  this.uid = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
  }
};
com.funshion.thrift.UserService_get_args.prototype = {};
com.funshion.thrift.UserService_get_args.prototype.read = function(input) {
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
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_get_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_get_args');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.I32, 1);
    output.writeI32(this.uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_get_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
com.funshion.thrift.UserService_get_result.prototype = {};
com.funshion.thrift.UserService_get_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.User();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_get_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_get_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_hello1_args = function(args) {
};
com.funshion.thrift.UserService_hello1_args.prototype = {};
com.funshion.thrift.UserService_hello1_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_hello1_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_hello1_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserService_hello1_result = function(args) {
};
com.funshion.thrift.UserService_hello1_result.prototype = {};
com.funshion.thrift.UserService_hello1_result.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

com.funshion.thrift.UserService_hello1_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_hello1_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

com.funshion.thrift.UserServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
com.funshion.thrift.UserServiceClient.prototype = {};
com.funshion.thrift.UserServiceClient.prototype.add = function(user, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_add(user);
};

com.funshion.thrift.UserServiceClient.prototype.send_add = function(user) {
  var output = new this.pClass(this.output);
 // console.log("\nstart to convert Method----");
  output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid);
 // console.log("end to convert Method----\n");
  var args = new com.funshion.thrift.UserService_add_args();
  //console.log("start to convert args----");
  args.user = user;
  args.write(output);
 // console.log("end to convert args----\n");
  output.writeMessageEnd();
  return this.output.flush();
};

com.funshion.thrift.UserServiceClient.prototype.recv_add = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new com.funshion.thrift.UserService_add_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('add failed: unknown result');
};
com.funshion.thrift.UserServiceClient.prototype.addStr = function(user, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_addStr(user);
};

com.funshion.thrift.UserServiceClient.prototype.send_addStr = function(user) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addStr', Thrift.MessageType.CALL, this.seqid);
  var args = new com.funshion.thrift.UserService_addStr_args();
  args.user = user;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

com.funshion.thrift.UserServiceClient.prototype.recv_addStr = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new com.funshion.thrift.UserService_addStr_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addStr failed: unknown result');
};
com.funshion.thrift.UserServiceClient.prototype.get = function(uid, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_get(uid);
};

com.funshion.thrift.UserServiceClient.prototype.send_get = function(uid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid);
  var args = new com.funshion.thrift.UserService_get_args();
  args.uid = uid;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

com.funshion.thrift.UserServiceClient.prototype.recv_get = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new com.funshion.thrift.UserService_get_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get failed: unknown result');
};
com.funshion.thrift.UserServiceClient.prototype.hello1 = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_hello1();
};

com.funshion.thrift.UserServiceClient.prototype.send_hello1 = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('hello1', Thrift.MessageType.CALL, this.seqid);
  var args = new com.funshion.thrift.UserService_hello1_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

com.funshion.thrift.UserServiceClient.prototype.recv_hello1 = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new com.funshion.thrift.UserService_hello1_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
com.funshion.thrift.UserServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
com.funshion.thrift.UserServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

com.funshion.thrift.UserServiceProcessor.prototype.process_add = function(seqid, input, output) {
  var args = new com.funshion.thrift.UserService_add_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.add(args.user, function (err, result) {
    var result = new com.funshion.thrift.UserService_add_result((err != null ? err : {success: result}));
    output.writeMessageBegin("add", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

com.funshion.thrift.UserServiceProcessor.prototype.process_addStr = function(seqid, input, output) {
  var args = new com.funshion.thrift.UserService_addStr_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.addStr(args.user, function (err, result) {
    var result = new com.funshion.thrift.UserService_addStr_result((err != null ? err : {success: result}));
    output.writeMessageBegin("addStr", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

com.funshion.thrift.UserServiceProcessor.prototype.process_get = function(seqid, input, output) {
  var args = new com.funshion.thrift.UserService_get_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.get(args.uid, function (err, result) {
    var result = new com.funshion.thrift.UserService_get_result((err != null ? err : {success: result}));
    output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

com.funshion.thrift.UserServiceProcessor.prototype.process_hello1 = function(seqid, input, output) {
  var args = new com.funshion.thrift.UserService_hello1_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.hello1(function (err, result) {
    var result = new com.funshion.thrift.UserService_hello1_result((err != null ? err : {success: result}));
    output.writeMessageBegin("hello1", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}