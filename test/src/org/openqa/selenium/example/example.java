package org.openqa.selenium.example;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebElement;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.RemoteWebDriver;

public class example  {
    public static void main(String[] args) throws MalformedURLException {
        // Create a new instance of the html unit driver
        // Notice that the remainder of the code relies on the interface,
        // not the implementation.
        // WebDriver driver = new HtmlUnitDriver();
    	
    	WebDriver driver;
    	String baseUrl, hubUrl;
    	
    	baseUrl = "app";
    	hubUrl = "http://selhub:4444/wd/hub";
    	DesiredCapabilities capability = DesiredCapabilities.firefox();
    	capability.setBrowserName("firefox");
    	capability.setPlatform(Platform.LINUX);
    	
    	driver = new RemoteWebDriver(
    			new URL(hubUrl), capability);

        // And now use this to visit the app page
        driver.get(baseUrl);

        // Find the text input element by its name
        // WebElement element = driver.findElement(By.name("q"));
        RemoteWebElement output = (RemoteWebElement) driver.findElement(By.xpath("html/body"));

        // Check the title of the page
        System.out.println("Body text is: " + output.getText());
    }
}