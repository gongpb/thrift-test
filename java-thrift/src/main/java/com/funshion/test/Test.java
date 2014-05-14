package com.funshion.test;

import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TFramedTransport;
import org.apache.thrift.transport.TTransport;

import com.funshion.client.connect.ThriftConnect;

public class Test {
	public static void main(String[] args) throws TException {
		TTransport transport = new ThriftConnect().connect();
		TFramedTransport tFramedTransport = new TFramedTransport(transport);
		// 传输协议，可选JSON : TJSONProtocol 等其他协议
		TProtocol protocol = new TBinaryProtocol(tFramedTransport);
		CookieService.Client client = new CookieService.Client(protocol);
		client.run();
		HandleResult res = client.selectMoreCookie("10010", "domain_1", "/path_1_3");
		System.out.println(res.data);
		transport.close();
	}
}
