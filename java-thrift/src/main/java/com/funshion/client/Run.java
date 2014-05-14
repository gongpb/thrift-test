package com.funshion.client;
/**
 * 通过多线程测试thrift性能
 * @author gongpb
 */
public class Run {
	public static void main(String[] args) {
		ThreadService ts = new ThreadService();
		ts.start(2, 3);
	}
}