const {test, expect} = require('@playwright/test')

test('test1', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    await page.getByLabel('Register Link').click();
   
  },{
            retries : 2,

  });

test('test2', async ({ page }) => {
    //await page.waitForNavigation(); // Wait for the page to fully load
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx',{timeout:70000});
    await page.getByLabel('Register Link').click();
    await expect(page.getByRole('link', { name: 'Retail', exact: true })).toBeTruthy();
   
  },{
        retries : 2,
  });

test('test3', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    const radioButton1 = page.locator('input[type="radio"][value="rbTrackConsignment"]');
    await radioButton1.click();
    await expect(radioButton1).toBeChecked();

  });

  test('test4', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
   
        await page.getByLabel('Enter a valid consignment').click();
        await page.getByLabel('Enter a valid consignment').fill('123456789');
    
  } ,{
            retries : 2,

  });

  test('test5', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');

    await expect(page.getByRole('button', { name: 'Track Now' })).toBeVisible();
   
  });

  test('test 6',async({page}) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    await page.getByRole('figure', { name: 'Find Pincode' }).getByRole('link').click();
    await page.locator('select[name="ctl00\\$SPWebPartManager1\\$g_28a6af46_5d77_4b7e_aaa2_68d16bfca954\\$ctl00\\$drpStates"]').selectOption('13');
    const selectedOption = await page.locator('select[name="ctl00\\$SPWebPartManager1\\$g_28a6af46_5d77_4b7e_aaa2_68d16bfca954\\$ctl00\\$drpStates"]').inputValue();
    await expect(selectedOption).toBe('13');


   
});

test('test 7',async({page}) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    await page.getByRole('figure', { name: 'Find Pincode' }).getByRole('link').click();
    await page.locator('select[name="ctl00\\$SPWebPartManager1\\$g_28a6af46_5d77_4b7e_aaa2_68d16bfca954\\$ctl00\\$drpStates"]').selectOption('Maharashtra');
    // const selectedOption = await page.locator('select[name="ctl00\\$SPWebPartManager1\\$g_28a6af46_5d77_4b7e_aaa2_68d16bfca954\\$ctl00\\$drpStates"]').inputValue();
    // await expect(selectedOption).toBe('Maharashtra');

});


test('test8', async ({ page }) => {
  await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');

  const img = await page.locator("#india-post-logo");

  await expect(img).toBeVisible();

});

test('test9', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    await page.getByRole('link', { name: 'Post Office Savings Bank' }).click();
    await page.locator('a')
    .filter({ hasText: 'Post Office Savings Account' })
   
});
    



  test('test10', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Register your complaint' }).click();
    const page1 = await page1Promise;
    await page1.getByText('Register a Complaint');
    
    
  },{
    retries : 2,

});


  test('test11', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    await page.getByRole('link', { name: ' Mails & Stamps' }).click();
    await page.getByRole('link', { name: ' Domestic' }).click();
    await page.getByRole('link', { name: 'Letter', exact: true })
    await expect(await page.getByRole('heading', { name: 'Letter' })).toBeTruthy();
    
  });


  test('test12', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');

    await page.getByRole('link', { name: 'Search' }).click();
    await page.getByPlaceholder('What are you looking for').click();
    await page.getByPlaceholder('What are you looking for').fill('xyz');
    await page.getByLabel('search_keyPress').click();

  });


  test('test13', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
  
    const profile = await page.getByRole('img', { name: 'Sign In' })

    await expect(profile).toBeVisible();
  });


  test('test14', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
  
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'MOC, Shri Jyotiraditya M.' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByText('Profile:')).toBeVisible();
    await expect(page1.getByRole('img', { name: 'Cabinet Minister' })).toBeVisible();
  });


//   test('test15', async ({ page }) => {
//     await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
  
//     page.once('dialog', dialog => {
//         console.log(`Dialog message: ${dialog.message()}`);
//         dialog.dismiss().catch(() => {});
//       });
//       const page1Promise = await page.waitForEvent('popup');
//       await page.getByRole('link', { name: 'Sale of Commemorative Postage' }).click();
//       const page1 = await page1Promise;
//       await expect(page1.getByRole('link', { name: 'Add To Cart' })).toBeVisible();
//  });


test('test15', async ({ page }) => {
    await page.goto('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx');
    
    await page.getByLabel('Screen Reader').click();

    await expect(page.getByLabel('Page Content').getByText('Screen Reader Access')).toBeVisible();
  

});