package com.funshion.client.connect;

import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;

public class ThriftConnect {

	public final static String THRIFT_HOST = "192.168.207.128";
	public final static int THRIFT_POST = 9090;
	private TTransport transport;

	public TTransport connect() {
		transport = new TSocket(THRIFT_HOST, THRIFT_POST);
		if (!transport.isOpen()) {
			try {
				transport.open();
			} catch (TTransportException e) {
				e.printStackTrace();
			}
		}
		return transport;
	}

	public void close() {
		transport.close();
	}
}