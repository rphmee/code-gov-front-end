/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line no-unused-vars

class ProjectTest {
  getUrls() {
    return ['https://code.gov/projects/nsa_1_codegov']
  }

  connect(browser) {
    return new Promise(async (resolve, reject) => {
      const page = await browser.newPage()
      await page.goto('https://code.gov/', { waitUntil: 'load' })
      resolve(browser)
    })
  }
}

module.exports = new ProjectTest()
