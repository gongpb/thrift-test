package com.funshion.client;

import java.util.concurrent.CyclicBarrier;

import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TFramedTransport;
import org.apache.thrift.transport.TTransport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.funshion.client.connect.ThriftConnect;

public class ThriftThread implements Runnable {
	private static Logger logger = LoggerFactory.getLogger(ThriftThread.class);
	private int requestNum = 0;
	private CyclicBarrier barrier;
	private int threadId;

	public ThriftThread(CyclicBarrier barrier, int requestNum, int threadId) {
		this.requestNum = requestNum;
		this.barrier = barrier;
		this.threadId = threadId;
	}

	@Override
	public void run() {
		TTransport transport = new ThriftConnect().connect();
		// 传输协议，可选JSON : TJSONProtocol 等其他协议
		TFramedTransport tFramedTransport = new TFramedTransport(transport);
		TProtocol protocol = new TBinaryProtocol(tFramedTransport);
		UserClient client = new UserClient(protocol);
		try {
			for (int i = 0; i < requestNum; i++) {
				client.addUser(i);
////				client.addStr(requestNum);
//				client.getUser(0);
				client.hello1();
			}
		transport.close();
		logger.info("threadID:" + threadId);
		barrier.await();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}