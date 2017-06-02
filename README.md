## Contentstack-metalsmith static site demo

**About Built.io Contentstack**: Built.io Contentstack is a headless CMS with an API-first approach that puts content at the centre. It is designed to simplify the process of publication by separating code from content.

**About this project**: This sample app is a demo on how to use [Built.io Contentstack](https://contentstack.built.io)’s pluggable extension - contentstack-metalsmith, along with [Metalsmith](www.metalsmith.io) - a highly pluggable static site generator. Read more on how you can use its capabilities [here](https://github.com/builtio-contentstack/contentstack-metalsmith).

![Homepage Screenshot](./sample_homepage.png?raw=true "Homepage Screenshot")

### Live Demo

You can find a [live demo](https://contentstack-metalsmith-static-site-demo.now.sh/) of the source code from this project.

### Quickstart
Here’s a quick guide on how to create this demo website using Metalsmith and Built.io Contentstack.

#### Prerequisites
  * Built.io Contentstack account

>Note: For this tutorial, we have assumed that you are familiar with Built.io Contentstack. If not, then please refer to Built.io Contentstack docs for more details.

In this tutorial, we will first go through the steps involved in configuring Built.io Contentstack, and then look at the steps required to customize and use the presentation layer. 

#### Step 1: Create a stack
Log in to your Built.io Contentstack account, and create a new stack. This stack will hold all the data, specific to your website. Learn more on how to create a stack.

#### Step 2: Add a publishing environment
To add an environment in Built.io Contentstack, navigate to ‘Settings' -> 'Environment', and click on the '+ New Environment’ tab. Provide a suitable name for your environment, say ‘staging’. Specify the base URL (e.g., ‘http://YourDomainName.com’), and select the language (e.g., English - United States). Then, click on 'Save'. Read more about environments.

#### Step 3: Import content types
A content type is like the structure or blueprint of a page or a section of your web or mobile property. Read more about Content Types.

For this example website, five content types are required: Header, Footer, Home, About Us, and Products. For quick integration, we have already created these content types. You simply need to import them to your stack. (You can also create your own content types. Learn how to do this).

To import the content types, first save the zipped folder of the JSON files given below on your local machine. Extract the files from the folder. Then, go to your stack in Built.io Contentstack. The next screen prompts you to either create a new content type or import one into your stack. Click the ‘Import’ link, and select the JSON file saved on your machine.

Here’s a brief overview of all the content types required for this project.
  * `Header`: The 'Header' content type lets you add content for the header section of the site.
  * `Footer`: The 'Footer' content type enables you to add content for the footer section of your site.
  * `Home`: The 'Home' content type lets you create content for the home page of your site.
  * `Products`: The 'Products' content type enables you to enter content for the products.
  * `About Us`: The 'About Us' content type lets you add content for the About Us page of the site.

[Download all content types](https://github.com/builtio-contentstack/contentstack-metalsmith-example/blob/master/schema/content_types.zip?raw=true)
Now that all the content types are ready, let’s add some content for your website.

#### Step 4: Adding content
Create and publish entries for the ‘Home’, ‘About Us’ and ‘Products’ content types.

Add an entry for 'Home' and 'About Us', and a few entries for the 'Products' content type. Save and publish these entries. Learn how to create and publish entries.

Create and publish entries for the ‘Header’ and ‘Footer’ content types.

Using the ‘Header’ content type, add the name and other details of your site. Similarly, add footer content using the ‘Footer’ content type.
With this step, you have created sample data for your website.

#### Step 5: Setting up `contentstack-metalsmith`

Clone this repository and install the project dependencies

```bash
$ git clone https://github.com/builtio-contentstack/contentstack-metalsmith-example.git
$ cd contentstack-metalsmith-example/
$ npm install
```

#### Step 6: Build and configure website

Once you have cloned the project, add your Built.io Contentstack API Key, Access Token, and Environment to the project. The index.js file would look something like this:

```bash
 .use(contentstack({
    api_key: '<< api_key >>',
    access_token: '<< access_token >>',
    environment: process.env.NODE_ENV || 'development'
...
```
> Note: Mention the environment name that you created in Built.io Contentstack.

Fire up your terminal (command prompt or similar on Windows), point it to your project location and run the following:
```bash
    $ npm start
```
This will initiate your project and create a build of static files in your project folder named `build`.

#### Step 7: Go live
You can make the application live by deploying it on any cloud-hosting service. In this tutorial, we have used `Zeit's now`

The first time you run `now`, it will ask for your email address for verification. Simply click on the email you have received, and you will be logged in automatically.

Once the deployment has started, you will get a link (copied to your clipboard) that you can share immediately with your peers, even before the upload and startup completes!

Your static website should now be up and running!

### Documentation

* Read Built.io Contentstack [docs](https://contentstackdocs.built.io).
* Learn [Metalsmith](http://www.metalsmith.io).