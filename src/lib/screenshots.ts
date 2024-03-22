// generating in build && dev process
import puppeteer from 'puppeteer';
import { websites } from '.';

async function captureScreenshot(url: string, outputPath: string): Promise<void> {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	await page.screenshot({
		path: outputPath,
		clip: { scale: 1, width: 800, height: 300, x: 0, y: 0 }
	});
	await browser.close();
}

for (const website of websites) {
	if (!website.disabled) {
		captureScreenshot(website.href, 'static/' + website.name + '.png');
	}
}
