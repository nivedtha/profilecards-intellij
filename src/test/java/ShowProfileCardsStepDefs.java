import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.Assert.assertTrue;
import static junit.framework.TestCase.assertEquals;

/**
 * Created by Tiago on 08/06/2017.
 */
public class ShowProfileCardsStepDefs {

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

    @Given("^I'm in the main page$")
    public void iMInTheMainPage() throws Throwable {
        //driver.get("http://profilecards-myproject.192.168.99.100.nip.io/website/index.html");
        driver.get("http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/index.html");
    }

    @When("^the \"([^\"]*)\" is clicked$")
    public void theIsClicked(String memberName) throws Throwable {
        //String baseURL = "http://profilecards-myproject.192.168.99.100.nip.io/website/";
        String baseURL = "http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/";

        if (memberName.startsWith("Carlos")) {
            //driver.findElement(By.xpath("/html/body/div/div[1]/div[1]/h3/a")).click();
            driver.findElement(By.xpath("//a[text() = '" + memberName + "']"));
            driver.get(baseURL + "carlos-details.html");
        } else if (memberName.startsWith("João")) {
            //driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/h3/a")).click();
            driver.findElement(By.xpath("//a[text() = '" + memberName + "']"));
            driver.get(baseURL + "joao-details.html");
        } else if (memberName.startsWith("Nivedhita")) {
            //driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/h3/a")).click();
            driver.findElement(By.xpath("//a[text() = '" + memberName + "']"));
            driver.get(baseURL + "nivedhita-details.html");
        } else if (memberName.startsWith("Tiago")) {
            //driver.findElement(By.xpath("/html/body/div/div[2]/div[2]/h3/a")).click();
            driver.findElement(By.xpath("//a[text() = '" + memberName + "']"));
            driver.get(baseURL + "tiago-details.html");
        }
    }

    @Then("^I'm redirected to the \"([^\"]*)\" profile card$")
    public void iMRedirectedToTheProfileCard(String memberName) throws Throwable {
        String baseSuffix = "'s Profile";

        if (memberName.startsWith("Carlos")) {
            assertEquals("Carlos" + baseSuffix, driver.getTitle());
        } else if (memberName.startsWith("João")) {
            assertEquals("João" + baseSuffix, driver.getTitle());
        } else if (memberName.startsWith("Nivedhita")) {
            assertEquals("Nivedhita" + baseSuffix, driver.getTitle());
        } else if (memberName.startsWith("Tiago")) {
            assertEquals("Tiago" + baseSuffix, driver.getTitle());
        }
    }

    @Then("^I should be able to see the name \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheName(String name) throws Throwable {
        assertEquals(name, driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/p")).getText());
    }

    @Then("^I should be able to see the short bio \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheShortBio(String short_bio) throws Throwable {
        assertEquals(short_bio, driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/p")).getText());
    }

    @Then("^I should be able to see the email \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheEmail(String email) throws Throwable {
        assertEquals(email, driver.findElement(By.xpath("/html/body/div/div/div[2]/div[3]/p")).getText());
    }

    @Then("^I should be able to see the education \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheEducation(String education) throws Throwable {
        assertEquals(education, driver.findElement(By.xpath("/html/body/div/div/div[2]/div[4]/p")).getText());

    }


    @Then("^I should be able to see the projects \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheProjects(String projects) throws Throwable {
        assertEquals(projects, driver.findElement(By.xpath("/html/body/div/div/div[2]/div[5]/p")).getText());


    }
}
