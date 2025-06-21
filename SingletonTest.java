package com.cognizant;

class Logger{
	private static Logger log = new Logger();
	private Logger() {
		
	}
	public static Logger getInstance() {
		return log;
	}
	public void print() {
		System.out.println("Logger initialized");
	}
}
class SingletonTest {
    public static void main(String[] args) {
    	Logger log1 = Logger.getInstance();
    	Logger log2 = Logger.getInstance();
    	log1.print();
    	 if (log1 == log2) {
             System.out.println("Both logger1 and logger2 refer to the same Logger instance.");
         } else {
             System.out.println(" Different Logger instances were created.");
         }
    	
    }
}