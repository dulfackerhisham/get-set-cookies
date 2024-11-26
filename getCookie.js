const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer'); 
const {setTimeout} = require('timers/promises');

async function run () {
  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    args: [
      '--start-maximized',
    ],
    executablePath: executablePath()
  });
  
  const [page] = await browser.pages()

  // Opening a page
  await page.goto('enter url', { waitUntil: 'networkidle2' });

  await page.type("#_username", 'exampleUsername')
  await page.type("#_password", 'examplePassword')

  await page.click("#_SignIn");

  // hadnle timeout if there is otp to enter
  await setTimeout(60000);

  console.log('timeout');

  const cookies = await page.cookies();

  // Save cookies to a JSON file
  fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));

  console.log('Cookies saved to cookies.json');

};

run();

