//ng e2e 
 
import { fail } from "assert";
import { browser, by} from "protractor";

//Code adapted from the java e2e test file
describe('Testing the addition and deletion of a new category.', 
            function(){
                it('Testing the creation of a new category.', 
                    function() {
                        let textToFind:string = "Protractor test category";
                        let protractor_test_category_is_found:boolean = false;

                        browser.driver.get("http://localhost:4200");                        
    	                browser.driver.findElement(by.id("new_category_input_field")).sendKeys("Protractor test category");
                        browser.driver.findElement(by.id("add_category_button")).click();
                        console.log("At this point, the test category should have been created.");
                        //The category has been added. The display of the existing categories is being refreshed.
    	                browser.driver.get("http://localhost:4200");                                
                        let aCategory_elements_Promise = browser.driver.findElements(by.name('aCategory')); 
                        
                        aCategory_elements_Promise.then(
                            aCategory_elements=>
                            {
                                console.log("**Retrieved all aCategory elements. Number of elements found: "+aCategory_elements.length);             
                                if(aCategory_elements.length == 0 ){fail("No categories, the app wasn't started.");}//for the case where the app wasn't started 
                                aCategory_elements.forEach(
                                    element => {                                                                                                         
                                        let text:string;

                                        element.getText().then(
                                            text_data => {
                                                text=text_data.trim();//trimming the space before the text
                                                console.log("**Found text:"+text);
                                                if(text==textToFind){
                                                    protractor_test_category_is_found=true;                                                   
                                                    expect(protractor_test_category_is_found).toBe(true);}
                                            },
                                            error => {
                                                console.log("**Error while getting the aCategory element's text: ", error);
                                            }
                                        );
                                    }
                                );
                            }
                           , 
                            error=>
                                {console.log("**Error while retrieving all aCategory elements:",error);}
                        ); 
                        
                    } 
                );
                it('Testing the deletion of the new category',
                    function(){
                        let testCategoryPositionInTheList:number = 0;
                        let currentCategoryPosition:number = 0;                        
                        let textToFind:string = "Protractor test category";

                        browser.driver.get("http://localhost:4200"); 		
		                //1. Confirmation that the category was created; registration of its position in the list of elements named aCategory    	
                        let aCategoryElements_Promise= browser.driver.findElements(by.name("aCategory"));	
                        aCategoryElements_Promise.then(
                            aCategoryElements=>{                                
                                console.log("**Retrieved all elements named aCategory. Number of elements found: "+aCategoryElements.length);             
                                if(aCategoryElements.length == 0) {fail("No categories, the app wasn't started.");}//for the case where the app wasn't started
                                //Finding the position of the test category
                                aCategoryElements.forEach(
									aCategoryElement=>{
                                        currentCategoryPosition++;
                                        //The text is obtained with a promise
                                        aCategoryElement.getText().then(
                                            text=>{
                                                let trimmed_text = text.trim();
                                                console.log("Found text: *"+trimmed_text+"* in an element named aCategory.");
                                                if (trimmed_text==textToFind) {
                                                    testCategoryPositionInTheList = currentCategoryPosition;
                                                    console.log("Found the text:"+text+" in position: "+testCategoryPositionInTheList);					
                                                    
                                                     //2. Deletion of the category created
                                                    console.log("The new category has been successfuly created.");
                                                    currentCategoryPosition=0; 
                                                    //Finding the elements with the name "anIconToDeleteACategory" using a promise
                                                    browser.driver.findElements(by.name("anIconToDeleteACategory")).then(
                                                        anIconToDeleteACategoryElements=>{
                                                            console.log("Found "+anIconToDeleteACategoryElements.length+" elements with name anIconToDeleteACategory.");
                                                            for(let i=0; i<anIconToDeleteACategoryElements.length; i++){
                                                                currentCategoryPosition++;   
                                                                if(currentCategoryPosition==testCategoryPositionInTheList){
                                                                    console.log("Clicking the trash can icon in position: "+currentCategoryPosition);
                                                                    anIconToDeleteACategoryElements[i].click();
                                                                    browser.driver.get("http://localhost:4200"); 
                                                                    break;
                                                                }
                                                                else{
                                                                    console.log("Skipping the current trash can icon.");
                                                                }    
                                                            }                                                
                                                        },
                                                        error=>{
                                                            console.log("Error retrieving the elements named anIconToDeleteACategory: ",error);
                                                        }
                                                    );
                                                    //3. confirmation of deletion
                                                    browser.driver.get("http://localhost:4200");
                                                    browser.driver.findElements(by.name("aCategory")).then(
                                                        aCategoryElements=> {
                                                            console.log("Found "+aCategoryElements.length+" elements in aCategoryElements after deletion.");
                                                            aCategoryElements.forEach(
                                                                aCategoryElement =>{
                                                                    aCategoryElement.getText().then(
                                                                        text_data => {
                                                                            let trimmed_data = text_data.trim();
                                                                            console.log("Category label found: *"+trimmed_data+"*");
                                                                            if (trimmed_data==textToFind) {
                                                                                //if the created category can be found the test is failed
                                                                                console.log("Found "+textToFind+" when the test category should have been deleted."
                                                                                        + "The test is failed.");
                                                                                fail();
                                                                            }
                                                                            else{
                                                                                //otherwise the test is successful 
                                                                                expect(true);
                                                                            }
                                                                        }, 
                                                                        error => {
                                                                            console.log("Error while retrieving the category label: ", error);
                                                                        }
                                                                    );
                                                                }
                                                            );
                                                        }, 
                                                        error=>{
                                                            console.log("Error while retrieving all the aCategory elements: ", error);
                                                        }
                                                    );
                                                }
                                            }                                         
                                            , 
                                            error =>{
                                                console.log("Error while retrieving the text of a category: ", error);
                                            }
                                        );
                                    }
                                    ,
                                    error=>{console.log("Error while retrieving the aCategoryElements_Promise: ",error);}
                        		);
							}
						);               
                    }
                );
            }   
);
