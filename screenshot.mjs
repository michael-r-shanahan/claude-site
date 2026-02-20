import puppeteer from 'puppeteer';
import { resolve } from 'path';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 800 });
const filePath = resolve('index.html');
await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await browser.close();
console.log('Screenshot saved to screenshot.png');
