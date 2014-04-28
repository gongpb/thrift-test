package com.funshion.cycliBarrier;

import java.util.concurrent.CyclicBarrier;
/**
 * CyclicBarrier测试
 * @author gongpb
 */
public class CyclicBarrierTest {

	private static final int THREAD_NUM = 10;
	private static int num=0;
	//线程
    public static class WorkerThread implements Runnable{

        CyclicBarrier barrier;

        public WorkerThread(CyclicBarrier b){
            this.barrier = b;
        }

        @Override
        public void run() {
            try{
                System.out.println("Worker's waiting");
                num += 1;
                System.out.println("ID:"+Thread.currentThread().getId()+" Working");
                //线程在这里等待，直到所有线程都到达barrier。
                barrier.await();
            }catch(Exception e){
                e.printStackTrace();
            }
        }
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
       
        CyclicBarrier cb = new CyclicBarrier(THREAD_NUM, new Runnable() {
        	 //当所有线程到达barrier时执行,所有的线程都执行完，运行这个run方法
            @Override
            public void run() {
                System.out.println("Inside Barrier");
                System.out.println("--------------"+num);
            }
        });

        for(int i=0;i<THREAD_NUM;i++){
            new Thread(new WorkerThread(cb)).start();
        }
    }

}
