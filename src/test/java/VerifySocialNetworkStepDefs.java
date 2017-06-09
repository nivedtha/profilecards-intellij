import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by TI - Movicortes on 08/06/2017.
 */
public class VerifySocialNetworkStepDefs {

    private static WebDriver driver;

    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe"); //
        if (driver == null) {
            driver = new ChromeDriver();
        }
    }

    @When("^I click social network button$")
    public void iClickSocialNetworkButton() throws Throwable {
        WebElement webelement = driver.findElement(By.xpath("/html/body/div/div[2]/div[2]/a"));
        webelement.click();
        //webelement.getAttribute("https://www.facebook.com/tiago.monteiro.9210");
        //assert
        //driver.findElement(By.className(btn primary)).click();
        //driver.findElement(By.linkText("https://www.facebook.com/tiago.monteiro.9210"));

    }
}
