package com.funshion.client;

import org.apache.thrift.TException;
import org.apache.thrift.protocol.TProtocol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.funshion.thrift.User;
import com.funshion.thrift.UserService;

public class UserClient {
	private static Logger logger = LoggerFactory.getLogger(UserClient.class);
	private TProtocol protocol;

	public UserClient(TProtocol protocol) {
		this.protocol = protocol;
	}

	public void addUser(int req) {
		try {
			// 客户端调用接口
			UserService.Client client = new UserService.Client(protocol);
			
			User user = new User();
			user.setUid(req);
			user.setName("Thrift--" + req);
			user.setAge(Short.valueOf("25"));
			
			String result = client.add(user);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}

	public void addStr(int req) {
		try {
			// 客户端调用接口
			UserService.Client client = new UserService.Client(protocol);
			String result = client.addStr("{'uid':1,'name':'test','age':25,'desc':'abcdssssssssssssssssssdddddddddddddfffffff'}");
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}

	public User getUser(int userId) {
		// 客户端调用接口
		UserService.Client client = new UserService.Client(protocol);
		try {
			User user = client.get(userId);
		} catch (TException e) {
			e.printStackTrace();
		}
		return null;
	}

	public void hello1() {
		// 客户端调用接口
		UserService.Client client = new UserService.Client(protocol);
		try {
			client.hello1();
		} catch (TException e) {
			e.printStackTrace();
		}
	}
}
