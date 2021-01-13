// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class CreationofatestcategoryTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void creationofatestcategory() {
    // Test name: Creation of a test category
    // Step # | name | target | value
    // 1 | open | / | 
    driver.get("http://localhost:4200/");
    // 2 | setWindowSize | 1296x696 | 
    driver.manage().window().setSize(new Dimension(1296, 696));
    // 3 | click | id=new_category_input_field | 
    driver.findElement(By.id("new_category_input_field")).click();
    // 4 | type | id=new_category_input_field | Protractor Test Category
    driver.findElement(By.id("new_category_input_field")).sendKeys("Protractor Test Category");
    // 5 | click | id=add_category_button | 
    driver.findElement(By.id("add_category_button")).click();
  }
}