import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertTrue;


public class ShowAllProfileCardsStepDefs {

    private static WebDriver driver;

    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe");
        if(driver == null) {
            driver = new ChromeDriver();
        }

    }

    @Given("^I want to access the main page$")
    public void iWantToAccessTheMainPage() throws Throwable {
        //driver.get("http://profilecards-myproject.192.168.99.100.nip.io/website/index.html");
        driver.get("http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/index.html");
    }

    @When("^main page is reached$")
    public void mainPageIsReached() throws Throwable {
        //driver.get("http://profilecards-myproject.192.168.99.100.nip.io/website/index.html");
        assertEquals("Profile Cards", driver.getTitle());
    }

    @Then("^I see all profile cards in their default configuration$")
    public void iSeeAllProfileCardsInTheirDefaultConfiguration() throws Throwable {
        String baseURL = "http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/";
        String student = "Student";

        // /html/body/div/div[1]/div[1]/p
        // /html/body/div/div[1]/div[2]/p
        // /html/body/div/div[2]/div[1]/p
        // /html/body/div/div[2]/div[2]/p

        WebElement webElement = driver.findElement(By.xpath("//div[1]/div[1]/p"));
        //new WebDriverWait(driver, 3).until(ExpectedConditions.textToBePresentInElementValue(webElement, student));
        String srcFileCarlos = driver.findElement(By.xpath("//div[1]/div[1]/img")).getAttribute("src");
        assertEquals(baseURL + "imgs/carlos200.png", srcFileCarlos);
        assertEquals("Student", webElement.getText());
        assertEquals("Carlos Ferreira", driver.findElement(By.linkText("Carlos Ferreira")).getText());

        webElement = driver.findElement(By.xpath("//div[1]/div[2]/p"));
        //new WebDriverWait(driver, 3).until(ExpectedConditions.textToBePresentInElementValue(webElement, student));
        String srcFileJoao = driver.findElement(By.xpath("//div[1]/div[2]/img")).getAttribute("src");
        assertEquals(baseURL + "imgs/foto2_200x200.jpg", srcFileJoao);
//        assertEquals("Student", webElement.getText());
        assertEquals("João Silva", driver.findElement(By.linkText("João Silva")).getText());

        webElement = driver.findElement(By.xpath("//div[2]/div[1]/p"));
        //new WebDriverWait(driver, 3).until(ExpectedConditions.textToBePresentInElementValue(webElement, student));
        String srcFileNivi = driver.findElement(By.xpath("//div[2]/div[1]/img")).getAttribute("src");
        assertEquals(baseURL + "imgs/niv.jpg", srcFileNivi);
//        assertEquals("Student", webElement.getText());
        assertEquals("Nivedhita Gowthaman", driver.findElement(By.linkText("Nivedhita Gowthaman")).getText());

        webElement = driver.findElement(By.xpath("//div[2]/div[2]/p"));
        //new WebDriverWait(driver, 3).until(ExpectedConditions.textToBePresentInElementValue(webElement, student));
        String srcFileTiago = driver.findElement(By.xpath("//div[2]/div[2]/img")).getAttribute("src");
        assertEquals(baseURL + "imgs/foto4_200x200.png", srcFileTiago);
//        assertEquals("Student", webElement.getText());
        assertEquals("Tiago Monteiro", driver.findElement(By.linkText("Tiago Monteiro")).getText());



//        assertEquals("", driver.findElement(By.xpath("//a[contains(@href, 'https://www.facebook.com')]")).getText());
//        assertEquals("", driver.findElement(By.xpath("//a[contains(@href, 'https://twitter.com')]")).getText());
//        assertEquals("", driver.findElement(By.xpath("//a[contains(@href, 'https://www.linkedin.com')]")).getText());
    }

    @Given("^\"([^\"]*)\" has information in all existing fields$")
    public void hasInformationInAllExistingFields(String memberName) throws Throwable {
        //driver.get("http://profilecards-myproject.192.168.99.100.nip.io/website/index.html");
        driver.get("http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/index.html");
    }

    @Then("^I see all profile cards with information about \"([^\"]*)\"$")
    public void iSeeAllProfileCardsWithInformationAbout(String memberName) throws Throwable {
        String website = "http://profile-cards-app-sq-project.7e14.starter-us-west-2.openshiftapps.com/";

        if (memberName.startsWith("Carlos")) {
            String srcFileCarlos = driver.findElement(By.xpath("//div[1]/div[1]/img")).getAttribute("src");
            assertEquals(website + "imgs/carlos200.png", srcFileCarlos);
            // /html/body/div/div[1]/div[1]/p
            assertEquals("Student", driver.findElement(By.xpath("//div/div[1]/div[1]/p")).getText());
            assertEquals("Carlos Ferreira", driver.findElement(By.linkText("Carlos Ferreira")).getText());
        } else if (memberName.startsWith("João")) {
            String srcFileJoao = driver.findElement(By.xpath("//div[1]/div[2]/img")).getAttribute("src");
            assertEquals(website + "imgs/foto2_200x200.jpg", srcFileJoao);
            // /html/body/div/div[1]/div[2]/p
//            assertEquals("Student", driver.findElement(By.xpath("//div/div[1]/div[2]/p")).getText());
            assertEquals("João Silva", driver.findElement(By.linkText("João Silva")).getText());
        } else if (memberName.startsWith("Nivedhita")) {
            String srcFileNivi = driver.findElement(By.xpath("//div[2]/div[1]/img")).getAttribute("src");
            assertEquals("imgs/niv.jpg", srcFileNivi);
            // /html/body/div/div[2]/div[1]/p
//            assertEquals("Student", driver.findElement(By.xpath("//div/div[2]/div[1]/p")).getText());
            assertEquals("Nivedhita Gowthaman", driver.findElement(By.linkText("Nivedhita Gowthaman")).getText());
        } else if (memberName.startsWith("Tiago")) {
            String srcFileTiago = driver.findElement(By.xpath("//div[2]/div[2]/img")).getAttribute("src");
            assertEquals(website + "imgs/foto4_200x200.png", srcFileTiago);
            // /html/body/div/div[2]/div[2]/p
//            assertEquals("Student", driver.findElement(By.xpath("//div/div[2]/div[2]/p")).getText());
            assertEquals("Tiago Monteiro", driver.findElement(By.linkText("Tiago Monteiro")).getText());
        }
    }


}
