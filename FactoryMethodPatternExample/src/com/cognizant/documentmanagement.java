package com.cognizant;

interface documentmanagement {
	void open();
}
class worddocument implements documentmanagement{

	@Override
	public void open() {
		System.out.println("WORD DOCUMENT IS OPEN....");
		
	}
}
	class pdfdocument implements documentmanagement{

		@Override
		public void open() {
			System.out.println("PDF DOCUMENT IS OPEN....");
			
		}
	}
		class exceldocument implements documentmanagement{

			@Override
			public void open() {
				System.out.println("EXCEL DOCUMENT IS OPEN....");
				
			}
		}	
	

		abstract class DocumentFactory{
			public abstract documentmanagement createDocument();
			}
			
			class Worddocumentfactory extends DocumentFactory{

				@Override
				public documentmanagement createDocument() {
					return new worddocument();
				}
				
				
			}
			class pdfdocumentfactory extends DocumentFactory{
				@Override
				public documentmanagement createDocument() {
					return new pdfdocument();
				}
			}
			class exceldocumentfactory extends DocumentFactory{
				@Override
				public documentmanagement createDocument() {
					return new exceldocument();
				}
			}
class FactoryMethodPatternExample{
	    public static void main(String[] args) {
	    	DocumentFactory wordFactory = new Worddocumentfactory();
	        documentmanagement wordDoc =  wordFactory.createDocument();
	        wordDoc.open();

	        DocumentFactory pdfFactory = new pdfdocumentfactory();
	        documentmanagement pdfDoc = pdfFactory.createDocument();
	        pdfDoc.open();

	        DocumentFactory excelFactory = new exceldocumentfactory();
	        documentmanagement excelDoc = excelFactory.createDocument();
	        excelDoc.open();
	    }
}
			
		


