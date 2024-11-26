Simple Node.js App Hosting on AWS EC2 Follow these steps to host your Node.js application on an AWS EC2 instance.

Create an AWS EC2 Instance Launch a new EC2 instance from the AWS Management Console.

Connect to the EC2 Instance Use SSH to connect to your EC2 instance. You can do this using Git Bash on your local machine or directly from the AWS Console.

Open Git Bash on your local machine. Use the following command to connect: ssh -i /path-to-your-key.pem ec2-user@your-ec2-public-dns

Using AWS Console: Update the package lists: sudo apt update

Install Node.js: apt install nodejs Check the Node.js version: node -v

Upload your script to the EC2 instance: mkdir puppeteer-project cd puppeteer-project

Install Git if not already installed: sudo apt-get install git -y Verify Git installation: git --version

Clone your Git repository: git clone your-repository-url

Navigate to your project directory and install the required packages: cd your-repository npm install

Install and Use PM2 PM2 is a process manager for Node.js applications that ensures your script stays running, even if it crashes. Install PM2 globally: npm install pm2@latest -g Run your script with PM2: pm2 start your-script.js
