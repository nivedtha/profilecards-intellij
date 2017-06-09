import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.Assert.assertTrue;
import static junit.framework.TestCase.assertEquals;

/**
 * Created by Tiago on 03/06/2017.
 */
public class SaveProfileCardsConfigurationStepDefs {

    private static WebDriver driver;

    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe"); //
        if (driver == null) {
            driver = new HtmlUnitDriver();
        }
    }

    @Given("^I navigate to the form$")
    public void iNavigateToTheForm() throws Throwable {
        //driver.get("http://profilecards-myproject.192.168.99.100.nip.io/website/configure-profiles.html");
        driver.get("http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/configure-profiles.html");
    }

    @Given("^the \"([^\"]*)\" is checked$")
    public void theIsChecked(String field) throws Throwable {
        WebElement webElement = driver.findElement(By.name(field));
        webElement.click();
        assertEquals(true, webElement.isSelected());
    }


    @When("^the form is submitted$")
    public void theFormIsSubmitted() throws Throwable {
        WebElement webElement = driver.findElement(By.id("save"));
        webElement.click();
    }

    @Then("^I'm redirected to the main page$")
    public void iMRedirectedToTheMainPage() throws Throwable {
//        assertEquals("Profile Cards", driver.getTitle());
    }



}
